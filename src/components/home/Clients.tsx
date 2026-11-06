import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  X
} from 'lucide-react';
import { PRECIOUS_CLIENTS } from '../../data/companyData';
import { ClientItem } from '../../types';
import { getClientLogo } from '../../assets/clients';

interface ClientsProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Clients: React.FC<ClientsProps> = ({ onOpenQuoteModal }) => {
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
        return <HeartPulse className="w-3.5 h-3.5 text-rose-500" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5 text-blue-500" />;
      case 'Financial & Corporate':
        return <Briefcase className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Hospitality & Commercial':
        return <Store className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Building2 className="w-3.5 h-3.5 text-[#F4510B]" />;
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 bg-white border-t border-neutral-200 relative overflow-hidden" id="clients">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="client-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#202329" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#client-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4510B]">
              <Users className="w-4 h-4" />
              <span>Proven Institutional Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Our Precious Clients
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Leading hospitals, medical colleges, financial cooperatives, academic institutions, and enterprises across Bharatpur, Chitwan, and Nepal who trust Techno Path for reliable IT infrastructure.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 self-start md:self-auto">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients by name, city, or tech..."
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

        {/* Sector Filter Buttons */}
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

        {/* Official Client Logo Quick-Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Official Partner Logos (16 Verified Institutions)
            </span>
            <span className="text-[11px] font-semibold text-[#F4510B]">
              Chitwan · Nawalpur · Pan-Nepal
            </span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {PRECIOUS_CLIENTS.map((c) => {
              const src = getClientLogo(c.id);
              const isSelected = selectedSector === c.sector;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedSector(c.sector);
                    setSearchQuery(c.name);
                  }}
                  className={`shrink-0 flex items-center gap-2.5 p-2 bg-white rounded-xl border transition-all duration-200 hover:border-[#F4510B] hover:shadow-xs group/item ${
                    isSelected ? 'border-[#F4510B]/40 shadow-2xs' : 'border-neutral-200'
                  }`}
                  title={`View ${c.name} implementation details`}
                >
                  <div className="w-10 h-10 rounded-lg p-0.5 bg-neutral-50 flex items-center justify-center shrink-0">
                    <img
                      src={src}
                      alt={c.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left pr-1.5 hidden sm:block">
                    <div className="text-xs font-bold text-neutral-800 group-hover/item:text-[#F4510B] transition-colors leading-tight whitespace-nowrap">
                      {c.name.split(' ')[0]} {c.name.split(' ')[1] || ''}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                      {c.sector.split(' ')[0]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clients Responsive Grid */}
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredClients.map((client) => {
              const logoSrc = getClientLogo(client.id);
              const isImgFailed = failedImages[client.id];

              return (
                <div
                  key={client.id}
                  className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-[#F4510B]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Logo & Sector Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Prominent Official Client Logo Frame */}
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

                      {/* Sector Badge */}
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-white px-2 py-1 rounded-md border border-neutral-200 shrink-0">
                        {getSectorIcon(client.sector)}
                        <span>{client.sector.split(' ')[0]}</span>
                      </div>
                    </div>

                    {/* Client Name */}
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors leading-snug mb-1.5">
                      {client.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium mb-3">
                      <MapPin className="w-3 h-3 text-[#F4510B] shrink-0" />
                      <span>{client.location}</span>
                    </div>

                    {/* Deployed Solution Box */}
                    <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-xs mb-3 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Techno Path Architecture
                      </div>
                      <div className="text-neutral-800 font-medium leading-relaxed line-clamp-2">
                        {client.deployedSolution}
                      </div>
                    </div>

                    {/* Operational Impact */}
                    <p className="text-[11px] text-neutral-600 leading-relaxed italic line-clamp-2">
                      "{client.highlight}"
                    </p>
                  </div>

                  {/* Actions: Website Link & Consultation Request */}
                  <div className="pt-4 mt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                    {client.websiteUrl ? (
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-neutral-600 hover:text-[#F4510B] flex items-center gap-1 transition-colors"
                        aria-label={`Visit ${client.name} website`}
                      >
                        <span>Official Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-neutral-400">Verified Client</span>
                    )}

                    <button
                      onClick={() => onOpenQuoteModal(`Client Case Inquiry: ${client.name} (${client.deployedSolution})`)}
                      className="text-xs font-semibold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1 group/btn"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#F4F5F7] rounded-2xl border border-neutral-200">
            <Building2 className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-neutral-800">No client organizations matched your query</h4>
            <p className="text-xs text-neutral-500 mt-1">Try a different search term or select "All".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSector('All');
              }}
              className="mt-3 px-3 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Regional Trust Strip */}
        <div className="p-8 rounded-3xl bg-[#202329] text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-white tabular-nums">16+</div>
              <div className="text-xs text-neutral-400 mt-1">Key Regional Clients</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-[#F4510B] tabular-nums">99.98%</div>
              <div className="text-xs text-neutral-400 mt-1">Infrastructure Uptime</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-white tabular-nums">100%</div>
              <div className="text-xs text-neutral-400 mt-1">On-Site Bharatpur Support</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-[#F4510B] tabular-nums">24 / 7</div>
              <div className="text-xs text-neutral-400 mt-1">Emergency Hospital SLA</div>
            </div>
          </div>
        </div>

        {/* Invitation Banner & Dedicated Page Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            <span>Ready to upgrade your enterprise network, hospital HMIS, or institutional IT? </span>
            <button
              onClick={() => onOpenQuoteModal('Consultation for New Client Onboarding')}
              className="font-bold text-[#F4510B] hover:underline"
            >
              Partner with Techno Path today
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/clients"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-[#F4510B] text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Dedicated Clients Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/testimonials"
              className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs transition-colors"
            >
              Client Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
