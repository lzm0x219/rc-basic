import { forwardRef } from "react";
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from "react-polymorphic-types";

/**
 * @public
 */
export const defaultElement = "div";

/**
 * @public
 */
export interface BoxOwnProps {
  className?: string;
}

/**
 * @public
 */
export type BoxProps<T extends React.ElementType = typeof defaultElement> =
  PolymorphicPropsWithRef<BoxOwnProps, T>;

/**
 * @public
 */
export const Box: PolymorphicForwardRefExoticComponent<
  BoxOwnProps,
  typeof defaultElement
> = forwardRef(function Box<
  T extends React.ElementType = typeof defaultElement
>(
  { as, ...restProps }: PolymorphicPropsWithoutRef<BoxOwnProps, T>,
  ref: React.ForwardedRef<Element>
) {
  const Element: React.ElementType = as || defaultElement;
  return <Element ref={ref} {...restProps} />;
});
