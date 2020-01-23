import Head from 'next/head';
import { getRandomAuthor } from '../utils/authors';

export default (props) => (
	<>
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=0.6' />
			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta name='theme-color' content='#F8F6F7' />

			<title> Splash CLI - {props.title || '📸 Beautiful wallpapers from unsplash'} </title>

			<meta name='description' content='📸 Beautiful wallpapers from unsplash.' />
			<meta property='og:site_name' content='Splash CLI' />
			<meta property='og:title' content='Splash CLI' />
			<meta property='og:description' content='📸 Beautiful wallpapers from unsplash' />
			<meta
				property='og:image'
				content={`https://splash-cli.app/static/backgrounds/${getRandomAuthor().id}/terminal.png`}
			/>
			<meta property='og:url' content='https://splash-cli.app' />

			<meta name='twitter:site' content='@fedevitaledev' />
		</Head>
	</>
);
