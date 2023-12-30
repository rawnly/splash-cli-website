import { useCallback, useEffect, useState } from "react";
import { usePostHog } from 'posthog-js/react'

const useClipboard = () => {
	const [copied, setCopied] = useState(false);
	const posthog = usePostHog()

	const copyToClipboard = useCallback(async (text: string) => {
		if (typeof window === "undefined") return null;
		if (!navigator.clipboard) return;

		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);

			posthog.capture('copy-to-clipboard', {
				$value: text
			})
		} catch (e) {
			console.error(e)
		}
	}, [posthog]);

	useEffect(() => {
		if (!copied) return;

		const timeout = setTimeout(() => setCopied(false), 1000);
		return () => clearTimeout(timeout);
	}, [copied]);

	return [copyToClipboard, copied] as const;
};

export default useClipboard;
