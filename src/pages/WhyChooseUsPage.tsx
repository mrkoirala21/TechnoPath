import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Award, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  Server, 
  Zap, 
  HelpCircle,
  Building2,
  Lock,
  Layers
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { WHY_CHOOSE_US, COMPANY_INFO, PRECIOUS_CLIENTS } from '../data/companyData';

interface WhyChooseUsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuoteModal }) => {
  const comparisonFactors = [
    {
      factor: 'On-Site Presence in Chitwan',
      technoPath: 'Physical engineering office in Bharatpur with rapid on-site emergency dispatch within 30-60 minutes.',
      others: 'Remote support from Kathmandu or freelance technicians with multi-day travel delays.'
    },
    {
      factor: 'Hardware Sourcing & Warranty',
      technoPath: 'Official enterprise gear from Cisco, Fortinet, MikroTik, Dell with valid manufacturer warranty replacement.',
      others: 'Consumer-grade re-badged equipment with grey-market warranties and zero firmware updates.'
    },
    {
      factor: 'Infrastructure Reliability SLA',
      technoPath: 'Contractual 99.98% uptime SLA with active monitoring, redundant failover, and automated backups.',
      others: 'Best-effort verbal promises with no financial accountability or monitoring logs.'
    },
    {
      factor: 'Certified Systems Engineers',
      technoPath: 'Cisco CCNA/CCNP, MikroTik MTCNA, and AWS Certified architects designing every blueprint.',
      others: 'Uncertified staff following ad-hoc, unstandardized wiring and default password setups.'
    },
    {
      factor: 'Healthcare & Enterprise Track Record',
      technoPath: 'Proven deployments for Mamata Fertility Hospital, Enlight Academy, Gaidakot Hospitals, and 16+ institutions.',
      others: 'No verified institutional client portfolio in healthcare or mission-critical sectors.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Why Choose Techno Path"
        subtitle="Chitwan's premier enterprise IT systems integrator and managed infrastructure partner"
        badgeText="The Techno Path Advantage"
        breadcrumbs={[
          { label: 'Why Choose Us' }
        ]}
      />

      {/* Hero Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#202329] text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                Engineered For Zero Downtime
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                We don’t just fix computers. We engineer mission-critical systems that drive your business.
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Headquartered right in Bharatpur, Chitwan, Techno Path bridges the gap between complex enterprise IT hardware and smooth daily institutional workflows. From hospitals needing 24/7 patient records to campuses supporting thousands of concurrent users, our architectures are built to endure.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenQuoteModal('Enterprise IT Partnership')}
                  className="px-6 py-3.5 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Book Infrastructure Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#F4510B]" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Foundational Pillars */}
      <section className="py-12 bg-neutral-50/60 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
              The Six Pillars of Techno Path Excellence
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Every client engagement is guided by these foundational engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-white border border-neutral-200 hover:border-[#F4510B] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-neutral-200 group-hover:text-[#F4510B] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#F4510B]/10 flex items-center justify-center transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Techno Path vs Traditional Contractors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
              Direct Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
              Why Chitwan Enterprises Trust Techno Path
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Compare our structured enterprise approach with typical local IT vendors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202329] text-white">
                  <th className="p-5 text-sm font-bold border-b border-neutral-800 w-1/4">Evaluation Factor</th>
                  <th className="p-5 text-sm font-bold border-b border-neutral-800 bg-[#F4510B] text-white w-5/12">
                    Techno Path Standard
                  </th>
                  <th className="p-5 text-sm font-bold border-b border-neutral-800 text-neutral-400 w-1/3">
                    Generic Contractors
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                {comparisonFactors.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                    <td className="p-5 font-bold text-neutral-900">{row.factor}</td>
                    <td className="p-5 text-neutral-900 font-medium bg-[#F4510B]/5 border-x border-[#F4510B]/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.technoPath}</span>
                      </div>
                    </td>
                    <td className="p-5 text-neutral-500 leading-relaxed">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutional Credibility Strip */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                Trusted Across Chitwan & Nepal
              </span>
              <h3 className="text-2xl font-bold text-white">
                16+ Verified Institutional Partners
              </h3>
              <p className="text-xs text-neutral-400">
                Hospitals, colleges, commercial centers, and clinics rely on our infrastructure daily.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/clients"
                className="px-6 py-3 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <span>View All 16+ Client Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/testimonials"
                className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs transition-colors"
              >
                <span>Read Client Reviews</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Guarantees & Action CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex p-3 rounded-2xl bg-orange-50 text-[#F4510B]">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Ready to upgrade your enterprise technology?
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a no-obligation on-site network audit with our lead systems engineer. We will evaluate your cabling, servers, firewalls, and Wi-Fi coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuoteModal('General Infrastructure Audit')}
              className="px-8 py-4 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-bold text-sm shadow-xl hover:shadow-[#F4510B]/30 transition-all flex items-center gap-2"
            >
              <span>Request Free Infrastructure Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
