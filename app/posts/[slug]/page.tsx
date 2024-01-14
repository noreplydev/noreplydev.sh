import { GoBack } from "@/components/GoBack"
import { getPostBySlug, getPosts } from "@/lib/fs"
import Link from "next/link"
import Markdown from "react-markdown"

const components = {
  h1: ({ children, className, node, ...rest }: any) => {
    return <h1 className="text-xl font-thin text-[#ffffff] ">{children}</h1>
  },
  p: ({ children, className, node, ...rest }: any) => {
    return <p className="text-lg font-thin text-[#949494]">{children}</p>
  },
  code: ({ children, className, node, ...rest }: any) => {
    return <code className="bg-red-500">{children}</code>
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return <div className="h-full w-full flex flex-col px-7 py-8 gap-8">
    <GoBack />
    <div className="h-fit w-full flex flex-col gap-2"> {/*METADATA*/}
      <div className="flex flex-row h-fit w-full gap-3 justify-between items-center">
        <p className="text-lg font-thin text-[#949494]">{post?.metadata.topic}</p>
        <p className="text-lg font-thin text-[#949494]">{post?.metadata.author}</p>
      </div>
      <p className="text-lg font-thin text-[#949494] text-end">{(() => {
        const date = new Date(post?.metadata.date)
        return `${date.toLocaleString('default', { month: 'long' }).toLowerCase()} ${date.getFullYear()}`
      })()}</p>
    </div>
    <p className="text-lg font-thin text-[#949494] text-center">{post?.metadata.title.toUpperCase()}</p>
    <img
      src={'/' + post?.metadata.slug + '.png'}
      width="100%"
      alt={"image-" + post?.metadata.title}
      className="rounded-xl"
    />
    <Markdown
      components={components}
    >{post?.content}</Markdown>

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
      </div>
      <p
        className="text-lg font-thin text-[#424242] text-center"
      >made by noreplydev</p>
    </div>
  </div>
}

