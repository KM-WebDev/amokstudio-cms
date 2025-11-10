import { ALL_FIELDS_GROUP } from "sanity";
import {
    defineDocument,
    defineImage,
    defineMultiLine,
    defineSingleLine,
} from "../definitions";

export const About = defineDocument({
    title: "O mnie",
    name: "about",
    groups: [
        {
            name: "short",
            title: "Strona Główna",
        },
        {
            name: "long",
            title: "Podstrona",
        },
        {
            name: "rest",
            title: "Inne",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "shortTitle",
            group: "short",
        }),
        defineSingleLine({
            title: "Tytuł sekcji",
            name: "shortSectionTitle",
            group: "short",
        }),
        defineMultiLine({
            title: "Opis",
            name: "shortDescription",
            group: "short",
        }),

        defineSingleLine({
            title: "Tytuł",
            name: "longTitle",
            group: "long",
        }),
        defineMultiLine({
            title: "Opis",
            name: "longDescription",
            group: "long",
        }),
        defineImage({
            title: "Zdjęcie",
            name: "mainImage",
            group: "rest",
        }),
    ],
});
