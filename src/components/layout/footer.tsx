import { PORTFOLIO_DATA } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  const { name, contact } = PORTFOLIO_DATA.profile;

  const socials = [
    {
      name: "LinkedIn",
      url: contact.linkedin,
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: contact.github,
      icon: "Github",
    },
    {
      name: "Medium",
      url: contact.medium,
      icon: "Medium",
    },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-1">
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
        </div>
      </div>
    </footer>
  );
}
