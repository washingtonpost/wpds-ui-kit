import React, { useMemo, useState, useEffect } from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Box } from "../box";
import { matchSorter } from "match-sorter";
import { InputSearch } from "./";
import { cities } from "./cities";

import type { StoryFn } from "@storybook/react";

export default {
  title: "InputSearch",
  component: InputSearch.Root,
  subcomponents: {
    Input: InputSearch.Input,
    Popover: InputSearch.Popover,
    List: InputSearch.List,
    ListItem: InputSearch.ListItem,
    ListHeading: InputSearch.ListHeading,
    EmptyState: InputSearch.EmptyState,
    LoadingState: InputSearch.LoadingState,
  },
};

const useCityMatch = (term: string) => {
  return useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(cities, term, {
            keys: [(item) => `${item.city}, ${item.state}`],
          }),
    [term]
  );
};

const Template: StoryFn<typeof InputSearch.Root> = (args) => {
  const [term, setTerm] = useState("");

  const results: { city: string; state: string }[] | null = useCityMatch(term);

  return (
    <Box css={{ width: "275px", height: "340px" }}>
      <InputSearch.Root
        {...args}
        aria-label="Example-Search"
        openOnFocus={args.openOnFocus}
      >
        <InputSearch.Input
          name="city"
          id="city"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
        {results && (
          <InputSearch.Popover>
            {results.length > 0 ? (
              <InputSearch.List>
                {results.slice(0, 20).map((result) => (
                  <InputSearch.ListItem
                    key={`${result.city.toLowerCase()}, ${result.state.toLowerCase()}`}
                    value={`${result.city}, ${result.state}`}
                  />
                ))}
              </InputSearch.List>
            ) : (
              <InputSearch.EmptyState />
            )}
          </InputSearch.Popover>
        )}
      </InputSearch.Root>
    </Box>
  );
};

export const Play = {
  render: Template,
  args: {},
  name: "InputSearch",

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const fetchCities = (value) => {
  if (value == "") {
    return [];
  }
  return new Promise((resolve) =>
    setTimeout(
      resolve,
      3000,
      matchSorter(cities, value, {
        keys: [(item) => `${item.city}, ${item.state}`],
      })
    )
  );
};

const AsyncTemplate: StoryFn<typeof InputSearch.Root> = (args) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<
    { city: string; state: string }[] | undefined
  >();

  useEffect(() => {
    if (searchTerm === "") {
      setResults(undefined);
    } else {
      setResults([]);
      const fetch = async () => {
        const response = await fetchCities(searchTerm);
        setResults(response as { city: string; state: string }[]);
      };
      fetch();
    }
  }, [searchTerm, setResults]);

  return (
    <Box css={{ width: "275px", height: "340px" }}>
      <InputSearch.Root {...args} aria-label="Example-Search" openOnFocus>
        <InputSearch.Input
          name="city"
          id="city"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {results && (
          <InputSearch.Popover>
            {results.length > 0 ? (
              <InputSearch.List>
                {results.slice(0, 20).map((result) => (
                  <InputSearch.ListItem
                    key={`${result.city.toLowerCase()}, ${result.state.toLowerCase()}`}
                    value={`${result.city}, ${result.state}`}
                  />
                ))}
              </InputSearch.List>
            ) : (
              <InputSearch.LoadingState />
            )}
          </InputSearch.Popover>
        )}
      </InputSearch.Root>
    </Box>
  );
};

export const Async = {
  render: AsyncTemplate,
  args: {},

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const GroupingTemplate: StoryFn<typeof InputSearch.Root> = (args) => {
  return (
    <Box css={{ width: "275px", height: "340px" }}>
      <InputSearch.Root {...args} aria-label="Example-Search" openOnFocus>
        <InputSearch.Input name="city" id="city" />
        <InputSearch.Popover>
          <InputSearch.List>
            <InputSearch.ListHeading>Fruits</InputSearch.ListHeading>
            <InputSearch.ListItem value="Apple" />
            <InputSearch.ListItem value="Banana" />
            <InputSearch.ListItem value="Orange" />
            <InputSearch.ListItem value="Kiwi" />
            <InputSearch.ListItem value="Pineapple" />
            <InputSearch.ListHeading title="Vegetables">
              <InputSearch.ListItem value="Carrots" />
              <InputSearch.ListItem value="Celery" />
              <InputSearch.ListItem value="Onion" />
            </InputSearch.ListHeading>
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
    </Box>
  );
};

export const Grouping = {
  render: GroupingTemplate,
  args: {},

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const ScrollTemplate: StoryFn<typeof InputSearch.Root> = (args) => {
  return (
    <Box css={{ width: "275px", height: "340px", marginBlockStart: "700px" }}>
      <InputSearch.Root {...args} aria-label="Example-Search" openOnFocus>
        <InputSearch.Input name="city" id="city" />
        <InputSearch.Popover>
          <InputSearch.List>
            <InputSearch.ListItem value="Apple" />
            <InputSearch.ListItem value="Banana" />
            <InputSearch.ListItem value="Orange" />
            <InputSearch.ListItem value="Kiwi" />
            <InputSearch.ListItem value="Pineapple" />
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
    </Box>
  );
};

export const Scroll = {
  render: ScrollTemplate,
  args: {},

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const ControlledTemplate: StoryFn<typeof InputSearch.Root> = (args) => {
  const [term, setTerm] = useState("");
  return (
    <Box css={{ width: "275px" }}>
      <InputSearch.Root
        {...args}
        aria-label="Example-Search"
        openOnFocus
        onSelect={(value) => {
          //setTerm(value);
        }}
      >
        <InputSearch.Input
          name="fruit"
          id="fruit"
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
        <InputSearch.Popover>
          <InputSearch.List>
            <InputSearch.ListItem value="Apple" />
            <InputSearch.ListItem value="Banana" />
            <InputSearch.ListItem value="Orange" />
            <InputSearch.ListItem value="Kiwi" />
            <InputSearch.ListItem value="Pineapple" />
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
    </Box>
  );
};

export const Controlled = {
  render: ControlledTemplate,
  args: {},

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const InteractionsTemplate: StoryFn<typeof InputSearch.Root> = () => (
  <Box css={{ width: "275px", height: "340px" }}>
    <InputSearch.Root aria-label="Example-Search" openOnFocus>
      <InputSearch.Input name="city" id="city" />
      <InputSearch.Popover>
        <InputSearch.List>
          <InputSearch.ListItem value="Apple" />
          <InputSearch.ListItem value="Banana" />
          <InputSearch.ListItem value="Orange" />
          <InputSearch.ListItem value="Kiwi" />
          <InputSearch.ListItem value="Pineapple" />
        </InputSearch.List>
      </InputSearch.Popover>
    </InputSearch.Root>
  </Box>
);

export const Interactions = {
  render: InteractionsTemplate,

  play: async () => {
    const input = await screen.findByLabelText("Search");
    await userEvent.type(input, "app", {
      delay: 100,
    });
    await userEvent.keyboard("[ArrowDown]");
    await expect(input).toHaveDisplayValue("Apple");
  },
};
