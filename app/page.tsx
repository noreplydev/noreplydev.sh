import { GeneratedString } from '@/components/GeneratedString'
import Logo from '@/components/Logo'

export default async function Home() {
  return (
    <main
      className="relative flex h-screen w-screen flex-col items-center justify-center
        gap-8 md:px-[26vw] overflow-hidden"
    >
      <Logo />
    </ main>
  )
}