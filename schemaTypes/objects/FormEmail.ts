import { CircleQuestionMark } from "lucide-react";
import {
    defineBool,
    defineLocalizedString,
    defineObject,
} from "../definitions";

export const FormEmail = defineObject({
    title: "Pytanie email",
    name: "formEmail",
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
    ],
    preview: {
        select: { title: "question.pl" },
        prepare({ title }) {
            return { title: title };
        },
    },
});
