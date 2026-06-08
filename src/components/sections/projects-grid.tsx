import { PORTFOLIO_DATA } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/types";
import { getSkillIcon, slugify } from "@/lib/utils";

export function ProjectsGrid() {
  const { description, projects } = PORTFOLIO_DATA.featured_projects;

  const PROJECTS: Project[] = projects.map((p, index) => {
      const technologies = p.tech_stack ? p.tech_stack.map((tech: string) => ({
          name: tech,
          icon: getSkillIcon(tech)
      })) : [];

      let projectDescription = p.description;
      if (p.business_impact) {
          projectDescription += `\n\n${p.business_impact}`;
      }

      const links = p.links || [];

      return {
          ...p,
          id: p.id,
          title: p.title,
          category: p.category || '',
          year: p.year || 2024,
          src: p.src || '',
          slug: slugify(p.title),
          description: projectDescription,
          technologies: technologies,
          links: links,
          imageId: `project${index + 1}`,
      };
  });

  return (
    <section id="projects" className="bg-secondary py-12 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
