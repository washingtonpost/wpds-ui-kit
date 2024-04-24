import { render, screen } from "@testing-library/react";
import { AccordionRoot } from "./Accordion";
import { AccordionItem } from "./AccordionItem";

const customRender = (ui, contextProps = {}) => {
  return render(
    <AccordionRoot type="single" defaultValue="test" {...contextProps}>
      {ui}
    </AccordionRoot>
  );
};

describe("AccordionItem", () => {
  test("renders visibly into the document", () => {
    customRender(<AccordionItem value="test" data-testid="test" />);

    expect(screen.getByTestId("test")).toBeVisible();
  });
});
