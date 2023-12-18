import Link from 'next/link'
import {GitHubLogoIcon} from '@radix-ui/react-icons'
import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IGithubButtonProps {}

const GithubButton: FC<IGithubButtonProps> = () => (
  <Link
    href='https://github.com/splash-cli/splash-cli' 
    target={'_blank'} 
    className={clsx(
      'bg-metal',
      'text-mauve-12',
      'transition-colors duration-150',
      'rx-border-mauve-6 hover:bg-mauve-4',
      'gap-4 items-center justify-center flex px-4 py-2 rounded-md',
      'transform-gpu active:scale-[.98] active:opacity-75'
    )}>
    <GitHubLogoIcon />
    <span>Github</span>
  </Link>
)

GithubButton.displayName = 'GithubButton'

export default GithubButton
