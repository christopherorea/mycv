
"use client"

import * as React from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Experience() {
  const { professional_experience } = PORTFOLIO_DATA;
  const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});

  const toggleOpen = (id: string) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            My professional journey so far.
          </p>
        </div>
        <div className="grid gap-8">
            {professional_experience && professional_experience.map((job) => {
                const isVideo = job.src && (job.src.includes('youtube') || job.src.includes('youtu.be'));
                const uniqueId = `${job.company}-${job.role}`.replace(/\s+/g, '-').toLowerCase();
                
                let videoEmbedUrl = '';
                if (isVideo && job.src) {
                    if (job.src.includes('embed')) {
                        videoEmbedUrl = job.src;
                    } else {
                        const videoIdMatch = job.src.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                        const videoId = videoIdMatch ? videoIdMatch[1] : null;
                        if (videoId) {
                            videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
                        }
                    }
                }

                return (
                    <Card key={uniqueId} className="overflow-hidden transition-all duration-300 ease-in-out ">
                        <div className={job.src ? 'grid md:grid-cols-3' : ''}>
                            {isVideo && videoEmbedUrl ? (
                                <div className="relative aspect-video md:aspect-auto">
                                    <iframe
                                        src={videoEmbedUrl}
                                        title={`${job.company} video`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute left-0 top-0 h-full w-full"
                                    ></iframe>
                                </div>
                            ) : job.src ? (
                                <div className="relative aspect-video md:aspect-auto">
                                    <Image
                                        src={job.src}
                                        alt={`${job.company} logo`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : null}
                            <div className={job.src ? 'md:col-span-2' : ''}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl">{job.role}</CardTitle>
                                        <div className="text-sm text-muted-foreground">{job.period}</div>
                                    </div>
                                    <CardDescription className="text-base">{job.company}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{job.description}</p>
                                    {job.achievements && job.achievements.length > 0 && (
                                        <Collapsible
                                          open={openStates[uniqueId] || false}
                                          onOpenChange={() => toggleOpen(uniqueId)}
                                          className="w-full"
                                        >
                                            <CollapsibleTrigger asChild>
                                                <Button variant="ghost" className="w-full justify-start p-0 h-auto mb-4 text-sm font-semibold text-primary hover:text-primary/90">
                                                    <ChevronDown className={`mr-2 h-4 w-4 transition-transform duration-200 ${openStates[uniqueId] ? 'rotate-180' : ''}`} />
                                                    {openStates[uniqueId] ? 'Hide achievements' : `Show ${job.achievements.length} achievements`}
                                                </Button>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="CollapsibleContent">
                                                <ul className="space-y-3 pl-2 border-l border-primary/20">
                                                    {job.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <Check className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                                        <span className="text-muted-foreground">{achievement}</span>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    )}
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}

