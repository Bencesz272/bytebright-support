import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, Audience, FinalCTA, Process, Security, Services, Trust } from "@/components/site/Sections";
import { useReveal } from "@/hooks/use-reveal";

const title = "Ctrl+Plusz Megoldás — Reliable Remote IT Support";
const description =
  "Fast, professional remote IT support for individuals and small businesses: troubleshooting, Windows, security, backups, Office and cloud services — explained in plain language.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <About />
      <Audience />
      <Security />
      <FinalCTA />
    </main>
  );
}
