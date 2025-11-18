import { FaCheck } from "react-icons/fa";
import { defineBool, defineObject, defineSingleLine } from "../definitions";

export const FormBoolean = defineObject({
    title: "Pytanie Tak/Nie",
    name: "formBoolean",
    icon: () => <FaCheck />,
    fields: [
        defineSingleLine({
            title: "Pytanie",
            name: "question",
        }),
        defineBool({
            title: "Wymagane",
            name: "required",
        }),
    ],
    preview: {
        select: { question: "question" },
        prepare({ question }) {
            return { title: question };
        },
    },
});
