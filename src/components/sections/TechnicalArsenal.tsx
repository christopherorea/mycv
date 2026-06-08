import { PORTFOLIO_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { getSkillIcon, getIcon } from "@/lib/utils";

export function TechnicalArsenal() {
  const { technical_arsenal } = PORTFOLIO_DATA;

  const CATEGORY_TITLES: Record<string, string> = {
    architectural_patterns: "Architectural Patterns",
    data_engineering_and_mlops: "Data Engineering & MLOps",
    graph_and_semantic_tech: "Graph & Semantic Tech",
    languages_and_frameworks: "Languages & Frameworks",
    frontend_and_deployment: "Frontend & Deployment",
  };

  return (
    <section id="tech-arsenal" className="py-12 md:py-16 bg-secondary/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and methodologies for state-of-the-art AI deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technical_arsenal).map(([category, skills]) => {
            const CategoryIcon = getIcon(getSkillIcon(skills[0]));
            return (
              <div key={category} className="bg-background/40 p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                  {CategoryIcon && <CategoryIcon className="h-5 w-5 mr-3 opacity-70" />}
                  {CATEGORY_TITLES[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[]).map((skill) => {
                    const SkillIcon = getIcon(getSkillIcon(skill));
                    return (
                      <Badge key={skill} variant="outline" className="text-xs flex items-center gap-1.5 py-1 px-3 bg-secondary/50">
                        {SkillIcon && <SkillIcon className="h-3.5 w-3.5 opacity-60" />}
                        {skill}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}