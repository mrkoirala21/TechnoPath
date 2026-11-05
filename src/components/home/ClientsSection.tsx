import React, { useState } from 'react';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Store, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import { PRECIOUS_CLIENTS, COMPANY_INFO } from '../../data/companyData';
import { ClientItem } from '../../types';

interface ClientsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = ['All', 'Healthcare', 'Financial & Corporate', 'Education', 'Hospitality & Retail'];

  const filteredClients = selectedSector === 'All'
    ? PRECIOUS_CLIENTS
    : PRECIOUS_CLIENTS.filter(c => c.sector === selectedSector);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return <HeartPulse className="w-4 h-4 text-rose-500" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case 'Financial & Corporate':
        return <Briefcase className="w-4 h-4 text-emerald-500" />;
      case 'Hospitality & Retail':
        return <Store className="w-4 h-4 text-amber-500" />;
      default:
        return <Building2 className="w-4 h-4 text-[#F4510B]" />;
    }
  };

  return (
    <section className="py-20 bg-white border-t border-neutral-200 relative overflow-hidden">
      {/* Background subtle geometry */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="clients-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#202329" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clients-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              <Users className="w-4 h-4" />
              <span>Institutional Trust & Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Our Precious Clients
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Leading hospitals, financial cooperatives, academic colleges, and corporate enterprises across Bharatpur, Chitwan, and Nepal who rely on Techno Path for mission-critical IT infrastructure.
            </p>
          </div>

          {/* Sector Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200 self-start md:self-auto">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedSector === sec
                    ? 'bg-[#202329] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <span>{sec}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="p-6 rounded-2xl bg-[#F4F5F7] border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-[#F4510B]/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Sector */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-black font-mono text-sm tracking-wider text-[#202329] group-hover:text-[#F4510B] group-hover:border-[#F4510B]/40 transition-colors shadow-2xs">
                    {client.logoBadge}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-white px-2 py-0.5 rounded-md border border-neutral-200">
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
                  <MapPin className="w-3 h-3 text-[#F4510B]" />
                  <span>{client.location}</span>
                </div>

                {/* Deployed Solution */}
                <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs mb-3 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Deployed Architecture
                  </div>
                  <div className="text-neutral-800 font-medium leading-relaxed">
                    {client.deployedSolution}
                  </div>
                </div>

                {/* Impact Highlight */}
                <p className="text-[11px] text-neutral-600 leading-relaxed italic">
                  "{client.highlight}"
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-neutral-200/70 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(`Client Consultation regarding: ${client.deployedSolution}`)}
                  className="text-xs font-semibold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Trust Metrics Strip */}
        <div className="mt-12 p-8 rounded-2xl bg-[#202329] text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-white tabular-nums">150+</div>
              <div className="text-xs text-neutral-400 mt-1">Enterprise Deployments</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-[#F4510B] tabular-nums">99.98%</div>
              <div className="text-xs text-neutral-400 mt-1">SLA Network Uptime</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-white tabular-nums">24 / 7</div>
              <div className="text-xs text-neutral-400 mt-1">On-Site Dispatch Chitwan</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black text-[#F4510B] tabular-nums">Zero</div>
              <div className="text-xs text-neutral-400 mt-1">Data-Loss Incidents</div>
            </div>
          </div>
        </div>

        {/* Client Invitation Callout */}
        <div className="mt-8 text-center">
          <span className="text-xs text-neutral-500">
            Are you planning an infrastructure upgrade, Hospital Management System, or security overhaul?{' '}
          </span>
          <button
            onClick={() => onOpenQuoteModal('Join Precious Clients')}
            className="text-xs font-bold text-[#F4510B] hover:underline ml-1 inline-flex items-center gap-1"
          >
            <span>Join our roster of satisfied clients in Nepal →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
