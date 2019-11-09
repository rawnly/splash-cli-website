import '../css/navbar.scss';

import Link from 'next/link';
import LinkSmoothScroll from './LinkSmoothScroll';

const capitalizeWord = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length);
const capitalize = (str) =>
	str
		.split(' ')
		.map((word) => capitalizeWord(word))
		.join(' ');

const NavbarItem = (props) => (
	<li className={props.options.disabled ? 'disabled' : ''}>
		{props.options.anchor ? (
			<LinkSmoothScroll href={'/' + props.options.href}>{capitalize(props.options.text)}</LinkSmoothScroll>
		) : props.options.disabled ? (
			<a onClick={(e) => e.preventDefault()}>{capitalize(props.options.text)}</a>
		) : (
			<Link href={props.options.href}>
				<a className={props.options.button ? 'button' : ''}>
					{capitalize(props.options.text)}
					{props.options.pop > 0 && <div className="pop">{props.options.pop}</div>}
				</a>
			</Link>
		)}
	</li>
);

export default (props) => (
	<nav
		style={{
			zIndex: 9999,
		}}>
		<ul>
			{props.items
				.filter((e) => !e.right)
				.map((item, index) => (
					<NavbarItem options={item} key={index} />
				))}
		</ul>
		<ul>
			{props.items
				.filter((e) => e.right)
				.map((item, index) => (
					<NavbarItem options={item} key={index} />
				))}
		</ul>
	</nav>
);
