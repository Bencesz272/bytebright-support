import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="relative overflow-hidden pt-36 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="container-site relative max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.03em]">{title}</h1>
        <div className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </div>
    </main>
  );
}
