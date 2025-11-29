import { FaTag } from "react-icons/fa";
import { defineDocument, defineSingleLine } from "../definitions";

export const PortfolioTag = defineDocument({
    title: "Tagi dla Portfolio",
    name: "portfolioTag",
    icon: FaTag,
    fields: [
        defineSingleLine({
            name: "title",
            title: "Nazwa Taga",
        }),
    ],
});
