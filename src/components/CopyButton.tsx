import React, { forwardRef } from "react";
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'

interface ICopyButtonProps {
	onClick?(): void
	copied?: boolean
}

const CopyButton = forwardRef<HTMLButtonElement, React.PropsWithChildren<ICopyButtonProps>>( ( props, ref ) => (
  <button ref={ref} onClick={props.onClick} className='px-4 tabular-nums flex gap-4 items-center justify-between font-mono text-sm transform-gpu active:scale-[.98] py-2.5 cursor-pointer duration-150 transition-all border border-kashmir/25 hover:border-kashmir/50 active:border-kashmir/10 rounded-md text-mauveDark-12'>
    <pre><span className='opacity-50 text-kashmir'>$</span> {props.children}</pre>
		{!props.copied ? <CopyIcon className='ml-2' /> : <CheckIcon className='ml-2' />}
	</button>
) )

CopyButton.displayName = 'CopyButton'

export default CopyButton;
