# WPDS's UI Kit

![npm (tag)](https://img.shields.io/npm/v/@washingtonpost/wpds-ui-kit/latest)

#### [Explore the Docs](https://build.washingtonpost.com)

#### [#wpds on Slack](https://washpost.slack.com/archives/C01FWHF12BG)

This project structure is heavily inspired by Chakra UI, Radix UI, and others.

A single import for users, many packages imported in `@washingtonpost/wpds-ui-kit`.

```bash
npm i @washingtonpost/wpds-ui-kit
```

## [Contributing](docs/CONTRIBUTING.md)

## Dependency Graph

An example of the dependency graph for importing Button from Kit.

```mermaid
flowchart LR
A["@washingtonpost/wpds-theme"] --> B["@washingtonpost/wpds-ui-kit"]
C["@washingtonpost/wpds-button"] --> B["@washingtonpost/wpds-ui-kit"]
A["@washingtonpost/wpds-theme"] --> C["@washingtonpost/wpds-button"]
click A "https://github.com/WPMedia/wpds-ui-kit/tree/main/ui/theme"
click B "https://github.com/WPMedia/wpds-ui-kit/tree/main/ui/kit"
click C "https://github.com/WPMedia/wpds-ui-kit/tree/main/ui/button"
```

## [React Guide](https://build.washingtonpost.com/resources/guides/react-guide)

## Statuses

- [![Chromatic Production](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/chromatic-prod.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/chromatic-prod.yml)
- [![Validate](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/validation.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/validation.yml)
- [![Release to Latest NPM Channel](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/latest-release.yml/badge.svg)](https://github.com/WPMedia/wpds-ui-kit/actions/workflows/latest-release.yml)
