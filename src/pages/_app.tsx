import { AppProps } from 'next/app'
import { FC } from 'react'

import '../tailwind.css'

const App: FC<AppProps> = ( { Component, pageProps } ) => (
	<Component {...pageProps} />
);

export default App
