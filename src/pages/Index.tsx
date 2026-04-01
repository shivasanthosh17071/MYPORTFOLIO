import { useState, useCallback } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollPercentage from "@/components/ScrollPercentage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import LearningSection from "@/components/LearningSection";
import FunFactsSection from "@/components/FunFactsSection";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <IntroAnimation onComplete={onLoadComplete} />
      {loaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <ScrollPercentage />
          <div className="grain-overlay" />
          <Navbar />
          <main>
            <HeroSection />
            <MarqueeTicker />
            {/* <div className="section-divider" /> */}
            <AboutSection />
            <div className="section-divider" />
            <SkillsSection />
            <div className="section-divider" />
            <ProjectsSection />
            <MarqueeTicker />
            {/* <div className="section-divider" /> */}
            <ServicesSection />
            <div className="section-divider" />
            <ProcessSection />
            <div className="section-divider" />
            <ExperienceSection />
            <div className="section-divider" />
            <TestimonialsSection />
            <div className="section-divider" />
            <LearningSection />
            <div className="section-divider" />
            <FunFactsSection />
            <div className="section-divider" />
            <AvailabilityBanner />
            <div className="section-divider" />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
