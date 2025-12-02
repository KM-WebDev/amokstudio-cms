import { BsSignIntersectionY } from "react-icons/bs";
import {
    defineColorPicker,
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const SectionColor = defineObject({
    title: "Sekcja",
    name: "sectionColor",
    icon: BsSignIntersectionY,
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
