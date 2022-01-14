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

  const csharp_repositorie01 = csharpRepositories[0];
  const csharp_repositorie02 = csharpRepositories[1];
  const csharp_repositorie03 = csharpRepositories[2];
  const csharp_repositorie04 = csharpRepositories[3];
  const csharp_repositorie05 = csharpRepositories[4];

  return {
    csharp_repositorie01,
    csharp_repositorie02,
    csharp_repositorie03,
    csharp_repositorie04,
    csharp_repositorie05,
  };
};

module.exports = apiOctokit;
