import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContext } from "./context";
import { userEvent } from "@storybook/test";
import { config } from "react-transition-group";

config.disabled = true;

describe("TabsTrigger", () => {
  test("renders visibly into the document", () => {
    render(
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="val1">Test</TabsTrigger>
        </TabsList>
      </TabsRoot>
    );
    expect(screen.getByText("Test")).toBeVisible();
  });

  test("correctly sets trigger to active", async () => {
    const user = userEvent.setup();
    jest.fn();
    render(
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="val1">Test</TabsTrigger>
          <TabsTrigger value="val2">Test2</TabsTrigger>
          <TabsTrigger value="val3">Test3</TabsTrigger>
        </TabsList>
      </TabsRoot>
    );

    const trigger2 = screen.getAllByRole("tab")[2];
    expect(trigger2).toHaveAttribute("data-state", "inactive");
    expect(trigger2).toHaveStyle("borderBottom: none");
    await user.click(trigger2);
    expect(trigger2).toHaveAttribute("data-state", "active");
    expect(trigger2).toHaveStyle("borderBottom: 1px solid ##111111");
  });

  test("sets previous rect", () => {
    const Note = () => {
      const { previousRect } = useContext(TabsContext);
      if (previousRect) {
        return <span role="note">{previousRect.width}</span>;
      }
      return null;
    };

    render(
      <TabsRoot defaultValue="val1">
        <TabsList>
          <TabsTrigger value="val1">Test</TabsTrigger>
          <TabsTrigger value="val2">Test2</TabsTrigger>
        </TabsList>
        <Note />
      </TabsRoot>
    );
    userEvent.click(screen.getByRole("tab", { selected: false }));
    expect(screen.getByRole("note")).toBeInTheDocument();
  });
});
