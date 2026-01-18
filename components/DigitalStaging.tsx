import React, { useState, useRef } from 'react';
import ComparisonSlider from './ComparisonSlider';
import { Layers, Droplets, Sun, ScanLine, ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 'exterior',
    label: 'Weather Synthesis',
    icon: Sun,
    beforeLabel: 'Grey Sky',
    afterLabel: 'Golden Hour',
    image: 'camasunset.jpeg',
    description: 'Replace flat shipyard lighting with dynamic "Golden Hour" or "High Noon" sun profiles to drive emotional engagement.',
  },
  {
    id: 'water',
    label: 'Digital Water',
    icon: Droplets,
    beforeLabel: 'Dry Dock',
    afterLabel: 'Deep Ocean',
    image: 'digitalwater.png',
    description: 'Place the hull in realistic motion-blurred water, removing all land elements, cradles, and industrial clutter.',
  },
  {
    id: 'refit',
    label: 'Virtual Refit',
    icon: Layers,
    beforeLabel: 'Dated',
    afterLabel: 'Modern',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070',
    description: 'Digitally reupholster furniture, declutter surfaces, and stage lifestyle elements to modernize older inventory.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[1]);
  const visualizerRef = useRef<HTMLDivElement>(null);

  const handleModuleSelect = (mod: typeof modules[0]) => {
    setActiveModule(mod);
    
    // On mobile/tablet, scroll back to the visualizer so the user sees the change
    if (window.innerWidth < 1024 && visualizerRef.current) {
        visualizerRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
  };

  return (
    <section id="engine" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#050505] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
        {/* Tech Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)),linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.01)_75%,rgba(255,255,255,0.01)),linear-gradient(45deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.01)_75%,rgba(255,255,255,0.01))] bg-[size:20px_20px] pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content & Controls - order-1 puts it on top on mobile */}
            <div className="lg:col-span-5 flex flex-col justify-center w-full order-1 lg:order-1">
                <div className="mb-8 lg:mb-12">
                    <div className="flex items-center gap-3 mb-4 lg:mb-6">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#CCF381]"></div>
                        <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] font-sans">
                            System Capabilities
                        </span>
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-6 leading-[1.1] tracking-tight">
                        The Visual <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-800 dark:from-gray-100 dark:to-gray-500">Transformation.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed max-w-md border-l border-gray-300 dark:border-white/10 pl-6">
                        A proprietary compositing pipeline that handles the three most critical factors in nautical sales: Light, Liquid, and Lifestyle.
                    </p>
                </div>

                <div className="space-y-3">
                    {modules.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => handleModuleSelect(mod)}
                            className={`relative w-full text-left p-1 rounded-sm transition-all duration-500 group ${
                                activeModule.id === mod.id 
                                ? 'transform scale-[1.02] z-10' 
                                : 'hover:bg-gray-200 dark:hover:bg-white/5'
                            }`}
                        >
                            {/* Inner Card */}
                            <div className={`relative flex items-center gap-6 p-4 rounded-sm border overflow-hidden transition-all duration-500 ${
                                activeModule.id === mod.id 
                                ? 'bg-white dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-300 border-gray-300 dark:border-white text-dark shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
                                : 'bg-transparent border-gray-300 dark:border-white/10 text-gray-500 hover:border-gray-400 dark:hover:border-white/20'
                            }`}>
                                {/* Icon Box */}
                                <div className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-all duration-300 shrink-0 ${
                                    activeModule.id === mod.id 
                                    ? 'bg-dark border-dark text-white' 
                                    : 'bg-white dark:bg-transparent border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 group-hover:text-dark dark:group-hover:text-white group-hover:border-gray-300 dark:group-hover:border-white/30'
                                }`}>
                                    <mod.icon className="w-5 h-5" />
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className={`font-bold font-display text-sm uppercase tracking-widest mb-1 transition-colors ${activeModule.id === mod.id ? 'text-dark' : 'text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white'}`}>
                                        {mod.label}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest">
                                        <span className={activeModule.id === mod.id ? 'text-gray-600' : 'text-gray-400 dark:text-gray-600'}>{mod.beforeLabel}</span>
                                        <ArrowRight className={`w-3 h-3 ${activeModule.id === mod.id ? 'text-neon' : 'text-gray-400'}`} />
                                        <span className={activeModule.id === mod.id ? 'text-dark font-bold' : 'text-gray-400'}>{mod.afterLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Visualizer - order-2 puts it on bottom on mobile */}
            <div ref={visualizerRef} className="lg:col-span-7 w-full relative order-2 lg:order-2">
                {/* Monitor Frame */}
                <div className="relative p-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-900 dark:to-black rounded-lg shadow-2xl">
                    <div className="bg-black rounded-lg overflow-hidden relative">
                        
                        {/* Viewport UI Header */}
                        <div className="bg-[#0f1115] px-4 py-3 flex justify-between items-center border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <ScanLine className="w-4 h-4 text-neon" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                    Live Preview: <span className="text-white">{activeModule.label}</span>
                                </span>
                            </div>
                        </div>

                        {/* The Slider */}
                        <div className="relative overflow-hidden bg-black aspect-[4/3] lg:aspect-[16/10]">
                            <ComparisonSlider 
                                key={activeModule.id} 
                                image={activeModule.image}
                                labelBefore={activeModule.beforeLabel}
                                labelAfter={activeModule.afterLabel}
                                aspectRatio="aspect-[4/3] lg:aspect-[16/10]"
                            />
                            
                            {/* Overlay Detail (HUD) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-6 px-6 z-20 pointer-events-none flex justify-center lg:justify-start">
                                <div className="flex items-start gap-4 max-w-lg">
                                    <div className="w-0.5 h-8 bg-neon shadow-[0_0_10px_#CCF381]"></div>
                                    <p className="text-sm text-gray-200 font-light leading-relaxed drop-shadow-md">
                                        <strong className="text-white font-medium block text-xs uppercase tracking-widest mb-1">Processing Logic</strong>
                                        {activeModule.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalStaging;
