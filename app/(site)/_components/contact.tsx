"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

function encodeMailto(v: string) {
  return encodeURIComponent(v);
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeMailto(`Automation project inquiry — ${name || "New lead"}`);
    const body = encodeMailto(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );
    // TODO: replace with your preferred inbox
    return `mailto:hello@krafthauzautomations.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us what you want to automate."
      subtitle="We’ll respond with a few clarifying questions and a proposed first sprint."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">What to include</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {[
                "What workflow is slowing you down?",
                "Which tools are involved?",
                "Volume: leads/tickets/orders per week",
                "What a “win” looks like in 30 days"
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-white/55">
              Prefer email?{" "}
              <a className="underline hover:text-white" href={mailtoHref}>
                Send a message
              </a>
              .
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
        >
          <div className="grid gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-white/70">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl bg-black/30 px-3 text-white ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-white/70">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="h-11 rounded-xl bg-black/30 px-3 text-white ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="text-white/70">What should we automate?</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 resize-y rounded-xl bg-black/30 px-3 py-3 text-white ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-white/25"
                placeholder="Describe the workflow, tools involved, and what success looks like."
                required
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={mailtoHref}>Send message</Button>
              <span className="text-xs text-white/55">
                This opens your email client (no data stored on the site).
              </span>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}

