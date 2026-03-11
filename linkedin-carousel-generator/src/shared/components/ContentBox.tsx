import React from "react";
import { colors, shadows, gradients } from "../theme";

type BoxVariant = "raised" | "raisedStrong" | "inset" | "flat";

export const ContentBox: React.FC<{
  children: React.ReactNode;
  variant?: BoxVariant;
  accentBorder?: "left" | "top" | "none";
  style?: React.CSSProperties;
}> = ({ children, variant = "raised", accentBorder = "none", style }) => {
  const shadowMap: Record<BoxVariant, string> = {
    raised: shadows.raised,
    raisedStrong: shadows.raisedStrong,
    inset: shadows.inset,
    flat: "none",
  };

  const accentBorderStyles: React.CSSProperties =
    accentBorder === "left"
      ? { borderLeft: `4px solid ${colors.accent}` }
      : accentBorder === "top"
        ? { borderTop: `4px solid ${colors.accent}` }
        : {};

  return (
    <div
      style={{
        backgroundColor: colors.container,
        backgroundImage: variant === "inset" ? "none" : gradients.containerHighlight,
        borderRadius: 20,
        padding: 40,
        boxShadow: shadowMap[variant],
        border:
          variant === "inset"
            ? "none"
            : `1px solid rgba(240, 247, 248, 0.06)`,
        ...accentBorderStyles,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
