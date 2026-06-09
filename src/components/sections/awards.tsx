'use client';
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Awards() {
  const { awards_and_recognitions } = PORTFOLIO_DATA;
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="awards" className="py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Awards & Recognitions
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true
          }}
        >
          <CarouselContent>
            {awards_and_recognitions.map((award, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="textured-card h-full flex flex-col">
                      <CardHeader>
                          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                              <CardTitle>{award.title}</CardTitle>
                              <div className="text-sm text-muted-foreground shrink-0">{award.issuer} - {award.year}</div>
                          </div>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow">
                          <p className="text-muted-foreground mb-4 flex-grow">{award.details}</p>
                          {award.link && (
                              <a href={award.link} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "w-fit")}>
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  View Details
                              </a>
                          )}
                      </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext
            className="focus:bg-primary/90 hover:bg-primary/90 text-primary-foreground"
          />
        </Carousel>
      </div>
    </section>
  );
}
