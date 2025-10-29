import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default defineConfig({
    name: "default",
    title: "amokstudio",

    projectId: "32tlrsqk",
    dataset: "production",

    plugins: [
        structureTool({
            structure: (S, context) => {
                return S.list()
                    .title("Content")
                    .items([
                        orderableDocumentListDeskItem({
                            title: "Portfolio",
                            type: "portfolio",
                            S,
                            context,
                        }),
                        S.documentTypeListItem("contactInfo"),
                    ]);
            },
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});
