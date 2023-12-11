# Version Next.js Docs of our Library (v1, v2, etc)

## Problem

We want to version our docs, so that we can have multiple versions of our docs to support the major versions of our library.

## Solution

We will create a `v1` git branch and a `v2` git branch after we launch `v2` it will be `main`. v1 will be hosted on a branch deploy in Vercel and traffic sent to `https://build.washingtonpost.com/v1/...` will be redirected to the v1 docs. Traffic sent to `https://build.washingtonpost.com/...` will be redirected to the v2 docs. We will update the basePath in the `next.config.js` file to `/v1`.
