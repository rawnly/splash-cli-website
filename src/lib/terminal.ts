

export async function* addLine( text: string ) {
	for ( let i = 0; i < text.length; i++ ) {
		await new Promise( resolve => setTimeout( resolve, 75 ) )
		yield text[i];
	}
}

export async function* fixedSpinner( items: string[], onComplete: string, duration: number = 6, speed: number = 250 ) {
	let i = 0;
	let elapsedRounds = 0
	while ( elapsedRounds < duration ) {
		await new Promise( resolve => setTimeout( resolve, speed ) )
		yield items[i];
		elapsedRounds++
		i = ( i + 1 ) % items.length;
	}

	yield onComplete
}

export function infiniteSpinner( items: string[], onComplete: string ) {
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
