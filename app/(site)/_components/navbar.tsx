"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#proof", label: "Proof" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-black">
            <span className="text-xs font-black tracking-tight">KHA</span>
          </div>
          <div className="text-sm font-semibold tracking-tight">
            Kraft Hauz Automations
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#contact" variant="secondary" className="hidden sm:inline-flex">
            Talk to us
          </Button>
          <Button href="#contact">Book a call</Button>
        </div>
      </Container>
    </header>
  );
}

