import * as React from "react";
import { render, screen } from "@testing-library/react";
import { InputSearchLoadingState } from "./InputSearchLoadingState";

describe("InputSearchLoadingState", () => {
  test("renders visibly into the document", () => {
    render(<InputSearchLoadingState />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
