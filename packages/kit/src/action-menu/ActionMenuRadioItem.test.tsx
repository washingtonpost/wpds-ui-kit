import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuRadioGroup } from "./ActionMenuRadioGroup";
import { ActionMenuRadioItem } from "./ActionMenuRadioItem";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent>
        <ActionMenuRadioGroup {...contextProps}>{ui}</ActionMenuRadioGroup>
      </ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuRadioItem", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuRadioItem value="test" />);

    expect(screen.getByRole("menuitemradio")).toBeInTheDocument();
  });
});
