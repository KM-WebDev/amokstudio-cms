import { defineField } from "sanity";
import {
    defineArrayOfType,
    defineBool,
    defineDropDown,
    defineImage,
    defineOrderedDocument,
    defineSingleLine,
    defineTags,
} from "../definitions";

export const Portfolio = defineOrderedDocument({
    title: "Portfolio",
    name: "portfolio",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
            validation: (rule) => rule.required(),
        }),
        defineTags({
            title: "Tagi",
            name: "tags",
            tags: [
                {
                    label: "loga",
                    value: "logos",
                },
                {
                    label: "koszulki",
                    value: "shirts",
                },
                {
                    label: "design",
                    value: "design",
                },
            ],
        }),
        defineImage({
            title: "Główne zdjęcie",
            name: "mainImage",
            description: "Wymiar zdjęcia: square",
            validation: (rule) => rule.required(),
            fields: [
                defineDropDown({
                    title: "Apsekt zdjęcia",
                    name: "aspect",
                    options: ["square"],
                    initialValue: "square",
                    readOnly: true,
                }),
            ],
        }),
        defineSingleLine({
            title: "Krótki opis",
            name: "description",
        }),
        defineField({
            title: "Główna sekcja",
            name: "mainSection",
            type: "section",
        }),
        defineBool({
            title: "Wyświetl na stronie głównej",
            name: "showOnHomepage",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
        defineField({
            title: "Galeria",
            name: "gallery",
            type: "gallery",
        }),
    ],
});
