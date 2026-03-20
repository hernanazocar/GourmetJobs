import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Roles from "@/components/Roles";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <SectionDivider to="light" />
        <Marquee />
        <SectionDivider to="dark" />
        <Problem />
        <SectionDivider to="light" />
        <Comparison />
        <SectionDivider to="dark" />
        <HowItWorks />
        <SectionDivider to="light" />
        <Features />
        <SectionDivider to="dark" />
        <Stats />
        <SectionDivider to="light" />
        <Roles />
        <SectionDivider to="dark" />
        <Testimonials />
        <SectionDivider to="light" />
        <Pricing />
        <SectionDivider to="dark" />
        <FAQ />
        <SectionDivider to="light" />
        <FinalCTA />
        <SectionDivider to="dark" />
      </main>
      <Footer />
    </>
  );
}
