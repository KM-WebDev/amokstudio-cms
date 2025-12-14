import {
    defineLocalizedText,
    defineObject,
    defineLocalizedString,
} from "../definitions";
import { LayoutPanelTop } from "lucide-react";

export const HeadingSection = defineObject({
    title: "Sekcja",
    name: "headingSection",
    icon: LayoutPanelTop,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
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
