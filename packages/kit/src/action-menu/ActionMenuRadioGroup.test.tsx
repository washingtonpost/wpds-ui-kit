import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuRadioGroup } from "./ActionMenuRadioGroup";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuRadioGroup", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuRadioGroup />);

    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
