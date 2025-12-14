import { createCardPreview } from "../../../utils";
import {
    defineColorPicker,
    defineIcon,
    defineLocalizedText,
    defineObject,
} from "../../definitions";

export const ICard = defineObject({
    title: "Karta",
    name: "iCard",
    fields: [
        defineIcon({
            title: "Ikona",
            name: "icon",
        }),
        defineLocalizedText({
            title: "Treść",
            name: "content",
        }),
        defineColorPicker({
            title: "Tło",
            name: "background",
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
