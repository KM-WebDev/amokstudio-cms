import {
    orderRankField,
    orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const Portfolio = defineType({
    title: "Portfolio",
    name: "portfolio",
    type: "document",
    orderings: [orderRankOrdering],
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
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: "Opis",
                    name: "caption",
                    type: "string",
                },
                {
                    title: "Tekst alternatywny",
                    name: "alt",
                    type: "string",
                    description: "Important for accessibility and SEO",
                },
            ],
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
        orderRankField({ type: "category", hidden: true }),
    ],
});
