import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Landmark, 
  Store, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { INDUSTRIES_LIST, COMPANY_INFO } from '../data/companyData';

interface IndustriesPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'healthcare': return <HeartPulse className="w-6 h-6 text-[#F4510B]" />;
      case 'education': return <GraduationCap className="w-6 h-6 text-[#F4510B]" />;
      case 'corporate': return <Briefcase className="w-6 h-6 text-[#F4510B]" />;
      case 'government': return <Landmark className="w-6 h-6 text-[#F4510B]" />;
      case 'smes': return <Building2 className="w-6 h-6 text-[#F4510B]" />;
      case 'commercial': return <Store className="w-6 h-6 text-[#F4510B]" />;
      default: return <Building2 className="w-6 h-6 text-[#F4510B]" />;
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Industries We Empower"
        subtitle="Specialized technology infrastructure, compliance frameworks, and digital systems engineered for the unique challenges of each sector in Nepal."
        badgeText="Vertical Market Expertise"
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Purpose-Built Technology for Every Operational Sector
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              From mission-critical hospital wards in Bharatpur to high-density academic campuses and commercial retail chains, Techno Path engineers tailor infrastructure to your regulatory and workflow requirements.
            </p>
          </div>

          {/* Industry Deep Dive Cards */}
          <div className="space-y-12">
            {INDUSTRIES_LIST.map((ind, index) => (
              <div
                key={ind.id}
                id={ind.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#F4F5F7] border border-neutral-200/90 shadow-xs hover:border-[#F4510B]/30 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                        {getIndustryIcon(ind.id)}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#F4510B]">
                        SECTOR // 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900">
                      {ind.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#F4510B]">
                      {ind.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.featuredTech.map((tech, tidx) => (
                          <span
                            key={tidx}
                            className="px-2.5 py-1 bg-white rounded-md text-[11px] font-semibold text-neutral-700 border border-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/industries/${ind.id}`}
                        className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                      >
                        <span>Dedicated Industry Page</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F4510B]" />
                      </Link>
                      <button
                        onClick={() => onOpenQuoteModal(`Industry Consultation: ${ind.title}`)}
                        className="px-4 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center gap-2"
                      >
                        <span>Request Consultation</span>
                      </button>
                    </div>
                  </div>

                  {/* Middle Column: Operational Bottlenecks / Challenges */}
                  <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      <span>Common Challenges</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-neutral-600">
                      {ind.challenges.map((ch, cidx) => (
                        <li key={cidx} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Techno Path Solutions */}
                  <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Techno Path Solutions</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-neutral-700">
                      {ind.technoPathSolutions.map((sol, sidx) => (
                        <li key={sidx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Assistance Banner */}
      <section className="py-16 bg-[#202329] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Don't see your specific sector listed?
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Our systems engineers design custom network topologies and software architectures for any commercial enterprise in Nepal.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
            >
              Contact Our Engineers in Bharatpur
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
