
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { Experience } from "@/components/sections/experience";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { TechnicalArsenal } from "@/components/sections/TechnicalArsenal";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Awards } from "@/components/sections/awards";
import { Consulting } from "@/components/sections/consulting";
import { BeyondTheCode } from "@/components/sections/beyond-the-code";
import { CommunityLeadership } from "@/components/sections/community-leadership";
import MediumPosts from "@/components/sections/medium-posts";
import { FloatingNav } from "@/components/layout/floating-nav";
import Parser from 'rss-parser';

async function getMediumPosts() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@thcookieh');
    return feed.items.slice(0, 6).map((item) => {
      const content = item['content:encoded'] || item.content || '';
      const imgRegex = /<img[^>]+src="([^\">]+)"/;
      const match = content.match(imgRegex);
      const thumbnail = match ? match[1] : '';
      const contentText = content.replace(/<[^>]*>?/gm, '');
      const contentSnippet = contentText.substring(0, 100) + '...';

      return {
        title: item.title || '',
        link: item.link || '',
        thumbnail: thumbnail,
        content: contentSnippet,
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await getMediumPosts();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExecutiveSummary />
        <CaseStudiesSection />
        <TechnicalArsenal />
        <ProjectsGrid />
        <MediumPosts posts={posts} />
        <Experience />
        <Consulting />
        <Education />
        <Certifications />
        <Awards />
        <CommunityLeadership />
        <BeyondTheCode />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}
