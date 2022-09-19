import * as React from "react";
import { theme } from "@washingtonpost/wpds-theme";
import { Carousel as Component } from "./";

export default {
  title: "Carousel",
  component: Component.Root,
  subcomponents: {
    CarouselTitle: Component.Title,
    CarouselHeader: Component.Header,
    CarouselHeaderContent: Component.HeaderContent,
    CarouselHeaderActions: Component.HeaderActions,
    CarouselPreviousButton: Component.PreviousButton,
    CarouselNextButton: Component.NextButton,
    CarouselContent: Component.Content,
    CarouselItem: Component.Item,
    CarouselFooter: Component.Footer,
    CarouselDots: Component.Dots,
  },
};

const Template = (args) => {
  const [page, setPage] = React.useState(0);
  const items = [
    theme.colors.red400,
    theme.colors.orange400,
    theme.colors.gold400,
    theme.colors.green400,
    theme.colors.pink400,
    theme.colors.purple400,
    theme.colors.teal400,
    theme.colors.mustard400,
    theme.colors.yellow600,
    theme.colors.pink80,
    theme.colors.purple40,
  ];
  return (
    <Component.Root
      {...args}
      page={page}
      onPageChange={(p) => {
        console.log("page is", p);
        setPage(p);
      }}
    >
      <Component.Header>
        <Component.HeaderContent>
          <Component.Title>My Carousel</Component.Title>
        </Component.HeaderContent>
        <Component.HeaderActions>
          <Component.PreviousButton />
          <Component.NextButton />
        </Component.HeaderActions>
      </Component.Header>
      <Component.Content>
        {items.map((item, i) => (
          <Component.Item key={item}>
            <div
              style={{
                width: "150px",
                height: "200px",
                backgroundColor: item,
                borderRadius: theme.radii["025"],
                marginInlineEnd: theme.space["050"],
                padding: theme.space["050"],
              }}
            >
              {i + 1}
            </div>
          </Component.Item>
        ))}
      </Component.Content>
      <Component.Footer>
        <Component.Dots />
      </Component.Footer>
    </Component.Root>
  );
};

export const Carousel = Template.bind({});

Carousel.args = {};
