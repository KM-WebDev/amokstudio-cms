import { defineField } from "sanity";
import {
    defineArrayOfType,
    defineBool,
    defineImage,
    defineMultiLine,
    defineOrderedDocument,
    defineSingleLine,
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
        defineImage({
            title: "Główne zdjęcie",
            name: "mainImage",
            description: "Wymiar zdjęcia: square",
            validation: (rule) => rule.required(),
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
