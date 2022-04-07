import { useCallback, useEffect, useState } from 'react'

type UseClipboard = [
	( text: string ) => void,
	boolean
]


const useClipboard = (): UseClipboard => {
	const [copied, setCopied] = useState( false )

	const copyToClipboard = useCallback( async ( text: string ) => {
		if ( typeof window === 'undefined' ) return null
		if ( !navigator.clipboard ) return

		await navigator.clipboard.writeText( text );
		setCopied( true )
	}, [] )

	useEffect( () => {
		const timeout = setTimeout( () => setCopied( false ), 1000 )
		return () => clearTimeout( timeout )
	}, [copied] )

	return [copyToClipboard, copied]
}


export default useClipboard
