import { Tag } from "lucide-react";
import { defineLocalizedString, defineOrderedDocument } from "../definitions";

export const PortfolioTag = defineOrderedDocument({
    title: "Tagi dla Portfolio",
    name: "portfolioTag",
    icon: Tag,
    fields: [
        defineLocalizedString({
            name: "name",
            title: "Nazwa Taga",
        }),
    ],
    preview: {
        select: { name: "name.pl" },
        prepare({ name }) {
            return {
                title: name,
            };
        },
    },
});
