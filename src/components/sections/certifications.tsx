
"use client"

import * as React from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Award, ChevronDown, ExternalLink } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});

  const toggleOpen = (id: string) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="certifications" className="bg-secondary py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            My professional certifications, categorized by area of expertise.
          </p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {certifications.map((category) => {
            const categoryId = category.category.replace(/\s+/g, '-').toLowerCase();
            const isOpen = openStates[categoryId] || false;
            return (
              <div key={categoryId} className="textured-card rounded-lg border bg-card text-card-foreground shadow-sm">
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => toggleOpen(categoryId)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-xl font-semibold tracking-tighter font-headline md:text-2xl">{category.category}</h3>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Show details
                        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="px-6 pb-6">
                    <div className="space-y-6">
                      {category.credentials && category.credentials.map((credential) => {
                        const uniqueId = `${credential.issuer}-${credential.title}`.replace(/\s+/g, '-').toLowerCase();
                        return (
                          <div key={uniqueId} className="p-4 rounded-md border border-primary/20 bg-background/50">
                             <div className="flex items-start gap-4">
                                <Award className="h-6 w-6 mt-1 flex-shrink-0 text-primary"/>
                                <div>
                                  <h4 className="text-lg font-semibold">{credential.title}</h4>
                                  <p className="text-base font-medium text-muted-foreground">{credential.issuer}</p>
                                  {credential.id && (
                                     <p className="text-sm text-muted-foreground/80 mt-1">Credential ID: {credential.id}</p>
                                  )}
                                </div>
                              </div>
                              <p className="text-muted-foreground mt-3 pl-[32px]">{credential.highlight}</p>
                              {credential.url && (
                                <div className="pl-[32px] mt-3">
                                  <a href={credential.url} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Verify
                                  </a>
                                </div>
                              )}
                          </div>
                        )
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
