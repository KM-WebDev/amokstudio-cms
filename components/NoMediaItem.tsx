import { Box } from "@sanity/ui";
import React from "react";
import type { ObjectItemProps } from "sanity";

export const NoMediaItem = (props: ObjectItemProps) => {
    const uniqueId = React.useId();

    return (
        <Box>
            <style>
                {`
                    #${uniqueId} [data-testid='Media'] {
                        display: none !important;
                        width: 0 !important;
                        margin: 0 !important;
                    }
                    #${uniqueId} [data-ui='Text'] {
                        font-size: 15px !important;
                    }
                `}
            </style>
            <div id={uniqueId}>{props.renderDefault(props)}</div>
        </Box>
    );
};
