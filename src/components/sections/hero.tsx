
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { getIcon, getSkillIcon, cn } from "@/lib/utils";

export function Hero() {
  const { profile, executive_summary, technical_arsenal } = PORTFOLIO_DATA;
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = Object.values(technical_arsenal).flat().map(skillName => ({
    name: skillName,
    icon: getSkillIcon(skillName),
  }));

  const profileImage = PlaceHolderImages.find(p => p.id === "profile");
  const { linkedin: linkedinUrl, resume_url } = profile.contact;
  const bio = executive_summary.philosophy;

  const initialSkills = skills.slice(0, 6);
  const additionalSkills = skills.slice(6);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Layer with Circular Image Masking */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradients to merge the image with the dark UI */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 z-10" />
        
        {profileImage && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-full md:w-[70%] lg:w-[60%] overflow-hidden">
            {/* The circular container that clips the white corners of the square image */}
            <div className="relative w-[120vh] h-[120vh] md:w-[110vh] md:h-[110vh] rounded-full overflow-hidden opacity-40 md:opacity-60 translate-x-1/4">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                priority
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container relative z-20 py-20 md:py-0">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Strategic AI & MLOps Leadership
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline text-white leading-tight">
            Hi, I'm <span className="text-primary">Christopher</span><br />
            Orea / Chris Galleta
          </h1>
          
          <p className="mb-8 text-lg text-slate-300 md:text-xl leading-relaxed max-w-xl">
            {bio}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row mb-12">
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "rounded-xl px-8 shadow-xl shadow-primary/20")}>
                <Linkedin className="mr-2 h-4 w-4"/> Contact Me
              </a>
            )}
            {resume_url && (
              <a href={resume_url} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-xl px-8 backdrop-blur-sm")}>
                <FileText className="mr-2 h-4 w-4"/> Download CV
              </a>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {initialSkills.map((skill) => {
                const Icon = getIcon(skill.icon);
                return (
                  <Badge key={skill.name} variant="secondary" className="gap-1.5 px-3 py-1.5 text-xs bg-background/60 backdrop-blur-md border-white/10 hover:bg-primary/20 transition-colors">
                    {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                    {skill.name}
                  </Badge>
                );
              })}
            </div>
            
            <div className={cn(
                "transition-[max-height] duration-500 ease-in-out overflow-hidden",
                showAllSkills ? "max-h-[800px]" : "max-h-0"
              )}>
              <div className="flex flex-wrap gap-2 pt-2">
                {additionalSkills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <Badge key={skill.name} variant="secondary" className="gap-1.5 px-3 py-1.5 text-xs bg-background/60 backdrop-blur-md border-white/10 hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {additionalSkills.length > 0 && (
              <button 
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-wider"
              >
                {showAllSkills ? (
                  <>Show less <ChevronUp className="h-3 w-3" /></>
                ) : (
                  <>+{additionalSkills.length} more <ChevronDown className="h-3 w-3" /></>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block z-20">
        <ChevronDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
}
