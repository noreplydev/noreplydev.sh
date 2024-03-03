'use client'
import { useEffect, useState } from 'react';

export function NameGenerating() {
  const [text, setText] = useState("01001110110")
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"$%&/()=?¿*';

  useEffect(() => {
    const interval = setInterval(() => {
      const newChars = text.split('').map(() => {
        const randomIndex = Math.floor(Math.random() * characters.length)
        return characters[randomIndex]
      })
      setText(newChars.join(''))
    }, 50)

    setTimeout(() => {
      clearInterval(interval)
      setText("@noreplydev")
    }, 3000)
  }, [])

  return <p
    className={`text-2xl font-thin text-[#949494] text-center`}
  >{text}</p>
}