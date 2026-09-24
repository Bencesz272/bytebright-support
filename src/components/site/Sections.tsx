import {
  ArrowRight,
  Briefcase,
  Cloud,
  HardDrive,
  LayoutGrid,
  Mail,
  MonitorCog,
  Phone,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

function SectionHead({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------- Trust */
const benefits = [
  ["Fast Response", "Quickly identify and resolve technical problems."],
  ["Remote Support", "Professional help without bringing your computer anywhere."],
  ["Clear Communication", "Technical problems explained in understandable language."],
  ["Reliable Solutions", "Solving the actual problem — not selling unnecessary services."],
  ["Security First", "Protecting your systems, accounts and important data."],
];

export function Trust() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-site grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
        {benefits.map(([t, d], i) => (
          <div key={t} className="reveal py-7 sm:px-5 lg:first:pl-0 lg:last:pr-0" style={{ transitionDelay: `${i * 60}ms` }}>
            <p className="font-mono text-[10px] text-primary">0{i + 1}</p>
            <h3 className="mt-2 text-sm font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Services */
const services = [
  { i: Wifi, t: "Remote IT Support", d: "Troubleshooting and resolving computer and software problems remotely.", tag: "remote" },
  { i: MonitorCog, t: "Windows Support", d: "Windows errors, system issues, updates, drivers and performance problems.", tag: "windows" },
  { i: Zap, t: "PC Optimization", d: "Improve slow or unstable computers and optimize system performance.", tag: "perf" },
  { i: ShieldCheck, t: "Virus & Malware Removal", d: "Identify and remove malware and improve overall system security.", tag: "security" },
  { i: LayoutGrid, t: "Software & Office Support", d: "Installation and configuration of Microsoft Office, Outlook, Word, Excel and more.", tag: "apps" },
  { i: Mail, t: "Email & Cloud Services", d: "Email account setup and cloud services such as OneDrive and Google Drive.", tag: "cloud" },
  { i: HardDrive, t: "Data Backup", d: "Secure backups of important documents, photos and business data.", tag: "backup" },
  { i: Briefcase, t: "Business IT Support", d: "Reliable assistance for small businesses: workstations, software, cloud and daily issues.", tag: "business" },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-site">
        <SectionHead
          eyebrow="// services"
          title="Everything your systems need. Nothing they don't."
          text="From a single slow laptop to a small office network — focused, practical help with the problems people actually run into."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.t}
              className="card-tech reveal rounded-xl p-6"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong bg-surface-2 text-primary">
                  <s.i className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">#{s.tag}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Process */
const steps = [
  { n: "01", t: "Tell Me What’s Wrong", d: "Contact me and briefly describe the problem — no technical terms needed.", s: "request received" },
  { n: "02", t: "I Diagnose the Problem", d: "I identify the root cause and explain the available solution clearly.", s: "diagnostics running" },
  { n: "03", t: "We Get It Fixed", d: "I resolve the issue remotely whenever possible and make sure everything works properly again.", s: "resolved · verified" },
];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 border-y border-line bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-radial" />
      <div className="container-site relative">
        <SectionHead
          eyebrow="// how it works"
          title="A simple process. A clear result."
          text="Three steps from “something’s wrong” to “everything works again”."
          align="center"
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px w-full md:block"
            aria-hidden
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--primary)"
              strokeOpacity="0.5"
              strokeDasharray="6 8"
              className="animate-dash"
            />
          </svg>
          {steps.map((s, i) => (
            <li key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative z-10 mb-6 inline-grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border border-line-strong bg-background font-mono text-lg font-semibold text-primary shadow-glow">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-success" : "bg-primary"}`} />
                {s.s}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- About */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal relative">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line-strong bg-surface">
            <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-primary/40 bg-surface-2 text-3xl font-bold text-primary">
                  LB
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  portrait · coming soon
                </p>
              </div>
            </div>
            <div className="glass absolute inset-x-4 bottom-4 rounded-xl p-4">
              <p className="font-semibold">{site.owner}</p>
              <p className="font-mono text-[11px] text-muted-foreground">IT systems administrator</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Windows", "Microsoft 365", "Security", "Cloud", "Remote support"].map((t) => (
                  <span key={t} className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="eyebrow">// about</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl">
            Hi, I’m Bence — the person on the other end of the line.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I’m an IT systems administrator with several years of hands-on experience working with
              computers, troubleshooting, Windows systems, software problems and remote technical
              support.
            </p>
            <p>
              You don’t need any technical knowledge to work with me. My job is to understand what’s
              going wrong, explain it clearly, and give you a practical solution — without
              unnecessary complexity or upselling.
            </p>
            <p>
              Whether it’s a single home laptop or the workstations of a small business, I treat
              your systems and data with the same care I’d expect for my own.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Work with me <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.emailHref} className="btn btn-ghost">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Audience */
export function Audience() {
  const cols = [
    {
      eyebrow: "for businesses",
      title: "Keep the business running.",
      text: "Reliable IT support for everyday operations — workstations, software, email, cloud services and the technical issues that slow your team down.",
      items: ["Workstation setup & maintenance", "Microsoft 365 & email", "Cloud storage & sharing", "Security & backups"],
      icon: Briefcase,
    },
    {
      eyebrow: "for individuals",
      title: "Friendly help, in plain language.",
      text: "Understandable assistance with computers, Windows, software, security, backups and any other technical problem — no jargon, no judgement.",
      items: ["Slow or unstable computers", "Windows & software issues", "Virus removal & protection", "Photos, documents & backups"],
      icon: MonitorCog,
    },
  ];
  return (
    <section className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="container-site">
        <SectionHead
          eyebrow="// who it's for"
          title="Businesses and individuals, equally welcome."
          text="You don’t need to know exactly what’s wrong before you get in touch. Describing the symptoms is enough — figuring out the cause is my job."
          align="center"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {cols.map((c, i) => (
            <div key={c.eyebrow} className="card-tech reveal rounded-2xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between">
                <p className="eyebrow">{c.eyebrow}</p>
                <c.icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <ul className="mt-6 grid gap-2.5 font-mono text-[12px] text-foreground/85 sm:grid-cols-2">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="text-primary">›</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Security */
const secItems = [
  "Malware protection",
  "System security",
  "Software updates",
  "Secure configuration",
  "Data backups",
  "Cloud storage",
  "Preventing recurring problems",
];

const checks = [
  ["Endpoint protection", "active"],
  ["OS & app updates", "current"],
  ["Account security (2FA)", "enabled"],
  ["Backup — documents", "verified"],
  ["Backup — cloud sync", "verified"],
  ["Firewall configuration", "hardened"],
];

export function Security() {
  return (
    <section id="security" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-radial" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow">// security</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            Your Data Deserves <span className="text-gradient">More Than Luck.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Fixing today’s problem is only half the job. I also make sure your systems stay
            protected, up to date and backed up — so the same issue doesn’t come back next month.
          </p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {secItems.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-sm">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative" style={{ transitionDelay: "120ms" }}>
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-terminal shadow-card">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[11px] text-muted-foreground">security-posture.report</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-success">
                <span className="status-dot" /> secure
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4">
                <div className="relative grid h-20 w-20 shrink-0 place-items-center">
                  <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="var(--line-strong)" strokeWidth="4" />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="var(--success)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 34 * 0.98} ${2 * Math.PI * 34}`}
                    />
                  </svg>
                  <span className="font-mono text-lg font-semibold">98</span>
                </div>
                <div>
                  <p className="font-semibold">Security score</p>
                  <p className="text-sm text-muted-foreground">All critical controls in place.</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-line font-mono text-[12px]">
                {checks.map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between py-2.5">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="flex items-center gap-2 text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ CTA */
export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-3xl border border-line-strong bg-surface px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-hero" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 mask-fade-radial" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">// get in touch</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Don’t Wait for the Problem to Get Worse.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether your computer is slow, an application refuses to work, your system has been
              infected, or you simply don’t know what went wrong — get in touch and we’ll figure it
              out.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.emailHref} className="btn btn-primary w-full sm:w-auto">
                Get IT Help <ArrowRight className="h-4 w-4" />
              </a>
              <a href={site.phoneHref} className="btn btn-ghost w-full sm:w-auto">
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>
            <a
              href={site.emailHref}
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="status-dot" /> Cloud <span className="text-line-strong">·</span> Remote
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
