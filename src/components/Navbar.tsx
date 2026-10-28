import React, { useState } from 'react';
import { Menu, X, Compass, ArrowDownRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CV_URL } from '../utils/downloadCv';

interface NavbarProps {
  onOpenDataCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDataCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation items:
  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#a-propos" },
    { label: "Compétences Logicielles", href: "#competences" },
    { label: "Mes Projets Terrains", href: "#projets" },
    { label: "Expériences", href: "#experiences" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#102B46] text-white border-b border-white/10 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          
          {/* Brand Wordmark: PORTFOLIO en gras */}
          <a 
            href="#accueil" 
            onClick={(e) => handleScrollTo(e, "#accueil")}
            className="flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#D5A33D] to-[#b38328] flex items-center justify-center text-[#102B46] font-black shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#102B46]" />
            </div>
            <span className="text-lg sm:text-xl font-black uppercase tracking-wider text-white group-hover:text-[#D5A33D] transition-colors font-heading">
              PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-[#D5A33D] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5A33D] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Télécharger CV (vers WhatsApp) + Contact */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-emerald-600/30 hover:border-emerald-500/50 border border-white/20 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-mono"
              title="Demander mon CV sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Télécharger mon CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#102B46] bg-[#D5A33D] hover:bg-[#e4b34d] rounded-lg transition-all shadow-sm whitespace-nowrap font-mono"
            >
              <span>Me contacter</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:text-[#D5A33D] hover:bg-white/10 border border-white/15 focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D5A33D]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#102B46] px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-[#D5A33D] hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5 last:border-none uppercase tracking-wider"
              >
                <span>{link.label}</span>
                <span className="text-[#D5A33D] font-mono text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={WHATSAPP_CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-emerald-600/30 text-white font-bold text-xs uppercase tracking-wider border border-white/20 text-center cursor-pointer font-mono"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Télécharger mon CV (WhatsApp)</span>
            </a>
          </div>

          <div className="pt-1">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#D5A33D] text-[#102B46] font-black text-xs uppercase tracking-wider text-center shadow-md font-mono"
            >
              <span>Me contacter</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-center text-xs font-mono text-slate-400">
            Sénégal : +221 78 781 32 72 · CI : +225 01 00 55 86 70
          </div>
        </div>
      )}
    </header>
  );
};
