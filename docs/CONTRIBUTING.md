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

## Testing an PR in your project

We will use the `npx git-publish` CLI from [git-publish](https://github.com/privatenumber/git-publish) to test a PR in your project. Along with [GitPkg](https://gitpkg.vercel.app). This will allow you to test a PR in your project without having to wait for a release. This method will unlock the ability to test in Preview and Staging environments. We're looking into automating this as part of our PR CI.

```sh
# cd into the package directory for the component you want to test
cd ui/select
# run the git-publish command. it will prompt you to install if its your first time
npx git-publish
# it will publish the package to our repo under `npm/<your-branch-name>`
```

Then in your project you can run the following command to install the package from the branch.

```sh
npm install 'https://gitpkg.now.sh/washingtonpost/wpds-ui-kit/<component-directory>?<your-branch-name'
```

### Troubleshooting

You may need to override the version of the package in your package.json. You can do this by adding the following to your package.json.

```json
"overrides": {
  "@washingtonpost/wpds-select": "https://gitpkg.now.sh/washingtonpost/wpds-ui-kit/select?main"
}
```

Or running `npm dedupe` after installing the package.
