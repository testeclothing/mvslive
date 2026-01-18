import React from 'react';
import { Home, ScanLine, Image, DollarSign, Zap } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const scrollTo = (id: string) => {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navItems = [
      { icon: Home, label: 'Home', target: 'top' },
      { icon: ScanLine, label: 'Demo', target: '#engine' }, // Points to Digital Staging (Interactive)
      { icon: Image, label: 'Work', target: '#work' },      // Points to Gallery (Social Proof)
      { icon: DollarSign, label: 'Price', target: '#investment' }, // Points to Pricing (Business Logic)
      { icon: Zap, label: 'Trial', target: '#pilot' },      // Points to Free Audit/Trial (Low friction conversion)
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 transition-colors duration-500 pb-safe">
      <div className="grid grid-cols-5 h-[60px] items-center">
        {navItems.map((item, index) => (
            <button 
                key={index}
                onClick={() => scrollTo(item.target)} 
                className="group flex flex-col items-center justify-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-dark dark:hover:text-white transition-colors h-full active:scale-95"
            >
                <item.icon className="w-5 h-5 group-hover:text-neon transition-colors" strokeWidth={1.5} />
                <span className="text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
            </button>
        ))}
      </div>
      {/* iOS Home Indicator Spacer if needed, or handled by browser safety area */}
      <div className="h-1 w-full bg-transparent"></div>
    </div>
  );
};

export default MobileBottomNav;