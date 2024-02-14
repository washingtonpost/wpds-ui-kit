import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuSub } from "./ActionMenuSub";
import { ActionMenuSubTrigger } from "./ActionMenuSubTrigger";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent>
        <ActionMenuSub open {...contextProps}>
          {ui}
        </ActionMenuSub>
      </ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuSub", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuSubTrigger />);

    expect(screen.getByText("Expand submenu")).toBeInTheDocument();
  });
});
