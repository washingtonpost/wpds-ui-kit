# Search

```jsx
import { Search } from "@washingtonpost/wpds-ui-kit";

function Component() {
  return <Search />;
}
```

## Search component so far (files updated/created/changed):

#### Search.tsx

The main file. Everything is up to date. Could perhaps use some comments? But it's set up as the rest of our more complex components are. This is where you pass the `openOnFocus` prop. However, it only opens the `Search.Popover` when something has already been typed. If the input is completely empty, the popover won't be triggered. Hadn't yet started to even address this issue yet.

TODO: (goes with what's in SearchPopover.tsx and SearchInput.tsx comments) Popover needs to be triggered when the input is focused but nothing has been typed in yet.

#### SearchInput.tsx

This is where the input part of the component lives. I'm using/extending the WPDS input-text component with `type=search`. The current version of the search input covers up the search button with the clear button when something is typed in. This means that there's no way to click the search button and it relies solely on `onEnter` functionality. After a chat with design, we decided to update all search inputs to have both the clear 'X' button and the search button.

TODO: when you press the search button the search should be run
TODO: when you focus on the input (before typing anything) the popover should open with some preloaded content
TODO: the `ComboInput` component keeps complaining about something regarding type. Haven't gotten around to addressing it yet
TODO: when you press the clear button, it clear out the text but then when you focus back in it brings back the old content. I think the ref is not getting cleared out correctly.

#### InputText/InputText.tsx

This is the main input component. Trying to keep all other functionality the same, we now do several things for the search input alone. First, we now override/hide the default search clear button for both wekit and edge (will need to test on edge too).

TODO: There's a weird type thing with the onlick on line 340. We want the input content to be cleared instantly when the close button is pressed. But it doesn't seem to match what we're passing in to the other onClicks on the page? Unsure why this one is being weird right now.
TODO: Just do a quick double check that everything in the regular inputs is working as it was before.
TODO: I think when the `ref` is cleared out/updated (compared to the internalRef - like in the SearchInput), it's not clearing out correctly

#### SearchList.tsx

This is the component that holds the result contents. In this component I basically just remove the built-in paddings and margins from reach-ui, align, and set the overflowY.

TODO: haven't taken into account overflowX yet. Something to think about

#### SearchListItem.tsx

This is the component that holds each result. This component unsets the listItem styles inherited from default list itmes and sets the set height per item as specified by the specs. Also, it seems that the only way to style the parts of the results that match what's already been typed by the user is by targeting `[data-user-value="true"]`. It's the cleanest way I could find, but perhaps you can find another?

TODO: design doesn't take into account result items that are wider than the container. Should it wrap? Should it ellipse? Nobody knows.
TODO: Remove `any` types.

#### SearchPopover.tsx

This component is the main container that holds all the things and that opens when we interact with the input. I am unsure how to get it to open on focus (with nothing typed). As of now, it opens on focus when you pass `openOnFocus` to the main Search component. However, you have to have typed something in already for this to work.

#### SearchEmptyState.tsx

Most everything else should be finished and look according to spec

TODO: Remove `any` type.

#### SearchLoadingState.tsx

Most everything else should be finished and look according to spec

TODO: Remove `any` type.

#### SearchOtherState.tsx

Since both the empty state and the loading state have the same formatting and the only things that differ are the specific icon used and the text that goes with it, I create this abstraction to try and remove some code duplication. The main thing left to do in this file is to remove the `any` types. You can also rename this file? I was trying to communicate that it's a wrapper for the different type of states the component can have outside of the main one...

TODO: Remove `any` type.

#### README.md

Other than these notes, I haven't updated anything yet on this file.

TODO: update README with relevant information.

#### Other notes:

Have been using [the code sandbox example/exploration I did for the spike](https://codesandbox.io/s/search-component-exploration-egv014?file=/src/reachUiCombobox.js) as a reference for some things too

TODO: Design wants filtering within the actual popover
TODO: onResultHover (mentioned in zeplin)
TODO: Add docs + examples (code)
