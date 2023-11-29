import { GitFork, Star } from "lucide-react"

async function fetchRepos() {
  return [
    {
      name: 'suiro',
      stargazers_count: 10,
      forks_count: 3,
      lang: "rust"
    },
    {
      name: 'antimodules',
      stargazers_count: 3,
      forks_count: 1,
      lang: "rust"
    },
    {
      name: 'banners-service',
      stargazers_count: 2,
      forks_count: 0,
      lang: "javascript"
    },
    {
      name: 'alive-sessions',
      stargazers_count: 1,
      forks_count: 0,
      lang: "javascript"
    }
  ]
  /* return fetch(String(process.env.GITHUB_REPOS), {
    cache: 'no-store',
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${process.env.GITHUB_TOKEN_AUTH}`
    // }
  })
    .then((res) => res.json())
    .then((data) => {
      return data.length > 1 ? data
        .sort((a: any, b: any) => {
          return Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
        }) : [
        {
          name: 'suiro',
          stargazers_count: 10,
          forks_count: 3
        },
        {
          name: 'antimodules',
          stargazers_count: 1,
          forks_count: 0
        },
        {
          name: 'alive-sessions',
          stargazers_count: 2,
          forks_count: 0
        }
      ]
    }) */
}

async function fetchUser() {
  return fetch(String(process.env.GITHUB_USER), {
    method: 'GET',
    cache: 'no-store',
    // headers: {
    //   Authorization: `Bearer ${process.env.GITHUB_TOKEN_AUTH}`
    // }
  })
    .then((res) => res.json())
    .then((data) => data)
}

export default async function Home() {
  const repos = await fetchRepos()

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-between gap-5 overflow-hidden">
      <div className="flex h-fit w-full flex-row justify-between items-end">
        <div className="flex h-full w-fit flex-col justify-between items-start gap-1">
          <h1 className="md:text-2xl font-medium whitespace-nowrap">Cristian Sánchez</h1>
          <p className="text-xl text-[#424242]">@noreplydev</p>
        </div>
        <p className="text-xl text-[#424242]">software developer</p>
      </div>
      {/* PROJECTS */}
      <div className="relative h-full w-full flex flex-col overflow-scroll">
        {
          repos.map((repo: any) => {
            return <div
              key={repo.name}
              className="h-fit w-full flex flex-row justify-start items-center py-2.5 px-4
                rounded-md cursor-pointer transition-all ease-in-out duration-[0.12] hover:bg-[#151515] gap-4 group ">
              <p className="text-xl text-[#424242] group-hover:text-[#AFAFAF] group-hover:transition-all 
                group-hover:ease-in-out group-hover:duration-[0.12]">{repo.name}</p>
              <div className="h-fit w-fit gap-2 hidden flex-row justifiy-start items-center group-hover:flex">
                <Star size={18} fill="#424242" color="#424242" className="group-hover:fill-[#AFAFAF] group-hover:stroke-[#AFAFAF] group-hover:transition-all 
                group-hover:ease-in-out group-hover:duration-[0.12]" />
                <p className="text-xl text-[#424242] group-hover:text-[#AFAFAF] group-hover:transition-all 
                group-hover:ease-in-out group-hover:duration-[0.12]">{repo.stargazers_count}</p>
              </div>
              <div className="h-fit w-fit gap-2 hidden flex-row justifiy-start items-center group-hover:flex">
                <GitFork size={18} fill="#424242" color="#424242" className="group-hover:fill-[#AFAFAF] group-hover:stroke-[#AFAFAF] group-hover:transition-all 
                group-hover:ease-in-out group-hover:duration-[0.12]" />
                <p className="text-xl text-[#424242] group-hover:text-[#AFAFAF] group-hover:transition-all 
                group-hover:ease-in-out group-hover:duration-[0.12]">{repo.forks_count}</p>
              </div>
            </div>
          })
        }
      </div>
    </main>
  )
}
