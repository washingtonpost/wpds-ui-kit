import * as React from "react";
import { clsx } from "clsx";
import { dialogBody, dialogBodyOverflow } from "./Dialog.css";

const NAME = "DialogBodyVE";

export type DialogBodyVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & React.ComponentPropsWithRef<"div">;

export const DialogBodyVE = React.forwardRef<HTMLDivElement, DialogBodyVEProps>(
  ({ children, className, ...props }: DialogBodyVEProps, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    const [isOverflow, setIsOverflow] = React.useState(false);

    React.useEffect(() => {
      if (!internalRef.current) return;
      const element = internalRef.current;
      setIsOverflow(element.scrollHeight > element.clientHeight);
    }, [children, setIsOverflow]);

    return (
      <div
        className={clsx(
          isOverflow ? dialogBodyOverflow : dialogBody,
          className
        )}
        {...props}
        ref={internalRef}
      >
        {children}
      </div>
    );
  }
);

DialogBodyVE.displayName = NAME;
