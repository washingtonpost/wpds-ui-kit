import { render, screen } from "@testing-library/react";
import { AccordionRoot } from "./Accordion";

describe("AccordionRoot", () => {
  test("renders visibly into the document", () => {
    render(<AccordionRoot type="single">Test</AccordionRoot>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
