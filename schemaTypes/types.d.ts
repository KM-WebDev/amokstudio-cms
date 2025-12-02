import {
    ArrayDefinition,
    BooleanDefinition,
    FieldDefinition,
    ImageDefinition,
    ObjectDefinition,
    StringDefinition,
    TextDefinition,
} from "sanity";

import { ColorDefinition } from "@sanity/color-input";

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

type ObjectType = Omit<ObjectDefinition & FieldDefinition, "type">;
type StringType = Omit<StringDefinition & FieldDefinition, "type">;
type ImageType = Omit<ImageDefinition & FieldDefinition, "type">;
type ColorType = Omit<ColorDefinition & FieldDefinition, "type">;
type BoolType = Omit<BooleanDefinition & FieldDefinition, "type">;
type TextType = Omit<TextDefinition & FieldDefinition, "type">;
type RichType = Omit<ArrayDefinition & FieldDefinition, "type" | "of">;

type ArrayType = Prettify<
    Omit<ArrayDefinition & FieldDefinition, "type" | "of"> & {
        fields: FieldDefinition[];
    }
>;

type DropDownType = Omit<StringDefinition, "type" | "options"> & {
    options: string[];
};

type ArrayOfElementType = Omit<
    ArrayDefinition & FieldDefinition,
    "type" | "of"
> & {
    elementType: string;
};

type TagType = Omit<FieldDefinition, "type" | "tags"> & {
    tags: Tag[];
};

type Tag = {
    label: string;
    value: string;
};

type ReferenceToProps = Omit<
    ArrayDefinition & FieldDefinition,
    "type" | "of"
> & {
    to: string;
};
