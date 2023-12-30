import { CopyIcon } from "@radix-ui/react-icons";

export default function CopyButtonSkeleton({
	children,
}: { children: React.ReactNode }) {
	return (
		<button className="flex gap-4 justify-between items-center py-2.5 px-4 font-mono text-sm tabular-nums rounded-md border transition-all duration-150 transform-gpu cursor-pointer border-kashmir/25 text-mauveDark-12 hover:border-kashmir/50 active:scale-[.98] active:border-kashmir/10">
			<pre>
				<span className="opacity-50 text-kashmir">$</span> {children}
			</pre>
			<CopyIcon className="ml-2" />
		</button>
	);
}
