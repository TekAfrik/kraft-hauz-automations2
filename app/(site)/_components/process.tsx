import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Audit",
    desc: "We map the workflow end-to-end, identify bottlenecks, and define success metrics."
  },
  {
    title: "Design",
    desc: "We produce a system blueprint: triggers, data contracts, edge cases, and observability."
  },
  {
    title: "Automate",
    desc: "We build with reliability: retries, idempotency, logging, and safe human approvals."
  },
  {
    title: "Optimize",
    desc: "We instrument and iterate—reducing cycle time, error rates, and operational cost."
  }
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Method"
      title="A systems-first approach."
      subtitle="No duct-tape automations. We design for resilience, clarity, and measurable ROI."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <div className="text-xs font-semibold tracking-widest text-white/60">
              STEP {i + 1}
            </div>
            <div className="mt-2 text-base font-semibold">{step.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

