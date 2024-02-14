import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuSub } from "./ActionMenuSub";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuSub", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuSub>Test</ActionMenuSub>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
