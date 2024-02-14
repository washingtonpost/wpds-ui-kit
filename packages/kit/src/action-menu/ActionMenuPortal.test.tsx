import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuPortal } from "./ActionMenuPortal";

const customRender = (ui, contextProps = {}) => {
  return render(<ActionMenuRoot {...contextProps}>{ui}</ActionMenuRoot>);
};

describe("ActionMenuPortal", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuPortal data-testid="portal" />);

    expect(screen.queryByTestId("portal")).not.toBeInTheDocument();
  });
});
