import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Tag, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  ShieldCheck, 
  FileText,
  Send,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { PROJECTS_LIST, COMPANY_INFO } from '../data/companyData';

interface ProjectDetailPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_LIST.find((p) => p.id === slug || (p as any).slug === slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Other projects for recommendation
  const otherProjects = PROJECTS_LIST.filter((p) => p.id !== project.id);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    const newLead = {
      fullName: inquiryName,
      phone: inquiryPhone,
      email: inquiryEmail,
      serviceInterest: `Case Study: ${project.title}`,
      message: inquiryMessage,
      id: `lead_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('technopath_leads', JSON.stringify([newLead, ...existing]));
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title={project.title}
        subtitle={`${project.clientSector} • ${project.location}`}
        badgeText="Verified Case Study"
        breadcrumbs={[
          { label: 'Case Studies', path: '/projects' },
          { label: project.title }
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Project Hero Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-video max-h-[460px]">
                {project.image ? (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    category="datacenter"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-neutral-400">
                    <FileText className="w-16 h-16 opacity-40 text-[#F4510B]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/90 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#F4510B] text-white">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      <MapPin className="w-3.5 h-3.5 text-[#F4510B]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      <Building2 className="w-3.5 h-3.5 text-[#F4510B]" />
                      <span>{project.clientSector}</span>
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                    {project.title}
                  </h1>
                </div>
              </div>

              {/* Project Overview */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                  Executive Summary
                </span>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Challenge vs Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* The Initial Challenge */}
                <div className="p-8 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-neutral-900">The Core Challenge</h2>
                      <p className="text-xs text-neutral-500">Operational obstacles prior to overhaul</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* The Techno Path Solution */}
                <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-neutral-900">Engineering Solution</h2>
                      <p className="text-xs text-neutral-500">Architecture engineered & delivered</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Results & Impact */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#202329] text-white space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-800 text-[#F4510B]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                      Verified Outcomes
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Quantified Business Results
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  {project.results.map((res, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                          Metric #{idx + 1}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-neutral-100 leading-snug">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware & Software Technologies Deployed */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#F4510B]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Deployed Technologies & Hardware</h3>
                    <p className="text-xs text-neutral-500">Tier-1 enterprise infrastructure components utilized</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2.5 rounded-xl bg-white border border-neutral-200 font-semibold text-xs text-neutral-800 shadow-sm flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F4510B]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Explore Other Projects */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-neutral-900">Explore More Case Studies</h3>
                  <Link
                    to="/projects"
                    className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1"
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {otherProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#F4510B] hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B]">
                          {p.clientSector}
                        </span>
                        <h4 className="text-sm font-bold text-neutral-900 mt-1 group-hover:text-[#F4510B] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span>{p.location}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F4510B] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Inquire About Similar Deployment */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Need a Similar Infrastructure?
                </h3>
                <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                  Discuss how our certified network architects can replicate these outcomes for your organization.
                </p>

                {formSubmitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-neutral-900">Inquiry Received</h4>
                    <p className="text-xs text-neutral-600">
                      We will review your institutional profile and prepare a custom deployment proposal.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Ramesh Shrestha"
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
                        Email Address
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
                        Facility / Network Scale
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="e.g. 100 beds, 4 branch offices, 500 concurrent students..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#F4510B] focus:ring-1 focus:ring-[#F4510B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#F4510B] hover:bg-[#d94406] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Case Study Consultation</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Engineering Callout */}
              <div className="p-6 rounded-3xl bg-[#202329] text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-800 text-[#F4510B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Bharatpur Headquarters</h4>
                    <p className="text-xs text-neutral-400">On-site IT audits in Chitwan</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Our field engineers are available for physical site surveys across Chitwan, Nawalpur, and surrounding districts.
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
                    <span>WhatsApp Technical Lead</span>
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
