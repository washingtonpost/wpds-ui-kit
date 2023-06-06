import * as React from "react";
import { Search } from "./";

import type { ComponentStory } from "@storybook/react";
import { matchSorter } from "match-sorter";
import { cities } from "./cities";

export default {
  title: "Search",
  component: Search.Root,
  subcomponents: {
    Input: Search.Input,
    Popover: Search.Popover,
    List: Search.List,
    ListItem: Search.ListItem,
    EmptyState: Search.EmptyState,
    LoadingState: Search.LoadingState,
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

const Template: ComponentStory<typeof Search.Root> = (args) => {
  const [term, setTerm] = React.useState("");
  //TODO: results not clearing out when we set term
  const results: any = useCityMatch(term);

  return (
    <Search.Root {...args} aria-label="Example-Search" openOnFocus>
      <Search.Input onChange={(event) => setTerm(event.target.value)} />
      {results && (
        <Search.Popover>
          {results.length > 0 ? (
            <Search.List>
              {results.slice(0, 10).map((result, index) => (
                <Search.ListItem
                  key={result.city}
                  value={`${result.city}, ${result.state}`}
                />
              ))}
            </Search.List>
          ) : (
            // <Search.LoadingState />
            <Search.EmptyState />
          )}
        </Search.Popover>
      )}
    </Search.Root>
  );
};

export const Play = Template.bind({});

Play.args = {};

Play.storyName = "Search";

Play.parameters = {
  chromatic: { disableSnapshot: true },
};
