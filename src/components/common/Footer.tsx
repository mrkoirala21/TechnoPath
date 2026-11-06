import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowUp, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  FileText,
  X
} from 'lucide-react';
import { Logo } from './Logo';
import logoDarkSvg from '../../assets/logo/logo-dark.svg';
import { COMPANY_INFO, SERVICES_LIST } from '../../data/companyData';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#202329] text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
            {/* Column 1: Company Profile - Official Dark SVG Logo */}
            <div className="space-y-4">
              <Link to="/" className="inline-block group" aria-label="Techno Path - Home">
                <img
                  src={logoDarkSvg}
                  alt="TECHNO PATH"
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                />
              </Link>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-3">
                Techno Path is a technology solutions company dedicated to helping organizations build reliable, secure, and scalable digital environments in Bharatpur, Chitwan, and throughout Nepal.
              </p>
              
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#F4510B] flex items-center justify-center text-white transition-colors"
                  aria-label="Techno Path WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#F4510B] flex items-center justify-center text-white transition-colors"
                  aria-label="Techno Path Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#F4510B] flex items-center justify-center text-white transition-colors"
                  aria-label="Techno Path Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 text-xs text-neutral-400">
                <span className="text-[#F4510B] font-semibold">24/7 Priority Emergency Support</span> available for hospital and financial infrastructure clients.
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                <span>Quick Links</span>
                <span className="w-8 h-[2px] bg-[#F4510B]"></span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                <li>
                  <Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    About Us & Story
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="hover:text-white hover:translate-x-1 inline-block transition-all text-[#F4510B]/90 font-medium">
                    Why Choose Techno Path
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="hover:text-white hover:translate-x-1 inline-block transition-all text-emerald-400 font-medium">
                    Our Valuable Clients (17+)
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Client Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Comprehensive Services
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Projects Showcase
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Brands & Technology Partners
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Technology Insights & Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                <span>Our Services</span>
                <span className="w-8 h-[2px] bg-[#F4510B]"></span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                {SERVICES_LIST.map((srv) => (
                  <li key={srv.id}>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="hover:text-[#F4510B] hover:translate-x-1 inline-block transition-all"
                    >
                      {srv.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                <span>Contact Details</span>
                <span className="w-8 h-[2px] bg-[#F4510B]"></span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.district}, Nepal
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F4510B] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneTel}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F4510B] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#F4510B] shrink-0" />
                  <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {COMPANY_INFO.domain}
                  </a>
                </li>
              </ul>

              <div className="mt-4 p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60 text-xs">
                <div className="text-white font-medium mb-1">Office Hours</div>
                <div className="text-neutral-400 leading-tight">Sun – Fri: 9:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Legal, Back to top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} TECHNO PATH. All rights reserved. Registered Technology Enterprise, Bharatpur, Chitwan, Nepal.
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setModalContent('privacy')}
                className="hover:text-neutral-300 transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setModalContent('terms')}
                className="hover:text-neutral-300 transition-colors"
              >
                Terms & Conditions
              </button>
              <span>·</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-neutral-800 hover:bg-[#F4510B] text-white transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
            >
              <X className="w-5 h-5" />
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#F4510B]" />
                  <span>Privacy Policy - TECHNO PATH</span>
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  <p>
                    Techno Path is committed to protecting your personal and institutional data. This policy explains how we handle inquiries, technical audit requests, and infrastructure configurations.
                  </p>
                  <h4 className="font-semibold text-neutral-900">1. Information We Collect</h4>
                  <p>
                    When you contact Techno Path or submit an inquiry form, we collect your name, business email, telephone number, organization name, and relevant technical project details.
                  </p>
                  <h4 className="font-semibold text-neutral-900">2. Confidentiality of Client Networks</h4>
                  <p>
                    During network design, cybersecurity penetration testing, or Hospital Information System (HMIS) integrations, any customer data, IP addresses, credentials, and topology blueprints are handled under strict non-disclosure obligations.
                  </p>
                  <h4 className="font-semibold text-neutral-900">3. Contacting Our Data Officer</h4>
                  <p>
                    For inquiries regarding data privacy, contact us directly at <span className="text-[#F4510B] font-medium">{COMPANY_INFO.email}</span> or by visiting our Bharatpur, Chitwan office.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#F4510B]" />
                  <span>Terms & Conditions - TECHNO PATH</span>
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  <p>
                    These terms govern the use of the Techno Path website (https://technopath.com.np) and technical service contracts provided by Techno Path in Nepal.
                  </p>
                  <h4 className="font-semibold text-neutral-900">1. Service Scope & Proposals</h4>
                  <p>
                    All IT infrastructure deployments, cloud architectures, and software developments are executed pursuant to formal statements of work and service level agreements (SLAs).
                  </p>
                  <h4 className="font-semibold text-neutral-900">2. Warranties & Hardware Support</h4>
                  <p>
                    Hardware components (servers, switches, routers, cabling) carry manufacturer-backed warranties (Cisco, Dell, MikroTik, Fortinet) coupled with Techno Path on-site deployment support.
                  </p>
                  <h4 className="font-semibold text-neutral-900">3. Governing Law</h4>
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes are subject to the jurisdiction of the courts of Chitwan District, Nepal.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
