export interface Link {
	name: string;
	url: string;
}

interface Props {
	tools: Link[];
	socials: Link[];
}

export default function Footer(props: Props) {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className="flex flex-wrap gap-12 p-8 w-screen text-sm border-t border-focus-medium">
				<ul className="flex flex-col gap-2 font-mono text-kashmir/75">
					<li className="mb-4 font-mono text-metal">Other Projects</li>
					{props.tools.map((cli) => (
						<li key={cli.name} className="flex justify-between items-center">
							<a
								href={cli.url}
								target={"_blank"}
								className="hover:text-metal/75"
								rel="noreferrer"
							>
								{cli.name}
							</a>
						</li>
					))}
				</ul>
				<ul className="flex flex-col gap-2 font-mono text-kashmir/75">
					<li className="mb-4 font-mono text-metal">Socials</li>
					{props.socials.map((item) => (
						<li key={item.name} className="flex justify-between items-center">
							<a
								href={item.url}
								target={"_blank"}
								className="hover:text-metal/75"
								rel="noreferrer"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</footer>
			<div className="flex justify-end items-center px-8 pb-4 w-screen text-sm text-kashmir/50">
				<span className="mr-1">Copyright © 2016 - {year} // </span>
				<a
					className="underline hover:text-kashmir"
					href="https://fedevitale.dev"
				>
					Federico Vitale
				</a>
			</div>
		</>
	);
}
