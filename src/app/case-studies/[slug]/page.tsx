
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, TrendingUp, Cpu, Network, ShieldAlert, BarChart3 } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return PORTFOLIO_DATA.case_studies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = PORTFOLIO_DATA.case_studies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b border-white/5 bg-secondary/20">
          <div className="container">
            <div className="flex flex-col items-start gap-6 mb-10">
              <Link href="/#case-studies" className="inline-flex items-center text-sm text-primary hover:underline group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
              </Link>
              <Badge variant="outline" className="py-1 px-4 border-primary/30 text-primary uppercase tracking-widest text-[10px] font-bold">
                Case Study Deep Dive
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {study.subtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-8">
                <Card className="bg-secondary/40 border-primary/20 shadow-2xl shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" /> Success Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {study.kpis.map((kpi, idx) => (
                      <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{kpi.label}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 line-through text-sm">{kpi.before}</span>
                          <span className="text-primary font-bold text-lg">{kpi.after}</span>
                        </div>
                        <div className="text-emerald-400 text-xs font-semibold mt-1">Impact: {kpi.impact}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">Role & Ownership</h3>
                  <ul className="space-y-4">
                    {study.role_and_ownership.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main Body */}
              <div className="lg:col-span-8 space-y-16">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <ShieldAlert className="h-8 w-8 text-primary" /> The Challenge
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {study.challenge}
                  </p>
                </div>

                {study.solution_sections.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {section.list.map((item, i) => (
                          <li key={i} className="bg-secondary/30 p-5 rounded-xl text-sm text-slate-300 border border-white/5 flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-primary" /> Performance Comparison
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-white/5 bg-secondary/10">
                    <Table>
                      <TableHeader className="bg-secondary/50">
                        <TableRow>
                          <TableHead className="text-white">Metric</TableHead>
                          <TableHead className="text-white">Before</TableHead>
                          <TableHead className="text-white">After</TableHead>
                          <TableHead className="text-white">Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {study.metrics_comparison.map((row, idx) => (
                          <TableRow key={idx} className="border-white/5 hover:bg-white/5 transition-colors">
                            <TableCell className="font-medium text-slate-200">{row.metric}</TableCell>
                            <TableCell className="text-slate-400">{row.before}</TableCell>
                            <TableCell className="text-primary font-bold">{row.after}</TableCell>
                            <TableCell className="text-emerald-400 font-semibold">{row.change}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-8 md:p-10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
                  <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Strategic Key Takeaways</h2>
                  <div className="grid gap-8 md:grid-cols-2 relative z-10">
                    {study.takeaways.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-sm shadow-lg shadow-primary/20">
                          {idx + 1}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-20 bg-secondary/40 border-t border-white/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to solve a similar challenge?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
              I specialize in architecting deterministic AI systems for high-complexity enterprise environments.
            </p>
            <div className="flex justify-center gap-4">
              <Link href={PORTFOLIO_DATA.profile.contact.linkedin} target="_blank">
                <Button size="lg" className="px-10 py-6 text-lg rounded-xl shadow-xl shadow-primary/20">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
