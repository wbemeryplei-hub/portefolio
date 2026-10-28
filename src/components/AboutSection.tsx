import React from 'react';
import { ProfileInfo } from '../data/portfolioData';
import { 
  Compass, 
  Sparkles,
  Layers
} from 'lucide-react';
import { TopoContours } from './TopoBackground';

interface AboutSectionProps {
  profile: ProfileInfo;
  onOpenDataCustomizer?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section 
      id="a-propos" 
      className="relative py-16 sm:py-24 bg-[#F3F6F9] text-[#102B46] border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle background contours */}
      <div className="absolute inset-0 topo-contour-pattern opacity-60 pointer-events-none" />
      <TopoContours className="opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B46]/5 border border-[#102B46]/15 text-xs font-mono font-bold text-[#102B46] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#D5A33D]" />
            <span>PRÉSENTATION PROFESSIONNELLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#102B46] tracking-tight uppercase font-heading">
            À propos de moi
          </h2>
          <div className="w-16 h-1 bg-[#D5A33D] mx-auto rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Professional Topography Photo & Projet de Fin d'Études (PFE) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              
              {/* Subtle Decorative Gold Border Accent */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#D5A33D] rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#D5A33D] rounded-br-xl pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-xl border border-slate-200">
                
                {/* Photo Frame */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 relative shadow-inner">
                  <img
                    src={profile.photoSecondaryUrl || profile.photoUrl}
                    alt="Brice Emery PLEI — Ingénieur Géomètre Topographe"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* PROJET DE FIN D'ÉTUDES (PFE) & LOGOS LOGICIELS JUSTE EN BAS DE LA PHOTO */}
                <div className="p-3 sm:p-3.5 bg-slate-50/95 rounded-xl mt-2 sm:mt-2.5 border border-slate-200/90 space-y-2.5 shadow-xs">
                  
                  {/* Badge & Titre officiel du PFE */}
                  <div className="space-y-1 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#102B46] text-[#D5A33D] text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#D5A33D]" />
                      <span>Projet de Fin d'Études (PFE)</span>
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-black text-[#102B46] uppercase tracking-tight leading-snug font-heading pt-0.5">
                      AMÉLIORATION DE LA QUALITÉ GÉOMÉTRIQUE DES DONNÉES LIDAR AÉROPORTÉES PAR OPTIMISATION DES PARAMÈTRES DE TRAITEMENT ET AJUSTEMENT INTERBANDES MULTI-LOGICIELS
                    </h4>
                  </div>

                  {/* Logos des logiciels de traitement LiDAR */}
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1.5">
                      <Layers className="w-3 h-3 text-[#D5A33D]" />
                      <span>Logiciels Utilisés</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 items-stretch">
                      
                      {/* Logo 1: DJI TERRA */}
                      <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200 hover:border-[#D5A33D] shadow-2xs hover:shadow-sm transition-all flex flex-col items-center justify-between gap-1 group/logobox">
                        <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                          <img 
                            src="/assets/aistudio/image_2296bca7.png" 
                            alt="DJI TERRA Logo"
                            className="max-h-full max-w-full object-contain group-hover/logobox:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-[#102B46] font-mono tracking-tight text-center">
                          DJI TERRA
                        </span>
                      </div>

                      {/* Logo 2: TERRASOLID / SPATIX */}
                      <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200 hover:border-[#D5A33D] shadow-2xs hover:shadow-sm transition-all flex flex-col items-center justify-between gap-1 group/logobox">
                        <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                          <img 
                            src="/assets/aistudio/image_9c81ccb2.png" 
                            alt="Terrasolid SPATIX TerraScan TerraModeler Logo"
                            className="max-h-full max-w-full object-contain group-hover/logobox:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-[#102B46] font-mono tracking-tight text-center">
                          TERRASOLID / SPATIX
                        </span>
                      </div>

                      {/* Logo 3: GLOBAL MAPPER PRO */}
                      <div className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#D5A33D] shadow-2xs hover:shadow-sm transition-all flex flex-col items-center justify-between gap-1 group/logobox">
                        <div className="h-9 sm:h-11 w-full flex items-center justify-center">
                          <img 
                            src="/assets/aistudio/image_6684ccd4.png" 
                            alt="Global Mapper Pro Logo"
                            className="max-h-full max-w-full object-contain group-hover/logobox:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-[#102B46] font-mono tracking-tight text-center">
                          GLOBAL MAPPER PRO
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Presentation Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-bold text-lg sm:text-xl text-[#102B46] font-heading border-l-4 border-[#D5A33D] pl-4 leading-snug">
                Ingénieur de conception géomètre-topographe, passionné par les études GNSS, la photogrammétrie, les VRD et les SIG.
              </p>

              {profile.descriptionBio.map((paragraph, idx) => (
                <p key={`bio-${idx}`} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
