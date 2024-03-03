import { Posts } from '@/components/Posts'
import { Title } from '@/components/Title'
import { getPosts, getRecentsPosts } from '@/lib/fs'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

/* 
title: #ffffff
subtitle: #424242
paragraphs: #949494
*/

export default async function Home() {
  const posts = getPosts()

  return (
    <main
      className="relative flex h-screen w-screen flex-col items-start justify-start overflow-scroll gap-8 md:px-[26vw] md:pt-12 pt-5"
    >
      {/* title */}
      <Title />

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

      {/* background */}
      <div
        className='top-0 left-0 h-[100%] w-[100%] z-[-1]'
        style={{
          position: 'fixed',
          opacity: '0.5',
          filter: "contrast(100%)",
          backgroundImage: "url(https://arc.net/noise-light.png)"
        }}
      ></div>
    </main>
  )
}