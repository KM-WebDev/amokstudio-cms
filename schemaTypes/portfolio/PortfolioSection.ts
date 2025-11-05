import {
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const PortfolioSection = defineObject({
    title: "Sekcja",
    name: "portfolioSection",
    fields: [
        defineSingleLine({
            title: "Nagłówek",
            name: "heading",
        }),
        defineMultiLine({
            title: "Zawartość",
            name: "content",
        }),
    ],
});
