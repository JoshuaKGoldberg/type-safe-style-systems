import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
});

export const h1 = style({
  background: vars.color.background,
  color: vars.color.foreground,
  padding: vars.space.medium,
});

const buttonBase = style({
  cursor: "pointer",
  border: "3px solid",
  padding: vars.space.medium,
});

export const button = styleVariants({
  false: [buttonBase, { borderColor: vars.color.background }],
  true: [buttonBase, { borderColor: vars.color.foreground }],
});
