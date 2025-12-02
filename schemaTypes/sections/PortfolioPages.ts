import { RiContactsLine } from "react-icons/ri";
import { ALL_FIELDS_GROUP } from "sanity";
import {
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const PortfolioPages = defineObject({
    title: "Portfolio",
    name: "portfolioPages",
    icon: RiContactsLine,
    groups: [
        {
            name: "short",
            title: "Strona Główna",
        },
        {
            name: "long",
            title: "Podstrona",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineSingleLine({
            title: "Tytuł na podstronę Portfolio",
            name: "longTitle",
            group: "long",
        }),
        defineMultiLine({
            title: "Opis na podstronę Portfolio",
            name: "longDescription",
            group: "long",
        }),

        defineSingleLine({
            title: "Tytuł na stronę główną",
            name: "shortTitle",
            group: "short",
        }),
        defineMultiLine({
            title: "Opis na stronę główną",
            name: "shortDescription",
            group: "short",
        }),
    ],
});
