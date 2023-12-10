import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')
    const fileData = matter(fileContent) as any
    const metadata = fileData.data
    const content = fileData.content

    return { metadata, content }
  })
  return posts
}

export function getRecentsPosts(posts: any) {
  posts.sort((a: any, b: any) => {
    const aDate = new Date(a.metadata.date)
    const bDate = new Date(b.metadata.date)
    return bDate.getTime() - aDate.getTime()
  })

  return posts.slice(0, 3)
}

export function getPostBySlug(slug: string) {
  const posts = getPosts()
  const post = posts.find(post => post.metadata.slug === slug)
  return post
}