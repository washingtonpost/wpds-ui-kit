import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuGroup } from "./ActionMenuGroup";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuGroup", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuGroup>Test</ActionMenuGroup>);

    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
