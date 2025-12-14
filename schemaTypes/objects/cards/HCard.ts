import { createCardPreview } from "../../../utils";
import {
    defineColorPicker,
    defineLocalizedString,
    defineLocalizedText,
    defineObject,
} from "../../definitions";

export const HCard = defineObject({
    title: "Karta",
    name: "hCard",
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Treść",
            name: "content",
        }),
        defineColorPicker({
            title: "Tło",
            name: "background",
            initialValue: "#FEC7DA",
        }),
    ],
    preview: {
        select: {
            title: "heading.pl",
            background: "background",
        },
        prepare: createCardPreview,
    },
});
