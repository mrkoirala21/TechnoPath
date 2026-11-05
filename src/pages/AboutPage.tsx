import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Lightbulb, 
  HeartHandshake, 
  Users, 
  Zap, 
  Clock, 
  MapPin, 
  PhoneCall,
  Search,
  Cpu,
  Layers,
  Headphones
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { COMPANY_INFO, IMAGES, WHY_CHOOSE_US } from '../data/companyData';

interface AboutPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Technical Assessment',
      description: 'We audit your existing network cabling, server load, security perimeters, and operational workflows to identify weaknesses and bottlenecks.',
      icon: <Search className="w-5 h-5 text-[#F4510B]" />
    },
    {
      step: '02',
      title: 'Architectural Design',
      description: 'Our engineers draft redundant network topologies, hardware procurement manifests, and software system schemas matched to your budget.',
      icon: <Cpu className="w-5 h-5 text-[#F4510B]" />
    },
    {
      step: '03',
      title: 'Deployment & Testing',
      description: 'Clean rackmount installations, Cat6A fiber runs, OS hardening, failover testing, and staff training during planned maintenance windows.',
      icon: <Layers className="w-5 h-5 text-[#F4510B]" />
    },
    {
      step: '04',
      title: 'Managed Ongoing Support',
      description: 'Proactive 24/7 telemetry monitoring, scheduled preventive maintenance, and guaranteed rapid on-site dispatch in Bharatpur and across Nepal.',
      icon: <Headphones className="w-5 h-5 text-[#F4510B]" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="About Techno Path"
        subtitle="Empowering organizations across Nepal with reliable IT infrastructure, cloud computing, cybersecurity, and mission-critical healthcare software."
        badgeText="Who We Are & What Drives Us"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Section: Who We Are & Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Pioneering Professional IT & Systems Engineering in Central Nepal
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Founded in Bharatpur, Chitwan, <strong>TECHNO PATH</strong> emerged to solve a critical technological challenge: Nepalese enterprises, medical hospitals, and educational institutions required world-class, fault-tolerant IT engineering without relying on distant third-party support.
                </p>
                <p>
                  Over the years, we have grown into a multidisciplinary technology solutions company. Our certified team integrates enterprise routing, structured fiber networks, AWS cloud architectures, cybersecurity firewalls, and custom Hospital Management Information Systems (HMIS).
                </p>
                <p>
                  Today, Techno Path serves as the trusted technology backbone for hospitals that cannot afford a second of downtime, financial institutions protecting confidential member assets, and commercial enterprises scaling their digital footprint across Nepal.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>Based in Bharatpur, Chitwan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>Certified Enterprise Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>24/7 Critical System SLAs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-[4/3]">
                <ImageWithFallback
                  src={IMAGES.aboutTeam}
                  alt="Techno Path engineers collaborating in corporate headquarters"
                  className="w-full h-full object-cover"
                  category="team"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-bold text-sm">Engineering Center · Bharatpur</div>
                  <div className="text-neutral-300 text-[11px]">Directing on-site deployments and remote support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mission & Vision */}
      <section className="py-20 bg-[#F4F5F7] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Box */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4510B]/10 text-[#F4510B] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-2">
                  Our Purpose
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  "{COMPANY_INFO.mission}"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-100 text-xs text-neutral-500">
                Focusing on measurable business continuity, zero data loss, and human-centric adoption.
              </div>
            </div>

            {/* Vision Box */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#202329] text-white shadow-sm flex flex-col justify-between border border-neutral-800">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F4510B] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-2">
                  Our Horizon
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  "{COMPANY_INFO.vision}"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-800 text-xs text-neutral-400">
                Establishing Bharatpur and Nepal as centers of resilient digital infrastructure and technological self-reliance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Our Core Values
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base">
              The cultural and professional standards that govern every client interaction, network configuration, and architectural blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200 hover:border-[#F4510B]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 text-[#F4510B] flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Our Approach (Assess, Architect, Deploy, Support) */}
      <section className="py-20 bg-[#202329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Systematic Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Our Technical Approach
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base">
              A structured 4-step engineering lifecycle that guarantees zero surprises, reliable uptime, and clear accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-neutral-800/70 border border-neutral-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-neutral-900">
                      {st.icon}
                    </div>
                    <span className="text-xl font-black font-mono text-[#F4510B]">
                      {st.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us Recap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Why Partner With Us?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Technology That Moves Your Business Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl border border-neutral-200 bg-[#F4F5F7] hover:border-neutral-300 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#F4510B] mb-2">
                  FEATURE // {item.number}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: CTA Banner */}
      <section className="py-16 bg-[#F4F5F7] border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Ready to upgrade your enterprise infrastructure?
          </h2>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Contact our senior engineering team in Bharatpur, Chitwan to discuss your technical challenges or schedule an on-site audit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
            >
              Contact Our Engineers
            </Link>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Request Free Technical Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
