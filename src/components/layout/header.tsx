import Link from "next/link";
import { Code, PanelRight } from "lucide-react";

import { PORTFOLIO_DATA } from "@/lib/data";
import { getIcon, cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export function Header() {
  const { profile } = PORTFOLIO_DATA;

  const socials = [
    {
      name: "LinkedIn",
      url: profile.contact.linkedin,
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: profile.contact.github,
      icon: "Github",
    },
    {
      name: "Medium",
      url: profile.contact.medium,
      icon: "Medium",
    },
  ];

  const linkedinUrl = profile.contact.linkedin;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">@THCOOKIEH</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center space-x-1 md:flex">
            {socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                Icon && (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={buttonVariants({ variant: "ghost", size: "icon" })}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              );
            })}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants()}
              >
                Contact Me
              </a>
            )}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <PanelRight className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <SheetHeader className="border-b pb-4 text-left">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Connect with me on social media or get in touch.
                </SheetDescription>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="flex-1 space-y-4 pt-8">
                  {socials.map((social) => {
                    const Icon = getIcon(social.icon);
                    return (
                      Icon && (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{social.name}</span>
                        </a>
                      )
                    );
                  })}
                </div>
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants(), "w-full")}
                  >
                    Contact Me
                  </a>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
