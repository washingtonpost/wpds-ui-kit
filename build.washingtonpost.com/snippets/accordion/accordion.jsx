import React from "react";

/**
 * See documentation for full component api
 *
```jsx
import { Accordion } from "@washingtonpost/wpds-ui-kit";

export default function Example() {
  return (
    <Accordion.Root type={ACCORDION_TYPE.single} defaultValue="item-1">
      <Accordion.Item value={"item-1"}>
        <Accordion.Trigger ref={myHeaderRef} density={ACCORDION_DENSITY.compact}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          augue in felis pharetra finibus. In sagittis aliquam augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion.Trigger>
        <Accordion.Content ref={myContentRef}>
          No! You don't even believe that! Gus has cameras everywhere, please.
          Listen to yourself! No, he has known everything, all along. Where were
          you today? In the lab? And you don't think it's possible that Tyrus
          lifted the cigarette out of your locker? Come on! Don't you see? You
          are the last piece of the puzzle. You are everything that he's wanted.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value={"item-2"}>
        <Accordion.Trigger ref={myHeaderRef} density={ACCORDION_DENSITY.compact}>
          How long will I have to social distance?
        </Accordion.Trigger>
        <Accordion.Content ref={myContentRef}>
          <img
            src="https://i.pravatar.cc/300/300"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```
 */
export default function Example() {
  return <div>See documentation for full example</div>;
}
