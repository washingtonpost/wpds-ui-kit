import * as React from "react";
import { render, screen } from "@testing-library/react";
import { InputSearchRoot, InputSearchContext } from "./InputSearchRoot";

describe("InputSearchRoot", () => {
  const TestComponent = () => {
    const { rootRect } = React.useContext(InputSearchContext);
    return <div>{rootRect && rootRect.top}</div>;
  };

  test("renders visibly into the document", () => {
    render(<InputSearchRoot>Test</InputSearchRoot>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("provides root rect in context", () => {
    render(
      <InputSearchRoot>
        <TestComponent />
      </InputSearchRoot>
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
