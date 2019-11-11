import { useGithub, useAnalytics } from '../components/hooks';
import { Navbar, Head } from '../components';
import { Dollar, Title, Command, Dimmed, FlagLine, Break } from '../components/Syntax';

import '../css/master.scss';
import { useEffect } from 'react';

const navbarItems = [
	{
		text: 'Back',
		href: '/',
	},
	{
		text: 'Product Hunt',
		href: 'https://producthunt.com/posts/splash-cli',
		right: true,
	},
	{
		text: 'Github',
		href: 'https://github.com/splash-cli/splash-cli',
		button: true,
		right: true,
	},
];

export default (props) => {
	useAnalytics('UA-127454453-1');

	const [_, release] = useGithub('splash-cli/splash-cli');

	return (
		<div>
			<Head title="Documentation" />
			<Navbar items={navbarItems} color="black" />
			<div className="container" style={{ textAlign: 'center' }}>
				<h1> Documentation </h1>
				<p>
					<b>Splash</b> is easy and quick to use,{' '}
					<i>
						just type <code>splash</code>
					</i>{' '}
					to get started.
				</p>
				<br />
				<pre className="help-menu fake-term" style={{ textAlign: 'left', width: '80vw' }}>
					<Break />
					<Title text="Usage" />
					<Dollar /> <Command>splash</Command> <Dimmed>[command] [flags]</Dimmed>
					<Break />
					<Break />
					<Title text="Commands" />
					<FlagLine flag="settings" color="#0095ff" args="get|set|restore" hint="GET/SET/RESTORE SETTINGS" required />
					<FlagLine
						flag="alias"
						color="#0095ff"
						args="get|set|remove"
						hint="GET/SET/REMOVE COLLECTION ALIASES"
						required
					/>
					<FlagLine flag="dir" color="#0095ff" args="clean|get|count" hint="MANAGE THE DOWNLOAD DIRECTORY" required />
					<FlagLine
						flag="user"
						color="#0095ff"
						args="login|logout|get|..."
						hint="MANAGE USER LOGIN/LOGOUT - GET USER INFOS"
						required
					/>
					<Dimmed children="-------------------------------------------------------------------------" />
					<Break />
					<Dimmed>
						HINT: use <span style={{ color: 'cyan' }}>`[command] help`</span> for the list of all options
					</Dimmed>
					<Break />
					<Title text="Options" />
					<Break />
					<FlagLine flag="-h --help" hint="THIS MESSAGE" color="gold" />
					<FlagLine flag="-v --version" hint={release && release.name} color="gold" />
					<Break />
					{/* <FlagLine /> */}
					<FlagLine
						flag="--scale"
						color="gold"
						args="auto|fill|fit|stretch|center"
						hint="SET WALLPAPER SCALE"
						required
					/>
					<FlagLine
						flag="--screen"
						color="gold"
						args="all|main|monitor"
						hint="SET AS WALLPAPER ON SELECTED MONITOR"
						required
					/>
					<FlagLine
						flag="--orientation"
						color="gold"
						args="landscape|portrait|squarish"
						hint="SET WALLPAPER ORIENTATION (DEFAULT: 'landscape')"
						required
					/>
					<Break />
					<Break />
					<FlagLine flag="-s --save" color="gold" args="optional path" hint="DOWNLOAD WITHOUT SETTING AS WALLPAPER" />
					<FlagLine flag="--set" color="gold" args="path" required hint="SET GIVEN PHOTO AS WALLPAPER" />
					<Break />
					<FlagLine flag="-i --info" color="gold" hint="SHOW EXIF" />
					<FlagLine flag="-q --quiet" color="gold" hint="NO OUTPUT" />
					<Break />
					<Title text="Source Filters" />
					<FlagLine flag="-c --curated" color="tomato" hint="RANDOM CURATED PHOTO" />
					<FlagLine flag="-u --user" args="username" color="tomato" hint="RANDOM PHOTO FROM PROVIDED USER" required />
					<Break />
					<FlagLine flag="--day" color="tomato" hint="GET THE PHOTO OF THE DAY" required />
					<FlagLine flag="--id" args="id|url" color="tomato" hint="PHOTO BY ID" required />
					<FlagLine
						flag="--collection"
						args="id|alias"
						color="tomato"
						hint="RANDOM PHOTO FROM PROVIDED COLLECTION"
						required
					/>
					<Break />
					<Title text="Search Filters" />
					<FlagLine flag="-f --featured" color="tomato" hint="LIMIT TO ONLY FEATURED PHOTOS" />
					<FlagLine flag="--query" color="tomato" hint="RANDOM FROM QUERY" />
					<Break />
				</pre>
			</div>
		</div>
	);
};
