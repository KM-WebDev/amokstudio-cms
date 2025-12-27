import { GalleryThumbnails } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomePortfolio = defineSingletonDocument({
    title: "Portfolio",
    name: "homePortfolio",
    icon: GalleryThumbnails,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "description",
        }),
        defineLocalizedString({
            title: "Tekst przycisku odsyłającego do podstrony portfolio",
            name: "portfolioButtonText",
        }),
        defineLocalizedString({
            title: "Tekst przycisku na zdjęciu",
            name: "checkButtonText",
        }),
    ],
});
