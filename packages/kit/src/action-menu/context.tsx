import { createContext } from "react";

type ContextType = {
  density: "default" | "loose" | "compact";
  trigger?: React.ReactNode;
};

export const ActionMenuContext = createContext<ContextType>({
  density: "default",
});
