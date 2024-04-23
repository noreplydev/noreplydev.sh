'use client'
import { useEffect, useState } from 'react';

export function GeneratedString({ resolvedString = "", className = "" }: { resolvedString: string, className: string }) {
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"$%&/()=?¿*';

  const RESOLVED_STRING_LENGTH = resolvedString.length
  const MILISECONDS_TO_RESOLV = 3000
  const MILISECONDS_PER_ITERATIONS = Math.floor(MILISECONDS_TO_RESOLV / RESOLVED_STRING_LENGTH)

  const [prefix, setPrefix] = useState("")
  const [text, setText] = useState(Array.from({ length: RESOLVED_STRING_LENGTH }, (v, i) => "%").join(""))
  let iterationsCounter = 0

  const updatePrefix = () => {
    const _prefix = resolvedString.slice(0, iterationsCounter)
    setPrefix(_prefix)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newChars = text.split('').slice(iterationsCounter).map(() => {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
        return CHARACTERS[randomIndex]
      })
      setText(newChars.join(''))
      updatePrefix()
    }, 60)

    const revealInterval = setInterval(() => {
      updatePrefix()
      iterationsCounter++
    }, MILISECONDS_PER_ITERATIONS)

    setTimeout(() => {
      clearInterval(revealInterval)
      clearInterval(interval)
      setText('')
      setPrefix(resolvedString)
    }, MILISECONDS_TO_RESOLV)

    return () => {
      clearInterval(revealInterval)
      clearInterval(interval)
    }
  }, [])

  return <p
    className={'text-2xl font-thin text-[#949494] text-center' + " " + className}
  >{prefix}{text}</p>
}