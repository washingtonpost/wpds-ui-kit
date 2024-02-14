import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  test("renders visibly into the document", () => {
    render(<Divider />);

    expect(screen.getByRole("separator")).toBeVisible();
  });
});
