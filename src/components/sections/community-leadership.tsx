import { PORTFOLIO_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CommunityLeadership() {
  const { community_leadership } = PORTFOLIO_DATA;

  return (
    <section id="community-leadership" className="bg-secondary py-6 md:py-10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Community Leadership & Advocacy
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Contributing to the tech ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {community_leadership.map((item) => (
                <Card key={`${item.role}-${item.organization}`} className="textured-card">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{item.role}</CardTitle>
                            <div className="text-sm text-muted-foreground">{item.period}</div>
                        </div>
                        <CardDescription className="text-base">{item.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{item.details}</p>
                        {item.events && item.events.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold">Events:</span>
                                {item.events.map((event) => (
                                    <Badge key={event} variant="outline">{event}</Badge>
                                ))}
                            </div>
                        )}
                         {item.locations && item.locations.length > 0 && (
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold">Locations:</span>
                                {item.locations.map((location) => (
                                    <Badge key={location} variant="outline">{location}</Badge>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
