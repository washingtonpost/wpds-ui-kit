# WPDS's UI Kit

![npm (tag)](https://img.shields.io/npm/v/@washingtonpost/wpds-ui-kit/latest)

#### [Explore the Docs](https://build.washingtonpost.com)

#### [#wpds on Slack](https://washpost.slack.com/archives/C01FWHF12BG)

This project structure is heavily inspired by Chakra UI, Radix UI, and others.

A single import for users, many packages imported in `ui/kit`.

```mermaid
graph TD
D[ui/theme] -->B[ui/kit]
E[ui/component] -->B
```

```bash
npm i @washingtonpost/wpds-ui-kit
```

## [Contributing](docs/CONTRIBUTING.md)

## [React Guide](https://build.washingtonpost.com/resources/guides/react-guide)

## Statuses

- [![Chromatic Production](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/chromatic-prod.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/chromatic-prod.yml)
- [![Validate](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/validation.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/validation.yml)
- [![Release to Latest NPM Channel](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/latest-release.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/latest-release.yml)
