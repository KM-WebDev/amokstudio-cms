import { Tag } from "lucide-react";
import {
    defineLocalizedStringWithCount,
    defineLocalizedTextWithCount,
    defineSingletonDocument,
} from "../../definitions";

export const AboutTitle = defineSingletonDocument({
    title: "Metadane",
    name: "aboutTitle",
    icon: Tag,
    fields: [
        defineLocalizedStringWithCount({
            name: "metaTitle",
            description: "od 50 do 60 znaków",
            title: "Tytuł strony na karcie przeglądarki",
            // components: { input: CharacterCountStringInput },
        }),
        defineLocalizedTextWithCount({
            name: "description",
            description: "od 120 do 160 znaków",
            title: "Opis Strony widoczny w wynikach wyszukiwania",
            // components: { input: CharacterCountStringInput },
        }),
        defineLocalizedTextWithCount({
            name: "ogTitle",
            description: "do 200 znaków",
            title: "Tytuł udostępniania w mediach społecznościowych",
        }),
    ],
});
