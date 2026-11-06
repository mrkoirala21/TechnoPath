import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  CloudRain, 
  Lock, 
  Cpu, 
  Code2, 
  CheckCircle, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Layers, 
  Users, 
  Send,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SOLUTIONS_LIST, COMPANY_INFO } from '../data/companyData';
import { SolutionItem } from '../types';

interface SolutionDetailPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS_LIST.find((s) => s.id === slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-8 h-8 text-[#F4510B]" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-[#F4510B]" />;
      case 'CloudRain': return <CloudRain className="w-8 h-8 text-[#F4510B]" />;
      case 'Lock': return <Lock className="w-8 h-8 text-[#F4510B]" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-[#F4510B]" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-[#F4510B]" />;
      default: return <Cpu className="w-8 h-8 text-[#F4510B]" />;
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    const newLead = {
      fullName: inquiryName,
      phone: inquiryPhone,
      email: inquiryEmail,
      serviceInterest: `Solution: ${solution.title}`,
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
        title={solution.title}
        subtitle={solution.tagline}
        badgeText="Turnkey Solution Architecture"
        breadcrumbs={[
          { label: 'Solutions', path: '/solutions' },
          { label: solution.title }
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Solution Hero Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#202329] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  {getSolutionIcon(solution.iconName)}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-neutral-800 text-[#F4510B]">
                    {getSolutionIcon(solution.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                      Production-Grade Architecture
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {solution.title}
                    </h2>
                  </div>
                </div>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
                  {solution.description}
                </p>
              </div>

              {/* Core Key Features */}
              <div className="p-8 rounded-3xl bg-[#F4F5F7] border border-neutral-200">
                <h3 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#F4510B]" />
                  <span>Key Architectural Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-2xs flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Benefits */}
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">
                  Quantified Business & Operational Benefits
                </h3>
                <div className="space-y-3">
                  {solution.benefits.map((benefit, bidx) => (
                    <div
                      key={bidx}
                      className="p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        ✓
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Deployments */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-neutral-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neutral-200 text-neutral-700 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1">
                    Who This Architecture Is Engineered For
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {solution.targetAudience}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">
                  Standard Project Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {solution.deliverables.map((deliv, didx) => (
                    <div
                      key={didx}
                      className="p-5 rounded-2xl bg-[#F4F5F7] border border-neutral-200 flex flex-col justify-between"
                    >
                      <div className="text-[10px] font-mono font-bold text-[#F4510B] mb-2 uppercase tracking-wider">
                        Phase 0{didx + 1}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                        {deliv}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-md sticky top-24">
                <div className="text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-1">
                  Architecture Inquiry
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Deploy {solution.title}
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Schedule an on-site survey or receive a formal technical tender proposal in Bharatpur.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="98xxxxxxxx"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="email@company.com"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Project Scope / Organization
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryNotes}
                        onChange={(e) => setInquiryNotes(e.target.value)}
                        placeholder="Workstations, sites, or current bottlenecks..."
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Scope Proposal</span>
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold hover:underline"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-neutral-900">Inquiry Received</h4>
                    <p className="text-xs text-neutral-500 mt-1 mb-4">
                      Thank you. A Techno Path solutions architect will contact {inquiryPhone} promptly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-3 py-1.5 bg-neutral-200 text-neutral-800 rounded text-xs font-semibold"
                    >
                      Submit Another
                    </button>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs space-y-2 text-neutral-600">
                  <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                    <PhoneCall className="w-4 h-4 text-[#F4510B]" />
                    <span>Call: {COMPANY_INFO.phoneDisplay}</span>
                  </div>
                  <div>Office: {COMPANY_INFO.address.full}</div>
                </div>
              </div>

              {/* Other Solutions Navigation */}
              <div className="p-5 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                  Other Enterprise Solutions
                </h4>
                <div className="space-y-1.5">
                  {SOLUTIONS_LIST.filter((s) => s.id !== slug).map((s) => (
                    <Link
                      key={s.id}
                      to={`/solutions/${s.id}`}
                      className="block p-2 rounded-lg bg-white border border-neutral-200 hover:border-[#F4510B] text-xs font-semibold text-neutral-800 hover:text-[#F4510B] transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
