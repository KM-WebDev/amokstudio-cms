import { Tag } from "lucide-react";
import {
    defineLocalizedStringWithCount,
    defineLocalizedTextWithCount,
    defineSingletonDocument,
} from "../../definitions";

export const ProcessTitle = defineSingletonDocument({
    title: "Metadane",
    name: "processTitle",
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
        defineLocalizedTextWithCount({
            name: "ogTitle",
            description: "do 200 znaków",
            title: "Tytuł udostępniania w mediach społecznościowych",
        }),
    ],
});
