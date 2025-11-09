import {
    defineArrayOfType,
    defineDocument,
    defineMultiLine,
    defineSingleLine,
} from "../definitions";

export const Features = defineDocument({
    title: "Features",
    name: "features",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineMultiLine({
            title: "Opis",
            name: "description",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
    ],
});
