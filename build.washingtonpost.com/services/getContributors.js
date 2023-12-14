import { Octokit } from "@octokit/core";

const getListOfContributors = async ({
  owner = "washingtonpost",
  repo = "wpds-ui-kit",
}) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contributors",
    {
      owner,
      repo,
    }
  );

  return response.data;
};

export const getContributors = async () => {
  const [kitContributors, wamContributors] = await Promise.all([
    getListOfContributors({ repo: "wpds-ui-kit" }),
    getListOfContributors({ repo: "wpds-assets-manager" }),
  ]);

  const contributors = [...kitContributors, ...wamContributors];

  return (
    contributors
      .map((contributor) => {
        return {
          name: contributor?.login,
          avatar: contributor?.avatar_url,
          url: contributor?.html_url,
        };
      })
      // Remove duplicates
      .filter(
        (contributor, index, self) =>
          index === self.findIndex((t) => t.name === contributor.name)
      )
      // add a contributor manually
      .concat({
        name: "unconstruct",
        avatar: "https://avatars.githubusercontent.com/u/4473245?v=4",
        url: "https://github.com/unconstruct",
      })
      .concat({
        name: "JasonBernert",
        avatar: "https://avatars.githubusercontent.com/u/2956240?v=4",
        url: "https://github.com/JasonBernert",
      })
      .concat({
        name: "baconjulie",
        avatar: "https://avatars.githubusercontent.com/u/5865863?v=4",
        url: "https://github.com/baconjulie"
      })
      .concat({
        name: "erikreyna",
        avatar: "https://avatars.githubusercontent.com/u/2431045?v=4",
        url: "https://github.com/erikreyna"
      })
      // sort alphabetically
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .filter((contributor) => {
        return !contributor?.name?.includes("bot");
      })
  );
};
