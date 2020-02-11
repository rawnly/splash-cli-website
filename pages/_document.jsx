import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

					{process.env.NODE_ENV === 'production' && (
						<script src='https://app.codefund.io/properties/690/funder.js' async></script>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />

					<div id='codefund'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
