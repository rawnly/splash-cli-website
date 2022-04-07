import { useCallback, useEffect, useState } from 'react'
import splitbee from '@splitbee/web'

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

		splitbee
			.track( 'copy-to-clipboard', { value: 1 } )
	}, [] )

	useEffect( () => {
		const timeout = setTimeout( () => setCopied( false ), 1000 )
		return () => clearTimeout( timeout )
	}, [copied] )

	return [copyToClipboard, copied]
}


export default useClipboard
