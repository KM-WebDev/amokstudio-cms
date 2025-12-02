import { GrGallery } from "react-icons/gr";
import { defineField, RuleDef } from "sanity";
import {
    defineArrayOfType,
    defineBool,
    defineDropDown,
    defineImage,
    defineOrderedDocument,
    defineReferenceTo,
    defineSingleLine,
    defineSlug,
} from "../definitions";

export const PortfolioSlug = defineOrderedDocument({
    title: "Portfolio",
    name: "portfolioSlug",
    icon: GrGallery,
    fields: [
        defineSingleLine({
            title: "Tytuł",
            name: "title",
            validation: <T>(rule: RuleDef<T>) => rule.required(),
        }),
        defineSlug(),
        defineReferenceTo({
            title: "Tags",
            name: "tags",
            to: "portfolioTag",
        }),
        defineImage({
            title: "Główne zdjęcie",
            name: "mainImage",
            validation: <T>(rule: RuleDef<T>) => rule.required(),
            options: {
                hotspot: true,
            },
            fields: [
                defineDropDown({
                    title: "Apsekt zdjęcia",
                    name: "aspect",
                    description:
                        "Zdjęcie główne zawsze będzie wyświatlane jako kwadrat",
                    options: ["square"],
                    initialValue: "square",
                    readOnly: true,
                }),
            ],
        }),
        defineSingleLine({
            title: "Krótki opis",
            name: "description",
        }),
        defineField({
            title: "Główna sekcja",
            name: "mainSection",
            type: "section",
        }),
        defineBool({
            title: "Wyświetl na stronie głównej",
            name: "showOnHomepage",
        }),
        defineArrayOfType({
            title: "Sekcje",
            name: "sections",
            elementType: "section",
        }),
        defineField({
            title: "Galeria",
            name: "gallery",
            type: "gallery",
        }),
    ],
});
