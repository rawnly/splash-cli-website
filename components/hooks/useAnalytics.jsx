import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

/**
 * @param analyticsId String
 */
export default (analyticsId) => {
	const router = useRouter();
	const debug = process.env.NODE_ENV !== 'production';

	try {
		ReactGA.initialize(analyticsId, { debug });
		ReactGA.pageview(router.pathname);

		return true;
	} catch (e) {
		return false;
	}
};
