import {
    defineArrayOfType,
    defineSingletonDocument,
    defineLocalizedString,
    defineLocalizedText,
} from "../../definitions";
import { UserStar } from "lucide-react";

export const HomeHero = defineSingletonDocument({
    title: "Hero",
    name: "homeHero",
    icon: UserStar,
    fields: [
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
