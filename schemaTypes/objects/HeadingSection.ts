import { LayoutPanelTop } from "lucide-react";
import {
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineObject,
} from "../definitions";

export const HeadingSection = defineObject({
    title: "Sekcja",
    name: "headingSection",
    icon: LayoutPanelTop,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineImage({
            title: "Obraz",
            name: "image",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
    ],
    preview: {
        select: {
            heading_pl: "heading.pl",
            heading_en: "heading.en",
        },
        prepare(selection) {
            const { heading_pl, heading_en } = selection;
            return {
                title: heading_pl + " / " + heading_en,
            };
        },
    },
});
