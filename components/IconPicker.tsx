import { Autocomplete, Box, Card, Flex, Stack } from "@sanity/ui";
import * as Icons from "lucide-react";
import React, { useMemo, useState } from "react";
import { StringInputProps, set, unset } from "sanity";

// Cache icon names outside component to avoid recalculating on every render
const iconNames = Object.keys(Icons).filter((key) => {
    const value = Icons[key as keyof typeof Icons];
    return (
        typeof value === "object" && value !== null && "displayName" in value
    );
});

export const IconPicker = (props: StringInputProps) => {
    const { value, onChange } = props;
    const [query, setQuery] = useState("");
    const uniqueId = React.useId();

    // Filter icons based on search query
    const filteredIcons = useMemo(() => {
        if (!query) return iconNames.slice(0, 50); // Show first 50 by default
        return iconNames
            .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 50); // Limit to 50 results for performance
    }, [query]);

    const handleChange = (iconName: string) => {
        onChange(iconName ? set(iconName) : unset());
    };

    const handleQueryChange = (q: string | null) => {
        setQuery(q || "");
    };

    const IconComponent = value && (Icons[value as keyof typeof Icons] as any);

    return (
        <Stack space={3}>
            <Flex gap={3} align="center">
                <Box flex={1}>
                    <Autocomplete
                        id={uniqueId}
                        fontSize={2}
                        options={filteredIcons.map((name) => ({ value: name }))}
                        placeholder="Wyszukaj ikonę..."
                        value={value || ""}
                        onChange={handleChange}
                        onQueryChange={handleQueryChange}
                    />
                </Box>
                {IconComponent && (
                    <Card padding={2} border>
                        <IconComponent size={24} />
                    </Card>
                )}
            </Flex>
        </Stack>
    );
};
