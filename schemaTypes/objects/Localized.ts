import CharacterCountStringInput from "../../components/CharacterCountStringInput";
import { defineObject } from "../definitions";

export const supportedLanguages = [
    { id: "pl", title: "Polski", isDefault: true },
    { id: "en", title: "Angielski" },
];

export const LocalizedString = Localized("string", "", false);

export const LocalizedText = Localized("text", "", false);

export const LocalizedStringWithCount = Localized("string", "Count", true);

export const LocalizedTextWithCount = Localized("text", "Count", true);

function Localized(type: string, variant: string, showCount: boolean) {
    return defineObject({
        title: "",
        name:
            "localized" +
            type.charAt(0).toUpperCase() +
            type.slice(1) +
            variant,
        fields: supportedLanguages.map((lang) => ({
            title: lang.title,
            name: lang.id,
            type: type,
            components: {
                input: showCount ? CharacterCountStringInput : undefined,
            },
        })),
    });
}
