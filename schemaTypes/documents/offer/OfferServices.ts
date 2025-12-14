import { BadgeDollarSign } from "lucide-react";
import {
    defineArrayOfType,
    defineColorPicker,
    defineIcon,
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
        defineIcon({
            title: "Ikona",
            name: "icon",
        }),
        defineLocalizedString({
            title: "Cena",
            name: "price",
        }),
        defineColorPicker({
            title: "Kolor Gradient Od",
            name: "colorFrom",
        }),
        defineColorPicker({
            title: "Kolor Gradient Do",
            name: "colorTo",
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
