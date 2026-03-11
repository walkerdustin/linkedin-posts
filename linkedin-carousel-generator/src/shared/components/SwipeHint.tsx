import React from "react";
import { colors, shadows } from "../theme";
import { oswald } from "../fonts";

export const SwipeHint: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontFamily: oswald.fontFamily,
        fontWeight: 700,
        fontSize: 26,
        color: colors.accent,
        letterSpacing: 5,
        textTransform: "uppercase",
        textShadow: shadows.glow(colors.accent, 20),
        ...style,
      }}
    >
      <span>SWIPE</span>
      <span style={{ fontSize: 32 }}>&rarr;</span>
    </div>
  );
};
