import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuSeparator } from "./ActionMenuSeparator";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuSeparator", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuSeparator />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
