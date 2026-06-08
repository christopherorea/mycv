'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Briefcase, Lightbulb, GraduationCap, Award, BookOpen, Layers, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', label: 'Home', icon: Rocket },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'consulting', label: 'Consulting', icon: Lightbulb },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certs', icon: Award },
  { id: 'awards', label: 'Awards', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'hero', label: 'Contact', icon: Mail },
];

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isMounted) return;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-10 right-4 z-50">
      <div className="relative">
        <div 
          className={cn(
            "absolute bottom-20 right-0 w-48 bg-background border rounded-lg shadow-xl py-2 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={`${section.id}-${index}`}>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-4 py-2 text-left"
                  onClick={() => scrollToSection(section.id)}
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  {section.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-16 w-16 shadow-lg flex items-center justify-center relative z-10 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </div>
    </div>
  );
}