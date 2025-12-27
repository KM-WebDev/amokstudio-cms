import { defineField } from "sanity";
import { Megaphone } from "lucide-react";
import { defineSingletonDocument } from "../../definitions";

export const PortfolioCTA = defineSingletonDocument({
    title: "CTA na stronie portfolio",
    name: "portfolioCTA",
    icon: Megaphone,
    fields: [
        defineField({
            title: " ",
            name: "cta",
            type: "cta",
        }),
    ],
});
