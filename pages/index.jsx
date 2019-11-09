import { useRouter } from 'next/router';
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

const Page = (props) => {
	useAnalytics('UA-127454453-1');

	const query = useQuery();
	const [issues = 0, release = {}] = useGithub('splash-cli/splash-cli');

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
					<Navbar items={navbarItems} />

					<h1 id="splash-title">
						<span>JUST TYPE</span> <span>SPLASH</span> <span>THAT'S IT</span>
					</h1>

					<div className="terminal" />

					<Version isLeft version={release && release.name} />
					<License isRight />

					<div className="credits">
						<RoundedLabel background="white" color="#1d1d1d" className="fadeInBottom">
							📸 by{' '}
							<a target="_blank" href="https://unsplash.com/@tiago">
								Tiago Muraro
							</a>{' '}
							on{' '}
							<a target="_blank" href="https://unsplash.com">
								Unsplash
							</a>
						</RoundedLabel>
					</div>
				</div>

				<div className="background smooth" />
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
