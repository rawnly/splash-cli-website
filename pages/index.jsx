import { useAnalytics, useQuery, useGithub } from '../components/hooks';

import {
	RoundedLabel,
	Navbar,
	Version,
	License,
	Head,
	ProductHuntBanner as Banner,
	Typed as TypedComponent,
} from '../components';

import '../css/master.scss';
import { useState, useEffect } from 'react';

const authors = new Map();

authors.set(1, { id: 1, name: 'Jessica Fadel', username: 'jessicalfadel', theme: 'white' });
authors.set(2, { id: 2, name: 'Tom Öhlin', username: 'tomohlin', theme: 'white' });
authors.set(3, { id: 3, name: 'Raul Angel', username: 'raulangel', theme: 'white' });
authors.set(4, { id: 4, name: 'chuttersnap', username: 'chuttersnap', theme: 'white' });

authors.set(5, { id: 5, name: 'Tiago Muraro', username: 'tiago', theme: 'black' });

const Page = (props) => {
	useAnalytics('UA-127454453-1');

	const query = useQuery();

	const [issues = 0, release = {}] = useGithub('splash-cli/splash-cli');
	const [author, setAuthor] = useState(authors);
	const [navbarItems, setNavbarItems] = useState([
		{
			text: 'Install',
			anchor: true,
			href: '#install',
		},
		{
			text: 'docs',
			href: '/docs',
		},
		{
			right: true,
			text: 'Product Hunt',
			href: 'https://producthunt.com/posts/splash-cli',
		},
		{
			right: true,
			text: 'Github',
			button: true,
			href: 'https://github.com/splash-cli/splash-cli',
			pop: issues,
		},
	]);

	useEffect(() => {
		setNavbarItems((items) =>
			items.map((item) =>
				item.text === 'Github'
					? {
							...item,
							pop: issues,
					  }
					: item,
			),
		);
	}, [issues]);

	useEffect(() => {
		setAuthor(authors.get(Math.floor(Math.random() * 5) + 1));
	}, []);

	return (
		<div>
			<Head />
			<Banner isOpen={query.ref === 'producthunt'} background="#da552f" color="#F8F6F7">
				Hello <b>Hunter</b>! Thank you for your interest 🎉
			</Banner>

			<Banner isOpen={query.ref === 'github'} background="#1d1d1d" color="#F8F6F7">
				Hello! Thank you for interest! Have fun 🎉
			</Banner>

			<section className="container">
				<div className="content">
					<Navbar items={navbarItems} color={author.theme} />

					<h1
						id="splash-title"
						style={{
							color: author.theme,
						}}>
						<span>JUST TYPE</span> <span>SPLASH</span> <span>THAT'S IT</span>
					</h1>

					<div
						className="terminal"
						style={{
							background: `url("/static/backgrounds/${author.id}/terminal.png") center no-repeat / contain`,
						}}
					/>

					<Version isLeft version={release && release.name} />
					<License isRight />

					<div className="credits">
						<RoundedLabel background="white" color="#1d1d1d" className="fadeInBottom">
							📸 by{' '}
							<a target="_blank" href={`https://unsplash.com/@${author.username}`}>
								{author.name}
							</a>{' '}
							on{' '}
							<a target="_blank" href="https://unsplash.com">
								Unsplash
							</a>
						</RoundedLabel>
					</div>
				</div>

				<div
					className="background smooth"
					style={{
						background: `url("/static/backgrounds/${author.id}/background_${author.id}.jpg") center no-repeat / cover`,
					}}
				/>
			</section>
			<section className="container small center">
				<h3> 💾 Installation </h3>
				<pre className="fake-term">
					<TypedComponent
						strings={[
							`<span class="dollar">$</span> <span class="cmd">npm</span> install --global <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># or</span> \n<span class="dollar">$</span> ^500<span class="cmd">yarn</span> global add <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># Isn't that easy?</span> ^3500`,
						]}
						options={{
							loop: true,
							backSpeed: 0,
							typeSpeed: 50,
							cursorChar: '|',
							showCursor: true,
							smartBackspace: true,
						}}
					/>
				</pre>
				<br />
				<small>
					via <a href="https://www.npmjs.com/"> NPM </a> or <a href="https://yarnpkg.com">YARN</a>
				</small>
			</section>
			<footer id="install">
				<span>
					Brought to you with ❤️ by <a href="https://twitter.com/rawnlydev">Federico Vitale</a>
				</span>
			</footer>
		</div>
	);
};

export default Page;
