import { defineType } from "sanity";
import { defineBool, defineObject, defineSingleLine } from "../definitions";

import { FaQuestion } from "react-icons/fa6";

export const FormQuestion = defineType({
    title: "Pytanie otwarte",
    type: "object",
    name: "formQuestion",
    icon: () => <FaQuestion />,
    fields: [
        defineSingleLine({
            title: "pytanie",
            name: "question",
        }),
        defineBool({
            title: "Wymagane",
            name: "required",
        }),
    ],
    preview: {
        select: { title: "question" },
        prepare({ title }) {
            return { title: title };
        },
    },
});
