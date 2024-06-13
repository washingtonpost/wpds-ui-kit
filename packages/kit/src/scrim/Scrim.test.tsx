import { render, screen } from "@testing-library/react";
import { Scrim } from "./Scrim";

describe("Scrim", () => {
  test("renders visibly into the document", () => {
    render(<Scrim data-testid="test" open={true} />);
    expect(screen.getByTestId("test")).toBeVisible();
  });

  test("removes style and margin from body when closed ", () => {
    const { rerender } = render(<Scrim open={true} />);
    expect(document.documentElement).toHaveAttribute(
      "data-scrim-state",
      "open"
    );

    rerender(<Scrim open={false} />);
    expect(document.documentElement).toHaveAttribute(
      "data-scrim-state",
      "closed"
    );
  });
});
