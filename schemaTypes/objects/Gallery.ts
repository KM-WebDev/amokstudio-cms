import {
    defineArrayOf,
    defineDropDown,
    defineImage,
    defineObject,
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
                        defineDropDown({
                            title: "Apsekt zdjęcia",
                            name: "aspect",
                            options: [
                                "3:4",
                                "square",
                                "16:9",
                                "panorama",
                                "auto",
                            ],
                            initialValue: "auto",
                        }),
                    ],
                }),
            ],
        }),
    ],
});
