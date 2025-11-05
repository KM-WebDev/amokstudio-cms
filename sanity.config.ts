import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { GrGallery } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";

const devPlugins = process.env.NODE_ENV === "development" ? [visionTool()] : [];

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
                            icon: GrGallery,
                        }),
                        S.listItem()
                            .title("Dane Kontaktowe")
                            .id("contactInfo")
                            .child(
                                S.document()
                                    .schemaType("contactInfo")
                                    .documentId("contactInfo")
                            )
                            .icon(RiContactsLine),
                    ]);
            },
        }),
        ...devPlugins,
    ],

    schema: {
        types: schemaTypes,
    },
});
