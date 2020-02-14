import Navbar from '../components/Navbar';
import { Fragment, Component } from 'react';

import '../css/master.scss';

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
							text: 'Back',
							href: '/',
						},
					]}
				/>
				<div
					className='container center'
					style={{
						background: `url('https://images.unsplash.com/gifs/weird/weird-${Math.floor(Math.random() * 15) +
							1}.gif') no-repeat center / cover`,
						color: 'white',
					}}>
					<div
						className='center'
						style={{
							background: 'rgba(0, 0, 0, .25)',
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							zIndex: 0,
						}}>
						<h1>
							{this.props.statusCode
								? `An error ${this.props.statusCode} occurred on the server`
								: 'An error occurred on the client'}
						</h1>
					</div>
				</div>
				<style jsx>
					{`
						img {
							max-width: 950px;
							width: 80vw;
						}

						h1 {
							zindex: 1;
						}
					`}
				</style>
			</Fragment>
		);
	}
}
