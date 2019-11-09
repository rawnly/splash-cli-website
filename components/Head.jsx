import Head from 'next/head';

export default (props) => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=0.6" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<meta name="theme-color" content="#F8F6F7" />

			<title> Splash CLI - {props.title || '📸 Beautiful wallpapers from unsplash'} </title>
		</Head>
	</>
);
