import { Checkbox } from "@washingtonpost/wpds-ui-kit";
import { useId } from "@react-aria/utils";

export const InputCheckbox = (props) => {
  const elementId = useId();

  return <Checkbox {...props} id={elementId} />;
};
