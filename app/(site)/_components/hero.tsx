"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const stats = [
  { k: "2–6 weeks", v: "typical time-to-value" },
  { k: "10–40%", v: "ops time reclaimed" },
  { k: "24/7", v: "always-on workflows" }
];

export function Hero() {
  return (
    <section className="pt-16 sm:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>AI-powered automation consultancy</Badge>
              <Badge>Workflows · Integrations · Ops</Badge>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Automations that remove busywork — and compound your team’s output.
            </motion.h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
              Kraft Hauz Automations designs and ships reliable automation systems
              that connect your tools, clean your data, and keep revenue-critical
              workflows moving without manual handoffs.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#contact">Book a discovery call</Button>
              <Button href="#services" variant="secondary">
                See services
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <div className="text-lg font-semibold">{s.k}</div>
                  <div className="mt-1 text-sm text-white/65">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="text-sm font-semibold text-white/80">
                What we ship
              </div>
              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "Automated lead-to-cash",
                    desc: "Qualification → CRM → proposals → invoicing → reporting."
                  },
                  {
                    title: "Ops dashboards & alerts",
                    desc: "Real-time visibility with Slack / email escalation."
                  },
                  {
                    title: "AI-assisted workflows",
                    desc: "Summarization, routing, enrichment, and drafting."
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-white/65">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-widest text-white/70">
                  SYSTEMS-FIRST
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Audit → Design → Automate → Optimize
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

