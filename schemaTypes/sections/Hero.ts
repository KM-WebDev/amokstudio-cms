import { defineDocument, defineSingleLine } from "../definitions";

export const Hero = defineDocument({
    title: "Hero",
    name: "hero",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
    ],
});
