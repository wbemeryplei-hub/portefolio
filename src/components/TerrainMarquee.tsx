import React, { useState } from 'react';
import { TerrainPhoto } from '../data/portfolioData';
import { Pause, Play, X, Compass, MapPin } from 'lucide-react';

interface TerrainMarqueeProps {
  photos: TerrainPhoto[];
}

export const TerrainMarquee: React.FC<TerrainMarqueeProps> = ({ photos }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<TerrainPhoto | null>(null);

  // Requirement: "au niveau du defliement des hotos fait defiler toutes les photos"
  // Both blocks scroll ALL photos, with block 2 shifted by half the list for visual diversity
  const allPhotosBlock1 = photos;
  const halfLength = Math.floor(photos.length / 2);
  const allPhotosBlock2 = [...photos.slice(halfLength), ...photos.slice(0, halfLength)];

  // Duplicated for seamless continuous CSS marquee animation loop
  const duplicatedBlock1 = [...allPhotosBlock1, ...allPhotosBlock1];
  const duplicatedBlock2 = [...allPhotosBlock2, ...allPhotosBlock2];

  return (
    <section 
      id="photos-terrain" 
      className="relative py-8 sm:py-12 bg-[#F3F6F9] border-b border-slate-200 overflow-hidden"
    >
      {/* Header matching exact user requirements:
          "précédé en haut de immersion terrain et réalité chantier" and "Sur le terrain" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#102B46] font-mono bg-white px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D5A33D] animate-pulse" />
              <span>Immersion terrain et réalité chantier</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#102B46] mt-1 font-heading uppercase">
              Sur le terrain
            </h2>
          </div>

          {/* Pause / Resume control */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono font-semibold border border-slate-200 shadow-xs transition-colors cursor-pointer min-h-[36px]"
              title={isPaused ? "Reprendre le défilement" : "Mettre en pause"}
              aria-label={isPaused ? "Reprendre le défilement" : "Mettre en pause"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#102B46]" /> : <Pause className="w-3.5 h-3.5 text-[#102B46]" />}
              <span className="hidden xs:inline">{isPaused ? "Reprendre" : "Pause"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* The Two Distinct Blocks ("FAIT LES DEUX BLOCS")
          Mobile optimization: "AU NIVEAU DU D2FILEMENT DES PHOT SUR TERRAIN SI ON PRNED LE MOBILE FAIT DE SORTE QUE LES PHOTS DEFIFLE PAS TROP GAND EN MOSAIQUE SUR TOUT QD CEST MOBILE" */}
      <div 
        className="space-y-3 sm:space-y-4 max-w-7xl mx-auto px-2 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* BLOC 1: Premier bloc de défilement horizontal (toutes les photos) */}
        <div className="relative w-full overflow-hidden bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-slate-200 shadow-xs">
          {/* Subtle gradient edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-xl sm:rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-xl sm:rounded-r-2xl" />

          <div 
            className={`flex gap-2 sm:gap-3.5 w-max ${isPaused ? '' : 'animate-marquee'}`}
            style={{ willChange: 'transform' }}
          >
            {duplicatedBlock1.map((photo, index) => (
              <div
                key={`b1-${photo.id}-${index}`}
                onClick={() => setSelectedPhoto(photo)}
                className="relative w-[130px] xs:w-[155px] sm:w-[210px] md:w-[260px] aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-[#D5A33D] shadow-xs hover:shadow-md flex-shrink-0 cursor-pointer transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
                title={`${photo.title} — Cliquer pour agrandir`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BLOC 2: Deuxième bloc de défilement horizontal (toutes les photos)
            "SUR CETTE LIGNE FAIRE LE DEFILEMENT DES PHOTO COMME EN HAUT"
            -> Uses animate-marquee in the same forward direction as top block! */}
        <div className="relative w-full overflow-hidden bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-slate-200 shadow-xs">
          {/* Subtle gradient edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-xl sm:rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-xl sm:rounded-r-2xl" />

          <div 
            className={`flex gap-2 sm:gap-3.5 w-max ${isPaused ? '' : 'animate-marquee'}`}
            style={{ willChange: 'transform' }}
          >
            {duplicatedBlock2.map((photo, index) => (
              <div
                key={`b2-${photo.id}-${index}`}
                onClick={() => setSelectedPhoto(photo)}
                className="relative w-[130px] xs:w-[155px] sm:w-[210px] md:w-[260px] aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-[#D5A33D] shadow-xs hover:shadow-md flex-shrink-0 cursor-pointer transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
                title={`${photo.title} — Cliquer pour agrandir`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal: afficher uniquement la photo en grand sans description */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl max-h-[94vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black text-white transition-colors cursor-pointer border border-white/25 shadow-xl hover:scale-105 active:scale-95"
              title="Fermer l'image"
              aria-label="Fermer l'image"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15 max-h-[90vh] flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[88vh] w-auto max-w-full object-contain mx-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
