import { Posts } from '@/components/Posts'
import { getPosts, getRecentsPosts } from '@/lib/fs'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

/* 
title: ffffff
subtitle: 424242
paragraphs: 949494
*/

export default async function Home() {
  const posts = getPosts()

  return (
    <main className="relative flex h-full w-full flex-col items-start justify-start overflow-scroll gap-8">
      <div className="relative flex flex-col h-fit w-full px-10 pt-14">
        <h1 className="text-xl">cristian sánchez</h1>
        <p className="text-lg font-thin text-[#424242]">@noreplydev</p>
      </div>
      <div
        className="relative flex flex-col h-full w-full px-10 gap-8"
      >
        <p
          className="text-lg font-thin text-[#949494]"
        >i just build things with code, share knowledge and learn every day.</p>
        <div
          className="relative flex flex-col h-full w-full"
        >
          <p
            className="text-xl font-normal text-white"
          >work</p>
          <p
            className="text-lg font-thin text-[#949494]"
          >currently working as a software developer at protofy.xyz</p>
        </div>
        <div
          className="relative flex flex-col h-full w-full gap-2"
        >
          <p
            className="text-xl font-normal text-white"
          >some reads</p>
          <Posts posts={getRecentsPosts(posts)} />
        </div>
      </div>
      <footer className='h-fit w-full pt-3 pb-10'>
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
        </div>
        <p
          className="text-lg font-thin text-[#424242] text-center"
        >made by noreplydev</p>
      </footer>
    </main>
  )
}
