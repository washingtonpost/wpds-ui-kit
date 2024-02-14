import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuTrigger } from "./ActionMenuTrigger";
import { ActionMenuItem } from "./ActionMenuItem";

const customRender = (ui, contextProps = {}) => {
  return render(
    <div data-testid="wrapper" style={{ pointerEvents: "all" }}>
      <ActionMenuRoot defaultOpen {...contextProps}>
        <ActionMenuTrigger asChild>
          <button>Trigger</button>
        </ActionMenuTrigger>
        {ui}
      </ActionMenuRoot>
    </div>
  );
};

describe("ActionMenuContent", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuContent />);

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("trigger isn't focused on action click", async () => {
    const user = userEvent.setup();
    customRender(
      <ActionMenuContent>
        <ActionMenuItem>Item</ActionMenuItem>
      </ActionMenuContent>
    );
    user.click(screen.getByRole("menuitem"));
    await waitFor(() => expect(screen.getByRole("button")).not.toHaveFocus());
  });

  test("trigger isn't focused on click outside", async () => {
    const user = userEvent.setup();
    customRender(<ActionMenuContent />);
    user.click(screen.getByTestId("wrapper"));
    await waitFor(() => expect(screen.getByRole("button")).not.toHaveFocus());
  });
});
