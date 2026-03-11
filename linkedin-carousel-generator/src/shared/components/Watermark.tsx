import React from "react";
import { oswald } from "../fonts";

export const Watermark: React.FC<{
  number: string;
  style?: React.CSSProperties;
}> = ({ number, style }) => (
  <div
    style={{
      position: "absolute",
      top: 60,
      right: 40,
      fontFamily: oswald.fontFamily,
      fontWeight: 700,
      fontSize: 280,
      color: "rgba(240, 247, 248, 0.025)",
      lineHeight: 1,
      pointerEvents: "none",
      userSelect: "none",
      zIndex: 0, // Behind content
      ...style,
    }}
  >
    {number}
  </div>
);
