import { defineField, defineType } from "sanity";

import {
    orderRankField,
    orderRankOrdering,
} from "@sanity/orderable-document-list";
import {
    MultiLineFieldProps,
    SingleLineFieldProps,
    ObjectArrayFieldProps,
    FieldProps,
    DropDownFieldProps,
    DocumentFieldProps,
    ImageFieldProps,
    TagFielsProps,
    ObjectTypeProps,
} from "./types";

export function defineOrderedDocument(props: FieldProps) {
    return defineType({
        type: "document",
        title: props.title,
        name: props.name,
        description: props.description,
        orderings: [orderRankOrdering],
        hidden: props.hidden,
        fields: [
            ...(props.fields || []),
            orderRankField({ type: "category", hidden: true }),
        ],
    });
}

export function defineDocument(props: DocumentFieldProps) {
    return defineType({
        type: "document",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        groups: props.groups,
        fields: props.fields || [],
    });
}

export function defineObject(props: ObjectTypeProps) {
    return defineType({
        type: "object",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        fields: props.fields || [],
        preview: props.preview,
    });
}

export function defineColorPicker(props: FieldProps) {
    return defineType({
        type: "color",
        title: props.title,
        name: props.name,
        description: props.description,

        hidden: props.hidden,
    });
}

export function defineSingleLine(props: SingleLineFieldProps) {
    return defineField({
        type: "string",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        initialValue: props.initialValue,
        validation: props.validation,
    });
}

export function defineDropDown(props: DropDownFieldProps) {
    return defineField({
        type: "string",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        group: props.group,
        readOnly: props.readOnly,
        validation: (rule) => rule.required(),
        options: {
            list: props.options.map((option) => {
                return {
                    title: option,
                    value: option,
                };
            }),
        },
    });
}

export function defineTags(props: TagFielsProps) {
    return defineField({
        type: "tags",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        options: {
            predefinedTags: props.tags,
        },
    });
}

export function defineRichMultiLine(props: MultiLineFieldProps) {
    return defineField({
        type: "array",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        of: [{ type: "block" }],
        validation: props.validation,
    });
}

export function defineMultiLine(props: MultiLineFieldProps) {
    return defineField({
        type: "text",
        title: props.title,
        name: props.name,
        description: props.description,
        group: props.group,
        hidden: props.hidden,
    });
}

export function defineImage(props: ImageFieldProps) {
    return defineField({
        type: "image",
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        validation: props.validation,
        options: {
            hotspot: true,
        },
        fields: [
            defineSingleLine({
                title: "Tekst alternatywny",
                name: "alt",
                description: "Important for accessibility and SEO",
            }),
            ...(props.fields || []),
        ],
    });
}

export function defineBool(props: FieldProps) {
    return defineField({
        title: props.title,
        name: props.name,
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        type: "boolean",
    });
}

export function defineArrayOfType(props: ObjectArrayFieldProps) {
    return defineField({
        title: props.title,
        name: props.name,
        type: "array",
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        of: [{ type: props.elementType }],
    });
}

export function defineArrayOf(props: FieldProps) {
    return defineField({
        title: props.title,
        name: props.name,
        type: "array",
        description: props.description,
        hidden: props.hidden,
        group: props.group,
        of: props.fields || [],
    });
}
