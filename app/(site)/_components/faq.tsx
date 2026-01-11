import { Section } from "@/components/ui/section";

const faqs = [
  {
    q: "What tools do you build with?",
    a: "We work with best-fit tools for your stack: native APIs, webhooks, and platforms like Make, Zapier, and n8n—plus custom code when needed for reliability and flexibility."
  },
  {
    q: "Do you handle security and access?",
    a: "Yes. We use least-privilege access, audited credentials, and clear data handling. We’ll align with your security requirements and document everything."
  },
  {
    q: "How fast can we see results?",
    a: "Most clients see value in 2–6 weeks depending on scope. We prioritize the highest ROI workflows first."
  },
  {
    q: "Can we maintain it after launch?",
    a: "Absolutely. We deliver clear documentation, dashboards/alerts, and handoff support—or we can continue as your automation partner."
  }
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Common questions."
      subtitle="If you don’t see your question here, send a message—happy to help."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 open:bg-white/7"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold">
              <div className="flex items-center justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-white/55 transition group-open:rotate-45">
                  +
                </span>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

