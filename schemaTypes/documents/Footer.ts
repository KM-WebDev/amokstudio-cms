import {
    defineArrayOfType,
    defineSingletonDocument,
    defineLocalizedString,
    defineString,
} from "../definitions";
import { Contact } from "lucide-react";

export const Footer = defineSingletonDocument({
    title: "Stopka",
    name: "footer",
    icon: Contact,
    fields: [
        defineLocalizedString({
            title: "Nagłówek drugiej kolumny w stopce",
            name: "footerContactHeading",
        }),
        defineArrayOfType({
            title: "Email",
            name: "emails",
            elementType: "string",
        }),
        defineArrayOfType({
            title: "Numer telefonu",
            name: "phoneNumber",
            elementType: "string",
        }),
        defineArrayOfType({
            title: "Sociale",
            name: "socials",
            elementType: "string",
        }),
        defineString({
            title: "Lokalizacja",
            name: "location",
        }),
    ],
});
