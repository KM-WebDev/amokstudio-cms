import { ThumbsUp } from "lucide-react";
import {
    defineArrayOfType,
    defineIcon,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const AboutTestimonials = defineSingletonDocument({
    title: "Referencje",
    name: "aboutTestimonials",
    icon: ThumbsUp,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
        defineIcon({
            title: "Ikona",
            name: "icon",
        }),
        defineArrayOfType({
            title: "Referencje",
            name: "testimonials",
            elementType: "testimonial",
        }),
    ],
});
