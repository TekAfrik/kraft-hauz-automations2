import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/65">
          <span className="font-semibold text-white">Kraft Hauz Automations</span>{" "}
          <span className="text-white/55">
            · AI-powered systems for modern businesses
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="#services" className="text-white/65 hover:text-white">
            Services
          </Link>
          <Link href="#process" className="text-white/65 hover:text-white">
            Process
          </Link>
          <Link href="#contact" className="text-white/65 hover:text-white">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}

