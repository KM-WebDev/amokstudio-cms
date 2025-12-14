import { useEffect, useRef, useState } from "react";
import {
    PatchEvent,
    set,
    useFormValue,
    type FormPatch,
    type SlugInputProps,
} from "sanity";
import slugify from "@sindresorhus/slugify";

type SourceFn = (docOrParent: unknown) => unknown;
type SourceOption = string | SourceFn | undefined;

function getLocalizedString(
    value: unknown,
    locale: string
): string | undefined {
    if (!value) return undefined;
    if (typeof value === "string") return value;
    if (typeof value === "object" && value !== null) {
        const obj = value as Record<string, unknown>;
        const loc = obj[locale];
        if (typeof loc === "string" && loc) return loc;
        for (const v of Object.values(obj)) {
            if (typeof v === "string" && v) return v;
        }
    }
    return undefined;
}

export default function AutoSlugInput(props: SlugInputProps) {
    const { onChange, renderDefault, path, schemaType } = props;

    const parentPath = Array.isArray(path) ? path.slice(0, -1) : [];
    const parentValue = useFormValue(parentPath) as unknown;

    const rawSource: unknown = (schemaType as any)?.options?.source;
    const sourceOption: SourceOption =
        typeof rawSource === "string" || typeof rawSource === "function"
            ? (rawSource as SourceOption)
            : "title";

    const locale = "pl";

    function resolveTitle(): string | undefined {
        if (typeof sourceOption === "function") {
            const res = sourceOption(parentValue);
            if (typeof res === "string") return res;
            return getLocalizedString(res, locale);
        }

        if (typeof sourceOption === "string") {
            const segments = sourceOption.split(".");
            let cursor: unknown = parentValue;

            for (const seg of segments) {
                if (!cursor || typeof cursor !== "object") {
                    cursor = undefined;
                    break;
                }
                cursor = (cursor as Record<string, unknown>)[seg];
            }

            if (typeof cursor === "string") return cursor;
            return getLocalizedString(cursor, locale);
        }

        return undefined;
    }

    const title = resolveTitle();

    const prevTitleRef = useRef<string | undefined>(title);
    const [touched, setTouched] = useState(false);

    const handleChange = (patch: PatchEvent | FormPatch | FormPatch[]) => {
        setTouched(true);
        onChange(patch);
    };

    useEffect(() => {
        if (!title) return;

        const titleChanged = prevTitleRef.current !== title;
        prevTitleRef.current = title;

        if (!touched && titleChanged) {
            const newSlug = slugify(title);
            onChange(PatchEvent.from(set({ current: newSlug })));
        }
    }, [title, touched, onChange]);

    return renderDefault({
        ...props,
        onChange: handleChange,
    });
}
