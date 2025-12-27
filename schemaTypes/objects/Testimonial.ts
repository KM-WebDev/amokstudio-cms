import {
    defineLocalizedText,
    defineObject,
    defineString,
} from "../definitions";

export const Testimonial = defineObject({
    title: "Referencja",
    name: "testimonial",
    fields: [
        defineString({
            title: "Autor",
            name: "author",
        }),
        defineString({
            title: "Firma",
            name: "company",
        }),
        defineLocalizedText({
            title: "Treść",
            name: "content",
        }),
    ],
});
