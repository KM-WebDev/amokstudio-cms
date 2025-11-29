import {
    defineArrayOfType,
    defineDocument,
    defineSingleLine,
    defineMultiLine,
} from "../definitions";

export const Services = defineDocument({
    title: "Usługi",
    name: "services",
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
            elementType: "sectionColor",
        }),
    ],
});
