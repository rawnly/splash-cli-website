import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { match } from 'ts-pattern';

import { wait } from '../lib/util';
import { addLine, infiniteSpinner, fixedSpinner } from '../lib/terminal'
import * as api from '../lib/photos';

import { usePhotoContext } from '../lib/state'
import { PhotoResponse } from '../types';

interface ITerminalProps {

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

	const setPhoto = usePhotoContext( s => s.setPhoto )

	const resetState = useCallback( () => {
		setCompleted( false )
		setPrompt( [] )
		setIntroText( [] )
		setIntroFinished( false )
		setInputColor( 'white' )
		setError( [] )
		setInputValue( '' )

		setPhoto( null )
	}, [] )

	const compose = useCallback( async ( daily?: boolean ) => {
		resetState()

		let photo: PhotoResponse = null
		const spinner = infiniteSpinner( [
			'🌍 Connecting',
			'🌎 Connecting',
			'🌏 Connecting'
		], '✅ Connected!' )


		// a bit of a hack here
		if ( daily ) {
			api.getDaily().then( pic => {
				setPhoto( pic.photo )
				photo = pic.photo

				spinner.stop()
			} ).catch( console.error )
		} else {
			api.getRandom().then( pic => {
				setPhoto( pic.photo )
				photo = pic.photo

				spinner.stop()
			} ).catch( console.error )
		}

		// real loading spinner
		for await ( const char of spinner.start() ) {
			setPrompt( ( [l1, _, ...data] ) => [l1, char, ...data] )
		}

		// fake loading
		for await ( const char of fixedSpinner( ['🌍 Magic Stuff', '🌎 Magic Stuff', '🌏 Magic Stuff'], '✅ Downloaded!', 6 ) ) {
			setPrompt( ( [l1, l2, _, ...data] ) => [l1, l2, char, ...data] )
		}

		setPrompt( [
			<span className='opacity-50'>&gt; {photo?.description ?? 'No description available'}.</span>,
			<span>&nbsp;</span>,
			<span className='text-mauveDark-12'>Downloaded: {photo?.downloads} times.</span>,
			<span className='text-mauveDark-12'>Liked by: {photo?.likes} users.</span>,
			<span>&nbsp;</span>,
			<span>Shot by John (<span className='text-yellow-9'>@{photo?.username}</span>)</span>,
			<span>&nbsp;</span>,
			<span className='opacity-50'><span className='text-lime-9'>ℹ</span> Login to like this photo.</span>
		] )
		setCompleted( true )
	}, [setPrompt] )

	const startIntro = useCallback( async () => {
		setIntroText( [] )

		for await ( const char of addLine( 'Hey you!' ) ) {
			setIntroText( ( [l1, ...data] ) => [( l1 ?? '' ) + char, ...data] )
		}

		for await ( const char of addLine( 'This wallpaper seems to be boring! ' ) ) {
			setIntroText( ( [l1, l2, ...data] ) => [l1, ( l2 ?? '' ) + char, ...data] )
		}

		await wait( 250 )

		for await ( const char of addLine( 'Can you help me?' ) ) {
			setIntroText( ( [l1, l2, ...data] ) => [l1, ( l2 ?? '' ) + char, ...data] )
		}

		await wait( 250 )

		setIntroFinished( true )
	}, [setIntroText, setIntroFinished] )

	const showError = useCallback( ( command: string ) => {
		setError( err => {
			const value = [
				...err,
				`❯ ${command}`,
				`zsh: command not found: ${command}`
			]

			return value
		} )
	}, [] )


	useEffect( () => {
		resetState()
		startIntro()
	}, [] )

	useEffect( () => {
		inputRef.current?.focus()
	}, [isIntroFinished] )

	const handleSubmit = useCallback( e => {
		e.preventDefault()

		if ( !inputValue.trim() ) return
		setInputValue( '' )

		const [command, ...flags] = inputValue.split( ' ' )

		switch ( command.trim() ) {
			case 'clear':
				setError( [] )
				break
			case 'splash':
				compose( flags[0] === '--day' )
				break
			default:
				showError( command )
				break
		}

		setInputColor( 'white' )
	}, [inputValue] )

	const onInputChange = useCallback( e => {
		setInputValue( e.target.value )

		const [command] = inputValue.split( ' ' )

		const color = match( command.trim() )
			.when( s => ['splash', 'clear'].includes( s ), () => 'lightgreen' )
			.otherwise( () => 'white' )

		console.log( color );


		setInputColor( color )
	}, [setInputValue, setInputColor] )


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
								onSubmit={handleSubmit}
							>
								<span className='opacity-50'>$</span>
								<div className='w-full relative'>
									<input
										ref={inputRef}
										value={inputValue}
										type="text"
										placeholder='Type "splash" and press ENTER to continue...'
										className='w-full py-1 placeholder:opacity-25 caret-transparent bg-transparent border-none outline-none text-sm'
										style={{ color: inputColor }}
										onChange={onInputChange}
									/>
									<div className='w-[5px] h-[20px] -translate-y-1/2 caret bg-blue-9 dark:bg-yellow-9 absolute top-1/2' style={{ left: `${inputValue.length * 8.5}px` }}>
										<span className='sr-only'>caret</span>
									</div>
								</div>
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
			<button onClick={() => {
				resetState()
				startIntro()
			}} className='underline text-white text-xs ml-auto tabular-nums text-right'>again</button>
		</div>
	);
}

Terminal.displayName = 'Terminal'

export default Terminal;
