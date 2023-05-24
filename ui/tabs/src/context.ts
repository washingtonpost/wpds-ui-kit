import * as React from "react";

interface TabsContextInterface {
  currentValue: string | undefined;
  previousRect: DOMRect | undefined;
  setPreviousRect: (rect: DOMRect) => void;
}

const defaultState = {
  currentValue: undefined,
  previousRect: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPreviousRect: () => {},
};
export const TabsContext =
  React.createContext<TabsContextInterface>(defaultState);
