import * as React from "react";

interface TabsContextInterface {
  defaultValue?: string;
  value?: string;
}

const defaultState = {
  defaultValue: "",
  value: "",
};

export const TabsContext =
  React.createContext<TabsContextInterface>(defaultState);
