import React from 'react';
import { Layers, CloudSun, Anchor } from 'lucide-react';

const services = [
  {
    title: "Environmental Transfer",
    subtitle: "Dry Dock to Deep Ocean",
    desc: "We extract the vessel from shipyard cradles and composite it into proprietary, hyper-realistic ocean plates.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070"
  },
  {
    title: "Virtual Refit",
    subtitle: "Modernize The Interior",
    desc: "We digitally reupholster furniture, declutter surfaces, and stage lifestyle elements to modernize older inventory.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070"
  },
  {
    title: "Atmosphere Control",
    subtitle: "Perfect Weather, Always",
    desc: "Grey skies reduce click-through rates. We replace overcast lighting with 'Golden Hour' or 'High Noon' sun profiles.",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070"
  }
];

const Services: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#050505] text-dark dark:text-white relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 lg:mb-24 border-l-2 border-neon pl-6 lg:pl-8">
            <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                The Studio Capabilities
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 text-dark dark:text-white">
                Visual Engineering
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base lg:text-lg font-light">
                We don't just "edit" photos. We reconstruct reality to align with the buyer's dream.
            </p>
        </div>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
                <div key={index} className="min-w-[85vw] lg:min-w-0 snap-center group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden hover:border-gray-300 dark:hover:border-white/30 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                    
                    {/* Metallic Sheen on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"></div>
                    
                    {/* Image Top */}
                    <div className="h-48 lg:h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale dark:grayscale group-hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 lg:p-8 relative z-20">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/20 flex items-center justify-center rounded-sm mb-4 lg:mb-6 -mt-10 lg:-mt-14 relative z-20 shadow-xl group-hover:bg-neon group-hover:border-neon group-hover:text-dark transition-all duration-300">
                            <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-dark dark:text-white group-hover:text-dark transition-colors" />
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 text-dark dark:text-white group-hover:text-neon transition-colors">{service.title}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-dark dark:group-hover:text-white mb-4 transition-colors">{service.subtitle}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 group-hover:border-gray-200 dark:group-hover:border-white/20 transition-colors">
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;