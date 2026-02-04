import { BadgeDollarSign } from "lucide-react";
import {
    defineArrayOfType,
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineOrderedDocument,
} from "../../definitions";

export const OfferServices = defineOrderedDocument({
    title: "Usługi",
    name: "offerServices",
    icon: BadgeDollarSign,
    fields: [
        defineLocalizedString({
            title: "Tytuł",
            name: "title",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "description",
        }),
        defineArrayOfType({
            title: "Punkty oferty",
            name: "offerPoints",
            elementType: "localizedString",
        }),
        defineImage({
            title: "Obrazek",
            name: "mainImage",
        }),
        defineLocalizedString({
            title: "Cena",
            name: "price",
        }),
        defineLocalizedString({
            title: "Tekst przycisku akcji - Zapytaj",
            name: "askButton",
            initialValue: {
                pl: "Zapytaj",
                en: "Ask",
            },
        }),
    ],
});
