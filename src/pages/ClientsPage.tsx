import React, { useState } from 'react';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Store, 
  MapPin, 
  ExternalLink, 
  Search, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  X,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { PRECIOUS_CLIENTS, COMPANY_INFO } from '../data/companyData';
import { ClientItem } from '../types';
import { getClientLogo } from '../assets/clients';

interface ClientsPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const sectors = ['All', 'Healthcare', 'Education', 'Financial & Corporate', 'Hospitality & Commercial'];

  const filteredClients = PRECIOUS_CLIENTS.filter((client) => {
    const matchesSector = selectedSector === 'All' || client.sector === selectedSector;
    const matchesSearch = 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.deployedSolution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return <HeartPulse className="w-4 h-4 text-rose-500" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case 'Financial & Corporate':
        return <Briefcase className="w-4 h-4 text-emerald-500" />;
      case 'Hospitality & Commercial':
        return <Store className="w-4 h-4 text-amber-500" />;
      default:
        return <Building2 className="w-4 h-4 text-[#F4510B]" />;
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Our Valuable Clients"
        subtitle="Premier technology innovators like Gunasys, healthcare institutes, educational colleges, financial cooperatives, and commercial leaders across Nepal who trust Techno Path."
        badgeText="Institutional Client Network"
        breadcrumbs={[{ label: 'Clients' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header Controls: Search & Sector Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
            {/* Sector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200">
              {sectors.map((sec) => {
                const count = sec === 'All' 
                  ? PRECIOUS_CLIENTS.length 
                  : PRECIOUS_CLIENTS.filter(c => c.sector === sec).length;
                return (
                  <button
                    key={sec}
                    onClick={() => setSelectedSector(sec)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                      selectedSector === sec
                        ? 'bg-[#202329] text-white shadow-2xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <span>{sec}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono tabular-nums ${
                      selectedSector === sec ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client name, city, or tech..."
                className="w-full pl-9 pr-8 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F4510B] bg-white shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Logo Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200 shadow-2xs">
            <div className="flex items-center justify-between mb-3 px-1 text-xs">
              <span className="font-bold uppercase tracking-wider text-neutral-500">
                Official Institutional Logos ({PRECIOUS_CLIENTS.length} Organizations)
              </span>
              <span className="text-[#F4510B] font-semibold">
                Bharatpur · Gaidakot · Pan-Nepal
              </span>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {PRECIOUS_CLIENTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedSector(c.sector);
                    setSearchQuery(c.name);
                  }}
                  className="shrink-0 flex items-center gap-2 p-2 bg-white rounded-xl border border-neutral-200 hover:border-[#F4510B] transition-all hover:shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-lg p-0.5 bg-neutral-50 flex items-center justify-center shrink-0">
                    <img
                      src={getClientLogo(c.id)}
                      alt={c.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-bold text-neutral-800 group-hover:text-[#F4510B] transition-colors pr-1 whitespace-nowrap">
                    {c.name.split(' ')[0]} {c.name.split(' ')[1] || ''}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Full Grid of Client Profile Cards */}
          {filteredClients.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClients.map((client) => {
                const logoSrc = getClientLogo(client.id);
                const isImgFailed = failedImages[client.id];

                return (
                  <div
                    key={client.id}
                    className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-xs hover:shadow-xl hover:border-[#F4510B]/50 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo & Sector Header */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#F4510B]/40 group-hover:shadow-md transition-all duration-200">
                          {!isImgFailed ? (
                            <img
                              src={logoSrc}
                              alt={`${client.name} official logo`}
                              className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                              onError={() => handleImageError(client.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="font-black font-mono text-base tracking-wider text-[#F4510B]">
                              {client.logoBadge}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-[#F4F5F7] px-3 py-1 rounded-lg border border-neutral-200 shrink-0">
                          {getSectorIcon(client.sector)}
                          <span>{client.sector}</span>
                        </div>
                      </div>

                      {/* Name & Location */}
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors leading-snug mb-1.5">
                        {client.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#F4510B] shrink-0" />
                        <span>{client.location}</span>
                      </div>

                      {/* Architecture Solution Box */}
                      <div className="p-4 bg-[#F4F5F7] rounded-2xl border border-neutral-200/90 text-xs mb-4 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B]">
                          Techno Path Architecture
                        </div>
                        <div className="text-neutral-900 font-semibold leading-relaxed">
                          {client.deployedSolution}
                        </div>
                      </div>

                      {/* Impact Highlight */}
                      <p className="text-xs text-neutral-600 leading-relaxed italic border-l-2 border-[#F4510B]/40 pl-3 mb-6">
                        "{client.highlight}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      {client.websiteUrl ? (
                        <a
                          href={client.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-neutral-700 hover:text-[#F4510B] flex items-center gap-1.5 transition-colors"
                        >
                          <span>Official Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-neutral-400 font-medium">Verified Partner</span>
                      )}

                      <button
                        onClick={() => onOpenQuoteModal(`Inquiry regarding client architecture for: ${client.name}`)}
                        className="font-bold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1 group/btn"
                      >
                        <span>Case Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F4F5F7] rounded-3xl border border-neutral-200">
              <Building2 className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-neutral-800">No client organizations matched your query</h4>
              <p className="text-xs text-neutral-500 mt-1">Try another search term or click "All".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSector('All');
                }}
                className="mt-4 px-4 py-2 bg-neutral-900 hover:bg-[#F4510B] text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Regional SLA & Client Onboarding CTA Strip */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#202329] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-2 relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                <Sparkles className="w-4 h-4" />
                <span>Become Our Next Success Story</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Partner with Bharatpur's Trusted Technology Leader
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Whether you operate a tertiary hospital, educational institution, cooperative branch network, or commercial enterprise, Techno Path delivers battle-tested infrastructure with 24/7 on-site support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
              <button
                onClick={() => onOpenQuoteModal('Consultation for New Institutional Client')}
                className="px-6 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-lg transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Request Client Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 rounded-xl text-xs font-semibold transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
