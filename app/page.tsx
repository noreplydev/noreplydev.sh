'use client'

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const projects = [
    {
      name: 'Suiro',
    },
    {
      name: 'antimodules',
    },
    {
      name: 'bAuth',
    },
    {
      name: 'shitagae',
    },
    {
      name: 'thisis',
    },
    {
      name: 'dsaf',
    },
    {
      name: 'Suiro',
    },
    {
      name: 'antimodules',
    },
    {
      name: 'bAuth',
    }
  ]

  return (
    <main className="flex h-full flex-col items-center justify-between gap-5">
      <div className="flex h-fit w-full flex-row justify-between items-end">
        <div className="flex h-full w-fit flex-col justify-between items-start gap-1">
          <h1 className="text-2xl font-medium">Cristian Sánchez</h1>
          <p className="text-xl text-[#424242]">@noreplydev</p>
        </div>
        <p className="text-xl text-[#424242]">software developer</p>
      </div>
      {/* PROJECTS */}
      <div className="min-h-full w-full flex flex-col">
        {
          projects.map((project, index) => (
            <div
              key={project.name}
              className="h-fit w-full flex flex-row justify-between items-center py-2.5 px-4
                rounded-sm cursor-pointer transition-all ease-in-out duration-[0.12] hover:bg-[#151515]">
              <p className="text-xl text-[#424242]">{project.name}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}
