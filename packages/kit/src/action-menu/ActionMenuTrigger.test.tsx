import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuTrigger } from "./ActionMenuTrigger";

const customRender = (ui, contextProps = {}) => {
  return render(<ActionMenuRoot {...contextProps}>{ui}</ActionMenuRoot>);
};

describe("ActionMenuTrigger", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuTrigger />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
