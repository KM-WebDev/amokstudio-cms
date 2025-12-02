import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { tags } from "sanity-plugin-tags-v4";
import { structureTool } from "sanity/structure";
import {
    schemaDocuments,
    schemaObjects,
    schemaOrderableDocuments,
    schemaSingletonDocuments,
} from "./schemaTypes";

import { colorInput } from "@sanity/color-input";
import { Dataset } from "./env";

const devPlugins = process.env.NODE_ENV === "development" ? [visionTool()] : [];

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
    name: "default",
    title: "amokstudio",
    projectId: "32tlrsqk",
    dataset: Dataset || "<error>",

    plugins: [
        structureTool({
            structure: (S, context) =>
                S.list()
                    .title("Content")
                    .items([
                        ...schemaOrderableDocuments.map((document) =>
                            orderableDocumentListDeskItem({
                                title: document.title,
                                type: document.name,
                                S,
                                context,
                                icon:
                                    typeof document.icon === "function"
                                        ? document.icon
                                        : undefined,
                            })
                        ),
                        ...schemaSingletonDocuments.map((document) => {
                            const item = S.listItem()
                                .title(document.title ?? "<Untitled>")
                                .id(document.name)
                                .child(
                                    S.document()
                                        .schemaType(document.name)
                                        .documentId(document.name)
                                );
                            return typeof document.icon === "function"
                                ? item.icon(document.icon)
                                : item;
                        }),
                        ...schemaDocuments.map((document) =>
                            S.listItem()
                                .title(document.title ?? "<Untitled>")
                                .id(document.name)
                                .child(S.documentTypeList(document.name))
                        ),
                    ]),
        }),
        ...devPlugins,
        colorInput(),
        tags(),
    ],

    schema: {
        types: [
            ...schemaDocuments,
            ...schemaOrderableDocuments,
            ...schemaSingletonDocuments,
            ...schemaObjects,
        ],
        templates: (templates) => {
            const singletonTypeNames = new Set(
                schemaSingletonDocuments.map((doc) => doc.name)
            );
            return templates.filter(
                ({ schemaType }) => !singletonTypeNames.has(schemaType)
            );
        },
    },

    document: {
        actions: (input, context) => {
            const singletonTypeNames = new Set(
                schemaSingletonDocuments.map((doc) => doc.name)
            );
            return singletonTypeNames.has(context.schemaType)
                ? input.filter(
                      ({ action }) => action && singletonActions.has(action)
                  )
                : input;
        },
    },
});
