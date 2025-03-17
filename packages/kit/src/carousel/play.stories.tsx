import { useState, useRef } from "react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { styled, theme } from "../theme";
import { Carousel as Component } from ".";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { Play, Pause } from "@washingtonpost/wpds-assets";
import { useActiveDescendant } from "./useActiveDescendant";

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
  const [page, setPage] = useState(0);
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
                width: "192px",
                height: "200px",
                backgroundColor: item,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: theme.radii["025"],
                marginInlineEnd: theme.space["050"],
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
Carousel.argTypes = {
  itemsPerPage: {
    control: { type: "select" },
    defaultValue: "auto",
    options: ["auto", 1, 2, 3, 4],
  },
};

const StoryLink = ({ href }) => (
  <div style={{ marginInlineEnd: theme.space["050"] }}>
    <a href={href} tabIndex={-1}>
      <img
        src="https://fakeimg.pl/200x200/ddd/999/?text=Story+Headline&font=museo&font_size=24"
        width="200"
        height="200"
        style={{ display: "block" }}
        alt="A image linking to an article"
      />
    </a>
  </div>
);

const CustomButtonsTemplate = (args) => {
  const items = new Array(3).fill("");
  return (
    <Component.Root
      {...args}
      itemsPerPage={1}
      css={{ position: "relative", width: "200px" }}
    >
      <Component.PreviousButton asChild>
        <button
          style={{
            background: "transparent",
            border: "none",
            position: "absolute",
            insetBlock: 0,
            insetInlineStart: 0,
            insetInlineEnd: "75%",
            zIndex: 1,
          }}
        >
          Prev
        </button>
      </Component.PreviousButton>
      <Component.NextButton asChild>
        <button
          style={{
            background: "transparent",
            border: "none",
            position: "absolute",
            insetBlock: 0,
            insetInlineStart: "75%",
            insetInlineEnd: 0,
            zIndex: 1,
          }}
        >
          Next
        </button>
      </Component.NextButton>
      <Component.Content>
        {items.map((_, i) => (
          <Component.Item key={`item${i}`} css={{ width: "100%" }}>
            <div
              style={{
                backgroundColor: theme.colors.gray300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
              }}
            >
              {i + 1}
            </div>
          </Component.Item>
        ))}
      </Component.Content>
    </Component.Root>
  );
};

export const CustomButtons = CustomButtonsTemplate.bind({});

CustomButtons.parameters = {
  chromatic: { disableSnapshot: true },
};

const SlideshowTemplate = (args) => {
  const items = new Array(4).fill("");
  const [page, setPage] = useState(0);
  const wrapRef = useRef(false);
  const [intervalId, setIntervalId] = useState();

  const handleOnClick = () => {
    const wrapPages = (currentPage) => {
      if (currentPage < items.length - 1) {
        if (wrapRef.current) {
          wrapRef.current = false;
        }
        return currentPage + 1;
      } else {
        wrapRef.current = true;
        return 0;
      }
    };

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else {
      const id = setInterval(() => {
        setPage(wrapPages);
      }, 1000);
      setPage(wrapPages);
      setIntervalId(id);
    }
  };
  return (
    <Component.Root
      {...args}
      itemsPerPage={1}
      css={{ position: "relative", width: "200px" }}
      aria-label="Slideshow"
      page={page}
      onPageChange={(p) => {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(undefined);
        }
        setPage(p);
      }}
    >
      <div
        style={{
          display: "flex",
          gap: theme.space["025"],
          position: "absolute",
          insetInlineEnd: theme.space["025"],
          insetBlockEnd: theme.space["200"],
          zIndex: 1,
        }}
      >
        <Component.PreviousButton />
        <Button
          variant="primary"
          icon={"center"}
          aria-label="Start slide rotation"
          onClick={handleOnClick}
        >
          <Icon>{intervalId ? <Pause /> : <Play />}</Icon>
        </Button>
        <Component.NextButton />
      </div>
      <Component.Content>
        {items.map((_, i) => (
          <Component.Item
            key={`item${i}`}
            css={{ width: "100%", opacity: "0.5" }}
          >
            <div
              style={{
                backgroundColor: theme.colors.gray300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
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

export const Slideshow = SlideshowTemplate.bind({});

Slideshow.parameters = {
  chromatic: { disableSnapshot: true },
};

const Subtitle = styled("div", {
  color: theme.colors.gray80,
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes["075"],
  fontStyle: "italic",
  marginBlockStart: theme.sizes["025"],
});

const BrightsCarouselTemplate = (args) => {
  const stories = [
    {
      id: "story-1",
      url: "https://www.washingtonpost.com",
    },
    {
      id: "story-2",
      url: "https://www.washingtonpost.com",
    },
    {
      id: "story-3",
      url: "https://www.washingtonpost.com",
    },
    {
      id: "story-4",
      url: "https://www.washingtonpost.com",
    },
    {
      id: "story-5",
      url: "https://www.washingtonpost.com",
    },
  ];

  const [focused, setFocused] = useState();

  const triggerActiveLink = () => {
    window.open(focused.url);
  };

  const handleDescendantFocus = (id) => {
    setFocused(stories.find((story) => story.id === id));
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === " ") {
      event.preventDefault();
    } else if (event.key === "Enter") {
      event.preventDefault();
      triggerActiveLink();
    }
  };

  const handleOnKeyUp = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      triggerActiveLink();
    }
  };

  return (
    <Component.Root
      {...args}
      itemsPerPage={1}
      onDescendantFocus={handleDescendantFocus}
    >
      <Component.Header
        css={{
          borderBlockStart: `1px solid ${theme.colors.primary}`,
          paddingBlockStart: theme.space["050"],
        }}
      >
        <Component.HeaderContent>
          <Component.Title css={{ fontSize: theme.fontSizes["100"] }}>
            BRIGHTS CAROUSEL
          </Component.Title>
          <Subtitle role="doc-subtitle">Subtitle content</Subtitle>
        </Component.HeaderContent>
      </Component.Header>
      <div style={{ position: "relative" }}>
        <Component.PreviousButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "0",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": {
              display: "none",
            },
          }}
        />
        <Component.NextButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": {
              display: "none",
            },
          }}
        />
        <Component.Content onKeyDown={handleOnKeyDown} onKeyUp={handleOnKeyUp}>
          {stories.map((story) => (
            <Component.Item key={story.id} id={story.id}>
              <StoryLink href={story.url} />
            </Component.Item>
          ))}
        </Component.Content>
      </div>
    </Component.Root>
  );
};

export const BrightsCarousel = BrightsCarouselTemplate.bind({});

BrightsCarousel.parameters = {
  chromatic: { disableSnapshot: true },
};

const VerticalVideoTemplate = () => {
  const videos = [
    { id: "title-1", headline: "Title 1", byline: "Author 1" },
    { id: "title-2", headline: "Title 2", byline: "Author 2" },
    { id: "title-3", headline: "Title 3", byline: "Author 3" },
    { id: "title-4", headline: "Title 4", byline: "Author 4" },
    { id: "title-5", headline: "Title 5", byline: "Author 5" },
  ];

  const containerRef = useRef(null);
  const { addDescendant, handleDescendantFocus, contentProps } =
    useActiveDescendant(containerRef);

  return (
    <Component.Root itemsPerPage={1} onDescendantFocus={handleDescendantFocus}>
      <Component.Header
        css={{
          borderBlockStart: `1px solid ${theme.colors.primary}`,
          paddingBlockStart: theme.space["050"],
        }}
      >
        <Component.HeaderContent>
          <Component.Title css={{ fontSize: theme.fontSizes["100"] }}>
            VIDEO CAROUSEL
          </Component.Title>
        </Component.HeaderContent>
      </Component.Header>
      <div style={{ position: "relative" }}>
        <Component.PreviousButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "0",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": {
              display: "none",
            },
          }}
        />
        <Component.NextButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": {
              display: "none",
            },
          }}
        />
        <Component.Content {...contentProps} ref={containerRef}>
          {videos.map((video) => (
            <Component.Item key={video.id} id={video.id}>
              <div
                style={{
                  marginInlineEnd: theme.space["100"],
                  padding: "2px",
                }}
              >
                <figure
                  style={{
                    width: "187px",
                    height: "332px",
                    margin: 0,
                    marginBlockEnd: theme.space["025"],
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    alt="a very good boy"
                    src="https://www.washingtonpost.com/resizer/drBpb5wRPLd4rcxcAW71ZmwPYdQ=/376x658/filters:quality(80)/posttv-thumbnails-prod.s3.amazonaws.com/10-07-2022/t_927b58b469fe41c6a1f4a46e7e9ea96d_name_Screen_Shot_2022_10_07_at_1_05_42_PM.png"
                    style={{
                      height: "100%",
                      filter: "grayscale(100%)",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                  <Button
                    variant="primary"
                    id={`${video.id}-btn`}
                    css={{
                      position: "absolute",
                      insetInlineStart: theme.space["050"],
                      insetBlockEnd: theme.space["050"],
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-btn`,
                        parentId: video.id,
                      });
                    }}
                    tabIndex={-1}
                    onClick={() => {
                      console.log("button click");
                    }}
                  >
                    <Icon>
                      <Play />
                    </Icon>{" "}
                    Play Video
                  </Button>
                </figure>
                <div style={{ paddingInline: theme.space["025"] }}>
                  <a
                    href="https://www.washingtonpost.com/video/national/beagel-topper/2022/10/07/3166d0af-d3d3-45eb-abe8-7c1983f2eebb_video.html"
                    style={{
                      color: theme.colors.gray40,
                      textDecoration: "none",
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-link1`,
                        parentId: video.id,
                      });
                    }}
                    id={`${video.id}-link1`}
                    tabIndex={-1}
                  >
                    {video.headline}
                  </a>
                </div>
                <div style={{ paddingInline: theme.space["025"] }}>
                  <a
                    href="https://www.washingtonpost.com/people/washington-post/"
                    style={{
                      color: theme.colors.gray80,
                      fontSize: theme.fontSizes["075"],
                      textDecoration: "none",
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-link2`,
                        parentId: video.id,
                      });
                    }}
                    id={`${video.id}-link2`}
                    tabIndex={-1}
                  >
                    By {video.byline}
                  </a>
                </div>
              </div>
            </Component.Item>
          ))}
        </Component.Content>
      </div>
    </Component.Root>
  );
};

export const VerticalVideo = VerticalVideoTemplate.bind({});

// ----------------------------------------------------------------
// This story demonstrates the new 'firstChildActive' prop for useActiveDescendant.
// When enabled, the first descendant is should be automatically activated on focus.
const VerticalVideoAutoActiveTemplate = () => {
  const videos = [
    { id: "title-1", headline: "Title 1", byline: "Author 1" },
    { id: "title-2", headline: "Title 2", byline: "Author 2" },
    { id: "title-3", headline: "Title 3", byline: "Author 3" },
  ];

  const containerRef = useRef(null);
  // Enable auto activation by passing true as the second argument.
  const { addDescendant, handleDescendantFocus, contentProps } =
    useActiveDescendant(containerRef, true);

  return (
    <Component.Root itemsPerPage={1} onDescendantFocus={handleDescendantFocus}>
      <Component.Header
        css={{
          borderBlockStart: `1px solid ${theme.colors.primary}`,
          paddingBlockStart: theme.space["050"],
        }}
      >
        <Component.HeaderContent>
          <Component.Title css={{ fontSize: theme.fontSizes["100"] }}>
            VIDEO CAROUSEL - Auto Activate First Child
          </Component.Title>
        </Component.HeaderContent>
      </Component.Header>
      <div style={{ position: "relative" }}>
        <Component.PreviousButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "0",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": { display: "none" },
          }}
        />
        <Component.NextButton
          variant="secondary"
          css={{
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:disabled": { display: "none" },
          }}
        />
        <Component.Content {...contentProps} ref={containerRef}>
          {videos.map((video) => (
            <Component.Item key={video.id} id={video.id}>
              <div
                style={{
                  marginInlineEnd: theme.space["100"],
                  padding: "2px",
                }}
              >
                <figure
                  style={{
                    width: "187px",
                    height: "332px",
                    margin: 0,
                    marginBlockEnd: theme.space["025"],
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    alt="a very good boy"
                    src="https://www.washingtonpost.com/resizer/drBpb5wRPLd4rcxcAW71ZmwPYdQ=/376x658/filters:quality(80)/posttv-thumbnails-prod.s3.amazonaws.com/10-07-2022/t_927b58b469fe41c6a1f4a46e7e9ea96d_name_Screen_Shot_2022_10_07_at_1_05_42_PM.png"
                    style={{
                      height: "100%",
                      filter: "grayscale(100%)",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                  <Button
                    variant="primary"
                    id={`${video.id}-btn`}
                    css={{
                      position: "absolute",
                      insetInlineStart: theme.space["050"],
                      insetBlockEnd: theme.space["050"],
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-btn`,
                        parentId: video.id,
                      });
                    }}
                    tabIndex={-1}
                    onClick={() => {
                      console.log("button click");
                    }}
                  >
                    <Icon>
                      <Play />
                    </Icon>{" "}
                    Play Video
                  </Button>
                </figure>
                <div style={{ paddingInline: theme.space["025"] }}>
                  <a
                    href="https://www.washingtonpost.com/video/national/beagel-topper/2022/10/07/3166d0af-d3d3-45eb-abe8-7c1983f2eebb_video.html"
                    style={{
                      color: theme.colors.gray40,
                      textDecoration: "none",
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-link1`,
                        parentId: video.id,
                      });
                    }}
                    id={`${video.id}-link1`}
                    tabIndex={-1}
                  >
                    {video.headline}
                  </a>
                </div>
                <div style={{ paddingInline: theme.space["025"] }}>
                  <a
                    href="https://www.washingtonpost.com/people/washington-post/"
                    style={{
                      color: theme.colors.gray80,
                      fontSize: theme.fontSizes["075"],
                      textDecoration: "none",
                    }}
                    ref={(el) => {
                      addDescendant({
                        element: el,
                        id: `${video.id}-link2`,
                        parentId: video.id,
                      });
                    }}
                    id={`${video.id}-link2`}
                    tabIndex={-1}
                  >
                    By {video.byline}
                  </a>
                </div>
              </div>
            </Component.Item>
          ))}
        </Component.Content>
      </div>
    </Component.Root>
  );
};

export const VerticalVideoAutoActive = VerticalVideoAutoActiveTemplate.bind({});
VerticalVideoAutoActive.parameters = {
  chromatic: { disableSnapshot: true },
};

const InteractionsTemplate = () => {
  const items = [{ id: "item-1" }, { id: "item-2" }, { id: "item-3" }];
  const containerRef = useRef(null);
  const { handleDescendantFocus, contentProps, addDescendant, focusClassName } =
    useActiveDescendant(containerRef);
  return (
    <Box css={{ border: "1px dotted gray", width: "416px" }}>
      <Component.Root
        itemsPerPage={1}
        onDescendantFocus={handleDescendantFocus}
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
        <Component.Content {...contentProps} ref={containerRef}>
          {items.map((item, i) => (
            <Component.Item key={item.id} id={item.id}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  padding: theme.space["100"],
                  marginInlineEnd: theme.space["050"],
                }}
              >
                <p>{i + 1}</p>
                <a
                  href="#"
                  tabIndex={-1}
                  id={`${item.id}-link`}
                  ref={(el) => {
                    addDescendant({
                      element: el,
                      id: `${item.id}-link`,
                      parentId: item.id,
                    });
                  }}
                  className={focusClassName(`${item.id}-link`)}
                >
                  Link
                </a>
              </div>
            </Component.Item>
          ))}
        </Component.Content>
        <Component.Footer>
          <Component.Dots />
        </Component.Footer>
      </Component.Root>
    </Box>
  );
};

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const groups = canvas.getAllByRole("group");
  const content = groups[1];
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.keyboard("[ArrowDown]");
  expect(content).toHaveAttribute("aria-activedescendant", "item-1-link");
};

const InternalFocusTemplate = () => {
  const [asyncState, setAsyncState] = useState(false);
  const containerRef = useRef();
  const { handleDescendantFocus, contentProps, addDescendant, focusClassName } =
    useActiveDescendant(containerRef);
  return (
    <div role="main">
      <a
        href="http://www.example.com/link"
        style={{ display: "inline-block", marginBlockEnd: "16px" }}
      >
        Link
      </a>
      <Component.Root
        onDescendantFocus={handleDescendantFocus}
        css={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}
      >
        <Component.Header>
          <Component.HeaderActions>
            <Component.PreviousButton />
            <Component.NextButton />
          </Component.HeaderActions>
        </Component.Header>
        <Component.Content {...contentProps} ref={containerRef}>
          {[...Array(10)].map((_, index) => (
            <Component.Item id={`item-id-${index}`} key={`item-id-${index}`}>
              <Box
                css={{
                  padding: theme.space["100"],
                  border: `1px solid ${theme.colors.gray300}`,
                }}
              >
                <Button
                  onClick={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setAsyncState(`button-id-${index}`);
                  }}
                  tabIndex={-1}
                  id={`button-id-${index}`}
                  ref={(el) => {
                    addDescendant({
                      element: el,
                      id: `button-id-${index}`,
                      parentId: `item-id-${index}`,
                    });
                  }}
                  variant={
                    asyncState === `button-id-${index}`
                      ? "primary"
                      : "secondary"
                  }
                  className={focusClassName(`button-id-${index}`)}
                >
                  Action {index}
                </Button>
              </Box>
            </Component.Item>
          ))}
        </Component.Content>
      </Component.Root>
      <a
        href="http://www.example.com/link"
        style={{ display: "inline-block", marginBlockStart: "16px" }}
      >
        Link
      </a>
    </div>
  );
};

export const InternalFocusInteractions = InternalFocusTemplate.bind({});

InternalFocusInteractions.parameters = {
  chromatic: { viewports: [1024], disableSnapshot: true },
};
function hasClassContaining(el, str) {
  return Array.from(el.classList).findIndex((cls) =>
    cls.toLowerCase().includes(str)
  ) !== -1
    ? true
    : false;
}

InternalFocusInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.keyboard("[ArrowDown]");

  const groups = canvas.getAllByRole("group");
  const content = groups[1];
  expect(content).toHaveAttribute("aria-activedescendant", "button-id-0");

  const button1 = canvas.getByText("Action 1");
  await userEvent.click(button1);
  await waitFor(() =>
    expect(hasClassContaining(button1, "variant-primary")).toBe(true)
  );

  const button2 = canvas.getByText("Action 2");
  await userEvent.click(button2);
  await waitFor(() =>
    expect(hasClassContaining(button2, "variant-primary")).toBe(true)
  );

  await userEvent.click(canvas.getAllByRole("main")[0]);
  const item2 = canvas.getByLabelText("3 of 10");
  expect(hasClassContaining(item2, "focused-true")).not.toBe(true);
};
