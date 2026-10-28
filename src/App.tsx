import React, { useState } from 'react';
import {
  initialProfileData,
  terrainPhotos,
  projectsData,
  ProfileInfo
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TerrainMarquee } from './components/TerrainMarquee';
import { AboutSection } from './components/AboutSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimelineSection } from './components/ExperienceTimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DataCustomizerModal } from './components/DataCustomizerModal';
import { downloadCvPdf, WHATSAPP_CV_URL } from './utils/downloadCv';
import { MessageCircle, Send } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ProfileInfo>(initialProfileData);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isDataCustomizerOpen, setIsDataCustomizerOpen] = useState(false);

  const handleUpdateProfile = (updated: Partial<ProfileInfo>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const handleResetDefaults = () => {
    setProfile(initialProfileData);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F9] text-[#102B46] flex flex-col font-sans selection:bg-[#D5A33D] selection:text-[#102B46] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-0 overflow-x-hidden">
      
      {/* 1. Header / Navigation */}
      <Navbar 
        onOpenDataCustomizer={() => setIsDataCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Section 3: Page d'Accueil (Hero) */}
        <HeroSection 
          profile={profile}
        />

        {/* Visual Immersion: Les deux blocs de défilement horizontal terrain */}
        <TerrainMarquee 
          photos={terrainPhotos}
        />

        {/* Section 4: Section À Propos */}
        <AboutSection 
          profile={profile}
          onOpenDataCustomizer={() => setIsDataCustomizerOpen(true)}
        />

        {/* Section 5 & 6: Compétences Techniques, Logiciels & Équipements */}
        <TechnicalSkillsSection />

        {/* Section 7: Projets d'Ingénierie & Topographie */}
        <ProjectsSection projects={projectsData} />

        {/* Section 8: Expériences et Formation (Chronologie Verticale) */}
        <ExperienceTimelineSection />

        {/* Section 9: Section Contact */}
        <ContactSection profile={profile} />

      </main>

      {/* Section 11: Pied de Page Minimaliste */}
      <Footer profile={profile} />

      {/* Mobile Sticky Quick Dock for Smartphones */}
      <aside aria-label="Actions rapides pour mobile" className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-3 right-3 z-40 sm:hidden">
        <div className="bg-[#102B46]/95 backdrop-blur-xl border border-[#D5A33D]/30 rounded-2xl shadow-2xl p-2 flex items-center justify-between gap-2 text-white">
          <a
            href="https://wa.me/221787813272?text=Bonjour%20M.%20Brice%20Emery%20PLEI,%20je%20vous%20contacte%20concernant%20un%20projet%20ou%20une%20mission%20topographique"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={WHATSAPP_CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-white/10 hover:bg-emerald-600/30 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-transform cursor-pointer font-mono"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-400" />
            <span>Mon CV</span>
          </a>

          <a
            href="#contact"
            className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#D5A33D] text-[#102B46] text-[10px] font-black uppercase tracking-wider shadow-xs active:scale-95 transition-transform font-mono"
          >
            <Send className="w-4 h-4 mb-0.5 text-[#102B46]" />
            <span>Contact</span>
          </a>
        </div>
      </aside>

      {/* Quick Customizer Modal */}
      <DataCustomizerModal
        isOpen={isDataCustomizerOpen}
        onClose={() => setIsDataCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
