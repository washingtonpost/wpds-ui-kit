const { Octokit } = require("@octokit/core");

/**
 * get a list of repo's contributors
 */

const getListOfContributors = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
  });

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contributors",
    {
      owner: "washingtonpost",
      repo: "wpds-ui-kit",
    }
  );

  return response.data;
};

getListOfContributors().then((data) => {
  const contributors = data.map((contributor) => {
    return {
      name: contributor?.login,
      avatar: contributor?.avatar_url,
      url: contributor?.html_url,
    };
  });

  console.log(contributors);
});
