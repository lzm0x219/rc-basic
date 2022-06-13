export interface ShowProps<T> {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  element?: React.ReactNode;
  children?: React.ReactNode | ((props: T) => JSX.Element);
}

export function Show<T>({ when, fallback, element, children }: ShowProps<T>) {
  if (when && typeof children === "function") {
    return children(when);
  }
  return <>{when ? element ?? children : fallback}</>;
}
