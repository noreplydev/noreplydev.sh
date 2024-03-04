'use client'
import { useEffect, useState } from 'react';

export function NameGenerating() {
  const RESOLVED_STRING = "@noreplydev"
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"$%&/()=?¿*';

  const RESOLVED_STRING_LENGTH = RESOLVED_STRING.length
  const MILISECONDS_TO_RESOLV = 3000
  const MILISECONDS_PER_ITERATIONS = Math.floor(MILISECONDS_TO_RESOLV / RESOLVED_STRING_LENGTH)

  const [prefix, setPrefix] = useState("")
  const [text, setText] = useState("01001110110")
  let iterationsCounter = 0

  const updatePrefix = () => {
    const _prefix = RESOLVED_STRING.slice(0, iterationsCounter)
    setPrefix(_prefix)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('iterations', iterationsCounter)
      const newChars = text.split('').slice(iterationsCounter).map(() => {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
        return CHARACTERS[randomIndex]
      })
      setText(newChars.join(''))
      updatePrefix()
    }, 50)

    const revealInterval = setInterval(() => {
      updatePrefix()
      iterationsCounter++
    }, MILISECONDS_PER_ITERATIONS)

    setTimeout(() => {
      clearInterval(revealInterval)
      clearInterval(interval)
      setText('')
      setPrefix(RESOLVED_STRING)
    }, MILISECONDS_TO_RESOLV)

    return () => {
      clearInterval(revealInterval)
      clearInterval(interval)
    }
  }, [])

  return <p
    className={`text-2xl font-thin text-[#949494] text-center`}
  >{prefix}{text}</p>
}