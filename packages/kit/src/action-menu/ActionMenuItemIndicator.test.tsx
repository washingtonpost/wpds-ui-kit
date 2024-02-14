import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuCheckboxItem } from "./ActionMenuCheckboxItem";
import { ActionMenuItemIndicator } from "./ActionMenuItemIndicator";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent>
        <ActionMenuCheckboxItem {...contextProps} checked>
          {ui}
        </ActionMenuCheckboxItem>
      </ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuItemIndicator", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuItemIndicator />);

    expect(screen.getByText("check")).toBeInTheDocument();
  });
});
