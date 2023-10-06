import { defineProperties, createRainbowSprinkles } from "rainbow-sprinkles";
import { vars } from "./theme.css";

export const rainbowSprinkles = createRainbowSprinkles(
  defineProperties({
    dynamicProperties: {
      alignItems: true,
      background: vars.color,
      border: true,
      borderColor: vars.color,
      color: vars.color,
      cursor: true,
      display: true,
      flexDirection: true,
      height: true,
      justifyContent: true,
      padding: vars.space,
    },
  })
);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
