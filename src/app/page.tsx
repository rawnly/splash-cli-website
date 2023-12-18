import { Suspense } from "react";
import CopyButton from "../components/CopyButton";
import GithubButton from "../components/GithubButton";
import CopyButtonSkeleton from "../components/CopyButtonSkeleton";

export default function Page() {
  return (
    <main className="flex relative flex-col justify-center items-center px-8 w-screen min-h-[92vh] bg-base text-metal">
      <div className='space-y-4 text-center'>
        <h1 className='text-5xl font-bold'>
          Splash CLI
        </h1>
        <p className='max-w-2xl font-mono font-light leading-relaxed text-kashmir'>
          A simple, command line tool to download Unsplash wallpapers. It’s not intended to be anything particularly fancy — it just works.
        </p>
      </div>

      <div className='flex flex-wrap gap-4 justify-center items-center pt-6 pb-16'>
        <Suspense fallback={
          <CopyButtonSkeleton>
            npm install -g splash-cli
          </CopyButtonSkeleton>
        }>
          <CopyButton command='npm install -g splash-cli'>
            npm install -g splash-cli
          </CopyButton>
        </Suspense>
        <GithubButton />
      </div>
    </main>
  )
}
