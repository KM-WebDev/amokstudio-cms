import { defineField, defineType } from "sanity";

export const Portfolio = defineType({
    title: "Portfolio",
    name: "portfolio",
    type: "document",
    fields: [
        defineField({
            title: "Tytuł",
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: "Główne zdjęcie",
            name: "mainImage",
            type: "image",
        }),
        defineField({
            title: "Krótki opis",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            title: "Wyświetl na stronie głównej",
            name: "show_on_homepage",
            type: "boolean",
        }),
        defineField({
            title: "Sekcje",
            name: "sections",
            type: "array",
            of: [
                {
                    type: "portfolioSection",
                },
            ],
        }),
        defineField({
            title: "Galeria",
            name: "gallery",
            type: "portfolioGallery",
        }),
    ],
});
