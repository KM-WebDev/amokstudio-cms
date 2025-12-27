import { Form as FormIcon } from "lucide-react";
import { defineField } from "sanity";
import {
    defineArrayOf,
    defineLocalizedString,
    defineSingletonDocument,
} from "../../definitions";

export const ContactForm = defineSingletonDocument({
    title: "Formularz",
    name: "contactForm",
    icon: FormIcon,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
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
