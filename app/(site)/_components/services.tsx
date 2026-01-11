import { Section } from "@/components/ui/section";

const services = [
  {
    title: "Workflow automation",
    desc: "Replace manual SOPs with reliable, observable workflows that run on schedules, triggers, and approvals."
  },
  {
    title: "CRM & revenue ops",
    desc: "Lead routing, enrichment, task creation, pipeline hygiene, attribution, and automated follow-ups."
  },
  {
    title: "System integrations",
    desc: "Connect SaaS tools with clean contracts, retries, and logging—so data moves correctly every time."
  },
  {
    title: "AI-assisted operations",
    desc: "Summarize calls, classify tickets, generate drafts, route requests, and keep humans in the loop."
  },
  {
    title: "Internal tools",
    desc: "Dashboards, admin panels, approvals, and lightweight apps that make ops teams faster."
  },
  {
    title: "Optimization & monitoring",
    desc: "Alerting, cost control, error handling, and continuous improvement based on real metrics."
  }
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Automations designed for leverage."
      subtitle="We focus on the workflows that move revenue, reduce risk, and unlock speed across teams."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <div className="text-base font-semibold">{s.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

