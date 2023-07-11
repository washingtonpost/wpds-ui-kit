import * as React from "react";
import { render, screen } from "@testing-library/react";
import { InputSearchEmptyState } from "./InputSearchEmptyState";

describe("InputSearchEmptyState", () => {
  test("renders visibly into the document", () => {
    render(<InputSearchEmptyState />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
