import { Contact } from "lucide-react";
import { ALL_FIELDS_GROUP, defineField } from "sanity";
import { defineArrayOfType, defineSingletonDocument } from "../../definitions";

export const ContactInfo = defineSingletonDocument({
    title: "Informacje Kontaktowe",
    name: "contactInfo",
    icon: Contact,
    groups: [
        {
            title: "Email",
            name: "email",
        },
        {
            title: "Telefon",
            name: "phone",
        },
        {
            title: "Adres",
            name: "address",
        },
        {
            title: "Godziny Pracy",
            name: "workingHours",
        },
        {
            title: "Sociale",
            name: "socials",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineField({
            title: "Adres E-mail do Formularza",
            name: "email",
            group: "email",
            type: "ihlCard",
        }),
        defineField({
            title: "Numer Telefonu do Formularza",
            name: "phone",
            group: "phone",
            type: "ihlCard",
        }),
        defineField({
            title: "Adres Fizyczny",
            name: "address",
            group: "address",
            type: "ihlCard",
        }),
        defineField({
            title: "Godziny Pracy",
            name: "workingHours",
            group: "workingHours",
            type: "ihlCard",
        }),
        defineArrayOfType({
            title: "Sociale",
            name: "socials",
            description: "Linki do profili w mediach społecznościowych",
            elementType: "localizedString",
            group: "socials",
        }),
    ],
});
