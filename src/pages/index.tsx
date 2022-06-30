import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { NextPage } from 'next'
import CopyButton from '../components/CopyButton'
import Terminal from '../components/Terminal'
import useAnalytics from '../hooks/useAnalytics'
import useClipboard from '../hooks/useClipboard'
import { usePhotoContext } from '../lib/state'
import { NextSeo } from 'next-seo'
import GithubButton from '../components/GithubButton'

const OTHER_CLIS = [
  {
    name: 'aalias',
    url: 'https://github.com/rawnly/aalias',
  },
  {
    name: 'git-add-commit',
    url: 'https://github.com/rawnly/git-add-commit',
  },
  {
    name: 'git-select',
    url: 'https://github.com/rawnly/git-select',
  },
]

const SOCIALS = [
  {
    name: 'Github',
    url: 'https://github.com/splash-cli/splash-cli',
  },
  {
    name: 'Twitter',
    url: 'https://fedevitale.dev/twitter',
  },
]

const Page: NextPage = _ => {
  const photo = usePhotoContext( s => s.photo )
  const [copy, isCopied] = useClipboard()

  useAnalytics()

  const year = new Date().getFullYear()

  return (
    <>
      <NextSeo
        titleTemplate='Splash CLI - %s'
        title='Beautiful wallpapers from unsplash'
        description='A simple, command line tool to download Unsplash wallpapers. It’s not intended to be anything particularly fancy — it just works.'
        defaultTitle='Splash CLI'
        twitter={{
          handle: '@fedevitaledev',
          site: 'https://splash-cli.app'
        }}
      />
      <main className="flex relative items-center px-8 flex-col justify-center w-screen min-h-[92vh] bg-base text-metal">
        <div className='text-center space-y-4'>
          <h1 className='text-5xl font-bold'>
            Splash CLI
          </h1>
          <p className='text-kashmir text-lg leading-relaxed font-light max-w-xl'>
            A simple, command line tool to download Unsplash wallpapers. It’s not intended to be anything particularly fancy — it just works.
          </p>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-4 pt-6 pb-16'>
          <CopyButton copied={isCopied} onClick={() => copy( 'npm install -g splash-cli' )}>
            npm install -g splash-cli
          </CopyButton>
          <GithubButton />
        </div>
      </main>
      <footer className="w-screen text-sm p-8 flex flex-wrap gap-12 border-t border-focus-medium">
        <ul className="flex flex-col gap-2 font-mono text-kashmir/75">
          <li className='font-sans mb-4 text-metal'>Other CLIs</li>
            {OTHER_CLIS.map( cli => (
              <li key={cli.name} className='flex items-center justify-between'>
                <a href={cli.url} target={'_blank'} className='hover:text-metal/75'>
                  {cli.name}
                </a>
              </li>
            ))}
        </ul>
        <ul className="flex flex-col gap-2 font-mono text-kashmir/75">
          <li className='font-sans mb-4 text-metal'>Socials</li>
            {SOCIALS.map( item => (
              <li key={item.name} className='flex items-center justify-between'>
                <a href={item.url} target={'_blank'} className='hover:text-metal/75'>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </footer>
      <div className="px-8 pb-4 text-sm text-kashmir/50 w-screen flex items-center justify-end">
        <span className='mr-1'>Copyright © 2016 - {year} // </span>
        <a className='underline hover:text-kashmir' href="https://fedevitale.dev">Federico Vitale</a>
      </div>
    </>
  )
}

Page.displayName = 'IndexPage'

export default Page
