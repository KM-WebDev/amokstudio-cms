import { Gift } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const OfferBenefits = defineSingletonDocument({
    title: "Korzyści",
    name: "offerBenefits",
    icon: Gift,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
        defineArrayOfType({
            title: "Korzyści",
            name: "benefits",
            elementType: "ihCard",
        }),
    ],
});
