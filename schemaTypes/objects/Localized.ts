import { defineObject } from "../definitions";

export const supportedLanguages = [
    { id: "pl", title: "Polski", isDefault: true },
    { id: "en", title: "Angielski" },
];

export const LocalizedString = Localized("string");

export const LocalizedText = Localized("text");

function Localized(type: string) {
    return defineObject({
        title: "",
        name: "localized" + type.charAt(0).toUpperCase() + type.slice(1),
        fields: supportedLanguages.map((lang) => ({
            title: lang.title,
            name: lang.id,
            type: type,
        })),
    });
}
