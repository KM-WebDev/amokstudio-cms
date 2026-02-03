import { Tag } from "lucide-react";
import {
    defineArrayOf,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const HomeTitle = defineSingletonDocument({
    title: "Metadane",
    name: "homeTitle",
    icon: Tag,
    fields: [
        defineLocalizedString({
            name: "metaTitle",
            title: "Tytuł strony na karcie przeglądarki",
        }),
        defineLocalizedText({
            name: "description",
            title: "Opis Strony widoczny dla wyszukiwarek",
        }),
        defineArrayOf({
            name: "keywords",
            title: "Słowa kluczowe",
            fields: [
                defineLocalizedString({
                    name: "keyword",
                    title: "Słowo kluczowe",
                }),
            ],
        }),
        defineLocalizedText({
            name: "ogTitle",
            title: "Tytuł udostępniania w mediach społecznościowych",
        }),
    ],
});
