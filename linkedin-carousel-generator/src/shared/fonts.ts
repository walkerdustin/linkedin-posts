import { loadFont as loadOswald } from "@remotion/google-fonts/Oswald";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

export const oswald = loadOswald("normal", {
  weights: ["700"],
  subsets: ["latin"],
});

export const roboto = loadRoboto("normal", {
  weights: ["300", "400"],
  subsets: ["latin"],
});

export const jetbrainsMono = loadJetBrainsMono("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});
