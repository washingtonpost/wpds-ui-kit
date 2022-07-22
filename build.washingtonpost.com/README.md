# WPDS Documentation site

We built this site to document the WPDS UI Kit. It's built with [Next.js](https://nextjs.org/). It's hosted on [Vercel](https://vercel.com/). It's written in [TypeScript](https://www.typescriptlang.org/).

## Getting started

We assume a Node.js environment using `lts/gallium` version of Node.js.

1. Install nvm in order to control the node versions you're using

```bash
brew install nvm
```

2. Install `node v14.18.2`. Using `v14` or `v14:latest` won't work. You can also check the `.nvmrc` for the exact version.

```bash
nvm install v14.18.2
```

3. After installing node v14.18.2, you'll need to override the npm version with version 8.3.0. It's important to do this second, as installing node will override the npm version.

```bash
npm -g npm@8.3.0
```

4. Install all the dependencies from package-lock.json (unless you're adding a new dependency)

```bash
npm ci
```

5. Open http://localhost:3000/. If you get an error, try reloading the page. It's a feature, not a bug ;)

## Environment variables

Our documentation search uses [algolia](https://www.algolia.com/) to index the content. The API Key is stored in Vercel for safe keeping. If you want to test it locally or in CI please use the Vercel CLI to access them.

1. Install the Vercel CLI:

```bash
npm install -g vercel
```

2. Login into Vercel via the CLI:

```bash
vercel login
```

3. Run the `dev` command and follow the instructions. It will connect this repository to your Vercel account and the project.

```bash
vercel dev
```

Happy developing!