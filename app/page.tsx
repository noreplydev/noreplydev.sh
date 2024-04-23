import { Posts } from '@/components/Posts'
import { GeneratedString } from '@/components/GeneratedString'
import { getPosts, getRecentsPosts } from '@/lib/fs'
import { GeistMono } from 'geist/font/mono';
import Link from 'next/link'

/* 
title: #ffffff
subtitle: #424242
paragraphs: #949494
*/

export default async function Home() {
  const posts = getPosts()

  return (
    <main
      className="relative flex h-fit w-screen flex-col items-start justify-start overflow-scroll 
        gap-8 md:px-[26vw]"
    >
      {/* title */}
      <div
        className="relative flex flex-col h-[100vh] w-full
      justify-center items-center gap-4"
      >
        <h1 className="text-7xl font-bold text-center">cristian <br />sánchez</h1>
        <div className={`${GeistMono.className}`}>
          <GeneratedString resolvedString='@noreplydev' />
        </div>
      </div>

      {/* body */}
      <div
        className="relative flex flex-col h-fit w-full px-7 gap-8
          justify-center items-center"
      >
        <p
          className="text-xl font-thin text-[#949494] text-center"
        >i just build things with code, share knowledge and learn every day.</p>
        <div
          className="relative flex flex-col h-full w-full text-center"
        >
          <p
            className="text-3xl font-bold text-white"
          >work</p>
          <p
            className="text-xl font-thin text-[#949494]"
          >currently working as a software developer at
            <Link href={"https://protofy.xyz"} className='ml-2 active:underline'>
              protofy.xyz
            </Link>
          </p>
        </div>
        <div
          className="relative flex flex-col h-full w-full gap-2"
        >
          <p
            className="text-3xl font-bold text-white text-center"
          >some reads</p>
          <Posts posts={getRecentsPosts(posts)} />
        </div>
      </div>

      {/* footer */}
      <div className='relative h-fit w-full flex flex-col pt-3 pb-10'>
        <div
          className='relative flex flex-row justify-center h-fit w-full gap-2'
        >
          <Link href="https://twitter.com/noreplydev"
            className="text-lg font-thin text-[#949494] active:underline"
          >twitter</Link>
          <Link href="https://github.com/noreplydev"
            className="text-lg font-thin text-[#949494] active:underline"
          >github</Link>
          <Link href="https://www.linkedin.com/in/cristian-sanchez-dev"
            className="text-lg font-thin text-[#949494] active:underline"
          >linkedin</Link>
          <Link href="https://www.linkedin.com/in/cristian-sanchez-dev"
            className="text-lg font-thin text-[#949494] active:underline"
          >youtube</Link>
        </div>
        <p
          className="text-lg font-thin text-[#424242] text-center"
        >made by noreplydev</p>
      </div>
    </main>
  )
}