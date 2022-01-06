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

See WPDS Docs -> Component Development

-   [ ] Add a new ssr-test to `pages/<component-name>.js`
-   [ ] Add a new component variation to the existing UI "Tests" `ui/<component-name>/stories/<component-name>.js`
-   [ ] Add a new test to the kitchen sink `ssr-testing/pages/kitchen-sink.tsx`
-   [ ] Add a new integration test to `ui/<component-name>/tests/<component-name>.spec.js`
-   [ ] Add a new unit test to `ui/<component-name>/tests/<component-name>.test.js`
