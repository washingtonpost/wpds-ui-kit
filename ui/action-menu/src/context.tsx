import * as React from "react";

type ContextType = {
  density: "default" | "loose" | "compact";
  level: number;
};

export const ActionMenuContext = React.createContext<ContextType>({
  density: "default",
  level: 1,
});
