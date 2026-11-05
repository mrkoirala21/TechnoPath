import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Globe, 
  GraduationCap,
  CheckCircle,
  Cpu,
  Layers
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';

interface ServicesPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-6 h-6 text-[#F4510B]" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-[#F4510B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#F4510B]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#F4510B]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#F4510B]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#F4510B]" />;
      default: return <Server className="w-6 h-6 text-[#F4510B]" />;
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Comprehensive Technology Services"
        subtitle="End-to-end IT infrastructure, cloud computing, cybersecurity, healthcare software, and digital solutions engineered for reliability in Nepal."
        badgeText="Our Core Service Disciplines"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Six Specialized Pillars of Technological Excellence
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Whether you need to upgrade an entire hospital network, migrate local databases to AWS, or train your internal IT personnel, our certified engineers deliver measurable results.
            </p>
          </div>

          {/* Service Cards Showcase */}
          <div className="space-y-12">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-10 rounded-3xl bg-[#F4F5F7] border border-neutral-200/90 shadow-xs hover:border-[#F4510B]/30 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon, Title, Description */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#F4510B]">
                        0{index + 1} // DISCIPLINE
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white rounded-md text-[11px] font-semibold text-neutral-700 border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center gap-2"
                      >
                        <span>Full Service Specification</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => onOpenQuoteModal(service.title)}
                        className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Middle Column: Scope & Included Services */}
                  <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#F4510B]" />
                      <span>Services Included</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-700">
                      {service.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F4510B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Key Business Benefits */}
                  <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#F4510B]" />
                      <span>Key Business Benefits</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      {service.benefits.map((ben, bidx) => (
                        <li key={bidx} className="flex items-start gap-1.5">
                          <span className="text-[#F4510B] font-bold">›</span>
                          <span>{ben}</span>
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

      {/* Bottom CTA */}
      <section className="py-16 bg-[#202329] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Need a tailored service combination for your organization?
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            We frequently architect bundled packages combining IT infrastructure with cybersecurity firewalls and managed maintenance.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
            >
              Request Custom Enterprise Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
