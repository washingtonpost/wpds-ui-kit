import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogBody } from "./DialogBody";

const ComponentWrapper = () => {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  return <DialogBody ref={bodyRef}>{bodyRef.current && `ref`}</DialogBody>;
};

describe("DialogBody", () => {
  test("renders visibly into the document", () => {
    render(<DialogBody>test</DialogBody>);
    expect(screen.getByText("test")).toBeVisible();
  });
  test("accepts callback ref", () => {
    const callbackRef = jest.fn();
    render(<DialogBody ref={callbackRef} />);
    expect(callbackRef).toHaveBeenCalled();
  });
  test("accepts ref", () => {
    const { rerender } = render(<ComponentWrapper />);
    rerender(<ComponentWrapper />);
    expect(screen.getByText("ref")).toBeVisible();
  });
});
