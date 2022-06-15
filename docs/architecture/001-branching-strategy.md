# Branching Strategy

## Context

As WPDS grows beyond a single developer to multiple developers with external contributors and multiple versions WPDS needs a concrete branching and releasing strategy to remain consistent and organized.

Currently all features are developed in feature branches and merged to main. Periodic release are triggered manually from main. When pre-release code is needed for documentation an experimental release is triggered manually.

### Base Assumptions

- WPDS only wants to release code that is stable and complete into production
- Component code is only viewed as complete if it has accompanying documentation
- WPDS wants to keep releases steady but not too frequent by batching changes together into semantic versions
- There are no take-backs, once code is on npm it can only be deprecated. Broken versions live forever in the wild
- Adoption of latest is not guaranteed. Updating the version of WPDS by consuming teams has a cost and is a source of friction. All teams will weigh that cost and its benefit before taking new versions even if those versions are non-breaking.

## Proposal

Have two long lived branches `main` and `dev`

- `main` contains tagged semantic versions and is used to do releases, it is always stable and only contains code ready for production
- `dev` has code that is tested, approved, and feature complete but is awaiting documentation or other additional features before release
- All new feature branches happen from `dev` and are merged back into `dev`
- When a the group of changes in `dev` is deemed ready it is merged into `main` and a release is cut

### Experimental Releases

Experimental releases happen in short lived release branches, created via automation and deleted after their package version is live. This minimizes merge conflicts from version mismatches if changes occur in `main` and are merged to `dev`.

### Future Considerations

After WPDS passes v2.x there will need to be a long lived branch of the previous version for any maintenance releases.

## Scenarios to Handle

### Hot Fix

A security vulnerability is identified and fix needs to go out immediately. Concurrently the development of a new component is feature complete but its documentation is still incomplete. How is the hot fix released without releasing the component code?

**Approach**: Hot fix changes are made in a branch off of `main`, merged to main, and released. After release the hotfix branch is also merged back into `dev`. All component code would remain in `dev` unaffected.

### Related Components Epic

Three related components are developed in parallel. They all contain complementary functionality and have been grouped under an epic by product. How are these components released simultaneously in a single version?

**Approach**: All feature complete components would be merged to `dev` and an experimental release is cut. Documentation begins using the experimental release. Once documentation is finished and the components are considered complete `dev` is merged to `main` and a release is cut. After the new package is available in npm the docs site is released.

## Resources

[Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
[GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)

## Status

Proposed
