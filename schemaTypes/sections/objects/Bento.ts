import {
    defineColorPicker,
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../../definitions";

export const Bento = defineObject({
    title: "Bento",
    name: "bento",
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineMultiLine({
            title: "Opis",
            name: "description",
        }),
        defineColorPicker({
            title: "Kolor tła",
            name: "background",
        }),
    ],
});
