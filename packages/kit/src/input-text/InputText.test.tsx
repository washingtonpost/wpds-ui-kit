import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputText } from "./InputText";

describe("InputText", () => {
  test("should clear the input value when a user reset button is clicked (controlled component)", () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState<string>();
      const handleChange = jest.fn((event) => setValue(event.target.value));
      return (
        <>
          <button onClick={() => setValue("")} data-qa="custom-reset">Reset</button>
          <InputText
            name="test-input"
            id="test-input"
            label="Test Input"
            type="search"
            value={value}
            onChange={handleChange}
          />
        </>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText("Test Input");

    // type a value into the input
    fireEvent.change(input, { target: { value: "controlled value" } });

    const resetButton = screen.getByRole("button", { name: "Reset" });

    expect(input).toHaveValue("controlled value");
    fireEvent.click(resetButton);

    expect(input).toHaveValue("");

  });
});
