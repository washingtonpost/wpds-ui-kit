import { render, screen } from "@testing-library/react";
import { AccordionRoot } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionContent } from "./AccordionContent";

const customRender = (ui, contextProps = {}) => {
  return render(
    <AccordionRoot type="single" defaultValue="test" {...contextProps}>
      <AccordionItem value="test">{ui}</AccordionItem>
    </AccordionRoot>
  );
};

describe("AccordionContent", () => {
  test("renders visibly into the document", () => {
    customRender(<AccordionContent />);

    expect(screen.getByRole("region")).toBeVisible();
  });

  test("applies padding to inner content", () => {
    customRender(
      <AccordionContent css={{ padding: "1rem" }}>Test</AccordionContent>
    );

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByText("Test").classList.length).toBe(2);
  });
});
