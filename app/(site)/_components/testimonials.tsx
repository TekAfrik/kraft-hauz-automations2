import { Section } from "@/components/ui/section";

const testimonials = [
  {
    quote:
      "We went from “spreadsheet ops” to a clean, reliable pipeline. The workflows just run—and the team finally trusts the numbers.",
    name: "Ops Lead",
    company: "B2B Services"
  },
  {
    quote:
      "Lead response time dropped dramatically and follow-ups stopped slipping through the cracks. It felt like adding a full-time coordinator.",
    name: "Founder",
    company: "Agency"
  },
  {
    quote:
      "The difference was the systems thinking: edge cases, retries, logging, alerts. It’s automation we can actually rely on.",
    name: "Head of RevOps",
    company: "SaaS"
  }
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="Built for trust."
      subtitle="Real operations don’t tolerate flaky automations. We engineer for reliability and clarity."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.quote}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <blockquote className="text-sm leading-relaxed text-white/75">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold">{t.name}</span>{" "}
              <span className="text-white/60">· {t.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

