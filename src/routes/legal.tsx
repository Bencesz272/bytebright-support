import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

const title = `Legal / Imprint — ${site.brand}`;
const description = "Legal notice and contact details for Ctrl+Plusz Megoldás IT support.";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="// imprint" title="Legal / Imprint">
      <h2>Service provider</h2>
      <p>
        {site.brand}
        <br />
        {site.owner} — {site.tagline}
      </p>
      <h2>Contact</h2>
      <p>
        Phone: <a href={site.phoneHref}>{site.phone}</a>
        <br />
        Email: <a href={site.emailHref}>{site.email}</a>
      </p>
      <h2>Registration details</h2>
      <p>
        Registered seat, tax number and registration number will be listed here. Please contact us
        if you need these details before they are published.
      </p>
      <h2>Liability</h2>
      <p>
        All services are performed with professional care. Please make sure important data is backed
        up before any maintenance; backup assistance is available on request.
      </p>
    </LegalPage>
  ),
});
