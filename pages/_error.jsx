import Navbar from "../components/Navbar";
import { Fragment, Component } from "react";

import "../css/master.scss";

export default class ErrorPage extends Component {
	static async getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.message : null;
		return { statusCode };
	}

	render() {
		return (
			<Fragment>
				<Navbar
					items={[
						{
							text: "Back",
							href: "/",
						},
					]}
				/>
				<div className="container center">
					{this.props.statusCode && this.props.statusCode >= 400 ? (
						<img src={`/static/errors/${this.props.statusCode == 404 ? "404_.svg" : "500_.svg"}`} alt="ErrorPage" />
					) : (
						<img src={`/static/errors/client_error.svg`} alt="ClientError" />
					)}

					<h1>
						{this.props.statusCode
							? `An error ${this.props.statusCode} occurred on the server`
							: "An error occurred on the client"}
					</h1>
				</div>
				<style jsx>
				{`
					img {
						max-width : 950px;
						width : 80vw;
					}
				`}
				</style>
			</Fragment>
		);
	}
}
