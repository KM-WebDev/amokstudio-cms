import {
    defineArrayOfType,
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineOrderedDocument,
} from "../../definitions";

export const ProcessSteps = defineOrderedDocument({
    title: "Etapy procesu",
    name: "processSteps",
    fields: [
        defineImage({
            title: "Zdjęcie Etapu",
            name: "mainImage",
        }),
        defineLocalizedString({
            title: "Nagłówek Etapu",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Opis Etapu",
            name: "content",
        }),
        defineLocalizedString({
            title: "Czas trwania etapu",
            name: "duration",
        }),
        defineArrayOfType({
            title: "Szczegóły etapu",
            name: "taskList",
            elementType: "localizedString",
        }),
    ],
});
