import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuLabel } from "./ActionMenuLabel";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuLabel", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuLabel>Test</ActionMenuLabel>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
