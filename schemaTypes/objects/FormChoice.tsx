import { defineType } from "sanity";
import {
    defineArrayOfType,
    defineBool,
    defineSingleLine,
} from "../definitions";

import { FaListUl } from "react-icons/fa";

export const FormChoice = defineType({
    title: "Wybór jednokrotny",
    type: "object",
    name: "formChoice",
    icon: () => <FaListUl />,
    fields: [
        defineSingleLine({
            title: "Pytanie",
            name: "question",
        }),
        defineArrayOfType({
            title: "Opcje",
            name: "choices",
            elementType: "string",
        }),
        defineBool({
            title: "Wymagane",
            name: "required",
        }),
        defineBool({
            title: "Wielokrotny wybór",
            name: "multiSelect",
        }),
    ],
    preview: {
        select: { choices: "choices", title: "question" },
        prepare(selection) {
            const { title, choices } = selection;
            return {
                title:
                    title +
                    ": " +
                    (Array.isArray(choices)
                        ? choices.join(", ")
                        : "Brak opcji"),
            };
        },
    },
});
