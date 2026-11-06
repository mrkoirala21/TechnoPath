import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Building, 
  Layers, 
  Search, 
  X,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { PROJECTS_LIST, COMPANY_INFO } from '../data/companyData';
import { ProjectItem } from '../types';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

interface ProjectsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Healthcare', 'Cybersecurity', 'Infrastructure', 'Cloud', 'Education'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => 
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        p.clientSector.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="bg-white">
      <PageHeader
        title="Featured Projects & Deployments"
        subtitle="A showcase of enterprise infrastructure implementations, healthcare software rollouts, and secured networks across Nepal."
        badgeText="Engineering Track Record"
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">
                Case Studies & Implementations
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Representative project architectures delivered by Techno Path systems engineers.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#202329] text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#202329]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#F4510B]" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold text-[#F4510B] uppercase tracking-wider mb-1">
                      {project.category}
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-xl bg-[#F4F5F7] border border-neutral-200 text-xs space-y-1 mb-4">
                      <div className="font-semibold text-neutral-900">Primary Outcome:</div>
                      <div className="text-neutral-700 leading-relaxed flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{project.results[0]}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-neutral-100 rounded text-[11px] font-medium text-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-xs font-bold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1.5"
                  >
                    <span>View Dedicated Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-[11px] text-neutral-500 hover:text-neutral-900 font-medium"
                  >
                    Quick Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B]">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mt-1">
                {activeModalProject.title}
              </h3>
              <div className="text-xs text-neutral-500 mt-1 flex items-center gap-3">
                <span>Sector: {activeModalProject.clientSector}</span>
                <span>·</span>
                <span>Location: {activeModalProject.location}</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-neutral-900">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Background & Challenge</h4>
                <p className="text-neutral-600">{activeModalProject.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Techno Path Architecture & Execution</h4>
                <p className="text-neutral-600">{activeModalProject.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Quantified Business Outcomes</h4>
                <ul className="space-y-1.5 text-neutral-800">
                  {activeModalProject.results.map((res, ridx) => (
                    <li key={ridx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Hardware & Software Specifications</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-neutral-100 rounded text-xs font-semibold text-neutral-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                onClick={() => {
                  const title = activeModalProject.title;
                  setActiveModalProject(null);
                  onOpenQuoteModal(`Deployment Inquiry: ${title}`);
                }}
                className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-lg text-xs font-semibold"
              >
                Inquire for Similar Project
              </button>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
