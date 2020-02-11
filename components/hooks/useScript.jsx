import React from 'react';

export default function useScript(src) {
	React.useEffect(() => {
		const script = document.createElement('script');
		script.src = src;
		// script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [src]);
}
