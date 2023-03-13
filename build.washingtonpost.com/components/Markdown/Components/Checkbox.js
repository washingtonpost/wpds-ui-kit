import React from "react";
import { Checkbox } from "@washingtonpost/wpds-ui-kit";
import { nanoid } from "nanoid";

export const InputCheckbox = (props) => {
  const elementId = nanoid();

  return <Checkbox {...props} id={elementId} />;
};
