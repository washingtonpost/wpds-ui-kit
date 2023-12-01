import * as React from "react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Dialog } from "./Dialog";
import { Button, styled, theme } from "@washingtonpost/wpds-ui-kit";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Dialog",
  component: Dialog.Root,
  subcomponents: {
    Content: Dialog.Content,
    Trigger: Dialog.Trigger,
    Portal: Dialog.Portal,
    Overlay: Dialog.Overlay,
    Title: Dialog.Title,
    Description: Dialog.Description,
  },
} as ComponentMeta<typeof Dialog.Root>;

const DialogContainer = styled("div", {
  position: "relative",
  height: "100vh",
  width: "50vw",
  marginBlock: "-32px",
  marginInlineStart: "-16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Template: ComponentStory<typeof Dialog.Root> = (args) => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <div ref={setContainer}>
      <Dialog.Root {...args}>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>
              Descriptive text of dialog content
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};

const ContentTemplate: ComponentStory<typeof Dialog.Root> = (args) => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root {...args} defaultOpen>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay css={{ position: "absolute" }} />
          <Dialog.Content
            css={{ position: "absolute", width: "100%", maxWidth: "500px" }}
          >
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora cupiditate possimus aliquid natus cumque? Ratione minus
                exercitationem consequuntur quis dolor ut possimus earum
                officiis itaque culpa eveniet vero, laboriosam sit!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora cupiditate possimus aliquid natus cumque? Ratione minus
                exercitationem consequuntur quis dolor ut possimus earum
                officiis itaque culpa eveniet vero, laboriosam sit!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora cupiditate possimus aliquid natus cumque? Ratione minus
                exercitationem consequuntur quis dolor ut possimus earum
                officiis itaque culpa eveniet vero, laboriosam sit!
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>Cancel</Button>
              </Dialog.Close>
              <Button variant="primary">Confirm</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </DialogContainer>
  );
};

export const Content = ContentTemplate.bind({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentBackgroundColorTemplate: any = (args) => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root open={true} {...args}>
        <Dialog.Portal container={container}>
          <Dialog.Content
            backgroundColor={args.backgroundColor}
            css={{ position: "absolute" }}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </DialogContainer>
  );
};

export const ContentBackgroundColor = ContentBackgroundColorTemplate.bind({});

ContentBackgroundColor.argTypes = {
  backgroundColor: {
    control: { type: "color" },
  },
};

ContentBackgroundColor.args = {
  // eslint-disable-next-line @washingtonpost/wpds/theme-colors
  backgroundColor: theme.colors.blue500.value,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OverlayBackgroundColorTemplate: any = (args) => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root open={true} {...args}>
        <Dialog.Portal container={container}>
          <Dialog.Overlay
            backgroundColor={args.backgroundColor}
            css={{ position: "absolute" }}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </DialogContainer>
  );
};

export const OverlayBackgroundColor = OverlayBackgroundColorTemplate.bind({});

OverlayBackgroundColor.argTypes = {
  backgroundColor: {
    control: { type: "color" },
  },
};

OverlayBackgroundColor.args = {
  // eslint-disable-next-line @washingtonpost/wpds/theme-colors
  backgroundColor: theme.colors.green500.value,
};

const SmallTemplate: ComponentStory<typeof Dialog.Root> = (args) => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root {...args} open={true}>
        <Dialog.Portal container={container}>
          <Dialog.Overlay css={{ position: "absolute" }} />
          <Dialog.Content css={{ position: "absolute" }} width="300px">
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>Cancel</Button>
              </Dialog.Close>
              <Button variant="primary">Confirm</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </DialogContainer>
  );
};

export const Small = SmallTemplate.bind({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: ComponentStory<any> = () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay data-testid="overlay" />
          <Dialog.Content>
            <Dialog.Close data-testid="close-button" />
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>Lorem ipsum</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>Cancel</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </DialogContainer>
  );
};

export const Interactions = InteractionsTemplate.bind({});

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const open = canvas.getByRole("button");
  await userEvent.click(open);
  await waitFor(() => expect(canvas.getByTestId("close-button")).toHaveFocus());
  await userEvent.click(canvas.getByTestId("close-button"));
  await waitFor(() => expect(open).toHaveFocus());
  await userEvent.click(open);
  await waitFor(() => expect(canvas.getByText("Cancel")).toBeVisible());
  await userEvent.click(canvas.getByText("Cancel"));
  await waitFor(() => expect(open).toHaveFocus());
  await userEvent.click(open);
  await waitFor(() => expect(canvas.getByTestId("overlay")).toBeVisible());
  await userEvent.click(canvas.getByTestId("overlay"));
  await waitFor(() => expect(open).toHaveFocus());
};
