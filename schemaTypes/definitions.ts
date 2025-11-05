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
} from "./types";

export function defineOrderedDocument(props: FieldProps) {
    return defineType({
        type: "document",
        title: props.title,
        name: props.name,
        description: props.description,
        orderings: [orderRankOrdering],
        initialValue: props.initialValue,
        hidden: props.hidden,
        fields: [
            ...(props.fields || []),
            orderRankField({ type: "category", hidden: true }),
        ],
    });
}

export function defineDocument(props: FieldProps) {
    return defineType({
        type: "document",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        fields: props.fields || [],
    });
}

export function defineObject(props: FieldProps) {
    return defineType({
        type: "object",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        fields: props.fields || [],
    });
}

export function defineSingleLine(props: SingleLineFieldProps) {
    return defineField({
        type: "string",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
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

export function defineRichMultiLine(props: MultiLineFieldProps) {
    return defineField({
        type: "array",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
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
        initialValue: props.initialValue,
        hidden: props.hidden,
    });
}

export function defineImage(props: FieldProps) {
    return defineField({
        type: "image",
        title: props.title,
        name: props.name,
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        options: {
            hotspot: true,
        },
        fields: [
            defineSingleLine({
                title: "Opis",
                name: "caption",
            }),
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
        initialValue: props.initialValue,
        hidden: props.hidden,
        type: "boolean",
    });
}

export function defineArrayOfType(props: ObjectArrayFieldProps) {
    return defineField({
        title: props.title,
        name: props.name,
        type: "array",
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        of: [{ type: props.elementType }],
    });
}

export function defineArrayOf(props: FieldProps) {
    return defineField({
        title: props.title,
        name: props.name,
        type: "array",
        description: props.description,
        initialValue: props.initialValue,
        hidden: props.hidden,
        of: props.fields || [],
    });
}
