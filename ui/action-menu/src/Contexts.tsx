import React, { createContext } from 'react';
import { ActionMenuContent } from './ActionMenuContent';

// export const DensityContext = createContext("default");

type ContextType = {
    advance: Function,
    currActiveGroup?: React.ReactNode;
    currentId: string;
    density: "default" | "loose" | "compact";
    previousId: string;
    slider: boolean;
    stack: string[],
    setStack: Function
}

export const ActionMenuContext = createContext<ContextType>({
    advance: () => { },
    setStack: () => { },
    currActiveGroup: <ActionMenuContent />,
    currentId: "",
    density: "default",
    previousId: "",
    slider: false,
    stack: [""]
})