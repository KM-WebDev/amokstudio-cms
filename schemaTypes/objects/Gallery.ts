import { Images } from "lucide-react";
import { defineArrayOf, defineImage, defineObject } from "../definitions";

export const Gallery = defineObject({
    title: "Galeria",
    name: "gallery",
    icon: Images,
    fields: [
        defineArrayOf({
            title: " ",
            name: "images",
            fields: [
                defineImage({
                    title: "Zdjęcie",
                    name: "image",
                    initialAspect: "auto",
                    allowAspect: true,
                }),
            ],
        }),
    ],
});
