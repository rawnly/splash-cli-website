import axios from 'axios';
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { match } from 'ts-pattern';

interface ITerminalProps {
	onPhotoChange: ( url: string ) => void
	onBlurHashChange: ( hash: string ) => void
}

const KEY = 'afd1ee27e27b7df65b5857dbc7c1e7071fe3110133b24483bb44aaf1553a92d7'

async function getPhotoOfTheDay() {
	try {
		const response = await axios.get( 'https://lambda.splash-cli.app/api' )
		const { id } = response.data

		const photo = await axios.get( `https://api.unsplash.com/photos/${id}`, {
			params: {
				client_id: KEY
			}
		} )

		return photo.data
	} catch ( error ) {
		const response = await axios.get( `https://api.unsplash.com/photos/random`, {
			params: {
				orientation: 'landscape',
				query: 'nature',
				client_id: KEY,
				collection: '1459961'
			}
		} )

		return response.data
	}
}

const Terminal: FC<ITerminalProps> = ( props ) => {
	const [prompt, setPrompt] = useState<any[]>( [] )
	const [introText, setIntroText] = useState<string[]>( [] )
	const [isCompleted, setCompleted] = useState( false )
	const [inputValue, setInputValue] = useState( '' )
	const [isIntroFinished, setIntroFinished] = useState( false )
	const [inputColor, setInputColor] = useState( '#fff' )
	const [error, setError] = useState<string[]>( [] )
	const inputRef = useRef<HTMLInputElement>( null )

	const resetState = useCallback( () => {
		setCompleted( false )
		setPrompt( [] )
		setIntroText( [] )
		setIntroFinished( false )
		setInputColor( 'white' )
		setError( [] )
		setInputValue( '' )

		props.onPhotoChange( '' )
		props.onBlurHashChange( '' )
	}, [] )

	const compose = useCallback( async function () {
		resetState()

		const spinner = infiniteSpinner( ['🌍 Connecting', '🌎 Connecting', '🌏 Connecting'], '✅ Connected!' )


		let photo = null
		getPhotoOfTheDay().then( pic => {
			props.onPhotoChange( pic.urls.regular )
			props.onBlurHashChange( pic.blur_hash )
			photo = pic

			spinner.stop()
		} )

		for await ( const char of spinner.start() ) {
			setPrompt( ( [l1, _, ...data] ) => [l1, char, ...data] )
		}

		for await ( const char of fixedSpinner( ['🌍 Magic Stuff', '🌎 Magic Stuff', '🌏 Magic Stuff'], '✅ Downloaded!', 6 ) ) {
			setPrompt( ( [l1, l2, _, ...data] ) => [l1, l2, char, ...data] )
		}

		setPrompt( [
			<span className='opacity-50'>&gt; {photo?.description ?? 'No description available'}.</span>,
			<span>&nbsp;</span>,
			<span className='text-mauveDark-12'>Downloaded: {photo.downloads} times.</span>,
			<span className='text-mauveDark-12'>Liked by: {photo.likes} users.</span>,
			<span>&nbsp;</span>,
			<span>Shot by John (<span className='text-yellow-9'>@{photo.user.username}</span>)</span>,
			<span>&nbsp;</span>,
			<span className='opacity-50'><span className='text-lime-9'>ℹ</span> Login to like this photo.</span>
		] )
		setCompleted( true )
	}, [setPrompt] )

	useEffect( () => {
		resetState()
		startIntro()
	}, [] )

	async function startIntro() {
		for await ( const char of addLine( 'Hey you!' ) ) {
			setIntroText( ( [l1, ...data] ) => [( l1 ?? '' ) + char, ...data] )
		}

		for await ( const char of addLine( 'This wallpaper seems to be boring! Can you help me?' ) ) {
			setIntroText( ( [l1, l2, ...data] ) => [l1, ( l2 ?? '' ) + char, ...data] )
		}

		setIntroFinished( true )
	}

	function showError( command: string ) {
		setError( err => {
			const value = [
				...err,
				`❯ ${command}`,
				`zsh: command not found: ${command}`
			]

			// if ( value.length > 6 ) {
			// 	return value.slice( value.length - 6 )
			// }

			return value
		} )
	}

	useEffect( () => {
		inputRef.current?.focus()
	}, [isIntroFinished] )


	return (
		<div className='w-full max-w-lg absolute z-50 left-1/2 top-1/2 -translate-y-1/2 font-mono -translate-x-1/2 flex flex-col gap-2'>
			<div className='rounded-lg border-mauveDark-6 bg-[rgba(20,20,20,.95)] w-full'>
				<div className='block px-4 py-3 relative border-b border-mauveDark-5'>
					<div className='flex gap-2 items-center'>
						<div className='w-2.5 rounded-full h-2.5 bg-red-9' />
						<div className='w-2.5 rounded-full h-2.5 bg-amber-9' />
						<div className='w-2.5 rounded-full h-2.5 bg-green-9' />
					</div>

					<pre className='absolute left-1/2 text-xs text-white top-1/2 -translate-x-1/2 -translate-y-1/2'>Terminal</pre>
				</div>
				<div className='block h-[300px] max-h-[300px] overflow-y-scroll space-y-2 text-mauveDark-12 text-sm px-4 py-3.5'>
					{prompt.length === 0 && introText.map( ( line, idx ) => (
						<span key={idx} className='block text-mauveDark-11'>
							# {line}
						</span>
					) )}
					{isIntroFinished && (
						<div>
							{error?.map( ( line, idx ) => (
								<span className='block' key={idx}>{line}</span>
							) )}
							<form
								className='space-x-2 w-full flex items-center justifty-start'
								onSubmit={e => {
									e.preventDefault()

									if ( !inputValue.trim() ) return
									setInputValue( '' )

									switch ( inputValue.trim() ) {
										case 'clear':
											setError( [] )
											break
										case 'splash':
											compose()
											break
										default:
											showError( inputValue.trim().split( ' ' )[0] )
											break
									}
								}}
							>
								<span className='opacity-50'>$</span>
								<input
									ref={inputRef}
									value={inputValue}
									type="text"
									placeholder='Type "splash" and press ENTER to continue...'
									className='w-full py-1 placeholder:opacity-25 bg-transparent border-none outline-none text-sm'
									style={{ color: inputColor }}
									onChange={e => {
										setInputValue( e.target.value )

										const color = match( e.target.value.trim() )
											.when( s => ['splash', 'clear'].includes( s ), () => 'lightgreen' )
											.otherwise( () => 'white' )

										setInputColor( color )
									}}
								/>
							</form>
						</div>
					)}
					{prompt.map( ( line, idx ) => (
						<span key={idx} className='block'>
							{line}
						</span>
					) )}
				</div>
			</div>
			{isCompleted ? <button onClick={() => {
				resetState()
				startIntro()
			}} className='underline text-white text-xs ml-auto tabular-nums text-right'>again</button> : <>&nbsp;</>}
		</div>
	);
}

Terminal.displayName = 'Terminal'

export default Terminal;


async function* addLine( text: string ) {
	for ( let i = 0; i < text.length; i++ ) {
		await new Promise( resolve => setTimeout( resolve, 75 ) )
		yield text[i];
	}
}

async function* fixedSpinner( items: string[], onComplete: string, duration: number = 6 ) {
	let i = 0;
	let elapsedRounds = 0
	while ( elapsedRounds < duration ) {
		await new Promise( resolve => setTimeout( resolve, 250 ) )
		yield items[i];
		elapsedRounds++
		i = ( i + 1 ) % items.length;
	}

	yield onComplete
}

function infiniteSpinner( items: string[], onComplete: string ) {
	let a = true
	async function* start() {
		let i = 0;

		while ( a ) {
			await new Promise( resolve => setTimeout( resolve, 250 ) )
			yield items[i];
			i = ( i + 1 ) % items.length;
		}

		yield onComplete
	}

	function stop() {
		a = false
	}

	return { start, stop }
}
