import { AlignVerticalJustifyStart } from "lucide-react";
import {
    defineArrayOfType,
    defineImage,
    defineLocalizedString,
    defineSingletonDocument,
} from "../../definitions";

export const AboutPage = defineSingletonDocument({
    title: "O mnie",
    name: "aboutPage",
    icon: AlignVerticalJustifyStart,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineImage({
            title: "Zdjęcie",
            name: "mainImage",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
    ],
});
