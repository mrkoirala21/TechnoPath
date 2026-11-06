import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  PhoneCall, 
  Search, 
  Sparkles, 
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  serviceTitle: string;
  onOpenQuoteModal?: (service?: string) => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  faqs, 
  serviceTitle, 
  onOpenQuoteModal 
}) => {
  // Default first FAQ open
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenIndices(faqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <div className="space-y-6" id="service-faq">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4510B] mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Technical Clarifications & FAQs</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
            Key architectural, deployment, and SLA details for {serviceTitle}.
          </p>
        </div>

        {/* Global Expand / Collapse Controls */}
        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
          <button
            onClick={expandAll}
            className="px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-[#F4F5F7] hover:bg-neutral-200 rounded-lg transition-colors"
          >
            Expand All
          </button>
          <span className="text-neutral-300">|</span>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-[#F4F5F7] hover:bg-neutral-200 rounded-lg transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Quick Search inside FAQs if more than 3 FAQs */}
      {faqs.length > 3 && (
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${serviceTitle} technical questions...`}
            className="w-full pl-9 pr-8 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F4510B] bg-white shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              aria-label="Clear FAQ search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Accordion Item List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, originalIndex) => {
            const isOpen = openIndices.includes(originalIndex);

            return (
              <div
                key={originalIndex}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-white border-[#F4510B]/30 shadow-xs' 
                    : 'bg-[#F4F5F7] border-neutral-200/90 hover:border-neutral-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(originalIndex)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 focus:outline-none rounded-2xl group"
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#F4510B] text-white'
                        : 'bg-neutral-200 text-neutral-700 group-hover:bg-neutral-300'
                    }`}>
                      {originalIndex < 9 ? `0${originalIndex + 1}` : originalIndex + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1 rounded-lg transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#F4510B] bg-[#F4510B]/10' : 'text-neutral-400 group-hover:text-neutral-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 ml-11">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 bg-[#F4F5F7] rounded-xl border border-neutral-200 text-neutral-500 text-xs">
            No FAQs matching "{searchQuery}". Try a different keyword or contact our engineers.
          </div>
        )}
      </div>

      {/* Direct Engineer Escalation Box */}
      <div className="p-5 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-[#F4510B] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have a Specific Technical Scenario?</span>
          </div>
          <p className="text-xs text-neutral-300">
            Our certified infrastructure architects in Bharatpur can evaluate your network diagrams and site constraints.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          {onOpenQuoteModal && (
            <button
              onClick={() => onOpenQuoteModal(`Technical Consultation: ${serviceTitle}`)}
              className="px-3.5 py-2 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Ask an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
