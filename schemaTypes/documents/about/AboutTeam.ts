import { UsersRound } from "lucide-react";
import {
    defineArrayOfType,
    defineLocalizedString,
    defineLocalizedText,
    defineSingletonDocument,
} from "../../definitions";

export const AboutTeam = defineSingletonDocument({
    title: "Zespół",
    name: "aboutTeam",
    icon: UsersRound,
    fields: [
        defineLocalizedString({
            title: "Nagłówek",
            name: "heading",
        }),
        defineLocalizedText({
            title: "Zawartość",
            name: "content",
        }),
        defineArrayOfType({
            title: "Członkowie",
            name: "members",
            elementType: "member",
        }),
    ],
});
