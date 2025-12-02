import { MdPlusOne } from "react-icons/md";
import {
    defineArrayOfType,
    defineDocument,
    defineMultiLine,
    defineSingleLine,
} from "../definitions";

export const Features = defineDocument({
    title: "Features",
    name: "features",
    icon: MdPlusOne,
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
        }),
        defineMultiLine({
            title: "Opis",
            name: "description",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
    ],
});
