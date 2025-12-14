import { Shirt } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomeServices = defineSingletonDocument({
    title: "Usługi",
    name: "homeServices",
    icon: Shirt,
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
            elementType: "ihCard",
        }),
        defineLocalizedString({
            title: "Przycisk - oferta",
            name: "offerButtonText",
        }),
    ],
});
