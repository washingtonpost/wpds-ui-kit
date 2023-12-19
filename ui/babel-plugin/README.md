# rough proposed architecture of ui-kit's new css-in-js library and babel plugin

## Two main parts:

### compile time (babel plugin)

- takes css-in-js object code and converts it to css classes and stylesheets imported into the component
- alternatively the stylesheets could be css modules and the classes could be imported into the component

```js
// input
import { styled } from "@wpds/react";

const Button = styled("button", {
  color: "red",
  backgroundColor: "blue",
  ":hover": {
    color: "blue",
  },
});

// babel output (roughly - not exact)
import { styled } from "@wpds/react";
import "./Button.css";

const Button = styled("button", {
  base: "wpds-button-rg071n64",
});
```

### run time (css-in-js library)

- the styled component is like stitches/cva/panda-css it will determine which classes to apply to the component based on the props passed to it
- it will also have a `css` prop that will allow you to pass in a css-in-js object to override the styles of the component which will be inline styles `<style>` tag in order for specificity to work

```js
// input
import { styled } from "@wpds/react";

const Button = styled("button", {
  color: "red",
  backgroundColor: "blue",
  ":hover": {
    color: "blue",
  },
});

export default function App() {
  return <Button css={{ color: "green" }}>Hello</Button>;
}

// babel or runtime output (roughly - not exact)
import { styled } from "@wpds/react";
import "./Button.css";

const Button = styled("button", {
  base: "wpds-button-rg071n64",
});

export default function App() {
  return (
    <Button className="wpds-button-rg071n64">
        <style>
            .wpds-button-rg071n64 {
                color: green;
            }
        </style>
        Hello
    </Button>
  );
}
```
