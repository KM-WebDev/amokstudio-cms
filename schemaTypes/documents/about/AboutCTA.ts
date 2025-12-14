import { Megaphone } from "lucide-react";
import { defineSingletonDocument } from "../../definitions";

import { defineField } from "sanity";

export const AboutCTA = defineSingletonDocument({
    title: "CTA na podstronie o mnie",
    name: "aboutCTA",
    icon: Megaphone,
    fields: [
        defineField({
            title: " ",
            name: "cta",
            type: "cta",
        }),
    ],
});
