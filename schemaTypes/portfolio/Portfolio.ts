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
            name: "showOnHomepage",
            type: "boolean",
        }),
        defineField({
            title: "Kolejność na stronie głównej",
            name: "homepageOrder",
            type: "number",
            initialValue: 0,
            hidden: ({ parent }) => {
                return !parent?.showOnHomepage;
            },
            validation: (rule) => {
                return rule.required().positive().integer();
            },
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
