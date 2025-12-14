import { defineObject, defineLocalizedString } from "../definitions";
import { NoMediaItem } from "../../components/NoMediaItem";

export const FormSingleChoice = defineObject({
    title: "Opcja",
    name: "formSingleChoice",
    components: {
        item: NoMediaItem,
    },
    fields: [
        defineLocalizedString({
            title: "Pytanie",
            name: "question",
        }),
    ],
    preview: {
        select: { title: "question.pl" },
        prepare({ title }) {
            return { title: title, media: null };
        },
    },
});
