import * as React from "react";
import { Card as Component } from "./";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Button } from "@washingtonpost/wpds-button";
import { Accordion, ACCORDION_TYPE } from "@washingtonpost/wpds-accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";

export default {
  title: "Card",
  component: Component,
};

const Stack = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  marginBlockStart: "$200",
  borderRadius: "$075",
});

const Label = styled("h3", {
  color: theme.colors.primary,
  margin: 0,
  textAlign: "center",
});

const DefaultTemplate = (args) => (
  <Stack>
    <Label>Card</Label>
    <Component {...args} css={{ display: "flex" }}>
      <div>
        <h4>Hello there! I am a card</h4>
        <p>
          I can support many different nested components, check out my other
          stories to see for yourself!
        </p>
      </div>
      <img
        height="140"
        width="auto"
        layout="fixed"
        alt="Lava pooling from a volcano"
        src="https://images.pexels.com/photos/235807/pexels-photo-235807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </Component>
  </Stack>
);

export const Card = DefaultTemplate.bind({});

const styledText = styled("p", {
  overflow: "wrap",
  width: "100px",
});
const Container = styled({
  padding: theme.space["100"],
});

const OptionsT = (args) => (
  <Stack>
    <Label>Card with button</Label>
    <Component css={{ display: "flex", alignItems: "center", gap: "$075" }}>
      <styledText>Brand new digital content free with subscription!</styledText>
      <Button variant="primary">Subscribe</Button>
    </Component>

    <Label>Card with image and link</Label>
    <Component
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "0",
        maxWidth: "211px",
      }}
    >
      <img
        height="140"
        width="210"
        layout="fixed"
        alt="Vibrant quinoa bowl with carrots, tomatoes, and cucumbers"
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
      />
      <Container>
        <styledText>
          How Saria makes ready-to-eat <a href="">quinoa bowls</a> with lots of
          veggies.
        </styledText>
      </Container>
    </Component>

    <Label>Card with accordion</Label>
    <Component
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
      }}
    >
      <h4>Weeknight Ramen Bowls</h4>
      <Accordion.Root type={ACCORDION_TYPE.single} collapsible={true}>
        <Accordion.Item value={"item-1"}>
          <Accordion.Trigger css={{ padding: "$100" }}>
            View the recipe
          </Accordion.Trigger>
          <Accordion.Content css={{ padding: "$100" }}>
            Step 1 Add one cup of water to a medium pot and bring to a boil. Add
            the coconut milk, noodles, green beans and peanut butter, if using,
            and cook, stirring now and then, for about 3 minutes. Step 2 Remove
            from the heat and add the curry powder and half of the spice mix
            from the ramen packet and stir until fully dissolved, about 1
            minute. (Discard the remaining spice mix.) Transfer the ramen and
            its broth to a large bowl and place the cheese on top. Dust with
            more curry powder and serve.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Component>
  </Stack>
);
export const Options = OptionsT.bind({});
