import { getPostBySlug, getPosts } from "@/lib/fs"

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return (
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

