/**
 * @public
 */
export interface ForProps<T> {
  each: T[];
  fallback?: React.ReactNode;
  children: (item: T, index: number) => React.ReactNode;
}

/**
 * @public
 */
export function For<T>({ each, fallback, children }: ForProps<T>) {
  if (each.length === 0) {
    return <>{fallback}</>;
  }
  return <>{each.map(children)}</>;
}
