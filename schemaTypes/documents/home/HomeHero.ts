import { UserStar } from "lucide-react";
import {
    defineArrayOfType,
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomeHero = defineSingletonDocument({
    title: "Hero",
    name: "homeHero",
    icon: UserStar,
    fields: [
        defineImage({
            title: "Zdjęcie Hero",
            name: "heroImage",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
        defineArrayOfType({
            title: "Wyróżnienia",
            name: "highlights",
            elementType: "capsule",
        }),
        defineLocalizedString({
            title: "Zjedź w dół - tekst",
            name: "interactText",
        }),
    ],
});
