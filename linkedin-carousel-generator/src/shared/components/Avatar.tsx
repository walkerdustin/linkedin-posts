import React from "react";
import { Img, staticFile } from "remotion";
import { shadows } from "../theme";

export const Avatar: React.FC<{
  size?: number;
  src?: string;
  glowIntensity?: "normal" | "strong" | "none";
  style?: React.CSSProperties;
}> = ({
  size = 280,
  src = "portrait_116578_clean.png",
  glowIntensity = "normal",
  style,
}) => (
  <div style={{ position: "relative", width: size, height: size, ...style }}>
    {/* Glow backdrop */}
    {glowIntensity !== "none" && (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 1.4,
          height: size * 1.4,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(192,86,64,${
            glowIntensity === "strong" ? 0.18 : 0.1
          }) 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    )}
    <Img
      src={staticFile(src)}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover",
        boxShadow: shadows.portraitRing,
        position: "relative",
        zIndex: 1,
      }}
    />
  </div>
);
