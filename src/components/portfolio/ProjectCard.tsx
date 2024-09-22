import type ProjectType from "@/types/portfolio"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

interface ProjectCardPropsType {
  project: ProjectType
}

export default function ProjectCard ({project}: ProjectCardPropsType) {
  return (
    <a href={project.url || ``} target="_blank">
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="p-0 h-40 overflow-hidden">
        <img src={project.imageUrl}/>
      </CardHeader>
      <CardContent>
        <CardTitle className="mt-4">
          {project.title}
        </CardTitle>
        {
          project.description &&
          <p className="text-sm text-neutral-400 mt-3">{project.description}</p>
        }
      </CardContent>
    </Card>
    </a>
  )
}
