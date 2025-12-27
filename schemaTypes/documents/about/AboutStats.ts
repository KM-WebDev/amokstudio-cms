import { ChartBar } from "lucide-react";
import { defineArrayOfType, defineSingletonDocument } from "../../definitions";

export const AboutStats = defineSingletonDocument({
    title: "Statystyki",
    name: "aboutStats",
    icon: ChartBar,
    fields: [
        defineArrayOfType({
            title: "Statystyki",
            name: "stats",
            elementType: "ihCard",
        }),
    ],
});
