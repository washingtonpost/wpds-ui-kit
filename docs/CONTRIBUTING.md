# How to contribute

This project uses the [fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in Github for anyone outside of the core maintainers.

## Develop Locally

We use NVM to manage node versions. Our node version is in the `./nvmrc` file. We also assume you have access to our private org on NPM.

Run the following commands to get your local development environment set up.

1. Make sure you're using the specified npm version

```shell
nvm use
```

2. Install all dependencies off of the package-lock.json. (Use `npm i` if you're introducing new dependencies. Please note that all dev-dependencies need to be listed on the root package.json as well as the package specific package.json)

```shell
npm ci
```

3. Builds all the things

```shell
npm run build
```

4. We use Storybook to develop locally along with Next.js.

```bash
npm run storybook
```

5. Don't forget to add your component to the kitchen-sink page. You can run `npm run docsite:dev` to develop and test with the [kitchen-sink page](https://github.com/washingtonpost/wpds-ui-kit/blob/main/build.washingtonpost.com/pages/kitchen-sink/index.tsx). You can only access this page directly via `http://localhost:3000/kitchen-sink`. This page allows us to quickly check that all the components render as expected.

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

Good resources on testing:

- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change

Avoid writing "render" or "display" tests. Leverage our "Tests" stories in Storybook for this. Those UI tests will be tested in Chromatic.

## Component Development

Create a new component use the following command. It will stub out all the required files using plop-templates.

```sh
npm run new-component NewComponentName
```

You can create an experimental release for testing by following the [release doc](https://github.com/washingtonpost/wpds-ui-kit/blob/main/docs/RELEASING.md)

## Contribute a component

- https://build.washingtonpost.com/resources/guides/contribute-a-component

## Release a component
- https://github.com/washingtonpost/wpds-ui-kit/blob/main/docs/RELEASING.md
