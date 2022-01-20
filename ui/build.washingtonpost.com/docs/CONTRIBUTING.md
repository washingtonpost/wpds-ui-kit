# How to contribute

This project uses the [fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in Github for anyone outside of the core maintainers.

## Develop Locally

You can run `all:dev` to develop and test with Storybook, Playroom, and Next.js.

## Testing

We use Testing Library for Unit Testing.
We use Playwright for Interaction/Integration ( and Server Side Render) Testing.

Good resources on testing:

-   https://kentcdodds.com/blog/testing-implementation-details
-   https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change

Avoid writing "render" or "display" unit or playwright tests. Leverage our "Tests" stories in Storybook for this. Those UI tests will be tested in Chromatic.

## Component Development

Create a new component use the following command. It will stub out all the required files using plop-templates.

```sh
npm run new-component
```

## Component Design

These are our core tenets for component design. We use these to guide our component development. We also use these to guide our component design decisions.

-   Our components should do one thing really well! This is why we call them atoms.
-   They should refrain from using external dependencies (Cookies, Window Objects, Business Logic, etc).
-   They should be controlled by their API or left uncontrolled.
-   If a component has multiple DOM nodes such as an Accordion's trigger and it's display, it should be split into multiple components. Such as AccordionTrigger and AccordionDisplay and use a provider component to manage the state across the two (AccordionRoot).
-   We should avoid using any DOM APIs that are not supported by evergreen browsers.
-   We should should allow modification of styles via the `css` prop using our tokens (component (locally scoped and global) and theme).
-   We should use our theme tokens to style our components.
