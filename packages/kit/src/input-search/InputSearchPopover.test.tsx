import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchRoot, InputSearchContext } from "./InputSearchRoot";

describe("InputSearchPopover", () => {
  const customRender = (ui, contextProps) => {
    const StatePassthrough = ({ children }) => {
      const { state } = useContext(InputSearchContext);
      state.open();
      return children;
    };
    return render(
      <InputSearchRoot {...contextProps}>
        <StatePassthrough>{ui}</StatePassthrough>
      </InputSearchRoot>
    );
  };

  test.skip("renders into the document", async () => {
    customRender(<InputSearchPopover>test</InputSearchPopover>, {});
    const popover = screen.getByRole("dialog");
    expect(popover).toBeInTheDocument();
  });

  test.skip("renders with custom CSS class", () => {
    customRender(<InputSearchPopover css={{ color: "red" }} />, {});
    expect(screen.getByRole("dialog")).toHaveClass(/wpds-.*-css/);
  });

  test.skip("renders portal false variant", () => {
    customRender(<InputSearchPopover portal={false} />, {});

    expect(screen.getByTestId("popover-container")).toBeInTheDocument();
  });
});
