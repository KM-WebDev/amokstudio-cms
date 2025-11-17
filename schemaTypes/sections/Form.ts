import { defineField, defineType } from "sanity";

export const Form = defineType({
    title: "Formularz",
    type: "document",
    name: "form",
    fields: [
        defineField({
            type: "string",
            name: "title",
            title: "Tytuł",
        }),
        defineField({
            title: "Pytania",
            type: "array",
            name: "inputs",
            of: [
                defineField({
                    title: "Pytanie Otwarte",
                    name: "question",
                    type: "formQuestion",
                }),
                defineField({
                    title: "Pytanie Wybór",
                    name: "choice",
                    type: "formChoice",
                }),
                defineField({
                    title: "Pytanie Tak/Nie",
                    name: "bool",
                    type: "formBoolean",
                }),
            ],
        }),
    ],
});
