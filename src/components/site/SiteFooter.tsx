import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
                ⌘
              </span>
              <span className="text-sm font-semibold tracking-tight">{site.brand}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {site.tagline} for individuals and small businesses. Remote-first, security-minded,
              explained in plain language.
            </p>
            <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="status-dot" /> Online · Secure · Available
            </p>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="text-foreground/90 hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="break-all text-foreground/90 hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground">{site.owner}</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-foreground/90 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-foreground/90 hover:text-primary">
                  Legal / Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>build: stable · region: HU · uptime: 99.9%</span>
        </div>
      </div>
    </footer>
  );
}
