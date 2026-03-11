import React from "react";
import { colors, gradients, SLIDE_WIDTH, SLIDE_HEIGHT } from "../theme";
import { roboto } from "../fonts";

export const Slide: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  showDecorations?: boolean;
}> = ({ children, style, showDecorations = true }) => {
  return (
    <div
      style={{
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        background: gradients.slideBackground,
        display: "flex",
        flexDirection: "column",
        padding: 64,
        fontFamily: roboto.fontFamily,
        color: colors.text,
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {showDecorations && (
        <>
          {/* Large decorative circle top-right */}
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 400,
              height: 400,
              borderRadius: "50%",
              border: `1.5px solid rgba(240, 247, 248, 0.04)`,
              pointerEvents: "none",
            }}
          />
          {/* Smaller decorative circle overlapping */}
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: `1px solid rgba(240, 247, 248, 0.03)`,
              pointerEvents: "none",
            }}
          />
          {/* Bottom-left decorative corner bracket */}
          <div
            style={{
              position: "absolute",
              bottom: 44,
              left: 64,
              width: 28,
              height: 28,
              borderLeft: `2px solid rgba(240, 247, 248, 0.1)`,
              borderBottom: `2px solid rgba(240, 247, 248, 0.1)`,
              pointerEvents: "none",
            }}
          />
        </>
      )}
      {children}
    </div>
  );
};
