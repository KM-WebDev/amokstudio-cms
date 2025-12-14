import { defineArrayOfType, defineSingletonDocument } from "../definitions";
import { MessageCircleQuestionMark } from "lucide-react";

export const FAQ = defineSingletonDocument({
    title: "FAQ",
    name: "faq",
    icon: MessageCircleQuestionMark,
    fields: [
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "headingSection",
        }),
    ],
});
