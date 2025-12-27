import { Megaphone } from "lucide-react";
import { defineSingletonDocument } from "../../definitions";

import { defineField } from "sanity";

export const HomeCTA = defineSingletonDocument({
    title: "CTA na stronie głównej",
    name: "homeCTA",
    icon: Megaphone,
    fields: [
        defineField({
            title: " ",
            name: "cta",
            type: "cta",
        }),
    ],
});
