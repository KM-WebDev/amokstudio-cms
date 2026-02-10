import { Tag } from "lucide-react";
import {
    defineArrayOf,
    defineLocalizedString,
    defineLocalizedStringWithCount,
    defineLocalizedTextWithCount,
    defineSingletonDocument,
} from "../../definitions";

export const HomeTitle = defineSingletonDocument({
    title: "Metadane",
    name: "homeTitle",
    icon: Tag,
    fields: [
        defineLocalizedStringWithCount({
            name: "metaTitle",
            description: "od 50 do 60 znaków",
            title: "Tytuł strony na karcie przeglądarki",
        }),
        defineLocalizedTextWithCount({
            name: "description",
            description: "od 120 do 160 znaków",
            title: "Opis Strony widoczny w wynikach wyszukiwania",
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
        defineLocalizedTextWithCount({
            name: "ogTitle",
            description: "do 200 znaków",
            title: "Tytuł udostępniania w mediach społecznościowych",
        }),
    ],
});
