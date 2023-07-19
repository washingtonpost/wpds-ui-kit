import * as React from "react";
import { ActionMenuContent } from './ActionMenuContent';

//export const DensityContext = createContext("default");

type ContextType = {
    advance: () => void,
    currActiveGroup?: React.ReactNode;
    currentId: string;
    density: "default" | "loose" | "compact";
    previousId: string;
    slider: boolean;
    stack: string[];
    setStack: () => void;
}

export const ActionMenuContext = React.createContext<ContextType>({
    advance: () => undefined,
    currActiveGroup: <ActionMenuContent />,
    currentId: "",
    density: "default",
    previousId: "",
    slider: false,
    stack: [""],
    setStack: () => undefined
})