import React from "react";
import { colors, gradients } from "../theme";
import { jetbrainsMono } from "../fonts";

export const SlideHeader: React.FC<{
  name?: string;
  role?: string;
}> = ({ name = "DUSTIN WALKER", role = "Gen AI Engineer" }) => {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: jetbrainsMono.fontFamily,
          fontSize: 22,
          color: colors.text,
          marginBottom: 16,
        }}
      >
        <span style={{ fontWeight: 700, opacity: 0.85 }}>{name}</span>
        <span style={{ color: colors.accent, fontSize: 18 }}>|</span>
        <span style={{ fontWeight: 400, opacity: 0.55 }}>{role}</span>
      </div>
      <div
        style={{
          height: 2,
          background: gradients.accentBarRight,
          width: "40%",
          borderRadius: 1,
        }}
      />
    </div>
  );
};
