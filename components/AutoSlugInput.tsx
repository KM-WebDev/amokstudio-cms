import { useEffect, useRef, useState } from "react";
import {
    PatchEvent,
    set,
    useFormValue,
    type FormPatch,
    type SlugInputProps,
} from "sanity";

import slugify from "@sindresorhus/slugify";

export default function AutoSlugInput(props: SlugInputProps) {
    const { onChange, renderDefault } = props;
    const title = useFormValue(["title"]) as string; // Trust me bro!

    const prevTitleRef = useRef(title);
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
