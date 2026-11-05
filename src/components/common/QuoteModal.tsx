import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Phone, Mail, Send } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_LIST } from '../../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: defaultService || SERVICES_LIST[0].title,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead into localStorage for persistence
    const existingLeads = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    const newLead = {
      ...formData,
      id: `lead_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('technopath_leads', JSON.stringify([newLead, ...existingLeads]));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const openWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Techno Path! My name is ${formData.fullName || 'a client'}. I am inquiring about ${formData.serviceInterest} for ${formData.organization || 'my organization'}. Message: ${formData.message || 'Please provide quotation and details.'}`
    );
    window.open(`https://wa.me/9779855085421?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white text-neutral-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <Logo variant="light" size="sm" linkToHome={false} className="mb-3" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B]">
                Direct Consultation
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mt-1">
                Request an IT Consultation
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Speak directly with Techno Path infrastructure architects in Bharatpur, Chitwan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Karki"
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98xxxxxxxx"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Organization / Business
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Hospital / School / Firm"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B] bg-white"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General IT Assessment">General IT Infrastructure Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Project Details / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current infrastructure, number of workstations, or issues..."
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 focus:border-[#F4510B] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 px-4 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting...' : 'Submit Consultation Request'}</span>
                </button>
                <button
                  type="button"
                  onClick={openWhatsAppInquiry}
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Received Successfully!</h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto mb-6">
              Thank you, <span className="font-semibold text-neutral-900">{formData.fullName}</span>. Our technical team has received your request regarding <span className="font-semibold text-neutral-900">{formData.serviceInterest}</span>. We will contact you at <span className="font-semibold">{formData.phone}</span> shortly.
            </p>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-left text-xs mb-6 space-y-1 text-neutral-700">
              <div><span className="text-neutral-500">Contact Person:</span> {formData.fullName}</div>
              <div><span className="text-neutral-500">Service:</span> {formData.serviceInterest}</div>
              <div><span className="text-neutral-500">Phone:</span> {formData.phone}</div>
              <div><span className="text-neutral-500">Email:</span> {formData.email}</div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={openWhatsAppInquiry}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
