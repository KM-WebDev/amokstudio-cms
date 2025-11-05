import { ArrayRule, ImageOptions, StringRule, ValidationBuilder } from "sanity";
import { SanityTypeString } from "./types";

export type FieldProps = {
    title: string;
    name: string;
    description?: string;
    fields?: FieldDefinition[];
    hidden?: boolean;
    initialValue?: InitialValueProperty<any, ImageValue>;
};

export type SingleLineFieldProps = {
    validation?: ValidationBuilder<StringRule, string>;
} & FieldProps;

export type MultiLineFieldProps = {
    validation?: ValidationBuilder<ArrayRule<unknown[]>, unknown[]>;
} & FieldProps;

export type ObjectArrayFieldProps = {
    elementType: SanityTypeString | string;
} & FieldProps;

export type DropDownFieldProps = {
    options: string[];
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
