# Checkbox

```jsx
import { Checkbox } from "@washingtonpost/wpds-ui-kit";

function Component() {
  return <Checkbox variant="primary">Checkbox label</Checkbox>;
}
```

### Checkbox Label

There are two ways you can pass in a label to the checkbox component:

- The label prop. This option only takes in a string.
- As a child. This allows you to style your label to your preference. You can include links, custom stylings, etc.

```jsx
import { Checkbox } from "@washingtonpost/wpds-ui-kit";

function Component() {
  const StyledLabel = styled("div", {
    textDecoration: "line-through",
  });

  return (
    <Checkbox variant="primary" id="checkbox1">
      <StyledLabel>This is the label</StyledLabel>
    </Checkbox>
  );
}
```

```jsx
import { Checkbox } from "@washingtonpost/wpds-ui-kit";

function Component() {
  return (
    <Checkbox variant="primary" id="checkbox2">
      You can pass in links.{" "}
      <a href="build.washingtonpost.com">Like this link to our docs site</a>
    </Checkbox>
  );
}
```
