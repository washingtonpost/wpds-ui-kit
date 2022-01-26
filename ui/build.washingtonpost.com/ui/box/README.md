# Box

Quick prototyping in playroom, code sandboxes, and the like use the "Box" component

```jsx
import * as T from "@washingtonpost/wpds-ui-kit";

export const MyBox = () => {
  return (
    <T.Box
      as="h1"
      css={{
        color: "$primary",
      }}
    >
      Hello, World!
    </T.Box>
  );
};
```
