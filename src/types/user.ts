import type ProjectType from "./portfolio"
import type SocialMediaType from "./socialMedia"

interface UserType {
  name: string
  nickName: string
  profilePictureUrl?: string
  description?: string
  role?: string
  socialMedias: SocialMediaType[]
  portfolio: ProjectType[]
}

export default UserType