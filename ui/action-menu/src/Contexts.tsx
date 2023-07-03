import { createContext } from 'react';
import { ActionMenuContent } from './ActionMenuContent';

//export const DensityContext = createContext("default");

type ContextType = {
    density: "default" | "loose" | "compact";
    level: number;
    currActiveGroup: React.ReactNode;
}

export const ActionMenuContext = createContext<ContextType>({
    density: "default",
    level: 1,
    currActiveGroup: <ActionMenuContent />,
})