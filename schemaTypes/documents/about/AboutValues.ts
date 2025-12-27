import { Check } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const AboutValues = defineSingletonDocument({
    title: "Wartości",
    name: "aboutValues",
    icon: Check,
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
            title: "Wartości",
            name: "values",
            elementType: "ihCard",
        }),
    ],
});
