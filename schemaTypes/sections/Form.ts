import { defineField } from "sanity";
import {
    defineArrayOf,
    defineDocument,
    defineSingleLine,
} from "../definitions";

export const Form = defineDocument({
    title: "Formularz",
    name: "form",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineArrayOf({
            title: "Pytania",
            name: "inputs",
            fields: [
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
