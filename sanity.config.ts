import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { tags } from "sanity-plugin-tags-v4";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

import { FaTag, FaTshirt, FaWpforms } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { LuContact, LuMegaphone } from "react-icons/lu";
import { MdOutlineReviews, MdPlusOne } from "react-icons/md";
import { RiContactsLine, RiInfoCardLine } from "react-icons/ri";

import { colorInput } from "@sanity/color-input";
import { Dataset } from "./env";
import { createHashMap } from "./hashmap";

import { groqdPlaygroundTool } from "groqd-playground";

const devPlugins = process.env.NODE_ENV === "development" ? [visionTool()] : [];

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = createHashMap({
    aboutPages: {
        title: "O mnie - Strony",
        icon: RiInfoCardLine,
    },
    portfolioPages: {
        title: "Portfolio - Strony",
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
    form: {
        title: "Formularz",
        icon: FaWpforms,
    },
    contactInfo: {
        title: "Dane Kontaktowe",
        icon: LuContact,
    },
});

const orderableTypes = createHashMap({
    portfolioSlug: {
        title: "Portfolio",
        icon: GrGallery,
    },
    reviews: {
        title: "Opinie",
        icon: MdOutlineReviews,
    },
});

const documents = createHashMap({
    portfolioTag: {
        title: "Tagi dla Portfolio",
        icon: FaTag,
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
                        ...Object.entries(orderableTypes.data).map(
                            ([key, value]) =>
                                orderableDocumentListDeskItem({
                                    title: value.title,
                                    type: key,
                                    S,
                                    context,
                                    icon: value.icon,
                                })
                        ),
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
                        ...Object.entries(documents.data).map(([key, value]) =>
                            S.listItem()
                                .title(value.title)
                                .id(key)
                                .child(S.documentTypeList(key))
                                .icon(value.icon)
                        ),
                    ]),
        }),
        ...devPlugins,
        colorInput(),
        tags(),
        groqdPlaygroundTool(),
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
