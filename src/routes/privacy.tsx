import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

const title = `Privacy Policy — ${site.brand}`;
const description = "How Ctrl+Plusz Megoldás handles personal data during remote IT support.";

export const Route = createFileRoute("/privacy")({
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
    <LegalPage eyebrow="// privacy" title="Privacy Policy">
      <p>
        {site.brand} ({site.owner}) processes personal data only to the extent necessary to provide
        remote IT support services and to respond to enquiries.
      </p>
      <h2>Data we process</h2>
      <p>
        Contact details (name, email address, phone number) you provide when you get in touch, and
        technical information about your systems that is required to diagnose and resolve an issue.
      </p>
      <h2>Remote sessions</h2>
      <p>
        Remote access is only established with your explicit consent, for the duration of the
        session, and can be ended by you at any time. No data is copied from your device unless you
        request it (for example for a backup).
      </p>
      <h2>Retention and sharing</h2>
      <p>
        Data is kept only as long as needed to provide the service and meet legal obligations. It is
        never sold or shared with third parties for marketing purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data at any time by
        writing to <a href={site.emailHref}>{site.email}</a>.
      </p>
    </LegalPage>
  ),
});
