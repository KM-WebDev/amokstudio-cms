import {
    defineColorPicker,
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const SectionColor = defineObject({
    title: "Sekcja",
    name: "sectionColor",
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
