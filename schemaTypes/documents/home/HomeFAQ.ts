import { MessageCircleQuestionMark } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomeFAQ = defineSingletonDocument({
    title: "FAQ",
    name: "homeFAQ",
    icon: MessageCircleQuestionMark,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "description",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "headingSection",
        }),
    ],
});
