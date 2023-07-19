import * as React from "react";
import { ActionMenuContent } from './ActionMenuContent';

//export const DensityContext = createContext("default");

type ContextType = {
    advance: ( {current, previous }) => void,
    currActiveGroup?: React.ReactNode;
    currentId: string;
    density: "default" | "loose" | "compact";
    previousId: string;
    slider: boolean;
    stack: string[];
    setStack: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ActionMenuContext = React.createContext<ContextType>({
    advance: ( {current, previous }) => undefined,
    currActiveGroup: <ActionMenuContent />,
    currentId: "",
    density: "default",
    previousId: "",
    slider: false,
    stack: [""],
    setStack: () => undefined
})