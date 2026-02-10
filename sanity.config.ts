import { colorInput } from "@sanity/color-input";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { visionTool } from "@sanity/vision";
import {
    defineConfig,
    type ConfigContext,
    type DocumentDefinition,
    type FieldDefinition,
} from "sanity";
import { tags } from "sanity-plugin-tags-v4";
import { presentationTool } from "sanity/presentation";
import { StructureBuilder, structureTool } from "sanity/structure";
import { Dataset, EnablePresentationTool, FrontEndUrl } from "./env";
import { schema, type Page } from "./schemaTypes";

const devPlugins = [visionTool()];
const plugins = [
    structureTool({
        structure: deskStructure,
    }),
    colorInput(),
    tags(),
];

if (EnablePresentationTool) {
    plugins.push(
        presentationTool({
            previewUrl: {
                initial: FrontEndUrl,
                previewMode: {
                    enable: "/api/draft-mode/enable",
                    disable: "/api/draft-mode/disable",
                },
            },
            allowOrigins: [FrontEndUrl ?? ""],
        })
    );
}
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const isOrderable = (doc: DocumentDefinition) =>
    Array.isArray(doc?.fields) &&
    doc.fields.some((f: FieldDefinition) => f?.name === "orderRank");

function registerDocument(
    S: StructureBuilder,
    context: ConfigContext,
    doc: DocumentDefinition
) {
    if (isOrderable(doc)) {
        return orderableDocumentListDeskItem({
            type: doc.name,
            title: doc.title,
            icon: doc.icon as any,
            id: doc.name,
            menuItems: [],
            context,
            S,
        });
    }

    // Open singleton doc directly (no document list)
    return S.listItem()
        .title(doc.title ?? "<Missing title>")
        .id(doc.name)
        .icon(doc.icon)
        .child(S.document().schemaType(doc.name).documentId(doc.name));
}

function registerPages(
    S: StructureBuilder,
    context: ConfigContext,
    pages: [string, Page][]
) {
    return pages.map(([_, page]: [string, Page]) =>
        S.listItem()
            .title(page.title ?? "<Missing title>")
            .child(
                S.list()
                    .title(page.title ?? "<Missing title>")
                    .items(
                        page.documents.map((doc) =>
                            registerDocument(S, context, doc)
                        )
                    )
            )
    );
}

function deskStructure(S: StructureBuilder, context: ConfigContext) {
    const pages = Object.entries(schema.pages);
    const folderPages = pages.filter(([_, page]: [string, Page]) => page.title);
    const rootPages = pages.filter(([_, page]: [string, Page]) => !page.title);

    return S.list()
        .title("Strona")
        .items([
            // Titled pages -> folders
            ...registerPages(S, context, folderPages),
            // Untitled pages -> root items
            ...rootPages.flatMap(([_, page]) => {
                return page.documents.map((doc) =>
                    registerDocument(S, context, doc)
                );
            }),
        ]);
}

// Get all singleton document names
const getSingletonTypeNames = () => {
    const singletons = new Set<string>();
    Object.values(schema.pages).forEach((page) => {
        page.documents.forEach((doc) => {
            // Check if it's a singleton (has the hidden title field)
            const hasHiddenTitle =
                Array.isArray(doc?.fields) &&
                doc.fields.some(
                    (f: FieldDefinition) =>
                        f?.name === "title" &&
                        f?.type === "string" &&
                        f?.hidden === false
                );
            if (hasHiddenTitle && !isOrderable(doc)) {
                singletons.add(doc.name);
            }
        });
    });
    return singletons;
};

export default defineConfig({
    name: "default",
    title: "amokstudio",
    projectId: "32tlrsqk",
    dataset: Dataset || "<error>",

    plugins: [
        ...plugins,
        ...(process.env.NODE_ENV === "development" ? devPlugins : []),
    ],

    schema: {
        types: [
            ...Object.values(schema.pages).flatMap((page) => page.documents),
            ...schema.objects,
        ],
        templates: (templates) => {
            const singletonTypeNames = getSingletonTypeNames();
            return templates.filter(
                ({ schemaType }) => !singletonTypeNames.has(schemaType)
            );
        },
    },

    document: {
        actions: (input, context) => {
            const singletonTypeNames = getSingletonTypeNames();
            return singletonTypeNames.has(context.schemaType)
                ? input.filter(
                      ({ action }) => action && singletonActions.has(action)
                  )
                : input;
        },
    },
});
