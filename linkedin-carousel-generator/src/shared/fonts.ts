import { loadFont as loadOswald } from "@remotion/google-fonts/Oswald";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
import { loadFont as loadPlayfairDisplay } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadRobotoMono } from "@remotion/google-fonts/RobotoMono";

export const oswald = loadOswald("normal", {
  weights: ["700"],
  subsets: ["latin"],
});

export const roboto = loadRoboto("normal", {
  weights: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const jetbrainsMono = loadJetBrainsMono("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const playfairDisplay = loadPlayfairDisplay("normal", {
  weights: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const robotoMono = loadRobotoMono("normal", {
  weights: ["500", "600", "700"],
  subsets: ["latin"],
});
