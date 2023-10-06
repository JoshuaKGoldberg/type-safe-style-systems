import { rainbowSprinkles, Sprinkles } from "./rainbow-sprinkles.css";

export interface BoxProps extends Sprinkles {
  as?: any;
  children?: React.ReactNode;
}

export const Box = ({ as: As = "div", children, ...props }: BoxProps) => {
  const { className, style, otherProps } = rainbowSprinkles(props);

  return (
    <As className={className} style={style} {...otherProps}>
      {children}
    </As>
  );
};
