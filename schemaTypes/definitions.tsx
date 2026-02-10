import {
    ArrayOfElementType,
    ArrayType,
    BoolType,
    ColorType,
    DropDownType,
    IconType,
    ImageType,
    ObjectType,
    ReferenceToProps,
    StringType,
    TextType,
} from "./types";

import {
    orderRankField,
    orderRankOrdering,
} from "@sanity/orderable-document-list";

import {
    ArrayOfObjectsInputProps,
    defineField,
    defineType,
    FieldDefinition,
} from "sanity";

import AutoSlugInput from "../components/AutoSlugInput";
import { IconPicker } from "../components/IconPicker";
import TagsReferenceInput from "../components/TagsReferenceInput";

export const Aspects = ["3:4", "square", "16:9", "panorama", "auto"] as const;

export function defineOrderedDocument({ fields, ...rest }: ObjectType) {
    return defineType({
        ...rest,
        type: "document",
        orderings: [orderRankOrdering],
        fields: [...fields, orderRankField({ type: "category", hidden: true })],
        preview: {
            select: { title: "title.pl", media: "mainImage" },
            prepare({ title, media }) {
                return {
                    media: media,
                    title: title,
                };
            },
        },
    });
}

export function defineSingletonDocument({ fields, ...rest }: ObjectType) {
    return defineType({
        ...rest,
        fields: [
            // DO NOT CHANGE THE NAME OF THIS FIELD OR REMOVE IT!
            defineField({
                title: "Title",
                name: "title",
                type: "string",
                initialValue: rest.title,
                components: {
                    field: () => null,
                },
                hidden: false,
            }),
            ...fields,
        ],
        type: "document",
        preview: {
            prepare() {
                return {
                    title: rest.title,
                };
            },
        },
    });
}

export function defineDocument(props: ObjectType) {
    return defineType({
        ...props,
        type: "document",
    });
}

export function defineObject(props: ObjectType) {
    return defineType({
        ...props,
        type: "object",
    });
}

export function defineColorPicker(props: ColorType) {
    return defineType({
        ...props,
        type: "color",
    }) as FieldDefinition<"color">; // Otherwise linter complains...
}

export function defineLocalizedString({ ...props }: StringType) {
    return defineField({
        ...props,
        type: "localizedString",
    });
}

export function defineLocalizedStringWithCount({ ...props }: StringType) {
    return defineField({
        ...props,
        type: "localizedStringCount",
    });
}

export function defineString(props: StringType) {
    return defineField({
        ...props,
        type: "string",
    });
}

export function defineDropDown({ options, ...rest }: DropDownType) {
    return defineField({
        ...rest,
        type: "string",
        options: {
            list: options.map((option) => {
                return {
                    title: option,
                    value: option,
                };
            }),
        },
    });
}

export function defineImage({
    allowAspect,
    initialAspect,
    fields,
    ...rest
}: ImageType) {
    return defineField({
        ...rest,
        fields: [
            defineLocalizedString({
                title: "Tekst alternatywny",
                name: "alt",
                description: "Ważne dla dostępności i SEO",
            }),
            // defineDropDown({
            //     title: "Proporcje zdjęcia",
            //     name: "aspect",
            //     // Can't have immutable array in mutable field, so map it is! This is fine.
            //     options: Aspects.map((aspect) => aspect),
            //     initialValue: initialAspect,
            //     readOnly: true,

            //     // readOnly: !allowAspect,
            // }),
            ...(fields || []),
        ],
        options: {
            hotspot: true,
        },
        type: "image",
        preview: {
            select: {
                alt: "alt.pl",
                media: "asset",
            },
            prepare({ alt, media }) {
                return {
                    title: alt,
                    media: media,
                };
            },
        },
    });
}

export function defineArrayOf({ fields, ...rest }: ArrayType) {
    return defineField({
        type: "array",
        ...rest,
        of: fields || [],
    });
}

export function defineSlug(gorup?: string) {
    return defineField({
        title: "Ścieżka",
        description:
            "Ścieżka generowana jest automatycznie na podstawie tytułu",
        name: "slug",
        type: "slug",
        group: gorup,
        readOnly: true,
        components: {
            input: AutoSlugInput,
        },
        options: {
            source: "title.pl",
            maxLength: 96,
        },
    });
}

export function defineText(props: TextType) {
    return defineField({
        ...props,
        type: "text",
    });
}

export function defineLocalizedText(props: TextType) {
    return defineField({
        ...props,
        type: "localizedText",
    });
}

export function defineLocalizedTextWithCount(props: TextType) {
    return defineField({
        ...props,
        type: "localizedTextCount",
    });
}

export function defineBool(props: BoolType) {
    return defineField({
        ...props,
        type: "boolean",
    });
}

export function defineArrayOfType({
    elementType,
    ...rest
}: ArrayOfElementType) {
    return defineField({
        ...rest,
        type: "array",
        of: [defineField({ name: "", type: elementType })],
    });
}

export function defineReferenceTo({ to, weak, ...rest }: ReferenceToProps) {
    return defineField({
        ...rest,
        type: "array",
        components: {
            input: (props: ArrayOfObjectsInputProps) => (
                <TagsReferenceInput {...props} documentType={to} />
            ),
        },
        of: [
            defineField({
                name: "",
                type: "reference",
                to: [{ type: to }],
                // options: { disableNew: true },
                weak: weak,
            }),
        ],
    });
}

export function defineIcon(props: IconType) {
    return defineField({
        ...props,
        type: "string",
        description: "Łatwiejsze wyszukiwanie na: https://lucide.dev/icons/",
        components: {
            input: IconPicker,
        },
    });
}
