import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const lines = [
  { p: "$", t: "itsupport diagnose --remote" },
  { p: "›", t: "connecting to workstation… ok", c: "text-muted-foreground" },
  { p: "›", t: "checking system health", c: "text-muted-foreground" },
  { p: "✓", t: "windows updates       current", c: "text-success" },
  { p: "✓", t: "malware scan          clean", c: "text-success" },
  { p: "!", t: "startup apps          14 (slow boot)", c: "text-warning" },
  { p: "✓", t: "backup status         last run 02:00", c: "text-success" },
  { p: "$", t: "itsupport fix --startup" },
  { p: "›", t: "issue resolved · boot time -38%", c: "text-primary" },
];

function Terminal() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= lines.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 500 : 420);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-line-strong bg-terminal shadow-card">
      <div className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-primary/10 to-transparent animate-scan" />
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">remote-session — zsh</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-success">
          <span className="status-dot" /> live
        </span>
      </div>
      <div className="min-h-[248px] p-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {lines.slice(0, count).map((l, i) => (
          <div key={i} className={`flex gap-3 ${l.c ?? "text-foreground"}`}>
            <span className="w-3 shrink-0 text-primary">{l.p}</span>
            <span className="whitespace-pre">{l.t}</span>
          </div>
        ))}
        {count < lines.length ? (
          <span className="ml-6 inline-block h-4 w-2 translate-y-1 bg-primary animate-blink" />
        ) : (
          <div className="flex gap-3 text-foreground">
            <span className="w-3 text-primary">$</span>
            <span className="inline-block h-4 w-2 translate-y-1 bg-primary animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

const stats = [
  { k: "CPU", v: "12%", w: "12%" },
  { k: "MEM", v: "41%", w: "41%" },
  { k: "DISK", v: "63%", w: "63%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-radial opacity-70" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-2/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="status-dot" /> Remote IT support · Hungary &amp; worldwide
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Reliable IT Support.
            <br />
            <span className="text-gradient">Without the IT Headache.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fast, professional remote assistance for individuals and small businesses —
            troubleshooting, system maintenance, security, software issues and cloud services.
            Explained in plain language, fixed properly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Get IT Help <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              ["< 24h", "typical response"],
              ["90%+", "solved remotely"],
              ["0", "jargon required"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-1 text-xl font-bold tracking-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-float">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative">
            <Terminal />
            <div className="glass mt-3 grid grid-cols-3 gap-4 rounded-xl p-4">
              {stats.map((s) => (
                <div key={s.k}>
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>{s.k}</span>
                    <span className="text-foreground">{s.v}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: s.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
