export const colors = {
  primary: "#116578",
  primaryLight: "#1a7a8f",
  primaryDark: "#0e5566",
  container: "#0D4D5C",
  containerLight: "#10586a",
  accent: "#C05640",
  accentGlow: "rgba(192, 86, 64, 0.35)",
  text: "#F0F7F8",
  textMuted: "rgba(240, 247, 248, 0.5)",
  highlight: "rgba(240, 247, 248, 0.08)",
  shadow: "rgba(0, 0, 0, 0.4)",
} as const;

export const shadows = {
  raised: [
    "0 10px 40px rgba(0,0,0,0.35)",
    "0 2px 8px rgba(0,0,0,0.25)",
    "inset 0 1px 0 rgba(240,247,248,0.1)",
  ].join(", "),
  raisedStrong: [
    "0 16px 56px rgba(0,0,0,0.45)",
    "0 4px 12px rgba(0,0,0,0.3)",
    "inset 0 1px 0 rgba(240,247,248,0.12)",
  ].join(", "),
  inset: [
    "inset 0 4px 16px rgba(0,0,0,0.45)",
    "inset 0 1px 3px rgba(0,0,0,0.3)",
    "0 1px 0 rgba(240,247,248,0.05)",
  ].join(", "),
  glow: (color: string, spread = 40) =>
    `0 0 ${spread}px ${color}50, 0 0 ${spread * 2}px ${color}20`,
  portraitRing: [
    `0 0 0 5px #0D4D5C`,
    `0 0 0 9px #C05640`,
    `0 0 40px rgba(192,86,64,0.3)`,
    `0 0 80px rgba(192,86,64,0.12)`,
  ].join(", "),
  soft: "0 4px 20px rgba(0,0,0,0.2)",
} as const;

export const gradients = {
  slideBackground:
    "radial-gradient(ellipse at 50% 20%, #1a7a8f 0%, #116578 45%, #0e5566 100%)",
  accentLine: "linear-gradient(90deg, transparent, #C05640, transparent)",
  accentBarRight: "linear-gradient(90deg, #C05640, transparent)",
  accentBarLeft: "linear-gradient(90deg, transparent, #C05640)",
  subtleHighlight:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
  containerHighlight:
    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
} as const;

export const SLIDE_WIDTH = 1080;
export const SLIDE_HEIGHT = 1350;
