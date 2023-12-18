import { Metadata } from 'next'
import Footer, { type Link as FooterLink } from '../components/footer'
import '../tailwind.css'

const TOOLS: FooterLink[] = [
  {
    name: 'next-wayfinder',
    url: 'https://github.com/rawnly/next-wayfinder',
  },
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

const SOCIALS: FooterLink[] = [
  {
    name: 'Github',
    url: 'https://github.com/splash-cli/splash-cli',
  },
  {
    name: 'Twitter',
    url: 'https://fedevitale.dev/twitter',
  },
]

export const metadata: Metadata = {
  title: "Splash CLI - Beautiful wallpapers from Unsplash",
  description: "A simple, command line tool to download Unasplash wallpapers. It's not intended to be anything particularly fancy - it just works.",
  twitter: {
    site: 'https://splash-cli.app',
    creator: '@fedevitaledev',
  }

}

export default function Layout({ children} : { children: React.ReactNode }) {
  const year = new Date().getFullYear()

  return (
    <html>
      <body>
        {children}
        <Footer socials={SOCIALS} tools={TOOLS} />
        <div className="flex justify-end items-center px-8 pb-4 w-screen text-sm text-kashmir/50">
          <span className='mr-1'>Copyright © 2016 - {year} // </span>
          <a className='underline hover:text-kashmir' href="https://fedevitale.dev">Federico Vitale</a>
        </div>
      </body>
    </html>
  )
}
