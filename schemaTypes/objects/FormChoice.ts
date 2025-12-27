import { List } from "lucide-react";
import {
    defineArrayOfType,
    defineBool,
    defineObject,
    defineLocalizedString,
} from "../definitions";


export const FormChoice = defineObject({
    title: "Pytanie wybór",
    name: "formChoice",
    icon: List,
    fields: [
        defineLocalizedString({
            title: "Pytanie",
            name: "question",
        }),
        defineArrayOfType({
            title: "Opcje",
            name: "choices",
            elementType: "formSingleChoice",
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
        select: { question: "question.pl" },
        prepare({ question }) {
            return { title: question };
        },
    },
});
