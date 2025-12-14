import { defineLocalizedString, defineObject } from "../definitions";

export const CTA = defineObject({
    title: "Wezwanie do działania",
    name: "cta",
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedString({
            title: "Zawartość",
            name: "content",
        }),
        defineLocalizedString({
            title: "Tekst przycisku",
            name: "buttonText",
        }),
    ],
});
