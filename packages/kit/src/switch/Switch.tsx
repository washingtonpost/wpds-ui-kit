import { SwitchRoot } from "./SwitchRoot";
import { SwitchThumb } from "./SwitchThumb";

export type SwitchProps = {
  Root: typeof SwitchRoot;
  Thumb: typeof SwitchThumb;
};

export const Switch: SwitchProps = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};
