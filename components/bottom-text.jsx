import { Component } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import '../css/bottom-text.scss';

export const Version = (
	props = {
		dark: false,
		isLeft: true,
		isRight: false,
	},
) => (
	<a
		href="https://github.com/splash-cli/splash-cli/releases/latest"
		className={cx('bottom-text', {
			dark: props.dark,
			left: props.isLeft,
			right: props.isRight,
		})}>
		{props.version}
	</a>
);

export const License = (props) => (
	<Link href="/license">
		<a
			href="#"
			className={cx('bottom-text', {
				dark: props.dark,
				left: props.isLeft,
				right: props.isRight,
			})}>
			MIT
		</a>
	</Link>
);
