import { PORTFOLIO_DATA } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export function Education() {
  const { description, entries } = PORTFOLIO_DATA.education;
  const Icon = getIcon("GraduationCap");

  return (
    <section id="education" className="py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Education
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((edu) => (
                <Card key={edu.degree} className="textured-card">
                    {edu.src && (
                        <div className="relative aspect-video w-full">
                            <Image src={edu.src} alt={edu.institution} fill className="object-contain p-4" />
                        </div>
                    )}
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            {Icon && <Icon className="h-8 w-8 mt-1 text-primary"/>}
                            <div>
                                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                <CardDescription className="text-base">{edu.institution}</CardDescription>
                                <div className="text-sm text-muted-foreground mt-1">{edu.status === 'In progress' ? `Expected: ${edu.graduation_date}` : `Graduated ${edu.graduation_date}`}</div>
                            </div>
                        </div>
                    </CardHeader>
                    {edu.highlights && edu.highlights.length > 0 && (
                        <CardContent>
                            <ul className="space-y-2">
                                {edu.highlights.map((metric, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                    <span className="text-muted-foreground">{metric}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    )}
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
