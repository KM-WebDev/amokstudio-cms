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
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "short_title",
            group: "short",
        }),
        defineSingleLine({
            title: "Tytuł sekcji",
            name: "short_section_title",
            group: "short",
        }),
        defineMultiLine({
            title: "Opis",
            name: "short_description",
            group: "short",
        }),

        defineSingleLine({
            title: "Tytuł",
            name: "long_title",
            group: "long",
        }),
        defineMultiLine({
            title: "Opis",
            name: "long_description",
            group: "long",
        }),
        defineImage({
            title: "Główne zdjęcie",
            name: "main_image",
            group: "long",
        }),
    ],
});
