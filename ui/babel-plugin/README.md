# rough proposed architecture of ui-kit's new css-in-js library and babel plugin

## Two main parts:

- compile time (babel plugin) and run time (css-in-js library) they will leverage CSS `@layer` to allow for composable components and overriding of styles
- takes css-in-js object code and converts it to css classes and stylesheets imported into the component

```js
// input
import { styled } from "@wpds/react";
// uses typescript version of the library
// which is helped for type checking and intellisense

const Button = styled("button", {
  color: "red",
  backgroundColor: "blue",
  "&:hover": {
    color: "blue",
  },
});

// render Button
export default function App() {
  return <Button css={{ color: "green" }}>Hello</Button>;
}
```

```css
/* output */
/* imagine other layers like reset, tokens, theme, components, recipes, etc */
/* maybe responsive layers? */
@layer userland, overrides;

@layer userland {
  .wpds-button-rg071n64 {
    color: red;
    background-color: blue;
  }
  .wpds-button-rg071n64:hover {
    color: blue;
  }
}

/* overrides */
@layer overrides {
  .wpds-button-rg071n64 {
    color: green;
  }
}
```

```js
// output
import { styled } from "@wpds/react/runtime";
// uses the runtime version of the library
import "./styles.css";

const Button = styled("button", {
  className: "wpds-button-rg071n64",
});

export default function App() {
  return (
    <Button
    // css prop removed cause the overrides are now in the stylesheet
    >
      Hello
    </Button>
  );
}
```
