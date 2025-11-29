import {
    ObjectType,
    StringType,
    ImageType,
    ArrayType,
    DropDownType,
    ColorType,
    TagType,
    ArrayOfElementType,
    BoolType,
    TextType,
    ReferenceToProps,
    RichType,
} from "./types";

import {
    orderRankField,
    orderRankOrdering,
} from "@sanity/orderable-document-list";

import { defineField, defineType, FieldDefinition } from "sanity";

import AutoSlugInput from "../components/AutoSlugInput";

export function defineOrderedDocument({ fields, ...rest }: ObjectType) {
    return defineType({
        ...rest,
        type: "document",
        orderings: [orderRankOrdering],
        fields: [...fields, orderRankField({ type: "category", hidden: true })],
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

export function defineSingleLine(props: StringType) {
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

export function defineImage(props: ImageType) {
    props.fields = [
        defineSingleLine({
            title: "Tekst alternatywny",
            name: "alt",
            description: "Important for accessibility and SEO",
        }),
        ...(props.fields || []),
    ];

    return defineField({
        ...props,
        type: "image",
    });
}

export function defineArrayOf({ fields, ...rest }: ArrayType) {
    return defineField({
        type: "array",
        ...rest,
        of: fields || [],
    });
}

export function defineTags({ tags, ...rest }: TagType) {
    return defineField({
        ...rest,
        type: "tags",
        options: {
            predefinedTags: tags,
        },
    });
}

export function defineSlug() {
    return defineField({
        title: "Ścieżka",
        description:
            "Ścieżka generowana jest automatycznie na podstawie tytułu",
        name: "slug",
        type: "slug",
        readOnly: true,
        components: {
            input: AutoSlugInput,
        },
        options: {
            source: "title",
            maxLength: 96,
        },
    });
}

export function defineRichMultiLine(props: RichType) {
    return defineField({
        ...props,
        type: "array",
        of: [{ type: "block" }],
    });
}

export function defineMultiLine(props: TextType) {
    return defineField({
        ...props,
        type: "text",
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
        of: [{ type: elementType }],
    });
}

export function defineReferenceTo({ to, ...rest }: ReferenceToProps) {
    const toArray = Array.isArray(to) ? to : [to];
    return defineField({
        ...rest,
        type: "array",
        of: [{ type: "reference", to: toArray.map((t) => ({ type: t })) }],
    });
}
