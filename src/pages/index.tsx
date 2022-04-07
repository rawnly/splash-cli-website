import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { NextPage } from 'next'
import CopyButton from '../components/CopyButton'
import Terminal from '../components/Terminal'
import useClipboard from '../hooks/useClipboard'
import { usePhotoContext } from '../lib/state'


const Page: NextPage = _ => {
  const photo = usePhotoContext( s => s.photo )
  const [copy, isCopied] = useClipboard()

  return (
    <>
      <section className="flex relative items-center flex-col justify-center w-screen min-h-[100vh] bg-white dark:bg-black rx-text-mauve-12">
        <div className='text-center space-y-4'>
          <h1 className='text-5xl font-bold'>
            Splash CLI
          </h1>
          <p className='rx-text-mauve-11 text-lg max-w-xl'>
            A simple, command line tool to download Unsplash wallpapers. It’s not intended to be anything particularly fancy — it just works.
          </p>
        </div>

        <div className='flex justify-center items-center gap-4 pt-6 pb-16'>
          <CopyButton copied={isCopied} onClick={() => copy( 'npm install -g splash-cli' )}>
            npm install -g splash-cli
          </CopyButton>
          <a href='https://github.com/splash-cli/splash-cli' target={'_blank'} className='bg-mauveDark-1 dark:bg-white rx-border-mauve-6 transition-colors duration-150 hover:bg-mauveDark-4 dark:hover:bg-mauve-4 gap-4 text-mauveDark-12 dark:text-mauve-12 items-center justify-center flex px-4 py-2 rounded-md'>
            <GitHubLogoIcon />
            <span>Github</span>
          </a>
        </div>

        <div className='relative aspect-video rx-border-mauve-4 border rx-bg-mauve-2 max-w-4xl w-full bg-cover rounded-lg overflow-hidden' style={{ backgroundImage: `url(${photo?.url})` }}>
          <div className='absolute inset-x-0 top-0 bg-contain bg-no-repeat h-6 z-50' style={{ backgroundImage: 'url(/images/mac-status-2.png)' }}></div>
          <Terminal />
        </div>
      </section>
    </>
  )
}

Page.displayName = 'IndexPage'

export default Page
