import { Section } from "@/components/ui/section";

const outcomes = [
  {
    title: "Faster cycle time",
    desc: "Automations that reduce handoffs and keep work moving across tools."
  },
  {
    title: "Higher data quality",
    desc: "Validation, normalization, and structured pipelines—less spreadsheet chaos."
  },
  {
    title: "Operational reliability",
    desc: "Retries, alerts, and audit trails so workflows are safe to trust."
  }
];

const caseStudies = [
  {
    title: "Lead routing + enrichment",
    bullets: [
      "Auto-enrichment + dedupe",
      "Round-robin routing by territory",
      "Slack alerts for high-intent leads"
    ]
  },
  {
    title: "Back-office automation",
    bullets: [
      "Invoice generation + reminders",
      "Subscription status sync",
      "Daily finance reconciliation report"
    ]
  }
];

export function Proof() {
  return (
    <Section
      id="proof"
      eyebrow="Outcomes"
      title="Automation you can measure."
      subtitle="We optimize for time reclaimed, fewer errors, and dependable delivery—tracked with dashboards and alerts."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <div className="text-base font-semibold">{o.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{o.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 ring-1 ring-white/10"
          >
            <div className="text-sm font-semibold">{c.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

