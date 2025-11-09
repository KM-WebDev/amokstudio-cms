import {
    defineArrayOf,
    defineDropDown,
    defineImage,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const Gallery = defineObject({
    title: "Galeria",
    name: "gallery",
    fields: [
        defineArrayOf({
            title: " ",
            name: "images",
            fields: [
                defineImage({
                    title: "Zdjęcie",
                    name: "image",
                    fields: [
                        defineSingleLine({
                            title: "Opis",
                            name: "caption",
                        }),
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
