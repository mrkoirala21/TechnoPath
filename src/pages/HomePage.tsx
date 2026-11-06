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
  Building2, 
  HeartPulse, 
  CloudRain, 
  Lock, 
  Cpu, 
  Code2,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Award,
  Star,
  Quote,
  Layers,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  IMAGES, 
  SERVICES_LIST, 
  SOLUTIONS_LIST, 
  INDUSTRIES_LIST, 
  PROJECTS_LIST, 
  BLOG_POSTS, 
  PRECIOUS_CLIENTS,
  CLIENT_TESTIMONIALS
} from '../data/companyData';
import { StatsCounter } from '../components/home/StatsCounter';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { getClientLogo } from '../assets/clients';

interface HomePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-[#F4510B]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#F4510B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#F4510B]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#F4510B]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#F4510B]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#F4510B]" />;
      default: return <Server className="w-5 h-5 text-[#F4510B]" />;
    }
  };

  // Top featured project for spotlight
  const featuredProject = PROJECTS_LIST[0];

  // Top verified client testimonial for spotlight
  const spotlightTestimonial = CLIENT_TESTIMONIALS[0];

  // Curated list of premier client logos for the home strip
  const showcaseClients = PRECIOUS_CLIENTS.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          SECTION 01: HERO BANNER (Concise, high-impact)
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
                Techno Path delivers enterprise IT infrastructure, cloud computing, cybersecurity, healthcare IT systems, and digital solutions engineered for continuous reliability.
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

                <button
                  onClick={() => onOpenQuoteModal('General Infrastructure Consultation')}
                  className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-95"
                >
                  Request Consultation
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-6 border-t border-neutral-800 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white tabular-nums">99.98%</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#F4510B] tabular-nums">24 / 7</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Emergency Support</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white tabular-nums">17+</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Valuable Clients</div>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 aspect-[16/10] bg-neutral-900 group">
                <ImageWithFallback
                  src={IMAGES.heroDatacenter}
                  alt="Techno Path Enterprise Data Center Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  category="datacenter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl text-neutral-900 shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B]">
                        Infrastructure Hub
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900">
                        Bharatpur, Chitwan Headquarters
                      </div>
                    </div>
                    <Link
                      to="/about"
                      className="p-2 bg-[#F4510B] text-white rounded-lg hover:bg-[#DC4607] transition-colors shrink-0"
                      aria-label="View about Techno Path"
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
          SECTION 02: SUCCESSFUL PROJECTS & STATS COUNTER
      ========================================================================= */}
      <StatsCounter onOpenQuoteModal={onOpenQuoteModal} />

      {/* =========================================================================
          SECTION 03: CORE SERVICES (Clean, concise summary - full info on /services)
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Core IT Services
              </h2>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
                Comprehensive technology capabilities engineered to solve complex operational challenges.
              </p>
            </div>
            <Link
              to="/services"
              className="px-5 py-2.5 bg-neutral-900 hover:bg-[#F4510B] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-sm"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((srv) => (
              <Link
                key={srv.id}
                to={`/services/${srv.slug}`}
                className="group p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200 hover:border-[#F4510B]/50 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 group-hover:bg-[#F4510B] flex items-center justify-center transition-colors mb-4 text-[#F4510B] group-hover:text-white shadow-xs">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-[#F4510B]">
                  <span>Dedicated Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: SOLUTIONS & INDUSTRIES SNAPSHOT (A bit of information)
      ========================================================================= */}
      <section className="py-20 bg-[#202329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
              Architectural Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Solutions & Industry Specializations
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore purpose-built blueprints engineered for high-availability enterprise demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Turnkey Solutions Teaser */}
            <div className="p-8 rounded-3xl bg-neutral-850 border border-neutral-700/80 hover:border-[#F4510B]/60 transition-all flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-neutral-900 text-[#F4510B]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                    6 Turnkey Blueprints
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Enterprise Solutions Architecture
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Pre-engineered infrastructure stacks covering optical network backbones, hospital HMIS systems, cloud server virtualization, and perimeter firewalls.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {SOLUTIONS_LIST.slice(0, 3).map((sol) => (
                    <span
                      key={sol.id}
                      className="px-3 py-1 rounded-full bg-neutral-800 text-[11px] font-medium text-neutral-300 border border-neutral-700"
                    >
                      {sol.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Zero downtime SLA</span>
                <Link
                  to="/solutions"
                  className="px-4 py-2 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Solutions Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Industry Expertise Teaser */}
            <div className="p-8 rounded-3xl bg-neutral-850 border border-neutral-700/80 hover:border-[#F4510B]/60 transition-all flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-neutral-900 text-[#F4510B]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                    6 Specialized Sectors
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Industry-Specific Engineering
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Tailored networking, diagnostic device interfacing, and regulatory data protection specifically engineered for healthcare, education, cooperatives, and commercial hubs.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {INDUSTRIES_LIST.slice(0, 3).map((ind) => (
                    <span
                      key={ind.id}
                      className="px-3 py-1 rounded-full bg-neutral-800 text-[11px] font-medium text-neutral-300 border border-neutral-700"
                    >
                      {ind.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Tailored for Nepal</span>
                <Link
                  to="/industries"
                  className="px-4 py-2 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Industry Architectures</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: PRECIOUS CLIENTS LOGO QUICK-STRIP (Brief info, full details on /clients)
      ========================================================================= */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                Our Valuable Clients
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                Trusted by 17+ Leading Institutions & Enterprises
              </h2>
            </div>
            <Link
              to="/clients"
              className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View All 17+ Client Profiles & Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Client Logo Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {showcaseClients.map((client) => {
              const logoSrc = getClientLogo(client.id);
              return (
                <Link
                  key={client.id}
                  to="/clients"
                  className="group p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#F4510B] hover:bg-white hover:shadow-md transition-all flex flex-col items-center justify-center text-center aspect-square"
                  title={`${client.name} - ${client.sector}`}
                >
                  <img
                    src={logoSrc}
                    alt={client.name}
                    className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-bold text-neutral-700 group-hover:text-[#F4510B] transition-colors mt-2 line-clamp-1">
                    {client.name.split(' ')[0]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: SPOTLIGHT TESTIMONIAL & FEATURED PROJECT (Brief info)
      ========================================================================= */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Spotlight Verified Testimonial */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    {spotlightTestimonial.metrics}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#F4510B]/30 mb-2" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{spotlightTestimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{spotlightTestimonial.authorName}</h4>
                  <p className="text-xs text-neutral-500">
                    {spotlightTestimonial.authorRole} · {spotlightTestimonial.organization}
                  </p>
                </div>
                <Link
                  to="/testimonials"
                  className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1"
                >
                  <span>All Reviews</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Featured Case Study Highlight */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#202329] text-white flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F4510B] text-white text-[11px] font-bold">
                    Featured Project
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F4510B]" />
                    <span>{featuredProject.location}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {featuredProject.description}
                </p>

                <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{featuredProject.results[0]}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">{featuredProject.clientSector}</span>
                <Link
                  to={`/projects/${featuredProject.id}`}
                  className="px-4 py-2 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: WHY TECHNO PATH & 99.98% SLA TEASER
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                The Techno Path Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Why Chitwan Enterprises Choose Our Infrastructure
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Physical engineering presence in Bharatpur, certified Cisco & MikroTik engineers, contractual 99.98% uptime SLA, and zero reliance on unverified subcontractors.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>Local Bharatpur Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>99.98% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F4510B]" />
                  <span>24/7 Hospital & Bank Emergency SLA</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                to="/why-choose-us"
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-[#F4510B] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Read Full 6-Pillar SLA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenQuoteModal('General Infrastructure Audit')}
                className="px-6 py-3.5 rounded-xl bg-[#F4510B] hover:bg-[#DC4607] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: LATEST ARTICLES TEASER (Brief info, full on /blog)
      ========================================================================= */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                Knowledge & Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                Latest Technology Insights
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#F4510B] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 mb-2">
                    <span className="font-semibold text-[#F4510B]">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors line-clamp-2 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#F4510B]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: FINAL CALL TO ACTION (CTA)
      ========================================================================= */}
      <section className="py-20 bg-[#202329] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to upgrade your enterprise technology?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule a confidential on-site audit with our lead systems engineer in Bharatpur or chat with us on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal('Home Page Consultation Request')}
              className="px-8 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-lg transition-all"
            >
              Request Free Technical Audit
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
