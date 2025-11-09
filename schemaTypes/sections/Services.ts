import {
    defineArrayOfType,
    defineDocument,
    defineSingleLine,
} from "../definitions";

export const Services = defineDocument({
    title: "Usługi",
    name: "services",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineSingleLine({
            title: "Opis",
            name: "description",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "bento",
        }),
    ],
});
