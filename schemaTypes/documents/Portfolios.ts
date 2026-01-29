import { Images } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../definitions";

export const Portfolios = defineSingletonDocument({
    title: "Portfolio (OLD - DELETE ME)",
    name: "portfolios",
    icon: Images,
    fields: [
        defineLocalizedString({
            title: "Short Heading",
            name: "shortHeading",
        }),
        defineLocalizedText({
            title: "Short Content",
            name: "shortContent",
        }),
        defineLocalizedString({
            title: "Short Button Text",
            name: "shortButtonText",
        }),
    ],
});
