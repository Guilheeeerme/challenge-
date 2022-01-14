const apiOctokit = require("./client/apiOctokit");

module.exports.getRepositories = async (event) => {
  try {
    const csharp_repositories = await apiOctokit();

    return {
      statusCode: 200,
      body: JSON.stringify(csharp_repositories),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
