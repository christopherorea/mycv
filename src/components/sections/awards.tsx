import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Awards() {
  const { awards_and_recognitions } = PORTFOLIO_DATA;

  return (
    <section id="awards" className="py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Awards & Recognitions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {awards_and_recognitions.map((award) => (
                <Card key={award.title} className="textured-card">
                    <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                            <CardTitle>{award.title}</CardTitle>
                            <div className="text-sm text-muted-foreground shrink-0">{award.issuer} - {award.year}</div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{award.details}</p>
                        {award.link && (
                            <a href={award.link} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Details
                            </a>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
