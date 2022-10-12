import { SelectRoot } from "./SelectRoot";
import { SelectContent } from "./SelectContent";
import { SelectGroup } from "./SelectGroup";
import { SelectItem } from "./SelectItem";
import { SelectTrigger } from "./SelectTrigger";
import { SelectValue } from "./SelectValue";
import { SelectLabel } from "./SelectLabel";

type SelectProps = {
  Root: typeof SelectRoot;
  Content: typeof SelectContent;
  Group: typeof SelectGroup;
  Item: typeof SelectItem;
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Label: typeof SelectLabel;
};

export const Select: SelectProps = {
  Root: SelectRoot,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Label: SelectLabel,
  Trigger: SelectTrigger,
  Value: SelectValue,
};
