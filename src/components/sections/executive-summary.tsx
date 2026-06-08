import { PORTFOLIO_DATA } from "@/lib/data";
import { getIcon, getSkillIcon } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ExecutiveSummary() {
  const { core_pillars } = PORTFOLIO_DATA.executive_summary;

  if (!core_pillars) return null;

  return (
    <section id="executive-summary" className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Core Philosophy
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Guiding principles in bridging advanced technology with enterprise value.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {core_pillars.map((pillar) => {
            const iconName = getSkillIcon(pillar.concept);
            const Icon = getIcon(iconName);
            return (
              <Card key={pillar.concept} className="flex flex-col border-white/5 bg-secondary/30">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <CardTitle className="text-xl">{pillar.concept}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{pillar.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}