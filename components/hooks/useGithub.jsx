import Github from '../../utils/github';
import { useState, useEffect } from 'react';

export default (repo) => {
	const [issues, setIssues] = useState(0);
	const [release, setRelease] = useState(null);

	useEffect(() => {
		Github.countRepoIssues(repo).then(setIssues);
		Github.getRepoRelease(repo).then(setRelease);
	}, []);

	return [issues, release];
};
