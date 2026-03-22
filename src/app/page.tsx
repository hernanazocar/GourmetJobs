import Nav from "@/components/Nav";
import ChatBot from "@/components/ChatBot";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Problem from "@/components/Problem";
import Comparison from "@/components/Comparison";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/lib/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Features />
        <Problem />
        <Comparison />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </SearchProvider>
  );
}
