import {
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const Section = defineObject({
    title: "Sekcja",
    name: "section",
    fields: [
        defineSingleLine({
            title: "Nagłówek",
            name: "heading",
        }),
        defineMultiLine({
            title: "Zawartość",
            name: "content",
        }),
    ],
});
