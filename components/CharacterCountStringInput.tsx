import { Box, Flex, Text, TextArea, TextInput } from "@sanity/ui";
import { FormField, StringInputProps, TextInputProps } from "sanity";

export default function CharacterCountStringInput(
    props: StringInputProps | TextInputProps
) {
    const value = typeof props.value === "string" ? props.value : "";
    const count = value.length;
    const isTextArea = props.schemaType.name === "text";

    return (
        <FormField
            title={props.title}
            description={props.description}
            __unstable_markers={props.validation}
            __unstable_presence={props.presence}
            inputId={props.inputId}
            level={props.level}
            schemaType={props.schemaType}
        >
            <Flex align={isTextArea ? "flex-start" : "center"} gap={3}>
                <Box flex={1}>
                    {isTextArea ? (
                        <TextArea
                            {...props.elementProps}
                            value={value}
                            rows={10}
                        />
                    ) : (
                        <TextInput {...props.elementProps} value={value} />
                    )}
                </Box>
                <Box>
                    <Text size={1} muted>
                        {count}
                    </Text>
                </Box>
            </Flex>
        </FormField>
    );
}
