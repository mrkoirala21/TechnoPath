import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ClientsPage } from './pages/ClientsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { BrandsPage } from './pages/BrandsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { DeploymentGuidePage } from './pages/DeploymentGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setSelectedServiceForQuote(serviceTitle || '');
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-[#202329] bg-white selection:bg-[#F4510B]/20 selection:text-[#F4510B]">
        {/* Global Navigation Header */}
        <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services" element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/industries" element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/projects" element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/clients" element={<ClientsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/brands" element={<BrandsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/deployment-guide" element={<DeploymentGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Quote / Technical Consultation Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={selectedServiceForQuote}
        />

        {/* Floating Quick WhatsApp Action Button */}
        <aside 
          aria-label="Direct WhatsApp Contact"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
        >
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
            aria-label="Chat with Techno Path engineers on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
        </aside>
      </div>
    </BrowserRouter>
  );
}
