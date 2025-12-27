import * as Icons from "lucide-react";
import React from "react";

export function isLightColor(hex: string): boolean {
    const color = hex.replace("#", "");
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
}

export function createCardPreview(selection: any) {
    const { title, iconName, background } = selection;
    const IconComponent = iconName && Icons[iconName as keyof typeof Icons];

    const bgHex = background?.hex || "#13141B";
    const iconColor = isLightColor(bgHex) ? "#000000" : "#ffffff";

    const MediaWithColor = () =>
        React.createElement(
            "div",
            {
                style: {
                    backgroundColor: bgHex,
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "40px",
                    minHeight: "40px",
                },
            },
            IconComponent
                ? React.createElement(IconComponent, {
                      size: 24,
                      color: iconColor,
                  })
                : null
        );

    return {
        title: title || "Bez tytułu",
        media: MediaWithColor,
    };
}
