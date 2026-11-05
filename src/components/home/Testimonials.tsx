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
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../../data/companyData';
import { TestimonialItem } from '../../types';
import { getClientLogo } from '../../assets/clients';

interface TestimonialsProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const sectors = ['All', 'Healthcare', 'Education', 'Financial & Corporate', 'Hospitality & Commercial'];

  const filteredTestimonials = selectedSector === 'All'
    ? CLIENT_TESTIMONIALS
    : CLIENT_TESTIMONIALS.filter(t => t.sector === selectedSector);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return <HeartPulse className="w-3.5 h-3.5 text-rose-500" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5 text-blue-500" />;
      case 'Financial & Corporate':
        return <Briefcase className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Hospitality & Commercial':
        return <Store className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Building2 className="w-3.5 h-3.5 text-[#F4510B]" />;
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  // Safe index within filtered results
  const currentItem = filteredTestimonials[activeIndex] || filteredTestimonials[0];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  const handleSectorChange = (sec: string) => {
    setSelectedSector(sec);
    setActiveIndex(0);
  };

  return (
    <section className="py-20 bg-[#F4F5F7] border-t border-neutral-200 relative overflow-hidden" id="testimonials">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="test-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#202329" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#test-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4510B]">
              <Award className="w-4 h-4" />
              <span>Verified Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Trusted by Leaders Across Chitwan & Nepal
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read how hospital directors, academic heads, and cooperative IT leaders rely on Techno Path's infrastructure engineering, cybersecurity, and rapid on-site support.
            </p>
          </div>

          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-neutral-200 self-start md:self-auto shadow-2xs">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => handleSectorChange(sec)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedSector === sec
                    ? 'bg-[#202329] text-white shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Spotlight Testimonial Card */}
        {currentItem && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-md relative overflow-hidden transition-all duration-300">
            {/* Top subtle highlight stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F4510B] via-orange-400 to-[#202329]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Quote & Author Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Deployment</span>
                    </span>
                  </div>

                  {/* Sector Tag */}
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 bg-[#F4F5F7] px-2.5 py-1 rounded-lg border border-neutral-200">
                    {getSectorIcon(currentItem.sector)}
                    <span>{currentItem.sector}</span>
                  </div>
                </div>

                {/* Big Quote with Quotation mark */}
                <div className="relative">
                  <Quote className="w-12 h-12 text-[#F4510B]/15 absolute -left-2 -top-4 pointer-events-none" />
                  <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-neutral-800 leading-relaxed pl-4 border-l-2 border-[#F4510B]">
                    "{currentItem.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                  <div>
                    <div className="text-sm sm:text-base font-bold text-neutral-900">
                      {currentItem.authorName}
                    </div>
                    <div className="text-xs text-[#F4510B] font-semibold mt-0.5">
                      {currentItem.authorRole} — {currentItem.organization}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{currentItem.location}</span>
                      {currentItem.websiteUrl && (
                        <>
                          <span>·</span>
                          <a
                            href={currentItem.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F4510B] hover:underline inline-flex items-center gap-0.5 font-medium"
                          >
                            <span>Official Website</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl border border-neutral-200 hover:border-[#F4510B] bg-white text-neutral-700 hover:text-[#F4510B] transition-colors"
                      aria-label="Previous quote"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-neutral-500 tabular-nums px-1">
                      {activeIndex + 1} / {filteredTestimonials.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl border border-neutral-200 hover:border-[#F4510B] bg-white text-neutral-700 hover:text-[#F4510B] transition-colors"
                      aria-label="Next quote"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Client Badge & Impact Stats Column */}
              <div className="lg:col-span-4">
                <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200/90 space-y-4">
                  {/* Client Logo Display */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                      {!failedImages[currentItem.clientId] ? (
                        <img
                          src={getClientLogo(currentItem.clientId)}
                          alt={`${currentItem.clientName} logo`}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(currentItem.clientId)}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="font-black text-sm text-[#F4510B]">TP</div>
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                        Client Partner
                      </div>
                      <div className="text-xs font-bold text-neutral-900 leading-snug">
                        {currentItem.clientName}
                      </div>
                    </div>
                  </div>

                  {/* Key Project Delivered */}
                  <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B] mb-0.5">
                      Architecture Delivered
                    </div>
                    <div className="text-neutral-800 font-semibold leading-relaxed">
                      {currentItem.keyProject}
                    </div>
                  </div>

                  {/* Impact Metric */}
                  <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                      Proven Technical Metric
                    </div>
                    <div className="text-emerald-700 font-extrabold text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{currentItem.metrics}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(`Reference inquiry regarding: ${currentItem.clientName}`)}
                    className="w-full py-2.5 bg-[#202329] hover:bg-[#F4510B] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Reference Info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Multi-Testimonial Responsive Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const logoSrc = getClientLogo(item.clientId);
            const isImgFailed = failedImages[item.clientId];

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-[#F4510B] shadow-md -translate-y-1'
                    : 'bg-white/80 hover:bg-white border-neutral-200 hover:border-neutral-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200 p-1 flex items-center justify-center shrink-0">
                      {!isImgFailed ? (
                        <img
                          src={logoSrc}
                          alt={item.clientName}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(item.clientId)}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-[10px] font-bold text-[#F4510B]">TP</span>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3 mb-4 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-neutral-900 text-xs">{item.authorName}</div>
                    <div className="text-[11px] text-neutral-500 line-clamp-1">{item.organization}</div>
                  </div>
                  <span className="text-[11px] font-bold text-[#F4510B] bg-[#F4510B]/10 px-2 py-0.5 rounded">
                    {item.metrics.split(' ')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm">
                100% Verified Local Institutional Deployments
              </div>
              <div className="text-neutral-500">
                All quotes are from real institutional clients throughout Chitwan, Gaidakot, and Nepal.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Consultation for New Enterprise Client')}
            className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white font-semibold rounded-xl transition-colors shrink-0 shadow-sm"
          >
            Schedule Free Technical Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};
