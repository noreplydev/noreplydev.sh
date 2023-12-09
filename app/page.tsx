
/* 
title: ffffff
subtitle: 424242
paragraphs: 949494
*/

export default async function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-start justify-start overflow-hidden">
      <div className="relative flex flex-col h-fit w-full px-10 pt-14 pb-8">
        <h1 className="text-xl">cristian sánchez</h1>
        <p className="text-lg font-thin text-[#424242]">@noreplydev</p>
      </div>
      <div
        className="relative flex flex-col h-full w-full px-10 gap-8"
      >
        <p
          className="text-lg font-thin text-[#949494]"
        >i just build things with code, share knowledge and learning every day.</p>
        <div
          className="relative flex flex-col h-full w-full"
        >
          <p>work</p>
          <p
            className="text-lg font-thin text-[#949494]"
          >currently working as a software developer at protofy.xyz</p>
        </div>
      </div>
    </main>
  )
}
