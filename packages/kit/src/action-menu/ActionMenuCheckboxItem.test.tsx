import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuCheckboxItem } from "./ActionMenuCheckboxItem";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuCheckboxItem", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuCheckboxItem>Test</ActionMenuCheckboxItem>);

    expect(screen.getByRole("menuitemcheckbox")).toBeInTheDocument();
  });
});
