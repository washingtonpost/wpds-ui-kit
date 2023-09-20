import * as React from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Box } from "@washingtonpost/wpds-box";
import { matchSorter } from "match-sorter";
import { InputSearch } from "./";
import { cities } from "./cities";
import { citiesDB } from "./cities-db";

import type { ComponentStory } from "@storybook/react";

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
  return React.useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(cities, term, {
          keys: [(item) => `${item.city}, ${item.state}`],
        }),
    [term]
  );
};

const Template: ComponentStory<typeof InputSearch.Root> = (args) => {
  const [term, setTerm] = React.useState("");

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

export const Play = Template.bind({});

Play.args = {};

Play.storyName = "InputSearch";

Play.parameters = {
  chromatic: { disableSnapshot: true },
};

const useCityMatchDB = (term: string) => {
  return React.useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(citiesDB, term, {
          keys: [(item) => `${item.city}, ${item.state}`],
        }),
    [term]
  );
};

const LookupTableTemplate: ComponentStory<typeof InputSearch.Root> = (args) => {
  const [term, setTerm] = React.useState("");

  const results: { city: string; state: string }[] | null = useCityMatchDB(term);

  const lookupTable = React.useRef({});

  return (
    <Box css={{ width: "275px", height: "340px" }}>
      <InputSearch.Root
        {...args}
        aria-label="Example-Search"
        openOnFocus={args.openOnFocus}
        onSelect={value => {
          console.log("onSelect value", value);
          console.log("onSelect LookupTable.current", lookupTable.current);
          const data = lookupTable.current[value];

          // we have access to all the data's properties
          console.log("data", data);
        }}
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
                {results.slice(0, 20).map((result) => {
                  const value = `${result.city}, ${result.state}`

                  // populate the lookup table 
                  lookupTable.current[value] = result

                  return (
                    <InputSearch.ListItem
                      key={value.toLowerCase()}
                      value={value}
                    />
                  )
                })}
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

export const LookupTable = LookupTableTemplate.bind({});

LookupTable.args = {};

LookupTable.storyName = "LookupTable";

LookupTable.parameters = {
  chromatic: { disableSnapshot: true },
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

const AsyncTemplate: ComponentStory<typeof InputSearch.Root> = (args) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState<
    { city: string; state: string }[] | undefined
  >();

  React.useEffect(() => {
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

export const Async = AsyncTemplate.bind({});

Async.args = {};

Async.parameters = {
  chromatic: { disableSnapshot: true },
};

const GroupingTemplate: ComponentStory<typeof InputSearch.Root> = (args) => {
  return (
    <Box css={{ width: "275px", height: "340px" }}>
      <InputSearch.Root {...args} aria-label="Example-Search" openOnFocus>
        <InputSearch.Input name="city" id="city" />
        <InputSearch.Popover>
          <InputSearch.List>
            <InputSearch.ListItem value="Apple" />
            <InputSearch.ListItem value="Banana" />
            <InputSearch.ListItem value="Orange" />
            <InputSearch.ListItem value="Kiwi" />
            <InputSearch.ListItem value="Pineapple" />
            <InputSearch.ListHeading>Vegetables</InputSearch.ListHeading>
            <InputSearch.ListItem value="Carrots" />
            <InputSearch.ListItem value="Celery" />
            <InputSearch.ListItem value="Onion" />
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
    </Box>
  );
};

export const Grouping = GroupingTemplate.bind({});

Grouping.args = {};

Grouping.parameters = {
  chromatic: { disableSnapshot: true },
};

const ScrollTemplate: ComponentStory<typeof InputSearch.Root> = (args) => {
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

export const Scroll = ScrollTemplate.bind({});

Scroll.args = {};

Scroll.parameters = {
  chromatic: { disableSnapshot: true },
};

const InteractionsTemplate: ComponentStory<typeof InputSearch.Root> = () => (
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

export const Interactions = InteractionsTemplate.bind({});

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async () => {
  // radix Label needs a tick to associate labels with inputs
  await sleep(0);
  const input = screen.getByLabelText("Search");
  await userEvent.type(input, "app", {
    delay: 100,
  });
  await userEvent.keyboard("[ArrowDown]");
  await expect(input).toHaveDisplayValue("Apple");
};
