import { forwardRef } from "react";
import type { PolyRefFunction } from "react-polymorphed";

const polyRef = forwardRef as PolyRefFunction;

export const Box = polyRef(({ as: Tag = "div", ...props }, ref) => {
  return <Tag ref={ref} {...props} />;
});
