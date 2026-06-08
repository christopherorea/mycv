import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectImagePlaceholder = PlaceHolderImages.find(p => p.id === project.imageId);
  const defaultPlaceholder = PlaceHolderImages.find(p => p.id === 'profile');

  const isVideo = project.src && (project.src.includes('youtube') || project.src.includes('youtu.be'));
  const imageUrl = project.src && !isVideo ? project.src : (projectImagePlaceholder?.imageUrl || defaultPlaceholder?.imageUrl);
  const imageAlt = project.src && !isVideo ? project.title : (projectImagePlaceholder?.description || defaultPlaceholder?.description);

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
        {imageUrl && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt || 'Project image'}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={projectImagePlaceholder?.imageHint}
            />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <PlayCircle className="h-16 w-16 text-white/80" />
              </div>
            )}
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex-wrap gap-2 pt-4">
          {project.technologies.map((tech) => {
            const Icon = getIcon(tech.icon);
            return (
              <Badge key={tech.name} variant="outline" className="gap-1 text-xs">
                 {Icon && <Icon className="h-3 w-3" />}
                 {tech.name}
              </Badge>
            );
          })}
        </CardFooter>
      </Card>
    </Link>
  );
}
