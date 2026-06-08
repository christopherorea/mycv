import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from 'next/image';

export function Experience() {
  const { professional_experience } = PORTFOLIO_DATA;

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
                    <Card key={job.company} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
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
                                        <ul className="space-y-2">
                                            {job.achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                                <span className="text-muted-foreground">{achievement}</span>
                                            </li>
                                            ))}
                                        </ul>
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
