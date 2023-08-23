# Releasing

- We are using [Lerna](https://github.com/lerna/lerna)
- The [commit message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) informs the system which release type to create

| Commit message                                                     | Release type            |
| ------------------------------------------------------------------ | ----------------------- |
| fix(pencil): stop graphite breaking when too much pressure applied | Fix Release (0.0.1)     |
| feat(pencil): add 'graphiteWidth' option                           | Feature Release (0.2.0) |

## Upload Bundled Code to Latest channel

- Open a PR against Main
- Make sure your commit (any of them) follow the commit message format
- Ask your team for a review
- Use rebase or squash merge whichever will retain the commit message
- Visit [https://github.com/WPMedia/wpds-ui-kit/actions](https://github.com/WPMedia/wpds-ui-kit/actions)
- Pick the `Release to Latest NPM Channel` workflow
- Select from dropdown the main branch and click submit
- The workflow will run the release actions for you

## Upload Bundled Code to Experimental channel

This is meant for testing your code with hosting systems such as WPDS Docs, Spectrum, etc. Please do not abuse this. We can create more channels for your case. Please contact #wpds channel and state your case

- Make sure your commit (any of them) follow the commit message format
- Ask your team for a review
- Visit [https://github.com/WPMedia/wpds-ui-kit/actions](https://github.com/WPMedia/wpds-ui-kit/actions)
- Pick the Experimental release workflow
- Select from dropdown your branch and click submit
- The workflow will run the release actions for you
