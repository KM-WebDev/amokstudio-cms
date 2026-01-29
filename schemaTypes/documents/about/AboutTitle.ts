import { Tag } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const AboutTitle = defineSingletonDocument({
    title: "Metadane",
    name: "aboutTitle",
    icon: Tag,
    fields: [
        defineLocalizedString({
            name: "metaTitle",
            title: "Tytuł strony na karcie przeglądarki",
        }),
        defineLocalizedText({
            name: "description",
            title: "Opis Strony",
        }),
    ],
});
