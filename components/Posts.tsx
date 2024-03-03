'use client'

import { useRouter } from "next/navigation"

export function Posts({ posts }: { posts: any[] }) {
  const router = useRouter()

  return (<div className="relative flex flex-col h-full w-full gap-4">
    {
      posts.map((post) => {
        return (
          <div
            key={post.metadata.slug}
            className="relative flex flex-col h-full w-full gap-2 group cursor-pointer"
            onClick={() => router.push('/posts/' + post.metadata.slug)}
          >
            <img
              src={post.metadata.slug + '.png'}
              width="100%"
              alt={"image-" + post.metadata.title}
              className="rounded-xl"
            />
            <p
              className="text-lg font-thin text-[#949494] group-active:underline transition-all duration-[0.12s] ease-out
                hover:underline"
            >
              {post.metadata.title}
            </p>
          </div>
        )
      })
    }
  </div>)
}