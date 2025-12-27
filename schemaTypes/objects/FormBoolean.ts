import { defineBool, defineObject, defineLocalizedString } from "../definitions";
import { Check } from "lucide-react";

export const FormBoolean = defineObject({
    title: "Pytanie Tak/Nie",
    name: "formBoolean",
    icon: Check,
    fields: [
        defineLocalizedString({
            title: "Pytanie",
            name: "question",
        }),
        defineBool({
            title: "Wymagane",
            name: "required",
        }),
    ],
    preview: {
        select: { question: "question.pl" },
        prepare({ question }) {
            return { title: question };
        },
    },
});
