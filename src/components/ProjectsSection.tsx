import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { 
  MapPin, 
  Check, 
  X, 
  ArrowRight
} from 'lucide-react';
import { TopoContours } from './TopoBackground';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Categories matching Section 7 of prompt
  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'implantation-axes', label: 'Implantation d\'axes' },
    { id: 'profils-cubatures', label: 'Profils en long & travers' },
    { id: 'leves-terrain', label: 'Levés de terrain' },
    { id: 'voirie-amenagement', label: 'Voirie & Aménagement' },
    { id: 'suivi-chantier', label: 'Suivi de chantier' },
    { id: 'ouvrages-art', label: 'Ouvrages d\'art' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="projets" 
      className="relative py-16 sm:py-24 bg-[#F3F6F9] text-[#102B46] border-b border-slate-200 overflow-hidden"
    >
      {/* Background Topo Lines */}
      <div className="absolute inset-0 topo-contour-pattern opacity-50 pointer-events-none" />
      <TopoContours className="opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Titre Projets Réalisés sans les blocs supprimés */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#102B46] tracking-tight uppercase font-heading">
            Projets Réalisés
          </h2>
          <div className="w-16 h-1 bg-[#D5A33D] mx-auto rounded-full" />
        </div>

        {/* Categories Filter Strip */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-x-auto no-scrollbar max-w-5xl mx-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs font-mono font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#102B46] text-[#D5A33D] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-[#102B46] hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white border border-slate-200 hover:border-[#D5A33D] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Project Image / Plan Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#102B46]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-mono border border-[#D5A33D]/40 font-semibold shadow-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Precision Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D5A33D]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="text-[#D5A33D] font-bold">{project.precision}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  
                  {/* Title & Client */}
                  <div>
                    <h3 className="text-base font-bold text-[#102B46] group-hover:text-blue-950 font-heading line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#D5A33D] font-semibold mt-1">
                      {project.client} · {project.year}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tâches réalisées (Required by Prompt) */}
                  {project.tasks && project.tasks.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Tâches principales réalisées :
                      </p>
                      <ul className="space-y-1">
                        {project.tasks.slice(0, 2).map((t, tIdx) => (
                          <li key={`task-${tIdx}`} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#D5A33D] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Equipments & Software used */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.software.slice(0, 3).map((soft, sIdx) => (
                      <span 
                        key={`soft-${sIdx}`}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#102B46] font-medium border border-slate-200"
                      >
                        {soft}
                      </span>
                    ))}
                    {project.equipment.slice(0, 1).map((eq, eIdx) => (
                      <span 
                        key={`eq-${eIdx}`}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#102B46]/5 text-slate-700 font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer: Bouton « Voir le projet » */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#102B46] hover:bg-[#163a5e] text-[#D5A33D] text-xs font-bold uppercase tracking-wider font-mono transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
                >
                  <span>Voir le projet</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal: Full Project Details View */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200">
            
            {/* Header Image */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#D5A33D] text-[#102B46] font-bold">
                  {activeProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Meta strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block">Maître d'Ouvrage :</span>
                  <strong className="text-[#102B46]">{activeProject.client}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Localisation :</span>
                  <strong className="text-[#102B46]">{activeProject.location}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Précision :</span>
                  <strong className="text-[#D5A33D]">{activeProject.precision}</strong>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Description détaillée des travaux
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Tâches réalisées */}
              {activeProject.tasks && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Tâches réalisées sur le chantier & au bureau
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.tasks.map((task, idx) => (
                      <li key={`mtask-${idx}`} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D5A33D] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              {activeProject.deliverables && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Livrables techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.deliverables.map((deliv, idx) => (
                      <span key={`deliv-${idx}`} className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                        ✓ {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment and Software */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-slate-400 block">Équipements mobilisés :</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.equipment.map((eq, idx) => (
                      <span key={`meq-${idx}`} className="text-xs font-mono px-2.5 py-1 rounded bg-[#102B46] text-white">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-slate-400 block">Logiciels utilisés :</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.software.map((sw, idx) => (
                      <span key={`msw-${idx}`} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-[#102B46] border border-slate-300 font-bold">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 rounded-xl bg-[#102B46] text-[#D5A33D] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#163a5e] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
