import { Button, Stack } from "@sanity/ui";
import { useEffect, useState } from "react";
import { ArrayOfObjectsInputProps, set, unset, useClient } from "sanity";
import { v4 as uuid } from "uuid";

interface Tag {
    _id: string;
    title: string;
}

interface ReferenceValue {
    _key: string;
    _ref: string;
    _type: "reference";
}

interface TagsReferenceInputProps extends ArrayOfObjectsInputProps {
    documentType: string;
}

export default function TagsReferenceInput(props: TagsReferenceInputProps) {
    const { onChange, value = [] } = props;
    const client = useClient({ apiVersion: "2025-10-24" });
    const [tags, setTags] = useState<Tag[]>([]);

    const typedValue = value as ReferenceValue[];

    useEffect(() => {
        const fetchTags = () => {
            client
                .fetch<
                    Tag[]
                >(`*[_type == "portfolioTag" && !(_id in path("drafts.**"))] | order(orderRank){_id, "title": title.pl}`)
                .then(setTags);
        };

        fetchTags();

        // Subscribe to changes in portfolioTag documents
        const subscription = client
            .listen('*[_type == "portfolioTag"]')
            .subscribe(() => {
                fetchTags();
            });

        return () => subscription.unsubscribe();
    }, [client]);

    const toggleTag = (tag: Tag) => {
        const exists = typedValue.some((v) => v._ref === tag._id);

        if (exists) {
            onChange(
                unset(
                    typedValue
                        .map((v, i) => (v._ref === tag._id ? i : null))
                        .filter((i) => i !== null)
                )
            );
        } else {
            onChange(
                set([
                    ...typedValue,
                    {
                        _type: "reference",
                        _ref: tag._id,
                        _key: uuid(),
                    },
                ])
            );
        }
    };

    const isSelected = (tag: Tag) => typedValue.some((v) => v._ref === tag._id);

    return (
        <Stack space={2}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {tags.map((tag) => (
                    <Button
                        key={tag._id}
                        mode={isSelected(tag) ? "default" : "ghost"}
                        tone={isSelected(tag) ? "primary" : "default"}
                        fontSize={1}
                        padding={2}
                        text={tag.title}
                        onClick={() => toggleTag(tag)}
                    />
                ))}
            </div>
        </Stack>
    );
}
