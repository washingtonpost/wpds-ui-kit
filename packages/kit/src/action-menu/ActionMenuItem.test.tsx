import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuItem } from "./ActionMenuItem";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuItem", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuItem>Test</ActionMenuItem>);

    expect(screen.getByRole("menuitem")).toBeInTheDocument();
  });
});
