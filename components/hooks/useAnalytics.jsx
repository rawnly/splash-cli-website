import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * @param analyticsId String
 */
export default (analyticsId) => {
	const router = useRouter();
	const debug = process.env.NODE_ENV !== 'production';

	useEffect(() => {
		try {
			ReactGA.initialize(analyticsId, { debug });
			ReactGA.pageview(router.pathname);
		} catch (e) {
			console.error(e);
		}
	}, []);
};
