import { BsSignIntersectionT } from "react-icons/bs";
import {
    defineMultiLine,
    defineObject,
    defineSingleLine,
} from "../definitions";

export const Section = defineObject({
    title: "Sekcja",
    name: "section",
    icon: BsSignIntersectionT,
    fields: [
        defineSingleLine({
            title: "Nagłówek",
            name: "heading",
        }),
        defineMultiLine({
            title: "Zawartość",
            name: "content",
        }),
    ],
});
