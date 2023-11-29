import * as React from "react";
import { Dialog } from "./Dialog";
import { Button } from "@washingtonpost/wpds-ui-kit";

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
    <div
      ref={setContainer}
      style={{
        position: "relative",
        height: "100vh",
        width: "50vw",
        marginBlock: "-32px",
        marginInlineStart: "-16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
};

export const Content = ContentTemplate.bind({});
