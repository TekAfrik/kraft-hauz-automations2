import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <div className="mb-3 text-xs font-semibold tracking-widest text-white/60">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-white/70">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

