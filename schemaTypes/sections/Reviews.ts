import {
    defineDropDown,
    defineImage,
    defineMultiLine,
    defineOrderedDocument,
    defineSingleLine,
} from "../definitions";

export const Reviews = defineOrderedDocument({
    title: "Opinie",
    name: "reviews",
    fields: [
        defineSingleLine({
            title: "Imie autora opinii",
            name: "author",
        }),
        defineImage({
            title: "Zdjęcie autora opinii",
            name: "avatar",
        }),
        defineMultiLine({
            title: "Zawartość opinii",
            name: "content",
        }),
        defineDropDown({
            title: "Źródło opinii",
            name: "source",
            options: ["Google", "Facebook", "Inne"],
            initialValue: "Facebook",
        }),
        defineSingleLine({
            title: "Link do serwisu skąd pochodzi opinia",
            name: "sourceLink",
            hidden: ({ parent }) => parent.source !== "Inne",
        }),
        defineDropDown({
            title: "Ocena",
            name: "score",
            options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"],
            initialValue: "5",
        }),
    ],
});
