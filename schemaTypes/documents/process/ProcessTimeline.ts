import { ChartNoAxesGantt } from "lucide-react";
import {
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const ProcessTimeline = defineSingletonDocument({
    title: "Terminarz",
    name: "processTimeline",
    icon: ChartNoAxesGantt,
    fields: [
        defineLocalizedString({
            title: "Nagłówek Terminarza",
            name: "heading",
        }),
        defineLocalizedString({
            title: "Czas trwania",
            name: "duration",
        }),
        defineLocalizedText({
            title: "Opis",
            name: "description",
        }),
    ],
});
