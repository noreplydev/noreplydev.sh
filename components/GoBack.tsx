'use client'
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function GoBack() {
  const router = useRouter()
  return <div className="flex flex-row justify-start items-center">
    <ArrowLeft height={"15px"} />
    <p
      onClick={() => router.back()}
    >back</p>
  </div>
}