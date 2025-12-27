import {
    defineObject,
    defineString,
    defineImage,
    defineLocalizedText,
    defineDropDown,
} from "../definitions";

export const Review = defineObject({
    title: "Opinia",
    name: "review",
    fields: [
        defineString({
            title: "Imie autora opinii",
            name: "author",
        }),
        defineImage({
            title: "Zdjęcie autora opinii",
            name: "avatar",
        }),
        defineLocalizedText({
            title: "Zawartość opinii",
            name: "content",
        }),
        defineDropDown({
            title: "Źródło opinii",
            name: "source",
            options: ["Google", "Facebook", "Inne"],
            initialValue: "Facebook",
        }),
        defineString({
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
    preview: {
        select: {
            title: "author",
            media: "avatar",
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
            };
        },
    },
});
