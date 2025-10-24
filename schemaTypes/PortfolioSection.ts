import { defineField, defineType } from "sanity";

export const PortfolioSection = defineType({
    title: "Sekcja",
    name: "portfolioSection",
    type: "object",
    fields: [
        defineField({
            title: "Nagłówek",
            name: "heading",
            type: "string",
        }),
        defineField({
            title: "Zawartość",
            name: "content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
