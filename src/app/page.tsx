import Nav from "@/components/Nav";
import ChatBot from "@/components/ChatBot";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Roles from "@/components/Roles";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import LogoBar from "@/components/LogoBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Comparison />
        <HowItWorks />
        <Features />
        <Stats />
        <Roles />
        <Testimonials />
        <Pricing />
        <LogoBar />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
