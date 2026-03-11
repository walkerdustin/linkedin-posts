import React from "react";
import { colors } from "../theme";
import { oswald } from "../fonts";

export const Badge: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
  bg?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  size = 52,
  color = colors.text,
  bg = colors.accent,
  style,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 3.5,
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: oswald.fontFamily,
        fontWeight: 700,
        fontSize: size * 0.45,
        color,
        flexShrink: 0,
        boxShadow: `0 4px 16px rgba(0,0,0,0.25)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
