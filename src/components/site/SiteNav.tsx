import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How it works" },
  { href: "/#about", label: "About" },
  { href: "/#security", label: "Security" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-site pt-4">
        <nav className="glass flex h-14 items-center justify-between rounded-xl px-4 sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
              ⌘
            </span>
            <span className="truncate text-sm font-semibold tracking-tight">{site.brand}</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground lg:flex">
              <span className="status-dot" /> Available
            </span>
            <a href="/#contact" className="btn btn-primary !h-9 !px-4 text-[13px]">
              Get IT Help
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-md text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-xl p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Get IT Help
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
