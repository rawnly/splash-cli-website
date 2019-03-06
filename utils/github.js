const fetch = require("isomorphic-fetch");

export const getRepo = async (owner, repoName) => {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repoName}?client_id=${process.env.CLIENT_ID}&client_secret=${
				process.env.CLIENT_SECRET
			}`,
		);

		if (response.ok) {
			return await response.json();
		}

		return [response.status, response.statusText];
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const getRepoIssues = async (owner, repoName) => {
	const { open_issues, open_issues_count } = await getRepo(owner, repoName);
	return Math.max(open_issues, open_issues_count);
};

export const getRepoInfo = async (owner, repoName) => {
	const { watchers, stargazers_count, open_issues, open_issues_count, forks } = await getRepo(owner, repoName);
	return {
		watchers,
		stargazers_count,
		issues: Math.max(open_issues, open_issues_count),
		forks,
	};
};
