import { defineDocument, defineSingleLine } from "../definitions";

export const Hero = defineDocument({
    title: "Hero",
    name: "hero",
    deprecated: { reason: "No longer being used." },
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
    ],
});
