import { defineBool, defineObject, defineLocalizedString } from "../definitions";
import { CircleQuestionMark } from "lucide-react";

export const FormQuestion = defineObject({
    title: "Pytanie otwarte",
    name: "formQuestion",
    icon: CircleQuestionMark,
    fields: [
        defineLocalizedString({
            title: "Pytanie",
            name: "question",
        }),
        defineBool({
            title: "Wymagane",
            name: "required",
        }),
        defineBool({
            title: "Długi tekst",
            name: "long",
        }),
    ],
    preview: {
        select: { title: "question.pl" },
        prepare({ title }) {
            return { title: title };
        },
    },
});
