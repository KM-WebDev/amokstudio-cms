import { createCardPreview } from "../../../utils";
import {
    defineColorPicker,
    defineIcon,
    defineLocalizedString,
    defineLocalizedText,
    defineObject,
} from "../../definitions";

export const IHCard = defineObject({
    title: "Karta",
    name: "ihCard",
    fields: [
        defineIcon({
            title: "Ikona",
            name: "icon",
        }),
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
            iconName: "icon",
            background: "background",
        },
        prepare: createCardPreview,
    },
});
