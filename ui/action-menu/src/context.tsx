import React, { createContext } from 'react';
import { ActionMenuContent } from './ActionMenuContent';

//export const DensityContext = createContext("default");

type ContextType = {
    advance: Function,
    currActiveGroup?: React.ReactNode;
    currentId: string;
    density: "default" | "loose" | "compact";
    previousId: string;
    slider: boolean;
    stack: string[];
    setStack: Function;
    showThisSub?: boolean;
}

export const ActionMenuContext = createContext<ContextType>({
    advance: () => { },
    currActiveGroup: <ActionMenuContent />,
    currentId: "",
    density: "default",
    previousId: "",
    slider: false,
    stack: [""],
    setStack: () => { },
    showThisSub: false,
})