import { render, screen } from "@testing-library/react";
import { AccordionRoot } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";

const customRender = (ui, contextProps = {}) => {
  return render(
    <AccordionRoot type="single" defaultValue="test" {...contextProps}>
      <AccordionItem value="test">{ui}</AccordionItem>
    </AccordionRoot>
  );
};

describe("AccordionContent", () => {
  test("renders visibly into the document", () => {
    customRender(<AccordionTrigger>Test</AccordionTrigger>);

    expect(screen.getByRole("button")).toBeVisible();
  });
});
