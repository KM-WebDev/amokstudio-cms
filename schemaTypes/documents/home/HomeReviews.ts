import { MessageSquareCode } from "lucide-react";
import {
    defineLocalizedText,
    defineArrayOfType,
    defineLocalizedString,
    defineSingletonDocument,
} from "../../definitions";

export const HomeReviews = defineSingletonDocument({
    title: "Opinie",
    name: "homeReviews",
    icon: MessageSquareCode,
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
            title: "Opinie",
            name: "reviews",
            elementType: "review",
        }),
    ],
});
