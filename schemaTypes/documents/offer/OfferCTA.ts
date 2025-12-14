import { Megaphone } from "lucide-react";
import { defineSingletonDocument } from "../../definitions";

import { defineField } from "sanity";

export const OfferCTA = defineSingletonDocument({
    title: "CTA na stronie oferty",
    name: "offerCTA",
    icon: Megaphone,
    fields: [
        defineField({
            title: " ",
            name: "cta",
            type: "cta",
        }),
    ],
});
