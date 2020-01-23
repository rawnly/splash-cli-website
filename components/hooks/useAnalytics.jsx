import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useReactGA = (trackingId, config) => {
	const [initialized, setInitialized] = useState(false);

	if (!initialized) {
		ReactGA.initialize(trackingId, config);
		setInitialized(true);
	}

	return ReactGA;
};

/**
 * @param trackingId String
 * @param config Object
 */
export default (trackingId, config) => {
	const router = useRouter();
	const analytics = useReactGA(trackingId, config);

	useEffect(() => {
		try {
			analytics.pageview(router.asPath || router.pathname);
		} catch (e) {
			console.error(e);
		}
	}, []);
};
