import {
    ArrayDefinition,
    ArrayRule,
    BaseSchemaDefinition,
    BooleanDefinition,
    ConditionalProperty,
    FieldDefinition,
    ImageDefinition,
    ImageOptions,
    MaybePreview,
    ObjectDefinition,
    StringDefinition,
    StringRule,
    TextDefinition,
    ValidationBuilder,
} from "sanity";

import { ColorDefinition } from "@sanity/color-input";

export type ObjectType = Omit<ObjectDefinition & FieldDefinition, "type">;
export type StringType = Omit<StringDefinition & FieldDefinition, "type">;
export type ImageType = Omit<ImageDefinition & FieldDefinition, "type">;
export type ColorType = Omit<ColorDefinition & FieldDefinition, "type">;
export type BoolType = Omit<BooleanDefinition & FieldDefinition, "type">;
export type TextType = Omit<TextDefinition & FieldDefinition, "type">;
export type RichType = Omit<ArrayDefinition & FieldDefinition, "type" | "of">;

export type ArrayType = Omit<
    ArrayDefinition & FieldDefinition,
    "type" | "of"
> & {
    fields: FieldDefinition[];
};

export type DropDownType = Omit<StringDefinition, "type" | "options"> & {
    options: string[];
};

export type ArrayOfType = Omit<
    ArrayDefinition & FieldDefinition,
    "type" | "of"
> & {
    elementType: string;
};

export type TagType = Omit<FieldDefinition, "type" | "tags"> & {
    tags: Tag[];
};

export type Tag = {
    label: string;
    value: string;
};