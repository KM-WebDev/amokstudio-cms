import { defineField, defineType } from "sanity";

export const PortfolioGallery = defineType({
    title: "Galeria",
    name: "portfolioGallery",
    type: "object",
    fields: [
        defineField({
            title: " ",
            name: "images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            title: "Opis",
                            name: "caption",
                            type: "string",
                            options: { isHighlighted: true },
                        },
                        {
                            title: "Tekst alternatywny",
                            name: "alt",
                            type: "string",
                            description: "Important for accessibility and SEO",
                        },
                    ],
                },
            ],
        }),
    ],
});
