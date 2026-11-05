import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  PhoneCall, 
  MessageSquare, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Globe, 
  GraduationCap,
  Building,
  Layers,
  FileCheck
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    const newLead = {
      fullName: inquiryName,
      phone: inquiryPhone,
      email: inquiryEmail,
      serviceInterest: service.title,
      message: inquiryNotes,
      id: `lead_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('technopath_leads', JSON.stringify([newLead, ...existing]));
    setFormSubmitted(true);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-8 h-8 text-[#F4510B]" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-[#F4510B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-[#F4510B]" />;
      case 'Activity': return <Activity className="w-8 h-8 text-[#F4510B]" />;
      case 'Globe': return <Globe className="w-8 h-8 text-[#F4510B]" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-[#F4510B]" />;
      default: return <Server className="w-8 h-8 text-[#F4510B]" />;
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        badgeText="Service Specification"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]}
      />

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Hero Visual Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-neutral-200 bg-neutral-900">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#F4510B] font-bold mb-1">
                    Techno Path Certified Solution
                  </div>
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                </div>
              </div>

              {/* Service Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-neutral-900">
                  Overview & Engineering Scope
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#F4510B]" />
                  <span>Key Services & Implementations Included</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Deliverables */}
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">
                  What Techno Path Delivers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.deliverables.map((deliv, didx) => (
                    <div
                      key={didx}
                      className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs hover:border-[#F4510B]/30 transition-colors"
                    >
                      <div className="text-xs font-mono font-bold text-[#F4510B] mb-1">
                        DELIVERABLE 0{didx + 1}
                      </div>
                      <h4 className="text-base font-bold text-neutral-900 mb-1.5">
                        {deliv.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {deliv.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-4">
                  Operational & Financial Benefits
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-700">
                  {service.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#F4510B]/10 text-[#F4510B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack & Ecosystem */}
              <div className="p-6 rounded-2xl bg-[#202329] text-white">
                <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#F4510B]" />
                  <span>Hardware & Software Ecosystem We Deploy</span>
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  We deploy carrier-grade, battle-tested vendor hardware and modern open software standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 bg-neutral-800 rounded-lg text-xs font-semibold text-neutral-200 border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {service.faqs.length > 0 && (
                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-[#F4510B]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, fidx) => (
                      <div
                        key={fidx}
                        className="p-5 rounded-xl bg-[#F4F5F7] border border-neutral-200"
                      >
                        <h4 className="font-bold text-sm text-neutral-900 mb-1.5">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Quick Inquiry & Navigation */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Booking Card */}
              <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-md sticky top-24">
                <div className="text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-1">
                  Direct Service Request
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Inquire for {service.title}
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Connect with our Bharatpur engineering desk for custom pricing, site surveys, or tenders.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Sunil Adhikari"
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Project Scope / Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryNotes}
                        onChange={(e) => setInquiryNotes(e.target.value)}
                        placeholder="Number of workstations, locations, or current network problems..."
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F4510B] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold hover:underline"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Instant Inquiry via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-neutral-900">Inquiry Received</h4>
                    <p className="text-xs text-neutral-500 mt-1 mb-4">
                      Thank you {inquiryName}. Our engineer will call you at {inquiryPhone} today.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-3 py-1.5 bg-neutral-200 text-neutral-800 rounded text-xs font-semibold"
                    >
                      Submit Another
                    </button>
                  </div>
                )}

                {/* Direct Phone Assistance */}
                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs space-y-2 text-neutral-600">
                  <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                    <PhoneCall className="w-4 h-4 text-[#F4510B]" />
                    <span>Direct Call: {COMPANY_INFO.phoneDisplay}</span>
                  </div>
                  <div>Office: {COMPANY_INFO.address.full}</div>
                </div>
              </div>

              {/* Other Services Menu */}
              <div className="p-5 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                  Other Service Disciplines
                </h4>
                <div className="space-y-1.5">
                  {SERVICES_LIST.filter((s) => s.slug !== slug).map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
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
