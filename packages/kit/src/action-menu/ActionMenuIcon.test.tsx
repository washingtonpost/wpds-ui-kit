import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuIcon } from "./ActionMenuIcon";
import { Icon } from "../icon";
import { Check } from "@washingtonpost/wpds-assets";

const customRender = (ui, contextProps = {}) => {
  return render(
    <ActionMenuRoot open>
      <ActionMenuContent {...contextProps}>{ui}</ActionMenuContent>
    </ActionMenuRoot>
  );
};

describe("ActionMenuIcon", () => {
  test("renders visibly into the document", () => {
    customRender(<ActionMenuIcon>Test</ActionMenuIcon>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders a placeholder without children", () => {
    customRender(<ActionMenuIcon />);

    expect(screen.getByTestId("icon-placeholder")).toBeInTheDocument();
  });

  test("renders child Icon", () => {
    customRender(
      <ActionMenuIcon>
        <Icon label="test">
          <Check />
        </Icon>
      </ActionMenuIcon>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("renders a placeholder on the right without children", () => {
    customRender(<ActionMenuIcon side="right" />);

    expect(screen.getByTestId("icon-placeholder")).toBeInTheDocument();
  });

  test("renders child Icon on the right", () => {
    customRender(
      <ActionMenuIcon side="right">
        <Icon label="test">
          <Check />
        </Icon>
      </ActionMenuIcon>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
