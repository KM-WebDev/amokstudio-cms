import { UserStar } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const ProcessHero = defineSingletonDocument({
    title: "Hero",
    name: "processHero",
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
