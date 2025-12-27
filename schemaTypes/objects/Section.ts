import { defineLocalizedText, defineObject } from "../definitions";
import { LayoutPanelTop } from "lucide-react";

export const Section = defineObject({
    title: "Sekcja",
    name: "section",
    icon: LayoutPanelTop,
    fields: [
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
    ],
    preview: {
        select: {
            content_pl: "content.pl",
        },
        prepare(selection) {
            return {
                title: selection.content_pl,
            };
        },
    },
});
