import { FAQ } from "./_components/faq";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Logos } from "./_components/logos";
import { Navbar } from "./_components/navbar";
import { Process } from "./_components/process";
import { Proof } from "./_components/proof";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-grid">
        <Navbar />
        <main>
          <Hero />
          <Logos />
          <Services />
          <Process />
          <Proof />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

