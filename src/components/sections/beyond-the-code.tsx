import { PORTFOLIO_DATA } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function BeyondTheCode() {
  const { description, interests } = PORTFOLIO_DATA.beyond_the_code;

  return (
    <section id="beyond-the-code" className="py-12 md:py-20 final-section-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Beyond the Code
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
            {interests.map((interest) => {
                const Icon = getIcon(interest.icon);
                return (
                    <Card key={interest.activity}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            {Icon && <Icon className="h-8 w-8 text-primary" />}
                            <CardTitle>{interest.activity}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{interest.details}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}
