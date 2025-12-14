import {
    defineColorPicker,
    defineLocalizedString,
    defineObject,
} from "../definitions";
import { NoMediaItem } from "../../components/NoMediaItem";

export const Capsule = defineObject({
    title: "Kapsułka",
    name: "capsule",
    components: {
        item: NoMediaItem,
    },
    fields: [
        defineLocalizedString({
            title: "Tekst",
            name: "text",
        }),
        defineColorPicker({
            title: "Kolor tekstu",
            name: "color",
        }),
        defineColorPicker({
            title: "Kolor tła",
            name: "background",
        }),
    ],
    preview: {
        select: {
            text_pl: "text.pl",
            text_en: "text.en",
        },
        prepare(selection) {
            const { text_pl, text_en } = selection;
            return {
                title: text_pl + " / " + text_en,
            };
        },
    },
});
