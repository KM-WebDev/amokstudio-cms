import { defineField, defineType } from "sanity";

export const Socials = defineType({
    title: "Dane Kontaktowe",
    name: "contactInfo",
    type: "document",
    fields: [
        defineField({
            title: "Tytuł",
            name: "title",
            type: "string",
            hidden: true,
            initialValue: "Dane Kontaktowe",
        }),
        defineField({
            title: "Email",
            name: "emails",
            type: "array",
            of: [
                {
                    type: "string",
                    // validation: (rule) => rule.email(),
                },
            ],
        }),
        defineField({
            title: "Numer telefonu",
            name: "phoneNumber",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        }),
        defineField({
            title: "Sociale",
            name: "socials",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        }),
    ],
});
