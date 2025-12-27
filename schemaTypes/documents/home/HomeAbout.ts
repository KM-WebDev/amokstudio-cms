import {
    defineSingletonDocument,
    defineImage,
    defineLocalizedText,
    defineLocalizedString,
} from "../../definitions";
import { Info } from "lucide-react";

export const HomeAbout = defineSingletonDocument({
    title: "O mnie",
    name: "homeAbout",
    icon: Info,
    fields: [
        defineLocalizedString({
            title: "Tytuł",
            name: "shortTitle",
        }),
        defineLocalizedString({
            title: "Nagłówek",
            name: "shortHeading",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "shortContent",
        }),
        defineLocalizedString({
            title: "Przycisk",
            name: "shortButtonText",
        }),
        defineImage({
            title: "Zdjęcie",
            name: "mainImage",
            initialAspect: "16:9",
            allowAspect: true,
        }),
    ],
});
