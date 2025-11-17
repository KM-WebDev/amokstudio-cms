import { defineField, defineType } from "sanity";

import { FaCheck } from "react-icons/fa";
import { defineBool } from "../definitions";

export const FormBoolean = defineType({
    title: "Pytanie Tak/Nie",
    type: "object",
    name: "formBoolean",
    icon: () => <FaCheck />,
    fields: [
        defineField({
            title: "Pytanie",
            type: "string",
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
