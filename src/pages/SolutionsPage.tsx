import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  CloudRain, 
  Lock, 
  Cpu, 
  Code2, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  PhoneCall,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SOLUTIONS_LIST, COMPANY_INFO } from '../data/companyData';

interface SolutionsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenQuoteModal }) => {
  const location = useLocation();
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS_LIST[0].id);

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const exists = SOLUTIONS_LIST.find(s => s.id === hashId);
      if (exists) {
        setSelectedSolutionId(hashId);
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const activeSolution = SOLUTIONS_LIST.find(s => s.id === selectedSolutionId) || SOLUTIONS_LIST[0];

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Enterprise Turnkey Solutions"
        subtitle="Engineered systems solving mission-critical computing, healthcare workflows, data protection, and business automation in Nepal."
        badgeText="Architectural Deployments"
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Solution Selector Tabs */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-neutral-200">
            {SOLUTIONS_LIST.map((sol) => (
              <button
                key={sol.id}
                onClick={() => {
                  setSelectedSolutionId(sol.id);
                  window.history.replaceState(null, '', `/solutions#${sol.id}`);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSolutionId === sol.id
                    ? 'bg-[#F4510B] text-white shadow-sm'
                    : 'bg-[#F4F5F7] text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <span>{getSolutionIcon(sol.iconName)}</span>
                <span>{sol.title}</span>
              </button>
            ))}
          </div>

          {/* Active Featured Solution Spotlight */}
          <div id={activeSolution.id} className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Solution Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-1">
                    Featured Architecture
                  </div>
                  <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                    {activeSolution.title}
                  </h2>
                  <p className="text-sm font-semibold text-neutral-500 mt-1">
                    {activeSolution.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {activeSolution.description}
                </p>

                {/* Key Features */}
                <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    Core Architectural Capabilities
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {activeSolution.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-200 bg-white">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B] mb-1">
                      Target Sectors
                    </div>
                    <div className="text-xs text-neutral-700 font-medium leading-relaxed">
                      {activeSolution.targetAudience}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-200 bg-white">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B] mb-1">
                      Deliverables Provided
                    </div>
                    <div className="text-xs text-neutral-700 font-medium leading-relaxed">
                      {activeSolution.deliverables.join(' · ')}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenQuoteModal(`Solution Inquiry: ${activeSolution.title}`)}
                    className="px-6 py-3 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center gap-2"
                  >
                    <span>Request Solution Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to="/contact"
                    className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
                  >
                    Talk with Solution Architect
                  </Link>
                </div>
              </div>

              {/* Right Column: Benefits & System Summary */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#202329] text-white shadow-md">
                  <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-white">
                    <Layers className="w-5 h-5 text-[#F4510B]" />
                    <span>Business Value & Outcomes</span>
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                    {activeSolution.benefits.map((b, bidx) => (
                      <div key={bidx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#F4510B]/20 text-[#F4510B] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-700 text-xs text-neutral-400 space-y-2">
                    <div className="font-semibold text-white">Why Techno Path Engineering?</div>
                    <p className="leading-relaxed">
                      All solutions are designed specifically for Nepalese local infrastructure realities—handling power variability, multi-ISP failover, and compliance requirements.
                    </p>
                  </div>
                </div>

                {/* Quick Call Out */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                  <div>
                    <span className="font-bold">Need rapid implementation?</span>
                    <div className="text-emerald-700">We guarantee responsive on-site rollout in Bharatpur and Chitwan.</div>
                  </div>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold shrink-0"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* All Solutions Full Catalog Cards */}
          <div className="mt-16 pt-16 border-t border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-8">
              All Enterprise Solutions Catalog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS_LIST.map((sol) => (
                <div
                  key={sol.id}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedSolutionId === sol.id
                      ? 'border-[#F4510B] bg-white shadow-sm'
                      : 'border-neutral-200 bg-[#F4F5F7] hover:border-neutral-300'
                  }`}
                  onClick={() => {
                    setSelectedSolutionId(sol.id);
                    const el = document.getElementById(sol.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-[#F4510B]">
                      {getSolutionIcon(sol.iconName)}
                    </div>
                    <h4 className="text-base font-bold text-neutral-900">{sol.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-600 line-clamp-2 mb-3">
                    {sol.tagline}
                  </p>
                  <div className="text-xs font-semibold text-[#F4510B] flex items-center gap-1">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
