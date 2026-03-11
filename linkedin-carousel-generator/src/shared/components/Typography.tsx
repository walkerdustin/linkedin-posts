import React from "react";
import { colors, gradients } from "../theme";
import { oswald, roboto, jetbrainsMono } from "../fonts";

type TextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Headline: React.FC<
  TextProps & {
    size?: "xl" | "lg" | "md" | "sm";
    color?: string;
  }
> = ({ children, style, size = "lg", color = colors.text }) => {
  const sizes = {
    xl: 86, // Cover Title
    lg: 58, // Slide Title
    md: 48, // Section Title
    sm: 30, // Card Title
  };

  return (
    <div
      style={{
        fontFamily: oswald.fontFamily,
        fontWeight: 700,
        fontSize: sizes[size],
        textTransform: "uppercase",
        letterSpacing: size === "xl" ? 4 : 2,
        lineHeight: 1.1,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Subhead: React.FC<TextProps> = ({ children, style }) => (
  <div
    style={{
      fontFamily: roboto.fontFamily,
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.5,
      opacity: 0.85,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Body: React.FC<
  TextProps & {
    size?: "lg" | "md" | "sm";
    opacity?: number;
  }
> = ({ children, style, size = "md", opacity = 0.9 }) => {
  const sizes = {
    lg: 32, // Hero/Intro text
    md: 28, // Default reading text
    sm: 22, // Secondary details
  };

  return (
    <div
      style={{
        fontFamily: roboto.fontFamily,
        fontWeight: 400,
        fontSize: sizes[size],
        lineHeight: 1.5,
        opacity,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Label: React.FC<TextProps> = ({ children, style }) => (
  <div
    style={{
      fontFamily: jetbrainsMono.fontFamily,
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: colors.textMuted,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Highlight: React.FC<TextProps & { color?: string }> = ({
  children,
  style,
  color = colors.accent,
}) => (
  <span style={{ color, fontWeight: 700, ...style }}>{children}</span>
);
