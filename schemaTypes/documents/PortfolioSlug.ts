import { Images } from "lucide-react";
import { ALL_FIELDS_GROUP, defineField, RuleDef } from "sanity";
import {
    defineArrayOfType,
    defineBool,
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineOrderedDocument,
    defineReferenceTo,
    defineSlug,
    defineString,
} from "../definitions";

export const PortfolioSlug = defineOrderedDocument({
    title: "Portfolio",
    name: "portfolioSlug",
    icon: Images,
    groups: [
        {
            title: "Main",
            name: "main",
        },
        {
            title: "Content",
            name: "content",
        },

        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        // --------------------- Main ---------------------
        defineLocalizedString({
            title: "Tytuł",
            name: "title",
            validation: <T>(rule: RuleDef<T>) => rule.required(),
            group: "main",
        }),
        defineSlug("main"),
        defineString({
            title: "Rok",
            name: "year",
            group: "main",
        }),
        defineReferenceTo({
            title: "Tags",
            name: "tags",
            to: "portfolioTag",
            group: "main",
            weak: true,
        }),
        defineLocalizedString({
            title: "Krótki opis",
            name: "shortContent",
            group: "main",
        }),
        defineBool({
            title: "Wyświetl na stronie głównej",
            name: "showOnHomepage",
            group: "main",
        }),
        // --------------------- Content ---------------------
        defineImage({
            title: "Główne zdjęcie",
            name: "mainImage",
            validation: <T>(rule: RuleDef<T>) => rule.required(),
            initialAspect: "square",
            description:
                "Zdjęcie główne zawsze będzie wyświatlane jako kwadrat",
            allowAspect: false,
            group: "content",
        }),
        defineLocalizedText({
            title: "Długi opis",
            name: "longContent",
            group: "content",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "headingSection",
            group: "content",
        }),
        defineField({
            title: "Galeria",
            name: "gallery",
            type: "gallery",
            group: "content",
        }),
        defineArrayOfType({
            title: "Rezultaty",
            name: "results",
            elementType: "iCard",
            group: "content",
        }),
        defineArrayOfType({
            title: "Link do wideo z Youtube",
            name: "youtubeVideos",
            elementType: "string",
            group: "content",
        }),
    ],
});
