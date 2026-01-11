import { Container } from "@/components/ui/container";

const items = [
  "CRM",
  "Slack",
  "Google Workspace",
  "HubSpot",
  "Airtable",
  "Notion",
  "Stripe",
  "Zapier",
  "Make",
  "n8n"
];

export function Logos() {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-widest text-white/55">
            BUILT TO CONNECT THE TOOLS YOU ALREADY USE
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((name) => (
              <span
                key={name}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70 ring-1 ring-white/10"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

