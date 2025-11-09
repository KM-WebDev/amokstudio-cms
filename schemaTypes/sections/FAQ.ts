import {
    defineArrayOfType,
    defineDocument,
    defineSingleLine,
} from "../definitions";

export const FAQ = defineDocument({
    title: "FAQ",
    name: "faq",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
    ],
});
