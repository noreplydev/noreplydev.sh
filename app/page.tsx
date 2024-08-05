import { GeneratedString } from '@/components/GeneratedString'

export default async function Home() {
  return (
    <main
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-scroll 
        gap-8 md:px-[26vw]"
    >
      <div style={{
        position: "absolute", height: "100%", width: "100%",
        backgroundImage: "url(/noise.png)", backgroundRepeat: "repeat",
        backgroundSize: "10%", opacity: "0.3",
      }}></div>
      <GeneratedString resolvedString='noreplydev' />
    </ main>
  )
}