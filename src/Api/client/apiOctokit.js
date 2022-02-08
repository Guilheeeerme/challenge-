const { Octokit } = require("@octokit/core");

const octokit = new Octokit();

const apiOctokit = async () => {
  const response = await octokit.request("GET /orgs/{username}/repos", {
    username: "takenet",
  });

  const csharpRepositories = response.data
    .slice(0, 5)
    .map(({ full_name, owner, description, language }) => {
      const mappedRepositories = {
        avatar_url: owner.avatar_url,
        full_name,
        description,
        language,
      };
      return mappedRepositories;
    });

  return {
    csharp_repositorie01: csharpRepositories[0],
    csharp_repositorie02: csharpRepositories[1],
    csharp_repositorie03: csharpRepositories[2],
    csharp_repositorie04: csharpRepositories[3],
    csharp_repositorie05: csharpRepositories[4]
  };
};

module.exports = apiOctokit;
