# Accordion

The accordion component is composed of four parts: Root, Item, Trigger, and Content. This component expands the Radix Accordion component.

```jsx
import {
  Accordion,
  ACCORDION_DENSITY,
  ACCORDION_TYPE,
} from "@washingtonpost/wpds-ui-kit";

const Component = () => {
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <Accordion.Root type={ACCORDION_TYPE.single} defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger
          density={ACCORDION_DENSITY.compact}
          ref={myHeaderRef}
        >
          This is a header
        </Accordion.Trigger>
        <Accordion.Content ref={myContentRef}>
          This the text that can either be expanded or hidden.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger
          density={ACCORDION_DENSITY.compact}
          ref={myHeaderRef}
        >
          This is another header. This item has an image.
        </Accordion.Trigger>
        <Accordion.Content {...args} ref={myContentRef}>
          <Image
            loader={myLoader}
            src="https://i.pravatar.cc/300/300"
            width="100"
            height="100"
            layout="fixed"
            alt="You can have anything as a child, including an image!"
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
```

## Accordion.Root

This is the main wrapper for the accordion component. This is where most of the props get passed. The different types can be found inside the ACCORDION_TYPE enum.

```jsx
export enum ACCORDION_TYPE {
  single = "single",
  multiple = "multiple",
}
```

#### Props:

| Name         | Description                                                                                                                                 | Type               | Required |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------- |
| type         | Dictates whether you can have multiple accordion items open at the same time or not. This also affects the TS types of some of other props. | enum               | true     |
| disabled     | Whether the accordion is disabled or not                                                                                                    | bool               | false    |
| defaultValue | Item(s) that should be expanded from the start. Should match the values assigned to each `Accordion.Item` .                                 | string \| string[] | false    |

## Accordion.Item

Each Accordion.Item should contain an `Accordion.Trigger` and an `Accordion.Content`. Each item should also have a value which will function as a key that you can use to set the `defaultValue`.

#### Props:

| Name     | Description                                                                                                                                                                                                   | Type   | Required |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| value    | A unique value for the item.                                                                                                                                                                                  | string | true     |
| disabled | Whether the accordion is disabled or not                                                                                                                                                                      | bool   | false    |
| asChild  | Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. | bool   | false    |

## Accordion.Trigger

Toggles the collapsed state of its associated item. There are different density options that affect the padding inside the ACCORDION_DENSITY enum.

```jsx
export enum ACCORDION_DENSITY {
  compact = "compact",
  loose = "loose",
  default = "default",
}
```

#### Props:

| Name    | Description                                                                                                                                                                                                   | Type | Required |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | -------- |
| density | Applies a certain amount of padding to the accordion trigger/header                                                                                                                                           | enum | false    |
| ref     | A standard React ref                                                                                                                                                                                          | ref  | false    |
| asChild | Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. | bool | false    |

## Accordion.Content

Contains the collapsible content for an item. The Accordion.Content can hold anything, from text to images to other components.

#### Props:

| Name       | Description                                                                                                                                                                                                   | Type | Required |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | -------- |
| ref        | A standard React reference                                                                                                                                                                                    | ref  | false    |
| asChild    | Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. | bool | false    |
| forceMount | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.                                                                                         | bool | false    |
