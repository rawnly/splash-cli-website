import Typed from 'typed.js';

import { useEffect, useRef } from 'react';

export default (props = { options: {} }) => {
	const typedRef = useRef();

	useEffect(() => {
		const options = {
			typeSpeed: 30,
			backSpeed: 5,
			showCursor: true,
			cursorChar: '|',
			smartBackspace: true,
			loop: true,
			strings: props.strings,
			...props.options,
		};

		const typed = new Typed(typedRef.current, options);

		return () => typed.destroy();
	});

	return <span ref={typedRef} />;
};
