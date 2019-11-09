export default () => {
	if (typeof window === 'undefined') return {};

	const url = new URL(window.location.href);
	const iterator = url.searchParams.keys();
	const params = [...iterator].reduce(
		(a, b) => ({
			...a,
			[b]: url.searchParams.get(b),
		}),
		{},
	);

	return params;
};
