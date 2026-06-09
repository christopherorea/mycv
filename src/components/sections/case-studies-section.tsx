'use client';
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CaseStudiesSection() {
  const { case_studies } = PORTFOLIO_DATA;
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  if (!case_studies || case_studies.length === 0) return null;

  return (
    <section id="case-studies" className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/30 text-primary">Strategic Impact</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-white">
            Architecture Deep Dives
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Real-world systems demonstrating the convergence of platform thinking and execution rigor.
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {case_studies.map((study) => (
              <CarouselItem key={study.id} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="relative overflow-hidden group border-white/5 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <ShieldCheck className="h-24 w-24 text-primary" />
                    </div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Enterprise Case Study</Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {study.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 line-clamp-2 h-[40px]">
                        {study.executive_summary}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 flex-grow">
                      <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 mb-6">
                        {study.kpis.slice(0, 3).map((kpi, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-primary font-bold text-lg">{kpi.after}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{kpi.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                          <Zap className="h-4 w-4 text-amber-400 flex-shrink-0" />
                          <span className="line-clamp-2">{study.paradigm_shift}</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="relative z-10 mt-auto">
                      <Link href={`/case-studies/${study.slug}`} className="w-full">
                        <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all">
                          Read Deep Dive <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
