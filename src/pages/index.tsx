import { NextPage } from 'next'
import { CheckIcon, CopyIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Terminal from '../components/Terminal'
import { useCallback, useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'


const Page: NextPage = _ => {
  const [photoUrl, setPhotoUrl] = useState( '' )
  const [hash, setHash] = useState( '' )
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

  return (
    <>
      <section className="flex relative items-center flex-col justify-center w-screen min-h-[100vh] bg-black text-mauveDark-12">
        <div className='text-center space-y-4'>
          <h1 className='text-5xl font-bold'>
            Splash CLI
          </h1>
          <p className='text-mauveDark-11 text-lg max-w-xl'>
            A simple, command line tool to download Unsplash wallpapers. It’s not intended to be anything particularly fancy — it just works.
          </p>
        </div>

        <div className='flex justify-center items-center gap-4 pt-6 pb-16'>
          <button onClick={() => copyToClipboard( 'npm install -g splash-cli' )} className='px-4 tabular-nums flex gap-4 items-center justify-between font-mono text-sm transform-gpu active:scale-[.98] py-2.5 cursor-pointer duration-150 transition-all border border-mauveDark-7 hover:border-mauveDark-8 rounded-md'>
            <pre>$ npm install -g splash-cli</pre>
            {!copied ? <CopyIcon className='ml-2' /> : <CheckIcon className='ml-2' />}
          </button>
          <a href='https://github.com/splash-cli/splash-cli' target={'_blank'} className='bg-mauve-1 border-mauve-6 transition-colors duration-150 hover:bg-mauve-4 gap-4 text-black items-center justify-center flex px-4 py-2 rounded-md'>
            <GitHubLogoIcon />
            <span>Github</span>
          </a>
        </div>

        <div className='relative aspect-video border-mauveDark-4 border bg-mauveDark-2 max-w-4xl w-full bg-cover rounded-lg overflow-hidden' style={{ backgroundImage: `url(${photoUrl})` }}>
          <div className='absolute inset-x-0 top-0 bg-contain bg-no-repeat h-6 z-50' style={{ backgroundImage: 'url(/images/mac-status-2.png)' }}></div>
          {hash && !photoUrl && <Blurhash hash={hash} width={window.innerWidth} height={window.innerHeight} className='absolute z-0 inset-0' />}
          <Terminal onBlurHashChange={setHash} onPhotoChange={setPhotoUrl} />
        </div>
      </section>
    </>
  )
}

Page.displayName = 'IndexPage'

export default Page
