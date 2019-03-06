import fetch from "isomorphic-fetch";
import dotenv from "dotenv";
import * as Github from "../utils/github";

dotenv.load();

import {
	RoundedLabel,
	Navbar,
	Version,
	License,
	Head,
	AnalyticsPage,
	ProductHuntBanner as Banner,
	Typed as TypedComponent,
} from "../components";

import "../css/master.scss";

class IndexPage extends AnalyticsPage {
	navbarItems = [
		{
			text: "Install",
			anchor: true,
			href: "#install",
		},
		{
			text: "docs",
			href: "/docs",
		},
		{
			right: true,
			text: "Product Hunt",
			href: "https://producthunt.com/posts/splash-cli",
		},
		{
			right: true,
			text: "Github",
			button: true,
			href: "https://github.com/splash-cli/splash-cli",
			pop: 0,
		},
	];

	state = {
		navbarItems: [],
	};

	static async getInitialProps(context) {
		let ref = context.query.ref;
		let version = `v3.2.0`;
		let issues = 0;

		if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
			console.log("GOT KEYS");
			const response = await fetch(
				`https://api.github.com/repos/splash-cli/splash-cli/releases/latest?client_id=${
					process.env.CLIENT_ID
				}&client_secret=${process.env.CLIENT_SECRET}`,
			);

			const release = await response.json();
			const { tag_name } = release;

			version = tag_name;
		}

		issues = await Github.getRepoIssues("splash-cli", "splash-cli");

		// grab the latest release on github
		return { ref, version, issues };
	}

	getNavbarItems = () => {
		return this.navbarItems.map((item) => {
			if (item.text.toLowerCase() === "github") {
				return {
					...item,
					pop: this.props.issues,
				};
			}

			return item;
		});
	};

	render() {
		return (
			<div>
				<Head />
				<Banner show={this.props.ref === "producthunt"} background="#da552f" color="#F8F6F7">
					Hello <b>Hunter</b>! Thank you for having checked
					<a href="https://github.com/splash-cli/splash-cli">Splash CLI</a> 🎉
				</Banner>

				<Banner show={this.props.ref === "github"} background="#1d1d1d" color="#F8F6F7">
					Hello! Thank you for having checked <a href="https://github.com/splash-cli/splash-cli">Splash CLI</a> 🎉
				</Banner>

				<section className="container">
					<div className="content">
						<Navbar items={this.getNavbarItems()} />
						<h1 id="splash-title">
							<span>just type</span> <span>splash</span> <span>that's it</span>
						</h1>
						<div className="terminal" />
						<Version isLeft version={this.props.version} />
						<License isRight />
						<div className="credits">
							<RoundedLabel background="white" color="#1d1d1d" className="fadeInBottom">
								📸 by{" "}
								<a target="_blank" href="https://unsplash.com/@tiago">
									Tiago Muraro
								</a>{" "}
								on{" "}
								<a target="_blank" href="https://unsplash.com">
									{" "}
									Unsplash
								</a>
							</RoundedLabel>
						</div>
					</div>
					<div className="background smooth" />
				</section>
				<section className="container small center">
					<small> Installation process </small>
					<pre className="fake-term">
						<TypedComponent
							strings={[
								`<span class="dollar">$</span> <span class="cmd">npm</span> install --global <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># or</span> \n<span class="dollar">$</span> ^500<span class="cmd">yarn</span> global add <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># Isn't that easy?</span> ^3500`,
							]}
							options={{
								typeSpeed: 50,
								backSpeed: 0,
								showCursor: true,
								cursorChar: "|",
								smartBackspace: true,
								loop: true,
							}}
						/>
					</pre>
					<small>
						{" "}
						via <a href="https://www.npmjs.com/"> NPM </a> or <a href="https://yarnpkg.com">YARN</a>{" "}
					</small>
				</section>
				<footer id="install">
					<span>
						{" "}
						Brought to you with ❤️ by <a href="https://twitter.com/rawnlydev">Federico Vitale</a>{" "}
					</span>
				</footer>
			</div>
		);
	}
}

export default IndexPage;
