'use client'

import React, { forwardRef } from "react";
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import useClipboard from "../hooks/useClipboard";
import clsx from 'clsx'

interface Props {
	command: string
	children: React.ReactNode
}

function CopyButton ( props: Props )  {
  const [copy, isCopied] = useClipboard()


	return (
  	<button 
  		onClick={() => copy(props.command)}
  		className={clsx(
  			"flex gap-4 justify-between items-center py-2.5 px-4 font-mono text-sm tabular-nums rounded-md border transition-all duration-150",
  			"transform-gpu cursor-pointer border-kashmir/25 text-mauveDark-12 hover:border-kashmir/50 active:scale-[.98] active:border-kashmir/10"
  		)}
  		>
    	<pre><span className='opacity-50 text-kashmir'>$</span> {props.children}</pre>
			{!isCopied ? <CopyIcon className='ml-2' /> : <CheckIcon className='ml-2' />}
		</button>
	)
} 


export default CopyButton;
