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
import { SanityTypeString } from "./types";

export type FieldProps = {
    title: string;
    name: string;
    description?: string;
    fields?: FieldDefinition[];
    hidden?: ConditionalProperty;
    group?: string | string[];
};

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

export type ImageFieldProps = {
    initialValue?: InitialValueProperty<any, ImageValue>;
    validation?: ValidationBuilder<ImageRule, ImageValue>;
} & FieldProps;

export type SingleLineFieldProps = {
    validation?: ValidationBuilder<StringRule, string>;
    initialValue?: InitialValueProperty<any, string>;
} & FieldProps;

export type MultiLineFieldProps = {
    validation?: ValidationBuilder<ArrayRule<unknown[]>, unknown[]>;
} & FieldProps;

export type ObjectArrayFieldProps = {
    elementType: SanityTypeString | string;
} & FieldProps;

export type DocumentFieldProps = {
    groups?: FieldGroupDefinition[];
} & FieldProps;

export type DropDownFieldProps = {
    options: string[];
    initialValue: InitialValueProperty<any, string>;
    readOnly?: boolean;
} & FieldProps;

export type TagFielsProps = {
    tags: Tag[];
} & FieldProps;

export type SanityTypeString =
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "block"
    | "date"
    | "datetime"
    | "document"
    | "file"
    | "geopoint"
    | "image"
    | "reference"
    | "crossDatasetReference"
    | "globalDocumentReference"
    | "slug"
    | "text"
    | "url"
    | "email";
