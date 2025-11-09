import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { GrGallery } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { RiInfoCardLine } from "react-icons/ri";
import { MdElderlyWoman } from "react-icons/md";
import { MdPlusOne } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa6";
import { LuMegaphone } from "react-icons/lu";

import { Dataset } from "./env";
import { createHashMap } from "./hashmap";
import { colorInput } from "@sanity/color-input";

const devPlugins = process.env.NODE_ENV === "development" ? [visionTool()] : [];

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = createHashMap({
    hero: {
        title: "Hero",
        icon: MdElderlyWoman,
    },
    about: {
        title: "O mnie",
        icon: RiInfoCardLine,
    },
    portfolioInfo: {
        title: "Portfolio Info",
        icon: RiContactsLine,
    },
    services: {
        title: "Usługi",
        icon: FaTshirt,
    },
    features: {
        title: "Features",
        icon: MdPlusOne,
    },
    faq: {
        title: "FAQ",
        icon: FaQuestion,
    },
    cta: {
        title: "CTA",
        icon: LuMegaphone,
    },
    contactInfo: {
        title: "Dane Kontaktowe",
        icon: LuContact,
    },
});

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
                        orderableDocumentListDeskItem({
                            title: "Portfolio",
                            type: "portfolio",
                            S,
                            context,
                            icon: GrGallery,
                        }),
                        ...Object.entries(singletonTypes.data).map(
                            ([key, value]) =>
                                S.listItem()
                                    .title(value.title)
                                    .id(key)
                                    .child(
                                        S.document()
                                            .schemaType(key)
                                            .documentId(key)
                                    )
                                    .icon(value.icon)
                        ),
                    ]),
        }),
        ...devPlugins,
        colorInput(),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(
                ({ schemaType }) => !singletonTypes.has(schemaType)
            ),
    },

    document: {
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(
                      ({ action }) => action && singletonActions.has(action)
                  )
                : input,
    },
});
