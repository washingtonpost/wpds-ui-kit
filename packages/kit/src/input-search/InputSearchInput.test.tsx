import { render, screen } from "@testing-library/react";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchPopover } from "./InputSearchPopover";
import { Icon } from "../icon";
import { Settings } from "@washingtonpost/wpds-assets";
import { theme } from "../theme";

describe("InputSearchInput", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot
        css={{
          fontWeight: theme.fontWeights.bold,
          fontSize: theme.fontSizes["100"],
        }}
      >
        {ui}
        <InputSearchPopover {...contextProps} />
      </InputSearchRoot>
    );
  };

  test("renders visibly into the document", () => {
    customRender(<InputSearchInput name="test" id="test" label="Test" />, {});
    expect(screen.getByLabelText("Test")).toBeInTheDocument();
  });

  test("uses contexts portal prop", () => {
    customRender(<InputSearchInput name="test" id="test" label="Test" />, {
      portal: false,
    });
    expect(screen.getByTestId("border-style-override")).toHaveStyle(
      "--wpds-colors-signal: var(--wpds-colors-subtle)"
    );
  });

  test("uses the error prop", () => {
    customRender(
      <InputSearchInput name="test" id="test" label="Test" error />,
      {}
    );
    expect(screen.getByTestId("input-text-container")).toHaveClass(
      /wpds-.*-isInvalid-true/
    );
  });

  /*
success
disabled
label
as
defaultValue
id
placeholder
onFocus
onBlur
onChange
css
required
name
type
value
selectOnClick
autocomplete
buttonIconText
buttonIconType
errorMessage
helperText
onButtonIconClick	
  */

  /*
OMIT
icon
children
*/
});
