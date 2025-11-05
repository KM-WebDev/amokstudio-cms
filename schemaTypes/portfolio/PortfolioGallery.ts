import {
    defineArrayOf,
    defineDropDown,
    defineImage,
    defineObject,
} from "../definitions";

export const PortfolioGallery = defineObject({
    title: "Galeria",
    name: "portfolioGallery",
    fields: [
        defineArrayOf({
            title: " ",
            name: "images",
            fields: [
                defineImage({
                    title: "Zdjęcie",
                    name: "image",
                    fields: [
                        defineDropDown({
                            title: "Apsekt zdjęcia",
                            name: "type",
                            options: ["3:4", "square", "16:9", "panorama"],
                            initialValue: "3:4",
                        }),
                    ],
                }),
            ],
        }),
    ],
});
