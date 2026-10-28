import React, { useState } from 'react';
import { ProfileInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Compass, 
  PhoneCall,
  Info,
  ArrowRight
} from 'lucide-react';
import { TopoContours } from './TopoBackground';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setLoading(true);

    const recipientEmail = "wbemery.plei@univ-thies.sn";
    const recipientPhoneWhatsApp = "221787813272";

    const emailSubject = encodeURIComponent(`Nouveau Message Portfolio — ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Bonjour Brice Emery PLEI,\n\nVous avez reçu un nouveau message depuis votre Portfolio officiel :\n\n` +
      `👤 Nom et Prénom : ${formData.name}\n\n` +
      `💬 Message :\n${formData.message}\n\n` +
      `-----------------------------------------\n` +
      `Envoyé depuis le Portfolio en ligne de Brice Emery PLEI.`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;

    const whatsappText = encodeURIComponent(
      `Bonjour M. Brice Emery PLEI,\n\n` +
      `👤 Nom et Prénom : ${formData.name}\n\n` +
      `💬 Message :\n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/${recipientPhoneWhatsApp}?text=${whatsappText}`;

    // 1. Déclenche l'envoi immédiat sur WhatsApp
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback
    }

    // 2. Déclenche simultanément l'envoi vers l'adresse E-mail
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setLoading(false);
      setSubmitted(true);
    }, 350);
  };

  return (
    <section 
      id="contact" 
      className="relative py-16 sm:py-24 bg-[#F3F6F9] text-[#102B46] border-t border-slate-200 overflow-hidden"
    >
      {/* Background Contours */}
      <div className="absolute inset-0 topo-contour-pattern opacity-50 pointer-events-none" />
      <TopoContours className="opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B46]/5 border border-[#102B46]/15 text-xs font-mono font-bold text-[#102B46] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#D5A33D]" />
            <span>ÉCHANGE PROFESSIONNEL & RECRUTEMENT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#102B46] tracking-tight uppercase font-heading">
            Prendre Contact
          </h2>
          
          <p className="text-sm text-slate-600 max-w-2xl mx-auto font-medium">
            Disponible pour échanger avec les entreprises de BTP, les bureaux d'études routières, les géomètres-experts et les recruteurs.
          </p>
          <div className="w-16 h-1 bg-[#D5A33D] mx-auto rounded-full" />
        </div>

        {/* 2-Column Layout: Coordinates on Left / Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 max-w-6xl mx-auto items-start">
          
          {/* LEFT: Contact Information (No fabricated details, strictly authentic) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#102B46] text-white shadow-xl border border-slate-800 space-y-6">
              
              <div>
                <p className="text-xs font-mono text-[#D5A33D] uppercase tracking-wider font-semibold">
                  INGÉNIEUR DE CONCEPTION GÉOMÈTRE TOPOGRAPHE
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  {profile.shortName}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Prêt à intervenir sur vos projets d'infrastructures routières et travaux topographiques au Sénégal et en Côte d'Ivoire.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 pt-2 border-t border-white/10 text-xs font-mono">
                
                {/* Phone Numbers */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-[#D5A33D]" />
                    <span className="uppercase tracking-wider">Téléphone :</span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    <a 
                      href={`tel:${profile.phoneSenegal.replace(/\s+/g, '')}`}
                      className="block text-slate-200 hover:text-[#D5A33D] transition-colors"
                    >
                      Sénégal : <strong>{profile.phoneSenegal}</strong>
                    </a>
                    <a 
                      href={`tel:${profile.phoneCIV.replace(/\s+/g, '')}`}
                      className="block text-slate-200 hover:text-[#D5A33D] transition-colors"
                    >
                      Côte d'Ivoire : <strong>{profile.phoneCIV}</strong>
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-[#D5A33D]" />
                    <span className="uppercase tracking-wider">Adresse E-mail :</span>
                  </div>
                  <div className="pl-5 space-y-1">
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="block text-slate-200 hover:text-[#D5A33D] transition-colors truncate"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                {profile.linkedin && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Linkedin className="w-3.5 h-3.5 text-[#D5A33D]" />
                      <span className="uppercase tracking-wider">Réseau LinkedIn :</span>
                    </div>
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pl-5 text-[#D5A33D] hover:underline block truncate font-medium"
                    >
                      Profil officiel Brice Emery PLEI
                    </a>
                  </div>
                )}

              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href={`https://wa.me/221787813272?text=Bonjour%20M.%20Brice%20Emery%20PLEI,%20je%20vous%20contacte%20concernant%20un%20projet%20ou%20une%20mission%20topographique`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider font-mono transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discussion WhatsApp Directe</span>
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#102B46] font-heading">
                  Envoyer un message
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Remplissez le formulaire ci-dessous pour toute proposition de mission ou de poste.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-emerald-950 font-heading">
                      Message prêt à être envoyé !
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Votre message a été transmis vers ma messagerie électronique <strong>wbemery.plei@univ-thies.sn</strong> et vers mon <strong>WhatsApp direct</strong>.
                    </p>
                  </div>

                  {/* Actions de confirmation immédiates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-md mx-auto">
                    <a
                      href={`https://wa.me/221787813272?text=${encodeURIComponent(`Bonjour M. Brice Emery PLEI,\n\nNom et Prénom : ${formData.name}\n\nMessage :\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ouvrir sur WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:wbemery.plei@univ-thies.sn?subject=${encodeURIComponent(`Contact Portfolio — ${formData.name}`)}&body=${encodeURIComponent(`Bonjour Brice Emery PLEI,\n\nNom et Prénom : ${formData.name}\n\nMessage :\n${formData.message}`)}`}
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#102B46] hover:bg-[#163a5e] text-[#D5A33D] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Vérifier par E-mail</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider cursor-pointer mt-1"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Nom & Prénom uniquement */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Nom et Prénom <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: M. Diallo / Entreprise BTP"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-[#102B46] focus:bg-white transition-colors min-h-[44px]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez la nature des travaux, les délais, la localisation du chantier ou les détails du poste..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-[#102B46] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-[#102B46] hover:bg-[#163a5e] text-[#D5A33D] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-60 active:scale-98"
                  >
                    {loading ? (
                      <span>Envoi en cours vers E-mail & WhatsApp...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D5A33D]" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>

                  {/* Clarification Note */}
                  <div className="flex items-start gap-2 pt-1 text-[11px] font-mono text-slate-500">
                    <Info className="w-3.5 h-3.5 text-[#D5A33D] shrink-0 mt-0.5" />
                    <span>
                      Votre message sera directement acheminé vers mon adresse <strong>wbemery.plei@univ-thies.sn</strong> et sur mon <strong>WhatsApp (+221 78 781 32 72)</strong>.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
