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

## Typescript

### FAQ

### Why is Typescript throwing warnings about the `css` object in Stitches?

VS Code is using a newer version (`4.6.X`) of Typescript that is currently incompatible with Stitches ([They are using 4.4.3](https://github.com/modulz/stitches/blob/0ebaf9f988871ac0d8d5f2b72f2a8042e0d1b56f/package.json#L53)). We are using `4.5.5`.

We recommend adding this setting to your `.vscode/settings.json` file:

```json
"typescript.tsdk": "./node_modules/typescript/lib"
```

Also pick the TS version in the language server settings. It will appear when a TS file is opened.
