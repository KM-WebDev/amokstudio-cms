import { Form as FormIcon } from "lucide-react";
import { defineField } from "sanity";
import {
    defineArrayOf,
    defineSingletonDocument,
} from "../definitions";

export const Form = defineSingletonDocument({
    title: "Formularz",
    name: "form",
    icon: FormIcon,
    fields: [
        defineArrayOf({
            title: "Pytania",
            name: "inputs",
            fields: [
                defineField({
                    title: "Pytanie Otwarte",
                    name: "formQuestion",
                    type: "formQuestion",
                }),
                defineField({
                    title: "Pytanie Wybór",
                    name: "formChoice",
                    type: "formChoice",
                }),
                defineField({
                    title: "Pytanie Tak/Nie",
                    name: "formBoolean",
                    type: "formBoolean",
                }),
            ],
        }),
    ],
});
