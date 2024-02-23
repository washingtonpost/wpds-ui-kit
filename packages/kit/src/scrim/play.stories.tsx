import * as React from "react";
import { Box } from "../box";
import { theme } from "../theme";
import { Scrim as Component } from "./";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Scrim",
  component: Component,
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => {
  const [open, setOpen] = React.useState(false);
  function handleOpenChange(val) {
    setOpen(() => val);
  }
  return (
    <Box css={{ color: theme.colors.primary, maxWidth: "30rem" }}>
      <Component
        {...args}
        onChange={handleOpenChange}
        open={open}
        onClick={() => {
          handleOpenChange(false);
        }}
      />
      <p>
        <a href="#">Lorem ipsum dolor sit</a>, amet consectetur adipisicing
        elit. Natus praesentium repudiandae architecto, incidunt quam, nisi
        nihil deserunt tempora quas eos ducimus voluptatem magni consectetur?
        Odio tempora earum deleniti. Qui, accusamus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui,
        impedit temporibus amet facilis voluptatum dolores veritatis ex cumque
        asperiores laudantium commodi non eos omnis ipsam minus velit. Dolores,
        excepturi.
      </p>
      <p>
        <button
          onClick={() => {
            handleOpenChange(true);
          }}
        >
          Open Scrim
        </button>
        &nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
        praesentium repudiandae architecto, incidunt quam, nisi nihil deserunt
        tempora quas eos ducimus voluptatem magni consectetur? Odio tempora
        earum deleniti. Qui, accusamus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui,
        impedit temporibus amet facilis voluptatum dolores veritatis ex cumque
        asperiores laudantium commodi non eos omnis ipsam minus velit. Dolores,
        excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
        praesentium repudiandae architecto, incidunt quam, nisi nihil deserunt
        tempora quas eos ducimus voluptatem magni consectetur? Odio tempora
        earum deleniti. Qui, accusamus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui,
        impedit temporibus amet facilis voluptatum dolores veritatis ex cumque
        asperiores laudantium commodi non eos omnis ipsam minus velit. Dolores,
        excepturi.
      </p>
    </Box>
  );
};

export const Scrim = {
  render: Template,

  args: {
    zIndex: theme.zIndices.shell,
    lockScroll: true,
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const ChromaticTemplate: StoryFn<typeof Component> = () => {
  return (
    <>
      <Box
        css={{
          backgroundColor: theme.colors.primary,
          width: theme.sizes["500"],
          height: theme.sizes["500"],
        }}
      ></Box>
      <Component open={true} />
    </>
  );
};

export const Chromatic = {
  render: ChromaticTemplate,
};
