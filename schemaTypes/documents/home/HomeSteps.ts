import { Footprints } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomeSteps = defineSingletonDocument({
    title: "Etapy",
    name: "homeSteps",
    icon: Footprints,
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
            title: "Etapy",
            name: "steps",
            elementType: "hCard",
        }),
        defineLocalizedString({
            title: "Tekst przycisku",
            name: "buttonText",
        }),
    ],
});
