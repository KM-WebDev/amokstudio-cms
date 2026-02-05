import {
    defineImage,
    defineLocalizedString,
    defineObject,
} from "../definitions";

export const Member = defineObject({
    title: "Członek zespołu",
    name: "member",
    fields: [
        // defineString({
        //     title: "Imię i nazwisko",
        //     name: "name",
        // }),
        defineLocalizedString({
            title: "Imię i nazwisko",
            name: "name",
        }),
        defineLocalizedString({
            title: "Stanowisko",
            name: "position",
        }),
        defineImage({
            title: "Zdjęcie",
            name: "photo",
        }),
    ],
    preview: {
        select: {
            title: "name.pl",
            media: "photo",
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
            };
        },
    },
});
