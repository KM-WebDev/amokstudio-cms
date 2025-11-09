import {
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const PortfolioInfo = defineObject({
    title: "Portfolio Info",
    name: "portfolioInfo",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "mainTitle",
        }),
        defineMultiLine({
            title: "Opis",
            name: "description",
        }),
    ],
});
