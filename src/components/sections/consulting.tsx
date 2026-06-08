import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Consulting() {
  const { independent_consulting_and_rd } = PORTFOLIO_DATA;

  return (
    <section id="consulting" className="py-6 md:py-10 bg-secondary">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Independent Consulting & R&D
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {independent_consulting_and_rd.map((item) => (
                <Card key={item.engagement} className="textured-card">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{item.engagement}</CardTitle>
                            <div className="text-sm text-muted-foreground">{item.date}</div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{item.details}</p>
                        {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                                {item.links.map((link) => (
                                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}>
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
