import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Github, Linkedin, Mail, FileText, ExternalLink, Code, Server, Database, BrainCircuit, GraduationCap, Trophy, Wind, Music, Gamepad2, Briefcase, Target, Award, BookOpen, type LucideIcon } from 'lucide-react';
import React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (text: string): string =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code,
  Server,
  Database,
  BrainCircuit,
  GraduationCap,
  Trophy,
  Wind,
  Music,
  Gamepad2,
  Briefcase,
  Target,
  Award,
  BookOpen,
  Medium: BookOpen,
};

export function getIcon(name: string): LucideIcon | null {
  const IconComponent = iconMap[name];
  return IconComponent || null;
}

export const SKILL_ICON_MAP: Record<string, string[]> = {
    Database: ['database', 'pipelines', 'spark', 'neo4j', 'pyspark', 'databricks', 'apache spark', 'sparkml', 'data pipelines', 'vector databases', 'data analytics'],
    BrainCircuit: ['vertex ai', 'agentic ai', 'generative ai', 'nlp', 'mcp', 'ml', 'graph-rag', 'databricks certified ml professional', 'transformers', 'gpt', 'bert', 'llm orchestration', 'ethical ai', 'reinforcement learning', 'huggingface', 'voice ai', 'nlp classification', 'semantic search', 'llms', 'custom embeddings', 'vector similarity', 'computer vision', 'emotion detection', 'bmi (brain-machine interface)', 'ai', 'gcloud nlp', 'spacy', 'gemini api'],
    Server: ['server', 'edge ai strategies', 'distributed systems', 'docker', 'gcloud', 'android build systems', 'mlops'],
    Code: ['python', 'typescript', 'javascript', 'react / node.js', 'model context protocol (mcp)'],
    FileText: ['ontology design', 'knowledge graph', 'digital twins', 'rag architecture'],
    Award: ['blockchain', 'nfts'],
    Target: ['zero-trust security'],
    Briefcase: ['pwa (progressive web apps)', 'chrome extension api'],
};

export const getSkillIcon = (skillName: string): string => {
    const lowerSkillName = skillName.toLowerCase();
    for (const icon in SKILL_ICON_MAP) {
        if (SKILL_ICON_MAP[icon].some(s => lowerSkillName.includes(s))) {
            return icon;
        }
    }
    return 'Code'; // Default icon
};
