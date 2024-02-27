import { render, screen } from "@testing-library/react";
import { InputSearchListHeading } from "./InputSearchListHeading";

describe("InputSearchListHeading", () => {
  test("renders visibly into the document", () => {
    render(<InputSearchListHeading>test</InputSearchListHeading>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
