import { LayoutPanelTop } from "lucide-react";
import {
    defineBool,
    defineImage,
    defineLocalizedString,
    defineLocalizedText,
    defineObject,
} from "../definitions";

export const HeadingImageSection = defineObject({
    title: "Sekcja",
    name: "headingImageSection",
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
        defineBool({
            title: "Obraz po lewej?",
            name: "imageLeft",
            initialValue: true,
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
