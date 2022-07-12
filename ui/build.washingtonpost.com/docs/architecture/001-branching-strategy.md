# Branching Strategy

## Context

As WPDS grows beyond a single developer to multiple developers with external contributors and multiple versions WPDS needs a concrete strategy for branching and releasing to remain consistent and organized.

Currently, all features are developed in feature branches and merged into the `main` branch. Periodic releases are triggered manually from that `main` branch. When pre-release code is needed for documentation an experimental release is triggered manually.

### Base Assumptions

- WPDS only wants to release code that is stable and complete into production
- Component code is only viewed as complete if it has accompanying documentation
- WPDS wants to keep releases steady but not too frequent by batching changes together into semantic versions
- There are no take-backs, once code is on npm it can only be deprecated. Broken versions live forever in the wild
- Adoption of the latest version is not guaranteed. Updating the version of WPDS by consuming teams has a cost and is a source of friction. All teams will weigh that cost and its benefit before taking new versions even if those versions are non-breaking.

## Proposal

Have two long-lived branches `main` and `production`

- the `production` branch contains tagged semantic versions and is used to do releases, it is always stable and contains code currently released on npm
- the `main` branch has code that is tested, approved, and feature-complete but is awaiting documentation or other additional features before release
- All new feature branches happen from `main` and are merged back into `main`
- When a group of changes in `main` is deemed ready it is merged into `production` and a release is cut

### Experimental Releases

Experimental releases happen in short-lived release branches, created via automation and deleted after their package version is live. This minimizes merge conflicts from version mismatches if changes occur in `production` and are merged to `main`.

### Future Considerations

After WPDS passes v2.x there will need to be a long-lived branch of the previous version for any maintenance releases.

## Scenarios to Handle

### Hotfix

A security vulnerability is identified and a fix needs to go out immediately. Concurrently, the development of a new component is feature complete but its documentation is still incomplete. How is the hotfix released without releasing the component code?

**Approach**: Hotfix changes are made in a branch off of `production`, merged to `production`, and released. After release, the `production` branch is merged back into the `main` branch. All component code would remain in the `main` branch unaffected.

### Related Components Epic

Three related components are developed in parallel. They all contain complementary functionality and have been grouped under an epic by product. How are these components released simultaneously in a single version?

**Approach**: Feature-complete components would be merged to the `main` branch and an experimental release cut. Documentation begins using the experimental release. Once documentation is finished and the components are considered complete `dev` is merged to `main` and a release is cut. After the new package is available in npm the docs site is released.

## Resources

[Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
[GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

## Status

Proposed
