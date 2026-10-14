import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Badges from "@/components/Badges";
import Languages from "@/components/Languages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Badges />
      <Languages />
      <Footer />
    </main>
  );
}
