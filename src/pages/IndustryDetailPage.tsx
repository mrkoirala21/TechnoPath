import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  Store, 
  Briefcase, 
  CheckCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  FileCheck,
  Send,
  ExternalLink
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { INDUSTRIES_LIST, PRECIOUS_CLIENTS, PROJECTS_LIST, COMPANY_INFO } from '../data/companyData';
import { IndustryItem } from '../types';

interface IndustryDetailPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES_LIST.find((item) => item.id === slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Find relevant clients in this industry sector
  const relatedClients = PRECIOUS_CLIENTS.filter((c) => {
    const s = c.sector.toLowerCase();
    const indId = industry.id.toLowerCase();
    if (indId === 'healthcare') return s.includes('health') || s.includes('hospital');
    if (indId === 'education') return s.includes('educat') || s.includes('academy');
    if (indId === 'corporate') return s.includes('corporate') || s.includes('commercial');
    if (indId === 'government') return s.includes('government') || s.includes('municipal') || s.includes('public');
    if (indId === 'commercial') return s.includes('hospitality') || s.includes('commercial') || s.includes('retail');
    if (indId === 'smes') return true;
    return false;
  }).slice(0, 4);

  // Find related case study project
  const relatedProject = PROJECTS_LIST.find((p) => {
    const ps = p.clientSector.toLowerCase();
    const indId = industry.id.toLowerCase();
    if (indId === 'healthcare') return ps.includes('health');
    if (indId === 'education') return ps.includes('educat');
    if (indId === 'corporate') return ps.includes('manufacturing') || ps.includes('financial');
    return true;
  });

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'healthcare': return <HeartPulse className="w-8 h-8 text-[#F4510B]" />;
      case 'education': return <GraduationCap className="w-8 h-8 text-[#F4510B]" />;
      case 'corporate': return <Briefcase className="w-8 h-8 text-[#F4510B]" />;
      case 'government': return <Landmark className="w-8 h-8 text-[#F4510B]" />;
      case 'smes': return <Building2 className="w-8 h-8 text-[#F4510B]" />;
      case 'commercial': return <Store className="w-8 h-8 text-[#F4510B]" />;
      default: return <Building2 className="w-8 h-8 text-[#F4510B]" />;
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    const newLead = {
      fullName: inquiryName,
      phone: inquiryPhone,
      email: inquiryEmail,
      serviceInterest: `Industry: ${industry.title}`,
      message: inquiryNotes,
      id: `lead_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('technopath_leads', JSON.stringify([newLead, ...existing]));
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title={industry.title}
        subtitle={industry.subtitle}
        badgeText="Industry Specialized IT"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: industry.title }
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Industry Hero Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#202329] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  {getIndustryIcon(industry.id)}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-neutral-800 text-[#F4510B]">
                    {getIndustryIcon(industry.id)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                      Dedicated Sector Architecture
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {industry.title}
                    </h2>
                  </div>
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed mt-4">
                  {industry.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => onOpenQuoteModal(`Industry: ${industry.title}`)}
                    className="px-6 py-3 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold shadow-lg hover:shadow-[#F4510B]/30 transition-all flex items-center gap-2"
                  >
                    <span>Request Industry Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F4510B]" />
                    <span>Call Engineer</span>
                  </a>
                </div>
              </div>

              {/* Sector Challenges & Techno Path Solution Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sector Pain Points */}
                <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-100 text-red-600">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">Common Sector Challenges</h3>
                      <p className="text-xs text-neutral-500">Bottlenecks faced by unoptimized systems</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-neutral-700 text-sm leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Techno Path Engineered Solutions */}
                <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">Techno Path Solutions</h3>
                      <p className="text-xs text-neutral-500">Engineered to eliminate friction</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {industry.technoPathSolutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-neutral-800 text-sm font-medium leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Featured Technologies */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#F4510B]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Sector-Specific Technologies Deployed</h3>
                    <p className="text-xs text-neutral-500">Hardware and software standards tested for high reliability</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {industry.featuredTech.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F4510B]" />
                      <span className="text-xs font-semibold text-neutral-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Real-World Case Study */}
              {relatedProject && (
                <div className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-100 text-neutral-700">
                        <FileCheck className="w-5 h-5 text-[#F4510B]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                          Featured Sector Project
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${relatedProject.id}`}
                      className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {relatedProject.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
                    {relatedProject.results.map((res, i) => (
                      <div key={i} className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                        <p className="text-xs font-medium text-neutral-800 leading-snug">
                          {res}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Institutional Clients in this Sector */}
              {relatedClients.length > 0 && (
                <div className="p-8 rounded-3xl bg-neutral-900 text-white space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                        Trusted By Industry Leaders
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        Clients Served in {industry.title}
                      </h3>
                    </div>
                    <Link
                      to="/clients"
                      className="text-xs font-bold text-[#F4510B] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>All 16+ Clients</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedClients.map((client) => (
                      <div
                        key={client.id}
                        className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-bold text-[#F4510B] text-sm shrink-0">
                          {client.logoBadge}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-white truncate">{client.name}</h4>
                          <p className="text-xs text-neutral-400 mt-0.5">{client.location}</p>
                          <p className="text-[11px] text-neutral-300 mt-2 line-clamp-2">
                            {client.deployedSolution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Request Architecture Scope Box */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Plan Your {industry.title} Architecture
                </h3>
                <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                  Request a confidential on-site audit and technical blueprint from Techno Path engineers in Bharatpur.
                </p>

                {formSubmitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-neutral-900">Consultation Request Received</h4>
                    <p className="text-xs text-neutral-600">
                      Our lead systems engineer will review your industry requirements and call you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Your Name or Designation"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#F4510B] focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="e.g. 9855085421"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#F4510B] focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#F4510B] focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Current Pain Points or Goals
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryNotes}
                        onChange={(e) => setInquiryNotes(e.target.value)}
                        placeholder="e.g. Slow billing speed, frequent network dropouts, need LIS integration..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#F4510B] focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Industry Blueprint Request</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Other Industries Directory */}
              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                  Explore Other Sectors
                </h4>
                <div className="space-y-2">
                  {INDUSTRIES_LIST.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      className={`block p-3 rounded-xl text-xs font-semibold transition-all ${
                        ind.id === industry.id
                          ? 'bg-[#F4510B] text-white shadow-sm'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{ind.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Engineering Desk */}
              <div className="p-6 rounded-3xl bg-[#202329] text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-800 text-[#F4510B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Bharatpur Technical Desk</h4>
                    <p className="text-xs text-neutral-400">Direct senior engineer line</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Call our systems architects directly to discuss your enterprise IT roadmaps or urgent infrastructure failures.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="w-full py-2.5 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
