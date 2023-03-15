# Tabs

```jsx
import { Tabs } from "@washingtonpost/wpds-ui-kit";

function Component() {
  return (
    <Tabs.Root>
      <Tabs.List aria-label="Countries' information">
        <Tabs.Trigger value="tab1">France</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Kenya</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Austria</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">France is here 🇫🇷</Tabs.Content>
      <Tabs.Content value="tab2">Kenya is here 🇰🇪</Tabs.Content>
      <Tabs.Content value="tab3">Austira is here 🇦🇹</Tabs.Content>
    </Tabs.Root>
  );
}
```
