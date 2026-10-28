import React, { useState } from 'react';
import { 
  academicCurriculum, 
  professionalExperiences, 
  AcademicStep, 
  ExperienceItem 
} from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Check, 
  Compass, 
  Building2,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { TopoContours } from './TopoBackground';

export const ExperienceTimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiences' | 'formation'>('experiences');

  return (
    <section 
      id="experiences" 
      className="relative py-16 sm:py-24 bg-white text-[#102B46] border-b border-slate-200 overflow-hidden"
    >
      {/* Background Grid & Contours */}
      <div className="absolute inset-0 topo-contour-pattern opacity-40 pointer-events-none" />
      <TopoContours className="opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B46]/5 border border-[#102B46]/15 text-xs font-mono font-bold text-[#102B46] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#D5A33D]" />
            <span>PARCOURS PROFESSIONNEL & ACADÉMIQUE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#102B46] tracking-tight uppercase font-heading">
            Expériences et Formation
          </h2>
          
          <p className="text-sm text-slate-600 max-w-2xl mx-auto font-medium">
            Chronologie verticale de mon cursus d'ingénieur géomètre-topographe et de mes missions sur chantiers routiers, ouvrages d'art et bureaux d'études.
          </p>
          <div className="w-16 h-1 bg-[#D5A33D] mx-auto rounded-full" />
        </div>

        {/* View Switcher: Expériences / Formation */}
        <div className="flex justify-center mb-10 sm:mb-12 px-2">
          <div className="grid grid-cols-2 w-full max-w-md p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('experiences')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-mono text-center ${
                activeTab === 'experiences'
                  ? 'bg-[#102B46] text-[#D5A33D] shadow-sm'
                  : 'text-slate-600 hover:text-[#102B46]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Expériences</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('formation')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-mono text-center ${
                activeTab === 'formation'
                  ? 'bg-[#102B46] text-[#D5A33D] shadow-sm'
                  : 'text-slate-600 hover:text-[#102B46]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Formation</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Expériences Professionnelles (En ligne de deux : deux en haut et deux en bas, identique à la formation) */}
        {activeTab === 'experiences' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {professionalExperiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#D5A33D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3.5">
                    {/* Period & Location Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono font-bold text-[#D5A33D] flex items-center gap-1.5 bg-[#D5A33D]/10 px-3 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-[#D5A33D]" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Role Title and Organization */}
                    <div>
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded mb-1.5">
                        {exp.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#102B46] font-heading group-hover:text-blue-950 transition-colors leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#D5A33D] mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.organization}</span>
                      </p>
                    </div>

                    {/* Mission Overview */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {exp.mission}
                    </p>

                    {/* Details list */}
                    {exp.details && exp.details.length > 0 && (
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                        {exp.details.map((detail, dIdx) => (
                          <li key={`detail-${dIdx}`} className="text-xs text-slate-600 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D5A33D] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tools used */}
                  {exp.toolsUsed && exp.toolsUsed.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                      <Layers className="w-3 h-3 text-[#D5A33D] mr-1 shrink-0" />
                      {exp.toolsUsed.map((tool, tIdx) => (
                        <span 
                          key={`exp-tool-${tIdx}`}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#102B46] font-medium border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Formation et Diplômes (En ligne de deux avec Logos Officiels UFRSI / UIDT, ESBTP, Lycée Scientifique) */}
        {activeTab === 'formation' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {academicCurriculum.map((acad, idx) => (
                <div 
                  key={`acad-${idx}`}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#D5A33D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3.5">
                    {/* Period and Location Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono font-bold text-[#D5A33D] bg-[#D5A33D]/10 px-3 py-1 rounded-md flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#D5A33D]" />
                        <span>{acad.period}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{acad.location}</span>
                      </span>
                    </div>

                    {/* School Logo + Diploma Title & Institution */}
                    <div className="flex items-start gap-3.5">
                      {acad.logoUrl && (
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#D5A33D] transition-colors">
                          <img 
                            src={acad.logoUrl} 
                            alt={`Logo ${acad.institution}`} 
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-[#102B46] font-heading group-hover:text-blue-950 transition-colors leading-snug">
                          {acad.diploma}
                        </h3>
                        <p className="text-xs font-mono font-bold text-[#D5A33D] mt-1 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{acad.institution}</span>
                        </p>
                      </div>
                    </div>

                    {/* Description details */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {acad.details}
                    </p>
                  </div>

                  {/* Key highlights / achievements */}
                  {acad.highlights && acad.highlights.length > 0 && (
                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {acad.highlights.map((h, hIdx) => (
                        <li key={`ahigh-${hIdx}`} className="text-xs text-slate-600 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D5A33D] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
