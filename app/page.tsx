import { GeneratedString } from '@/components/GeneratedString'
import { getPosts, getRecentsPosts } from '@/lib/fs'

export default async function Home() {
  return (
    <main
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-scroll 
        gap-8 md:px-[26vw]"
    >
      <GeneratedString resolvedString='noreplydev' />
    </main>
  )
}