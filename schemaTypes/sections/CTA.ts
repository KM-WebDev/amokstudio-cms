import { LuMegaphone } from "react-icons/lu";
import {
    defineDocument,
    defineMultiLine,
    defineSingleLine,
} from "../definitions";

export const CTA = defineDocument({
    title: "Wezwanie do działania",
    name: "cta",
    icon: LuMegaphone,
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
            hidden: true,
            initialValue: "cta",
        }),
        defineMultiLine({
            title: "Zawartość",
            name: "content",
        }),
    ],
});
