import React from "react";
import { colors } from "../theme";
import { oswald } from "../fonts";

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
}> = ({ children, variant = "primary", style }) => {
  const isPrimary = variant === "primary";
  const bg = isPrimary ? colors.accent : "transparent";
  const text = isPrimary ? colors.text : colors.accent;
  const border = isPrimary ? "none" : `2px solid ${colors.accent}`;
  const shadow = isPrimary
    ? `0 6px 24px rgba(192,86,64,0.4), 0 2px 8px rgba(192,86,64,0.2), inset 0 1px 0 rgba(255,255,255,0.15)`
    : "none";

  return (
    <div
      style={{
        padding: "18px 48px",
        borderRadius: 50,
        backgroundColor: bg,
        border,
        boxShadow: shadow,
        fontFamily: oswald.fontFamily,
        fontWeight: 700,
        fontSize: 28,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: text,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
