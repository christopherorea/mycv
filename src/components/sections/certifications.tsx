import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="bg-secondary py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            My professional certifications.
          </p>
        </div>
        <div className="grid gap-12">
          {certifications.map((category) => (
            <div key={category.category}>
              <h3 className="mb-6 text-2xl font-semibold tracking-tighter text-center font-headline">{category.category}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {category.credentials && category.credentials.map((credential) => (
                  <Card key={credential.title} className="textured-card">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Award className="h-8 w-8 mt-1 flex-shrink-0 text-primary"/>
                        <div>
                          <CardTitle className="text-xl">{credential.title}</CardTitle>
                          <CardDescription className="text-base font-semibold">{credential.issuer}</CardDescription>
                          {credential.id && (
                             <p className="text-sm text-muted-foreground mt-1">Credential ID: {credential.id}</p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{credential.highlight}</p>
                      {credential.url && (
                        <a href={credential.url} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Verify
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
