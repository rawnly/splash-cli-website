import { Suspense } from "react";
import CopyButton from "../components/CopyButton";
import CopyButtonSkeleton from "../components/CopyButtonSkeleton";
import GithubButton from "../components/GithubButton";
import Link from "next/link";

export default function Page({ searchParams: { mode } }: { searchParams: { mode: string } }) {
	const cmd = mode === 'go' ? 'go install github.com/rawnly/splash-cli@latest' : 'brew install rawnly/tap/splash-cli'

	return (
		<main className="flex relative flex-col justify-center items-center px-8 w-screen min-h-[92vh] bg-base text-metal">
			<div className="space-y-4 text-center">
				<h1 className="text-5xl font-bold">Splash CLI</h1>
				<p className="max-w-2xl font-mono font-light leading-relaxed text-kashmir">
					A simple, command line tool to download Unsplash wallpapers. It’s not
					intended to be anything particularly fancy — it just works.
				</p>
			</div>

			<div className="flex flex-wrap gap-4 justify-center items-center pt-6">
				<Suspense
					fallback={
						<CopyButtonSkeleton>
							{cmd}
						</CopyButtonSkeleton>
					}
				>
					<CopyButton command={cmd}>
						{cmd}
					</CopyButton>
				</Suspense>
				<GithubButton />
			</div>

			{mode !== 'go' ? (
				<small className='mt-2 text-slateDark-11'>
					Not a Homebrew user? {' '}
					<Link href={{ query: { mode: 'go' } }} className='cursor-pointer hover:opacity-75 text-blueDark-11'>
						Click here
					</Link>
				</small>
				) : (
					<small className='mt-2 text-slateDark-11'>
						Homebrew user? {' '}
						<Link href={'/'} className='cursor-pointer hover:opacity-75 text-blueDark-11'>
							Click here
						</Link>
					</small>
			)}
		</main>
	);
}
