import { Megaphone } from "lucide-react";
import { defineSingletonDocument } from "../../definitions";

import { defineField } from "sanity";

export const ProcessCTA = defineSingletonDocument({
    title: "CTA na podstronie proces",
    name: "processCTA",
    icon: Megaphone,
    fields: [
        defineField({
            title: " ",
            name: "cta",
            type: "cta",
        }),
    ],
});
