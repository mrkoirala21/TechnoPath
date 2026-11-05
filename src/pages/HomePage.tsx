import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Globe, 
  GraduationCap, 
  Building2, 
  HeartPulse, 
  CloudRain, 
  Lock, 
  Cpu, 
  Code2,
  CheckCircle,
  PhoneCall,
  Calendar,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  IMAGES, 
  SERVICES_LIST, 
  SOLUTIONS_LIST, 
  INDUSTRIES_LIST, 
  PROJECTS_LIST, 
  BLOG_POSTS, 
  WHY_CHOOSE_US 
} from '../data/companyData';
import { ClientsSection } from '../components/home/ClientsSection';
import { ProjectItem } from '../types';

interface HomePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedProjectCategory === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category.toLowerCase().includes(selectedProjectCategory.toLowerCase()) || p.clientSector.toLowerCase().includes(selectedProjectCategory.toLowerCase()));

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

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#F4510B]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#F4510B]" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-[#F4510B]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#F4510B]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#F4510B]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#F4510B]" />;
      default: return <Cpu className="w-5 h-5 text-[#F4510B]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          SECTION 01: HERO BANNER
      ========================================================================= */}
      <section className="relative bg-[#202329] text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-neutral-800">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#F4510B]"></span>
                <span>Premier IT Solutions in Bharatpur, Chitwan & Pan-Nepal</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Empowering Businesses Through <span className="text-[#F4510B]">Innovative Technology</span>
              </h1>

              <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Techno Path delivers reliable IT infrastructure, cloud computing, cybersecurity, software development, and digital transformation solutions that empower businesses to grow, innovate, and succeed.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95 flex items-center gap-2 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-95"
                >
                  Contact Us
                </Link>

                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>Request Quick Audit</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-neutral-800 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white tabular-nums">99.9%</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Uptime Architecture</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#F4510B] tabular-nums">24 / 7</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Emergency Support</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white tabular-nums">6 Core</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">IT Disciplines</div>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 aspect-[16/10] bg-neutral-900 group">
                <img
                  src={IMAGES.heroDatacenter}
                  alt="Techno Path Enterprise Data Center Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl text-neutral-900 shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B]">
                        Infrastructure Excellence
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900">
                        Enterprise Server & Optical Fiber Architecture
                      </div>
                    </div>
                    <Link
                      to="/services/it-infrastructure"
                      className="p-2 bg-[#F4510B] text-white rounded-lg hover:bg-[#DC4607] transition-colors shrink-0"
                      aria-label="View IT infrastructure details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: COMPANY INTRODUCTION
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-100 aspect-[4/3]">
                <img
                  src={IMAGES.aboutTeam}
                  alt="Techno Path Technical Engineering Team collaborating in Bharatpur"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#202329]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                  Bharatpur, Chitwan Headquarters
                </div>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                About Techno Path
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Your Trusted Technology Partner
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Techno Path is a technology solutions company dedicated to helping organizations build reliable, secure, and scalable digital environments. We provide comprehensive IT infrastructure, cloud solutions, cybersecurity, healthcare IT systems, software development, and digital services.
              </p>

              {/* Mission & Vision Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F4F5F7] border border-neutral-200">
                  <div className="text-xs font-bold text-[#F4510B] uppercase tracking-wider mb-1">
                    Our Mission
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    To provide innovative, reliable, and accessible technology solutions that help organizations improve efficiency, strengthen security, and achieve sustainable digital growth.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F4F5F7] border border-neutral-200">
                  <div className="text-xs font-bold text-[#202329] uppercase tracking-wider mb-1">
                    Our Vision
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    To become a trusted technology partner recognized for delivering innovative IT solutions, digital transformation, and technology-driven progress across Nepal.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-5 py-2.5 bg-[#202329] hover:bg-[#F4510B] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="text-xs font-semibold text-neutral-700 hover:text-[#F4510B] transition-colors flex items-center gap-1.5"
                >
                  <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: OUR SERVICES (6 Service Cards)
      ========================================================================= */}
      <section className="py-20 bg-[#F4F5F7] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              End-to-End Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Comprehensive Technology Services
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              From IT infrastructure to advanced digital solutions, we provide the technology and expertise businesses need to move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#F4510B]/10 text-[#F4510B] group-hover:bg-[#F4510B] group-hover:text-white transition-colors duration-200">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-neutral-700">
                    {service.features.slice(0, 4).map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4510B]"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1.5 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#202329] hover:bg-[#F4510B] text-white rounded-xl text-xs font-semibold transition-colors"
            >
              <span>Explore All 6 Service Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY CHOOSE TECHNO PATH? (6 Feature Blocks)
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Our Core Strengths
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Technology That Moves Your Business Forward
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Why leading organizations, hospitals, and growing businesses throughout Nepal partner with Techno Path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200/90 hover:border-[#F4510B]/30 transition-all duration-200"
              >
                <div className="text-2xl font-black text-[#F4510B] font-mono mb-2">
                  {item.number}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: OUR SOLUTIONS
      ========================================================================= */}
      <section className="py-20 bg-[#202329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
                Turnkey Architectures
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Our Solutions
              </h2>
              <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
                Ready-to-deploy enterprise systems tailored for institutional reliability and operational growth.
              </p>
            </div>
            <Link
              to="/solutions"
              className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.map((sol) => (
              <div
                key={sol.id}
                className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 hover:border-[#F4510B]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-[#F4510B]">
                      {getSolutionIcon(sol.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{sol.title}</h3>
                      <div className="text-[11px] text-[#F4510B] font-medium">{sol.tagline}</div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-neutral-400 mb-6">
                    {sol.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#F4510B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-700/60 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">{sol.targetAudience.split(',')[0]}</span>
                  <Link
                    to={`/solutions#${sol.id}`}
                    className="text-[#F4510B] hover:text-white font-semibold flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: INDUSTRIES WE SERVE
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Domain Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Industries We Serve
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Every sector has unique security and connectivity demands. Techno Path delivers purpose-built technology architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_LIST.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{ind.title}</h3>
                  <div className="text-xs text-[#F4510B] font-semibold mb-3">{ind.subtitle}</div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Techno Path Architectures:
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-700">
                      {ind.technoPathSolutions.slice(0, 2).map((sol, sidx) => (
                        <li key={sidx} className="flex items-start gap-1.5">
                          <span className="text-[#F4510B] font-bold">›</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs">
                  <div className="text-neutral-500 text-[11px]">
                    {ind.featuredTech.slice(0, 2).join(' · ')}
                  </div>
                  <Link
                    to={`/industries#${ind.id}`}
                    className="text-xs font-semibold text-[#F4510B] hover:underline"
                  >
                    View Industry Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: OUR PRECIOUS CLIENTS
      ========================================================================= */}
      <ClientsSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* =========================================================================
          SECTION 07: PROJECTS / PORTFOLIO
      ========================================================================= */}
      <section className="py-20 bg-[#F4F5F7] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Projects Showcase
              </h2>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
                Real-world deployments across medical institutes, financial cooperatives, academic centers, and enterprise environments in Nepal.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-neutral-200 self-start md:self-auto">
              {['All', 'Healthcare', 'Cybersecurity', 'Infrastructure', 'Cloud'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedProjectCategory(category)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedProjectCategory === category
                      ? 'bg-[#202329] text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#202329]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {project.clientSector} · {project.location}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#F4510B] uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-4 py-2 bg-[#202329] hover:bg-[#F4510B] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>View Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-neutral-400 font-mono">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="text-xs font-semibold text-[#F4510B] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore All Verified Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: CALL TO ACTION (CTA)
      ========================================================================= */}
      <section className="py-20 bg-[#202329] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4510B]/20 text-[#F4510B] text-xs font-bold uppercase tracking-wider">
            Ready For Reliable IT?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Let's Build Something Great Together
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Looking for reliable technology solutions for your organization? Let Techno Path help you transform your ideas into practical, scalable, and secure technology solutions.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-sm font-semibold shadow-lg transition-all duration-150 active:scale-95 flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#F4510B]" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all duration-150 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: BLOG / LATEST NEWS
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
                Knowledge & Trends
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Latest Technology Insights
              </h2>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
                Expert commentary on enterprise networking, healthcare software, cloud infrastructure, and cybersecurity in Nepal.
              </p>
            </div>
            <Link
              to="/blog"
              className="px-5 py-2.5 bg-[#202329] hover:bg-[#F4510B] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden bg-neutral-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#202329]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                  <Link
                    to={`/blog#${post.slug}`}
                    className="text-xs font-semibold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[11px] text-neutral-400">
                    {post.tags[0]}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B]">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mt-1">
                  {activeProjectModal.title}
                </h3>
                <div className="text-xs text-neutral-500 mt-1">
                  Client Sector: {activeProjectModal.clientSector} · Location: {activeProjectModal.location}
                </div>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Operational Challenge</h4>
                <p className="text-neutral-600">{activeProjectModal.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Techno Path Engineering Solution</h4>
                <p className="text-neutral-600">{activeProjectModal.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Quantified Business Outcomes</h4>
                <ul className="space-y-1.5 text-neutral-800">
                  {activeProjectModal.results.map((res, ridx) => (
                    <li key={ridx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Deployed Hardware & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-neutral-100 rounded text-xs font-semibold text-neutral-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                onClick={() => {
                  const title = activeProjectModal.title;
                  setActiveProjectModal(null);
                  onOpenQuoteModal(`Project consultation similar to: ${title}`);
                }}
                className="px-4 py-2 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-lg text-xs font-semibold"
              >
                Request Similar Deployment
              </button>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
