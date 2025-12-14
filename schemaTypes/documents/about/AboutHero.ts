import { UserStar } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const AboutHero = defineSingletonDocument({
    title: "Hero",
    name: "aboutHero",
    icon: UserStar,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "content",
        }),
    ],
});
