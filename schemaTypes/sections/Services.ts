import { FaTshirt } from "react-icons/fa";
import {
    defineArrayOfType,
    defineDocument,
    defineMultiLine,
    defineSingleLine,
} from "../definitions";

export const Services = defineDocument({
    title: "Usługi",
    name: "services",
    icon: FaTshirt,
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
            elementType: "sectionColor",
        }),
    ],
});
