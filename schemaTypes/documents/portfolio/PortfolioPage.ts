import { AlignVerticalJustifyStart } from "lucide-react";
import { ALL_FIELDS_GROUP } from "sanity";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const PortfolioPage = defineSingletonDocument({
    title: "Podstrona portfolio",
    name: "portfolioPage",
    icon: AlignVerticalJustifyStart,
    groups: [
        {
            title: "Podstrona Portfolio",
            name: "page",
        },
        {
            title: "Pojedyncze teksty",
            name: "texts",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
            group: "page",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "content",
            group: "page",
        }),
        defineLocalizedString({
            title: "Tekst przycisku do ładowania więcej",
            name: "buttonText",
            group: "page",
        }),
        defineLocalizedString({
            title: "Tekst - Filtruj",
            name: "filterText",
            group: "page",
        }),
        defineLocalizedString({
            title: "Tekst przycisku na zdjęciu",
            name: "checkButtonText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Powrót do portfolio",
            name: "backToPortfolioText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Galeria",
            name: "galleryText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Rezultaty",
            name: "resultsText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Inne projekty",
            name: "otherProjectsText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Nestępny projekt",
            name: "nextProjectText",
            group: "texts",
        }),
        defineLocalizedString({
            title: "Tekst - Poprzedni projekt",
            name: "previousProjectText",
            group: "texts",
        }),
    ],
});
