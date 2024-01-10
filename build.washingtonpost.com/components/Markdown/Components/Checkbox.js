import React from "react";
import { Checkbox } from "@washingtonpost/wpds-ui-kit";

export const InputCheckbox = (props) => {
  const elementId = React.useId();

  return <Checkbox {...props} id={elementId} />;
};
