'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  useEffect(() => {
    // This effect runs only on the client, after initial render
    setIsClient(true);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <a href={post.link} key={index} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="h-full">
                <CardHeader className="p-0">
                  {post.thumbnail && (
                    <img 
                      src={post.thumbnail} 
                      alt={isClient ? decodeHtml(post.title) : post.title} 
                      className="rounded-t-lg object-cover h-48 w-full" 
                    />
                  )}
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {isClient ? decodeHtml(post.title) : post.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isClient ? decodeHtml(post.content) : post.content}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
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
