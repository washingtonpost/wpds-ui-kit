import * as React from "react";
import { userEvent, waitFor, within } from "@storybook/test";

import { expect } from "@storybook/test";
import { Dialog } from "./Dialog";
import { Button, styled, theme } from "../";

import type { Meta, StoryFn } from "@storybook/react";

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
} as Meta<typeof Dialog.Root>;

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

const Template: StoryFn<typeof Dialog.Root> = (args) => {
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

export const Default = {
  render: Template,
  args: {},
};

const ContentTemplate: StoryFn<typeof Dialog.Root> = (args) => {
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

export const Content = {
  render: ContentTemplate,
};

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

export const ContentBackgroundColor = {
  render: ContentBackgroundColorTemplate,

  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },

  args: {
    // eslint-disable-next-line @washingtonpost/wpds/theme-colors
    backgroundColor: theme.colors.blue500.value,
  },
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

export const OverlayBackgroundColor = {
  render: OverlayBackgroundColorTemplate,

  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },

  args: {
    // eslint-disable-next-line @washingtonpost/wpds/theme-colors
    backgroundColor: theme.colors.green500.value,
  },
};

const SmallTemplate: StoryFn<typeof Dialog.Root> = (args) => {
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

export const Small = {
  render: SmallTemplate,
};

const InteractionsTemplate: StoryFn<typeof Dialog.Root> = () => {
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

export const Interactions = {
  render: InteractionsTemplate,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const open = canvas.getByRole("button");
    const user = userEvent.setup({ pointerEventsCheck: 0 });

    await user.click(open);
    await waitFor(() =>
      expect(canvas.getByTestId("close-button")).toHaveFocus(),
    );
    await user.click(canvas.getByTestId("close-button"));
    await waitFor(() => expect(open).toHaveFocus());
    await user.click(open);
    await waitFor(() => expect(canvas.getByText("Cancel")).toBeVisible());
    await user.click(canvas.getByText("Cancel"));
    await waitFor(() => expect(open).toHaveFocus());
    await user.click(open);
    await waitFor(() => expect(canvas.getByTestId("overlay")).toBeVisible());
    await user.click(canvas.getByTestId("overlay"));
    await waitFor(() => expect(open).toHaveFocus());
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResponsiveInteractionsTemplate: any = () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <DialogContainer ref={setContainer}>
      <Dialog.Root defaultOpen>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay data-testid="overlay" />
          <Dialog.Content css={{ "@sm": { width: "300px" } }}>
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

export const ResponsiveInteractions = {
  render: ResponsiveInteractionsTemplate,

  parameters: {
    viewport: {
      defaultViewport: "small",
      viewports: {
        small: {
          name: "Small",
          styles: {
            height: "590px",
            width: "767px",
          },
          type: "mobile",
        },
      },
    },
    chromatic: {
      modes: {
        mobile: { viewport: "small" },
      },
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await expect(canvas.getByRole("dialog")).toHaveStyle("width: 300px");
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
