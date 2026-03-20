import Nav from "@/components/Nav";
import ChatBot from "@/components/ChatBot";
import LiveToast from "@/components/LiveToast";
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
import { SearchProvider } from "@/lib/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
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
      <LiveToast />
    </SearchProvider>
  );
}
