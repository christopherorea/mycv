import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getIcon, cn, getSkillIcon, slugify } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project, Skill } from "@/lib/types";

// This function processes the raw project data into the shape the components expect.
// It's defined here to be co-located with its usage.
const getProcessedProjects = (): Project[] => {
  const { projects } = PORTFOLIO_DATA.featured_projects;

  return projects.map((p, index) => {
    const technologies: Skill[] = p.tech_stack ? p.tech_stack.map((tech: string) => ({
      name: tech,
      icon: getSkillIcon(tech)
    })) : [];

    let longDescription = p.description;
    if ('business_impact' in p && p.business_impact) {
        longDescription += `\n\n${p.business_impact}`;
    }

    const links = 'links' in p && Array.isArray(p.links) ? p.links : [];

    return {
      id: p.id,
      title: p.title,
      category: p.category || '',
      year: p.year || 2024,
      src: p.src || '',
      slug: slugify(p.title),
      longDescription: longDescription,
      technologies: technologies,
      links: links,
      imageId: `project${index + 1}`,
    };
  });
};

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const PROJECTS = getProcessedProjects();
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const PROJECTS = getProcessedProjects();
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImagePlaceholder = PlaceHolderImages.find(p => p.id === project.imageId);
  const isVideo = project.src && (project.src.includes('youtube') || project.src.includes('youtu.be'));
  let videoEmbedUrl = '';

  if (isVideo && project.src) {
    if (project.src.includes('embed')) {
      videoEmbedUrl = project.src;
    } else {
      const videoIdMatch = project.src.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      if (videoId) {
        videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }
  }

  const imageUrl = !isVideo && project.src ? project.src : projectImagePlaceholder?.imageUrl;
  const imageAlt = !isVideo && project.src ? project.title : projectImagePlaceholder?.description;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <Link href="/#projects" className={cn(buttonVariants({ variant: "ghost" }), "mb-8")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <div className="mb-4">
              <h1 className="mb-2 text-4xl font-bold tracking-tighter md:text-5xl font-headline text-primary">
                {project.title}
              </h1>
              {project.category && (
                <p className="text-lg text-muted-foreground">{project.category}</p>
              )}
            </div>

            {isVideo && videoEmbedUrl ? (
              <div className="relative mb-8 aspect-video overflow-hidden rounded-lg border shadow-lg">
                <iframe
                  src={videoEmbedUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>
            ) : imageUrl && (
              <div className="relative mb-8 aspect-video overflow-hidden rounded-lg border shadow-lg">
                <Image
                  src={imageUrl}
                  alt={imageAlt || 'Project image'}
                  fill
                  className="object-cover"
                  data-ai-hint={projectImagePlaceholder?.imageHint}
                />
              </div>
            )}

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold font-headline">About this project</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                {project.longDescription.split('\n').filter(p => p).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {project.technologies.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold font-headline">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const Icon = getIcon(tech.icon);
                    return (
                      <Badge key={tech.name} variant="secondary" className="gap-2 px-4 py-2 text-base font-code">
                        {Icon && <Icon className="h-5 w-5" />}
                        {tech.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}
            
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => {
                  const isRepo = link.type.toLowerCase() === 'repository' || link.type.toLowerCase() === 'documentation';
                  const Icon = isRepo ? Github : ExternalLink;
                  const buttonVariant = isRepo ? 'default' : 'outline';
                  let buttonText = link.type;
                  if (isRepo) buttonText = "View Code";
                  if (link.type.toLowerCase() === "live demo") buttonText = "Live Demo";

                  return (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: buttonVariant })}>
                      <Icon className="mr-2 h-4 w-4" />
                      {buttonText}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
