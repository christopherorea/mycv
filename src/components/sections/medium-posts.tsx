'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  content: string;
}

interface MediumPostsProps {
  posts: MediumPost[];
}

// Helper function to decode HTML entities on the client
const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const MediumPosts: React.FC<MediumPostsProps> = ({ posts }) => {
  const [isClient, setIsClient] = useState(false);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    // This effect runs only on the client, after initial render
    setIsClient(true);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {posts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader className="p-0">
                        {post.thumbnail && (
                          <img 
                            src={post.thumbnail} 
                            alt={isClient ? decodeHtml(post.title) : post.title} 
                            className="rounded-t-lg object-cover h-48 w-full" 
                          />
                        )}
                      </CardHeader>
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-2">
                          {isClient ? decodeHtml(post.title) : post.title}
                        </h3>
                        <p className="text-sm text-gray-500 flex-grow">
                          {isClient ? decodeHtml(post.content) : post.content}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center mt-8">
          <a href="https://medium.com/@thcookieh" target="_blank" rel="noopener noreferrer">
            <Button>View More on Medium</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediumPosts;
