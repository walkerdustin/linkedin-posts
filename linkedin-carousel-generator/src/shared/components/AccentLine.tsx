import React from "react";
import { gradients } from "../theme";

export const AccentLine: React.FC<{
  width?: string | number;
  direction?: "center" | "left" | "right";
  style?: React.CSSProperties;
}> = ({ width = "100%", direction = "center", style }) => {
  const gradientMap = {
    center: gradients.accentLine,
    left: gradients.accentBarLeft,
    right: gradients.accentBarRight,
  };

  return (
    <div
      style={{
        height: 3,
        width,
        background: gradientMap[direction],
        borderRadius: 2,
        ...style,
      }}
    />
  );
};
