/* eslint-disable testing-library/no-node-access */
import * as React from "react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import * as Tokens from "@washingtonpost/wpds-theme/src/tokens";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Popover } from "./";
import { styled, theme, globalCss } from "@washingtonpost/wpds-theme";
import { ChevronRight } from "@washingtonpost/wpds-assets";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Popover",
  component: Popover.Content,
  subcomponents: {
    Root: Popover.Root,
    Portal: Popover.Portal,
    Trigger: Popover.Trigger,
    Anchor: Popover.Anchor,
  },
} as ComponentMeta<typeof Popover.Content>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<any> = (args) => {
  const triggerRef = React.useRef(null);
  const [parentElement, setParentElement] = React.useState();

  React.useEffect(() => {
    triggerRef?.current &&
      setParentElement(triggerRef.current["parentElement"]);
  }, [setParentElement]);

  return (
    <Popover.Root>
      <Popover.Trigger ref={triggerRef}>Trigger</Popover.Trigger>
      <Popover.Portal container={parentElement}>
        <Popover.Content {...args}></Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const Default = Template.bind({});

Default.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam non eget consequat pretium.",
  density: "default",
  sideOffset: "050",
  side: "bottom",
  align: "center",
};

Default.argTypes = {
  density: {
    control: "select",
    options: ["default", "compact"],
  },
  sideOffset: {
    options: Object.keys(Tokens.sizes),
    mapping: theme.sizes,
    control: "select",
  },
};

Default.parameters = {
  chromatic: { disableSnapshot: true },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnchorTemplate: ComponentStory<any> = (args) => {
  const triggerRef = React.useRef(null);
  const [parentElement, setParentElement] = React.useState();
  React.useEffect(() => {
    triggerRef?.current &&
      setParentElement(triggerRef.current["parentElement"]);
  }, [setParentElement]);
  return (
    <Popover.Root>
      <Popover.Trigger ref={triggerRef}>Trigger</Popover.Trigger>
      <Popover.Portal container={parentElement}>
        <Popover.Content {...args}></Popover.Content>
      </Popover.Portal>
      <Popover.Anchor asChild>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            color: theme.colors.primary.value,
          }}
        >
          Anchor
        </div>
      </Popover.Anchor>
    </Popover.Root>
  );
};

export const Anchor = AnchorTemplate.bind({});
Anchor.args = {
  children:
    "Anchors allow for Popups to be triggered and positioned independently",
};
Anchor.parameters = { chromatic: { disableSnapshot: true } };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloseButtonTemplate: ComponentStory<any> = (args) => {
  const triggerRef = React.useRef(null);
  const [parentElement, setParentElement] = React.useState();
  React.useEffect(() => {
    triggerRef?.current &&
      setParentElement(triggerRef.current["parentElement"]);
  }, [setParentElement]);
  return (
    <Popover.Root>
      <Popover.Trigger ref={triggerRef}>Trigger</Popover.Trigger>
      <Popover.Portal container={parentElement}>
        <Popover.Content
          {...args}
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ marginInlineEnd: theme.sizes["175"].value }}>
            {args.children}
          </div>
          <Popover.Close />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const CloseButton = CloseButtonTemplate.bind({});
CloseButton.args = {
  children: "An optional close button may be included",
};
CloseButton.parameters = { chromatic: { disableSnapshot: true } };

const SideMenu = styled("menu", {
  backgroundColor: theme.colors.gray40,
  listStyle: "none",
  marginBlock: 0,
  paddingInlineStart: 0,
  width: "250px",
  minHeight: "100vh",
});

const MenuLink = styled("a", {
  color: theme.colors.onPrimary,
  display: "flex",
  alignItems: "center",
  fontSize: theme.fontSizes["087"],
  fontWeight: theme.fontWeights.bold,
  textDecoration: "none",
  paddingBlock: theme.space["100"],
  paddingInline: theme.space["125"],
  "&:hover": {
    backgroundColor: theme.colors.gray0,
  },
  "&:focus-visible": { outline: "none" },
  "& :first-child": {
    flex: 1,
  },
});

const SubMenu = styled("menu", {
  listStyle: "none",
  marginBlock: 0,
  paddingInlineStart: 0,
});

const SubMenuLink = styled("a", {
  color: theme.colors.primary,
  display: "block",
  fontSize: theme.fontSizes["087"],
  fontWeight: theme.fontWeights.bold,
  paddingBlock: theme.space["100"],
  paddingInline: theme.space["125"],
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.colors.gray500,
  },
});

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      fill="none"
      viewBox="0 0 12 7"
    >
      <path fill={theme.colors.gray300.value} d="M0 1h12L6 7 0 1z"></path>
      <path
        fill={theme.colors.onPrimary.value}
        d="M1 1h10L6 6 1 1zM0 0h12v1H0V0z"
      ></path>
    </svg>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuTemplate: ComponentStory<any> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div style={{ width: "calc(100% + 4rem)", marginBlock: "-2rem" }}>
      <SideMenu>
        <li>
          <MenuLink href="">Home Page</MenuLink>
        </li>
        <li
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Popover.Root
            open={menuOpen}
            onOpenChange={(open) => setMenuOpen(open)}
          >
            <Popover.Trigger asChild>
              <MenuLink href="https://www.washingtonpost.com/politics/?itid=nb_front_politics">
                <span>Politics</span>{" "}
                <ChevronRight width={theme.sizes["125"].value} />
              </MenuLink>
            </Popover.Trigger>
            <Popover.Content
              side="right"
              sideOffset={0}
              css={{
                "&:focus-visible": { outline: "none" },
                "& span": { lineHeight: 0 },
              }}
            >
              <SubMenu>
                <li>
                  <SubMenuLink href="https://www.washingtonpost.com/elections/election-2024/">
                    Election 2024
                  </SubMenuLink>
                </li>
                <li>
                  <SubMenuLink href="https://www.washingtonpost.com/politics/courts-law/?itid=nb_politics_courts-and-law">
                    Courts and Law
                  </SubMenuLink>
                </li>
                <li>
                  <SubMenuLink href="https://www.washingtonpost.com/news/fact-checker/?itid=nb_politics_fact-checker">
                    Fact Checker
                  </SubMenuLink>
                </li>
              </SubMenu>
              <PopoverPrimitive.Arrow asChild>
                <Arrow />
              </PopoverPrimitive.Arrow>
            </Popover.Content>
          </Popover.Root>
        </li>
      </SideMenu>
    </div>
  );
};

export const Menu = MenuTemplate.bind({});
Menu.parameters = { chromatic: { disableSnapshot: true } };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FullPopover: ComponentStory<any> = ({ side, align }) => (
  <Popover.Root open={true}>
    <Popover.Trigger asChild>
      <u
        style={{
          border: `1px solid ${theme.colors.gray300}`,
          color: theme.colors.gray100.value,
          paddingInline: theme.space["025"].value,
        }}
        tabIndex={0}
      >
        Trigger
      </u>
    </Popover.Trigger>
    <Popover.Content
      side={side}
      align={align}
      width={114}
      css={{
        animation: "unset",
      }}
    >
      {side} {align}
    </Popover.Content>
  </Popover.Root>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChromaticTemplate: ComponentStory<any> = () => {
  const side = ["bottom", "top", "right", "left"];
  const align = ["start", "center", "end"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: "auto auto",
        gridTemplateAreas: "'bottom bottom' 'top top' 'right left'",
        width: "100%",
      }}
    >
      {side.map((s) => {
        let direction = "row";
        if (s === "right" || s === "left") {
          direction = "column";
        }
        let alignItems = "flex-start";
        if (s === "left") {
          alignItems = "flex-end";
        }
        return (
          <div
            key={s}
            style={
              {
                display: "flex",
                flexDirection: direction,
                gridArea: s,
                justifyContent: "space-between",
                alignItems: alignItems,
              } as React.CSSProperties
            }
          >
            {align.map((a) => {
              let p = "0";
              if (s === "bottom") {
                p = "0 0 54px 0";
              } else if (s === "top") {
                p = "54px 0 0 0";
              } else {
                p = "20px 0 20px 0";
              }
              return (
                <div key={s + a} style={{ padding: p }}>
                  <FullPopover side={s} align={a} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const Chromatic = ChromaticTemplate.bind({});
Chromatic.parameters = {
  docs: { disable: true },
  chromatic: { delay: 1000 },
};

const ecGlobalCss = globalCss({
  ":not(.wpds-dark) > .ec-grid": {
    marginInlineStart: "-2rem",
  },
  ".wpds-dark > .ec-grid": {
    marginInlineEnd: "-2rem",
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EdgeAndCornerCasesTemplate: ComponentStory<any> = () => {
  ecGlobalCss();
  return (
    <div
      className="ec-grid"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "auto 1fr auto",
        width: "calc(100% + 4rem)",
        height: `100vh`,
        marginBlockStart: "-2rem",
      }}
    >
      <div>
        <FullPopover side="left" align="end" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FullPopover side="top" align="center" />
      </div>
      <div>
        <FullPopover side="right" align="end" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FullPopover side="left" align="center" />
      </div>
      <div></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FullPopover side="right" align="center" />
      </div>
      <div>
        <FullPopover side="left" align="start" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FullPopover side="bottom" align="center" />
      </div>
      <div>
        <FullPopover side="right" align="start" />
      </div>
    </div>
  );
};

export const EdgeAndCornerCases = EdgeAndCornerCasesTemplate.bind({});
EdgeAndCornerCases.parameters = {
  docs: { disable: true },
  chromatic: { delay: 3000 },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: ComponentStory<any> = () => (
  <Popover.Root>
    <Popover.Trigger>Trigger</Popover.Trigger>
    <Popover.Content>Popover Content</Popover.Content>
  </Popover.Root>
);

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const trigger = canvas.getByRole("button");
  await userEvent.click(trigger);
  await sleep(500);
  const content = canvas.getByRole("dialog");
  await expect(content).toBeVisible();
  await userEvent.click(document.body);
  await sleep(500);
  await expect(content).not.toBeInTheDocument();
};
