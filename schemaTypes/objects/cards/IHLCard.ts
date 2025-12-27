import { createCardPreview } from "../../../utils";
import {
    defineColorPicker,
    defineIcon,
    defineLocalizedString,
    defineLocalizedText,
    defineObject,
    defineString,
} from "../../definitions";

export const IHLCard = defineObject({
    title: "Karta",
    name: "ihlCard",
    fields: [
        defineIcon({
            title: "Ikona",
            name: "icon",
        }),
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineString({
            title: "Link",
            name: "link",
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
            iconName: "icon",
            background: "background",
        },
        prepare: createCardPreview,
    },
});
