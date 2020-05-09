const fetch = require('isomorphic-fetch');

class Github {
	keys = {
		client_id: '',
		client_secret: '',
	};

	constructor(client_id, client_secret) {
		this.client_id = client_id;
		this.client_secret = client_secret;
	}

	getAuthenticationHeaders = () => {
		const token = Buffer.from(`${this.client_id}:${this.client_secret}`).toString('base64');
		
		return { 'Authorization': `Basic ${token}` }
	}
	
	getAuthenticated = (url) => fetch(url, { headers: getAuthenticationHeaders() });

	getRepo = async (repo) => {
		try {
			const response = await getAuthenticated(
				`https://api.github.com/repos/${repo}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
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

	getRepoRelease = async (repo, release = 'latest') => {
		try {
			const response = await getAuthenticated(
				`https://api.github.com/repos/${repo}/releases/${release}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
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

	countRepoIssues = async (repo) => {
		const { open_issues, open_issues_count } = await this.getRepo(repo);
		return Math.max(open_issues, open_issues_count);
	};

	getRepoInfo = async (repo) => {
		const { watchers, stargazers_count, open_issues, open_issues_count, forks } = await this.getRepo(repo);
		return {
			watchers,
			stargazers_count,
			issues: Math.max(open_issues, open_issues_count),
			forks,
		};
	};
}

export default new Github('3826201f99c92815d112', '231b918d3137603519c95413fbbd63c1a653ccf8');
