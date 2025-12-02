import { FaQuestion } from "react-icons/fa6";
import { defineBool, defineObject, defineSingleLine } from "../definitions";

export const FormQuestion = defineObject({
    title: "Pytanie otwarte",
    name: "formQuestion",
    icon: FaQuestion,
    fields: [
        defineSingleLine({
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
        select: { title: "question" },
        prepare({ title }) {
            return { title: title };
        },
    },
});
