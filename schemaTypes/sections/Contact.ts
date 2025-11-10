import {
    defineArrayOfType,
    defineDocument,
    defineSingleLine,
} from "../definitions";

export const Contact = defineDocument({
    title: "Dane Kontaktowe",
    name: "contactInfo",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
            hidden: true,
            initialValue: "Dane Kontaktowe",
        }),
        defineArrayOfType({
            title: "Email",
            name: "emails",
            elementType: "string",
        }),
        defineArrayOfType({
            title: "Numer telefonu",
            name: "phoneNumber",
            elementType: "string",
        }),
        defineArrayOfType({
            title: "Sociale",
            name: "socials",
            elementType: "string",
        }),
        defineSingleLine({
            title: "Lokalizacja",
            name: "location",
        }),
    ],
});
