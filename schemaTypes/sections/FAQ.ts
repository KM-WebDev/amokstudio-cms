import { FaQuestion } from "react-icons/fa";
import {
    defineArrayOfType,
    defineDocument,
    defineSingleLine,
} from "../definitions";

export const FAQ = defineDocument({
    title: "FAQ",
    name: "faq",
    icon: FaQuestion,
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
    ],
});
