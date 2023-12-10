'use client'
import { useRouter } from "next/navigation"

export function GoBack() {
  const router = useRouter()
  return <>
    <p
      onClick={() => router.back()}
    >back</p>
  </>
}