import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Server, 
  Cloud, 
  Lock, 
  Camera, 
  ArrowRight, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { PARTNER_BRANDS, COMPANY_INFO } from '../data/companyData';

interface BrandsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onOpenQuoteModal }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Networking', 'Compute & Storage', 'Cloud', 'Cybersecurity', 'Surveillance & Voice'];

  const filteredBrands = filterCategory === 'All'
    ? PARTNER_BRANDS
    : PARTNER_BRANDS.filter(b => b.category === filterCategory);

  return (
    <div className="bg-white">
      <PageHeader
        title="Technology Ecosystem & Vendor Standards"
        subtitle="We design and deploy mission-critical systems integrating carrier-grade hardware and software from global technology leaders."
        badgeText="Technology Alliances & Hardware Standards"
        breadcrumbs={[{ label: 'Brands & Partners' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Transparent Editorial Disclaimer / Policy */}
          <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200 flex items-start gap-4 text-xs sm:text-sm text-neutral-700">
            <Info className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <span className="font-bold text-neutral-900">Engineering Independence & Hardware Quality:</span>
              <p className="text-neutral-600">
                Techno Path maintains strict technical neutrality and selects enterprise hardware based on reliability, thermal tolerance, warranty support in Nepal, and total cost of ownership. The brands listed below represent equipment, appliances, and cloud platforms our engineering team is certified to deploy, configure, and maintain.
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">
                Vendor Ecosystem by Architecture
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Select a domain to inspect the hardware and software brands we architect with.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    filterCategory === cat
                      ? 'bg-[#202329] text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs hover:shadow-sm hover:border-[#F4510B]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Brand Wordmark Badge */}
                    <div className="px-3.5 py-1.5 bg-[#202329] text-white rounded-lg font-mono font-bold text-sm tracking-wide">
                      {brand.logoText}
                    </div>
                    <span className="text-[11px] font-semibold text-[#F4510B] bg-[#F4510B]/10 px-2 py-0.5 rounded">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {brand.description}
                  </p>

                  <div className="p-3 bg-[#F4F5F7] rounded-xl text-xs text-neutral-700 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                      Solutions Deployed:
                    </span>
                    <div className="font-medium text-neutral-900">
                      {brand.solutionsDelivered}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteModal(`Brand Deployment: ${brand.name}`)}
                    className="text-xs font-semibold text-[#F4510B] hover:underline flex items-center gap-1"
                  >
                    <span>Procure / Configure</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[11px] text-neutral-400">Nepal Support</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hardware Procurement & Warranty Guarantee */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#202329] text-white">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4510B]">
                Warranty & Procurement Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                100% Genuine Enterprise Equipment with Official Manufacturer Warranty
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                We safeguard your capital investment by sourcing exclusively through authorized distribution channels. Every switch, router, server, and firewall delivered by Techno Path includes verified serials, manufacturer warranties, firmware updates, and local RMA handling in Nepal.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Hardware Procurement & Tender Pricing')}
                  className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Request Hardware Quotation
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Contact Procurement Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
