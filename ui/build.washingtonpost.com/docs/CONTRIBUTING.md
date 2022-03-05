# How to contribute

This project uses the [fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in Github for anyone outside of the core maintainers.

## Develop Locally

We use NVM to manage node versions. Our node version is in the `./nvmrc` file. We use NPM 8.3.0. We also assume you have access to our private org on NPM.

Run the following commands to get your local development environment set up.

```shell
nvm use
```

```shell
npm i -g npm@8.3.0
```

```shell
npm install
```

```shell
npm run build
```

We use Storybook to develop locally along with Playroom and Next.js.

```bash
npm run storybook
```

```shell
npm run playroom:start
```

You can run `npm run dev` to develop and test with the test app.

## Testing

We use Testing Library and/or Storybook's new Interaction feature for Unit & Interaction Testing

This command runs the Jest.

```shell
npm run test
```

This command runs the Storybook Test runner

```shell
npm run test-storybook
```

We use Playwright for Integration testing

Good resources on testing:

- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change

Avoid writing "render" or "display" unit or playwright tests. Leverage our "Tests" stories in Storybook for this. Those UI tests will be tested in Chromatic.

## Component Development

Create a new component use the following command. It will stub out all the required files using plop-templates.

```sh
npm run new-component NewComponentName
```

[## Contribute a component](https://build.washingtonpost.com/resources/guides/contribute-a-component)
