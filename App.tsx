import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DigitalStaging from './components/DigitalStaging';
import Services from './components/Services';
import ROICalculator from './components/ROICalculator';
import ListingDemo from './components/ListingDemo';
import Workflow from './components/Workflow';
import AccuracyGuarantee from './components/AccuracyGuarantee';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FreeAudit from './components/FreeAudit';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LogisticsComparison from './components/LogisticsComparison';
import MobileBottomNav from './components/MobileBottomNav';
import CaseStudy from './components/CaseStudy';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#050505] text-dark dark:text-white font-sans selection:bg-neon selection:text-dark overflow-x-hidden relative transition-colors duration-500 pb-16 md:pb-0">
      
      {/* Global Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

      <Navbar />
      <Chatbot />
      <MobileBottomNav />
      <main className="flex-grow">
        <Hero />
        <DigitalStaging />
        <ListingDemo />
        <CaseStudy />
        <LogisticsComparison />
        <Workflow /> 
        <Pricing />
        <div id="pilot">
            <FreeAudit />
        </div>
        <Services />
        <ROICalculator />
        <AccuracyGuarantee />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;