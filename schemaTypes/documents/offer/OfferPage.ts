import { UserStar } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const OfferPage = defineSingletonDocument({
    title: "Hero",
    name: "offerHero",
    icon: UserStar,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "description",
        }),
    ],
});
