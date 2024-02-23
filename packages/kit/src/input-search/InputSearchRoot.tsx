import * as React from "react";
import { Combobox } from "@reach/combobox";
import { styled, theme } from "../theme";

type InputSearchContextProps = {
  term: string;
  setTerm: (string: string) => void;
  disabled: boolean;
  usePortal: boolean;
  setUsePortal: (bool: boolean) => void;
  rootRect: DOMRect | undefined;
};

export const InputSearchContext = React.createContext(
  {} as InputSearchContextProps
);

const StyledComboBox = styled(Combobox, {
  width: "100%",
  position: "relative",
  variants: {
    portal: {
      false: {
        "&:focus-within::after": {
          content: "",
          borderRadius: theme.radii["012"],
          border: `1px solid ${theme.colors.signal}`,
          inset: 0,
          position: "absolute",
          pointerEvents: "none",
          zIndex: 1,
        },
      },
    },
  },
});

export type InputSearchRootProps = {
  /** Whether the input field should be disabled or not */
  disabled?: boolean;
} & React.ComponentPropsWithRef<typeof StyledComboBox>;

export const InputSearchRoot = ({
  children,
  css,
  disabled = false,
  ...props
}: InputSearchRootProps) => {
  const comboboxRef = React.useRef<HTMLDivElement>(null);
  const [rootRect, setRootRect] = React.useState<DOMRect | undefined>();
  const [term, setTerm] = React.useState("");
  const [usePortal, setUsePortal] = React.useState(true);

  React.useEffect(() => {
    if (comboboxRef.current) {
      const positionChangeHandler = () => {
        setRootRect(comboboxRef.current?.getBoundingClientRect());
      };

      window.addEventListener("resize", positionChangeHandler);
      document.addEventListener("scroll", positionChangeHandler);

      positionChangeHandler();

      return () => {
        window.removeEventListener("resize", positionChangeHandler);
        document.removeEventListener("scroll", positionChangeHandler);
      };
    }
  }, [setRootRect]);

  return (
    <InputSearchContext.Provider
      value={{
        term,
        setTerm,
        disabled,
        usePortal,
        setUsePortal,
        rootRect,
      }}
    >
      <StyledComboBox css={css} {...props} portal={usePortal} ref={comboboxRef}>
        {children}
      </StyledComboBox>
    </InputSearchContext.Provider>
  );
};

InputSearchRoot.displayName = "InputSearchRoot";
