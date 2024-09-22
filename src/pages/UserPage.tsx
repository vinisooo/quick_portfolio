'use client'
import users from "@/app/data/data"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/portfolio/ProjectCard"
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import Error from "next/error"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}

interface UserPortfolioPropsType {
  nickName: string
}

export default function UserPortfolioPage ({ nickName }: UserPortfolioPropsType) {
  const user = users.find(user => user.nickName === nickName)

  if(!user) {
    return <Error statusCode={404}/>
  }
  function getSocialMediaIcon(socialMedia: string) {
    switch (socialMedia) {
      case 'instagram':
        return <InstagramLogoIcon/>
      case 'github':
        return <GitHubLogoIcon/>
        break;
      default:
        return null
    }
  }
  
  return (
    <main className="px-5">
      {/* user banner */}
      <div className="rounded-b-2xl bg-neutral-800 w-full h-[200px] max-w-7xl m-auto relative flex items-center justify-center">
        {/* user banner */}
        <img src="" alt="" />
        {/* user profile pic */}
        <div className="w-full flex justify-center items-start ">
          <figure className="absolute bottom-[-75px] rounded-full overflow-hidden w-[150px] h-[150px] bg-neutral-50 border-4 border-solid border-white">
            <img src={user.profilePictureUrl || ''} alt="" />
          </figure>
        </div>
      </div>

      <div className="m-auto max-w-7xl">
        <div className="w-full flex flex-col items-center justify-center pt-[100px] text-center ">
          <div>
            <h1 className="text-neutral-700 font-semibold text-3xl ">{user.name}</h1>
            {
              user.role &&
            <Badge>{user.role}</Badge>
            }
          </div>
          <p className="text-center max-w-[650px] mt-6 text-neutral-400">{user.description}</p>
          <div className="mt-5 flex gap-3">
            {
              user.socialMedias.map((socialMedia, i) => {
                return <a key={i} href={socialMedia.url} target="_blank">
                  {getSocialMediaIcon(socialMedia.socialMedia)}
                </a>
              })
            }
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-14">
        {
          user.portfolio.map((project, i) => <ProjectCard project={project} key={i}/>)
        }
        </div>
      </div>
    </main>
  )
}
