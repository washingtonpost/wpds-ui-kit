import * as React from "react";

interface TabsContextInterface {
  initialValue?: string;
}

const defaultState = {
  initialValue: "",
};

export const TabsContext =
  React.createContext<TabsContextInterface>(defaultState);
