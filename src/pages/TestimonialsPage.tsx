import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Store, 
  MapPin, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sliders,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Server
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CLIENT_TESTIMONIALS, COMPANY_INFO } from '../data/companyData';
import { TestimonialItem } from '../types';
import { getClientLogo } from '../assets/clients';

interface TestimonialsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const sectors = ['All', 'Healthcare', 'Education', 'Financial & Corporate', 'Hospitality & Commercial'];

  const filteredTestimonials = selectedSector === 'All'
    ? CLIENT_TESTIMONIALS
    : CLIENT_TESTIMONIALS.filter(t => t.sector === selectedSector);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Healthcare': return <HeartPulse className="w-3.5 h-3.5 text-rose-500" />;
      case 'Education': return <GraduationCap className="w-3.5 h-3.5 text-blue-500" />;
      case 'Financial & Corporate': return <Briefcase className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Hospitality & Commercial': return <Store className="w-3.5 h-3.5 text-amber-500" />;
      default: return <Building2 className="w-3.5 h-3.5 text-[#F4510B]" />;
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const currentItem = filteredTestimonials[activeIndex] || filteredTestimonials[0];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Client Testimonials & Trust Endorsements"
        subtitle="Unfiltered feedback and verified performance metrics from medical superintendents, academic IT directors, and financial managers across Nepal."
        badgeText="Verified Endorsements"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Controls Bar: Sector Filters & Layout Mode Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            {/* Sector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => {
                    setSelectedSector(sec);
                    setActiveIndex(0);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSector === sec
                      ? 'bg-[#202329] text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>

            {/* View Switcher (Grid vs Carousel) */}
            <div className="flex items-center p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-900 shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-white text-neutral-900 shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Carousel Spotlight</span>
              </button>
            </div>
          </div>

          {/* GRID VIEW */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((item) => {
                const logoSrc = getClientLogo(item.clientId);
                const isImgFailed = failedImages[item.clientId];

                return (
                  <div
                    key={item.id}
                    className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-xs hover:shadow-xl hover:border-[#F4510B]/50 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo and Stars */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                          {!isImgFailed ? (
                            <img
                              src={logoSrc}
                              alt={item.clientName}
                              className="w-full h-full object-contain"
                              onError={() => handleImageError(item.clientId)}
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-xs font-bold text-[#F4510B]">TP</span>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                            Verified Client
                          </span>
                        </div>
                      </div>

                      {/* Sector Badge */}
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-[#F4F5F7] px-2.5 py-0.5 rounded-md border border-neutral-200 mb-4">
                        {getSectorIcon(item.sector)}
                        <span>{item.sector}</span>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-5">
                        "{item.quote}"
                      </blockquote>

                      {/* Project Delivered */}
                      <div className="p-3 bg-[#F4F5F7] rounded-xl border border-neutral-200/90 text-xs mb-4">
                        <div className="text-[10px] uppercase font-bold text-[#F4510B] tracking-wider mb-0.5 flex items-center gap-1">
                          <Server className="w-3 h-3" />
                          <span>Delivered Solution</span>
                        </div>
                        <div className="text-neutral-900 font-semibold leading-relaxed">
                          {item.keyProject}
                        </div>
                      </div>
                    </div>

                    {/* Footer: Author & Metrics */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-neutral-900 text-sm">
                          {item.authorName}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {item.authorRole} · {item.organization}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                          {item.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* CAROUSEL VIEW */
            currentItem && (
              <div className="bg-white rounded-3xl p-6 sm:p-12 border border-neutral-200 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F4510B] via-orange-400 to-[#202329]" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-amber-400">
                        {[...Array(currentItem.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 bg-[#F4F5F7] px-3 py-1 rounded-lg border border-neutral-200">
                        {getSectorIcon(currentItem.sector)}
                        <span>{currentItem.sector}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="w-16 h-16 text-[#F4510B]/15 absolute -left-3 -top-6 pointer-events-none" />
                      <blockquote className="text-base sm:text-xl font-medium text-neutral-800 leading-relaxed pl-4 border-l-2 border-[#F4510B]">
                        "{currentItem.quote}"
                      </blockquote>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                      <div>
                        <div className="text-base sm:text-lg font-bold text-neutral-900">
                          {currentItem.authorName}
                        </div>
                        <div className="text-xs text-[#F4510B] font-semibold mt-0.5">
                          {currentItem.authorRole} — {currentItem.organization}
                        </div>
                        <div className="text-xs text-neutral-500 mt-1">
                          {currentItem.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="p-3 rounded-xl border border-neutral-200 hover:border-[#F4510B] bg-white text-neutral-700 hover:text-[#F4510B] transition-colors"
                          aria-label="Previous quote"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono text-neutral-500 tabular-nums px-2">
                          {activeIndex + 1} / {filteredTestimonials.length}
                        </span>
                        <button
                          onClick={handleNext}
                          className="p-3 rounded-xl border border-neutral-200 hover:border-[#F4510B] bg-white text-neutral-700 hover:text-[#F4510B] transition-colors"
                          aria-label="Next quote"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200/90 space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 p-2 flex items-center justify-center shrink-0 shadow-xs">
                          <img
                            src={getClientLogo(currentItem.clientId)}
                            alt={currentItem.clientName}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                            Partner Organization
                          </div>
                          <div className="text-sm font-bold text-neutral-900 leading-snug">
                            {currentItem.clientName}
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B] mb-0.5">
                          Delivered Infrastructure
                        </div>
                        <div className="text-neutral-800 font-semibold leading-relaxed">
                          {currentItem.keyProject}
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                          Operational SLA & Metric
                        </div>
                        <div className="text-emerald-700 font-extrabold text-sm flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{currentItem.metrics}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenQuoteModal(`Reference inquiry: ${currentItem.clientName}`)}
                        className="w-full py-2.5 bg-[#202329] hover:bg-[#F4510B] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <span>Request Institutional Reference</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Reference Consultation Bottom Strip */}
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            <div className="space-y-1">
              <div className="font-bold text-neutral-900 text-sm sm:text-base">
                Would you like to speak directly with an existing Techno Path client?
              </div>
              <p className="text-neutral-600 text-xs">
                We are proud of our engineering track record and can arrange peer references for qualified enterprise inquiries.
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('Peer Reference Request')}
              className="px-6 py-3 bg-[#F4510B] hover:bg-[#DC4607] text-white font-semibold rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Request Peer Reference →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
