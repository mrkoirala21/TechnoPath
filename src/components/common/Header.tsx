import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
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
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Logo } from './Logo';
import logoLightSvg from '../../assets/logo/logo-light.svg';
import { COMPANY_INFO, SERVICES_LIST, SOLUTIONS_LIST, INDUSTRIES_LIST } from '../../data/companyData';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-4 h-4 text-[#F4510B]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#F4510B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#F4510B]" />;
      case 'Activity': return <Activity className="w-4 h-4 text-[#F4510B]" />;
      case 'Globe': return <Globe className="w-4 h-4 text-[#F4510B]" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-[#F4510B]" />;
      default: return <Server className="w-4 h-4 text-[#F4510B]" />;
    }
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-4 h-4 text-[#F4510B]" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-[#F4510B]" />;
      case 'CloudRain': return <CloudRain className="w-4 h-4 text-[#F4510B]" />;
      case 'Lock': return <Lock className="w-4 h-4 text-[#F4510B]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#F4510B]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[#F4510B]" />;
      default: return <Cpu className="w-4 h-4 text-[#F4510B]" />;
    }
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3' 
            : 'bg-white border-b border-neutral-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo Zone - Official SVG Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4510B] rounded-lg group"
              aria-label="Techno Path - Home"
            >
              <img
                src={logoLightSvg}
                alt="TECHNO PATH"
                className={`${isScrolled ? 'h-8 sm:h-9' : 'h-10 sm:h-11'} w-auto object-contain transition-transform duration-200 group-hover:scale-102`}
              />
              <div className="hidden sm:flex flex-col justify-center border-l border-neutral-300 pl-2.5 leading-none py-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F4510B]">
                  IT SOLUTIONS
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-neutral-500 mt-0.5">
                  Bharatpur, Nepal
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-neutral-700">
            <Link 
              to="/" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/') && location.pathname === '/' 
                  ? 'text-[#F4510B] font-semibold' 
                  : 'hover:text-[#F4510B]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/about') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/services" 
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                  isActive('/services') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown Panel for Services */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] pt-3 transition-all duration-200 ${
                  activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-neutral-200 p-4 grid grid-cols-2 gap-2">
                  {SERVICES_LIST.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}`}
                      className="p-2.5 rounded-lg hover:bg-neutral-50 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-neutral-200"
                    >
                      <div className="p-2 rounded-md bg-[#F4510B]/10 shrink-0 group-hover/item:bg-[#F4510B] group-hover/item:text-white transition-colors">
                        {getServiceIcon(srv.iconName)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-neutral-900 group-hover/item:text-[#F4510B] transition-colors flex items-center justify-between">
                          <span>{srv.title}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#F4510B]" />
                        </div>
                        <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                          {srv.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 mt-1 border-t border-neutral-100 flex items-center justify-between text-xs px-2 text-neutral-500">
                    <span>Need a custom enterprise architecture?</span>
                    <Link to="/services" className="text-[#F4510B] font-semibold hover:underline flex items-center gap-1">
                      View All 6 Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/solutions" 
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                  isActive('/solutions') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-3 transition-all duration-200 ${
                  activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-neutral-200 p-4 grid grid-cols-2 gap-2">
                  {SOLUTIONS_LIST.map((sol) => (
                    <Link
                      key={sol.id}
                      to={`/solutions/${sol.id}`}
                      className="p-2.5 rounded-lg hover:bg-neutral-50 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-neutral-200"
                    >
                      <div className="p-2 rounded-md bg-[#F4510B]/10 shrink-0 group-hover/item:bg-[#F4510B] transition-colors">
                        {getSolutionIcon(sol.iconName)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-neutral-900 group-hover/item:text-[#F4510B] transition-colors">
                          {sol.title}
                        </div>
                        <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                          {sol.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs px-2">
                    <span className="text-neutral-500">Engineered for Nepalese enterprises</span>
                    <Link to="/solutions" className="text-[#F4510B] font-semibold hover:underline">
                      Explore All Solutions →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/industries" 
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                  isActive('/industries') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[440px] pt-3 transition-all duration-200 ${
                  activeDropdown === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-neutral-200 p-3 grid grid-cols-2 gap-1.5">
                  {INDUSTRIES_LIST.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      className="p-2 rounded-lg hover:bg-neutral-50 text-xs font-medium text-neutral-800 hover:text-[#F4510B] transition-colors flex items-center justify-between"
                    >
                      <span>{ind.title}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-400" />
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-neutral-100 text-center">
                    <Link to="/industries" className="text-xs text-[#F4510B] font-semibold hover:underline">
                      See Industry Use-Cases & Architectures →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/clients" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/clients') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Clients
            </Link>

            <Link 
              to="/projects" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/projects') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Projects
            </Link>

            <Link 
              to="/why-choose-us" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/why-choose-us') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Why Us
            </Link>

            <Link 
              to="/brands" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/brands') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Brands
            </Link>

            <Link 
              to="/blog" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/blog') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isActive('/contact') ? 'text-[#F4510B] font-semibold' : 'hover:text-[#F4510B]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Primary Action Button Zone */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#F4510B] hover:bg-[#DC4607] rounded-lg shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
            >
              Request Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#F4510B] rounded-md"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] sm:top-[72px] z-40 bg-black/50 backdrop-blur-xs lg:hidden">
          <div className="bg-white h-full overflow-y-auto px-6 py-6 pb-28 border-t border-neutral-200">
            {/* Mobile Brand Bar */}
            <div className="pb-4 mb-2 border-b border-neutral-100 flex items-center justify-between">
              <Link to="/" className="inline-flex items-center gap-2" aria-label="Techno Path - Home">
                <img
                  src={logoLightSvg}
                  alt="TECHNO PATH"
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
              <Link 
                to="/" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/') && location.pathname === '/' ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/about') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-neutral-50 text-left"
                >
                  <span className={isActive('/services') ? 'text-[#F4510B] font-semibold' : ''}>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'services' && (
                  <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-[#F4510B]/20 ml-3">
                    <Link to="/services" className="py-1.5 text-xs text-[#F4510B] font-semibold">
                      Overview (All Services)
                    </Link>
                    {SERVICES_LIST.map((srv) => (
                      <Link 
                        key={srv.id} 
                        to={`/services/${srv.slug}`}
                        className="py-1.5 text-xs text-neutral-600 hover:text-[#F4510B]"
                      >
                        {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-neutral-50 text-left"
                >
                  <span className={isActive('/solutions') ? 'text-[#F4510B] font-semibold' : ''}>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'solutions' && (
                  <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-[#F4510B]/20 ml-3">
                    <Link to="/solutions" className="py-1.5 text-xs text-[#F4510B] font-semibold">
                      All Solutions Overview
                    </Link>
                    {SOLUTIONS_LIST.map((sol) => (
                      <Link 
                        key={sol.id} 
                        to={`/solutions/${sol.id}`}
                        className="py-1.5 text-xs text-neutral-600 hover:text-[#F4510B]"
                      >
                        {sol.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'industries' ? null : 'industries')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-neutral-50 text-left"
                >
                  <span className={isActive('/industries') ? 'text-[#F4510B] font-semibold' : ''}>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'industries' && (
                  <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-[#F4510B]/20 ml-3">
                    <Link to="/industries" className="py-1.5 text-xs text-[#F4510B] font-semibold">
                      All Industries Overview
                    </Link>
                    {INDUSTRIES_LIST.map((ind) => (
                      <Link 
                        key={ind.id} 
                        to={`/industries/${ind.id}`}
                        className="py-1.5 text-xs text-neutral-600 hover:text-[#F4510B]"
                      >
                        {ind.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/clients" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/clients') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Our Precious Clients (16+)
              </Link>

              <Link 
                to="/testimonials" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/testimonials') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Client Testimonials
              </Link>

              <Link 
                to="/why-choose-us" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/why-choose-us') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Why Choose Us
              </Link>

              <Link 
                to="/projects" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/projects') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Projects
              </Link>

              <Link 
                to="/brands" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/brands') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Brands / Partners
              </Link>

              <Link 
                to="/blog" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/blog') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Blog / News
              </Link>

              <Link 
                to="/contact" 
                className={`py-2.5 px-3 rounded-lg ${isActive('/contact') ? 'bg-[#F4510B]/10 text-[#F4510B] font-semibold' : 'hover:bg-neutral-50'}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Direct Contact Cards inside Mobile Menu */}
            <div className="mt-6 pt-6 border-t border-neutral-200 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg text-neutral-900 font-medium text-xs"
              >
                <Phone className="w-4 h-4 text-[#F4510B]" />
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Direct Call</div>
                  <div>{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg text-emerald-900 font-medium text-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="text-[10px] text-emerald-700 uppercase">Direct WhatsApp</div>
                  <div>Chat with Techno Path Engineers</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
