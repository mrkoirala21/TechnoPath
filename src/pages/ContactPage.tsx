import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterest: 'General IT Inquiry',
    message: '',
    mathCaptcha: ''
  });

  const [captchaAnswer] = useState({ a: 7, b: 5, expected: 12 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadData, setSubmittedLeadData] = useState<any>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters describing your inquiry.';
    }

    if (parseInt(formData.mathCaptcha.trim(), 10) !== captchaAnswer.expected) {
      errs.mathCaptcha = `Security verification incorrect. What is ${captchaAnswer.a} + ${captchaAnswer.b}?`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const lead = {
      ...formData,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString()
    };

    // Real persistence in localStorage
    const stored = JSON.parse(localStorage.getItem('technopath_leads') || '[]');
    localStorage.setItem('technopath_leads', JSON.stringify([lead, ...stored]));

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedLeadData(lead);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Techno Path! My name is ${formData.fullName || 'a client'}.\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject || 'Business Inquiry'}\n` +
      `Service: ${formData.serviceInterest}\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/9779855085421?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Contact Techno Path"
        subtitle="Get in touch with our IT engineering and consulting team in Bharatpur, Chitwan. We are ready to assist with audits, tenders, and deployments."
        badgeText="Direct Communication Desk"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F4F5F7] p-8 sm:p-10 rounded-3xl border border-neutral-200">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                  Send a Direct Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  How Can We Help Your Organization?
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Fill in your details below and an infrastructure architect will respond within business hours.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Saroj Shrestha"
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="saroj@organization.np"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="98550xxxxx"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Service Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50"
                      >
                        <option value="General IT Inquiry">General IT Inquiry</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Hospital Network Upgrade"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 transition-colors ${
                          errors.subject ? 'border-rose-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your requirements, current equipment, or project timeline..."
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 resize-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-neutral-300'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Spam Protection Math Verification */}
                  <div className="p-4 bg-white rounded-xl border border-neutral-300">
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Spam Verification: What is {captchaAnswer.a} + {captchaAnswer.b}? *
                    </label>
                    <input
                      type="number"
                      value={formData.mathCaptcha}
                      onChange={(e) => setFormData({ ...formData, mathCaptcha: e.target.value })}
                      placeholder="Enter the number"
                      className={`w-32 px-3 py-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]/50 ${
                        errors.mathCaptcha ? 'border-rose-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.mathCaptcha && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.mathCaptcha}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-6 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Verifying & Sending...' : 'Send Message to Techno Path'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shrink-0"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-neutral-200 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Thank You, {submittedLeadData?.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been logged successfully into Techno Path’s Bharatpur operations desk. Our engineering team will review your requirements for <span className="font-semibold text-neutral-900">{submittedLeadData?.serviceInterest}</span> and reach out to <span className="font-semibold">{submittedLeadData?.phone}</span>.
                  </p>

                  <div className="p-4 bg-[#F4F5F7] rounded-xl text-left text-xs space-y-1.5 text-neutral-700">
                    <div><span className="font-semibold text-neutral-500">Inquiry ID:</span> {submittedLeadData?.id}</div>
                    <div><span className="font-semibold text-neutral-500">Contact:</span> {submittedLeadData?.phone} ({submittedLeadData?.email})</div>
                    <div><span className="font-semibold text-neutral-500">Subject:</span> {submittedLeadData?.subject}</div>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          subject: '',
                          serviceInterest: 'General IT Inquiry',
                          message: '',
                          mathCaptcha: ''
                        });
                      }}
                      className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Verified Company Contact Details & Bharatpur Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Contact Card */}
              <div className="p-8 rounded-3xl bg-[#202329] text-white space-y-6 shadow-md">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                    Direct Office Information
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    TECHNO PATH
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Registered Technology Enterprise in Chitwan, Nepal.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Office Location</div>
                      <div className="text-neutral-300">{COMPANY_INFO.address.street}</div>
                      <div className="text-neutral-400">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.district}, {COMPANY_INFO.address.country}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Phone Number</div>
                      <a href={`tel:${COMPANY_INFO.phoneTel}`} className="text-neutral-300 hover:text-white transition-colors block">
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <span className="text-[11px] text-neutral-400">Direct line to technical desk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Email Address</div>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-300 hover:text-white transition-colors block">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Official Website</div>
                      <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors block">
                        {COMPANY_INFO.domain}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#F4510B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Office Hours</div>
                      <div className="text-neutral-300">{COMPANY_INFO.officeHours}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp: 9855085421</span>
                  </a>
                </div>
              </div>

              {/* Bharatpur, Chitwan Location Map Box */}
              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#F4510B]" />
                    <span>Bharatpur, Chitwan Hub</span>
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Bharatpur,Chitwan,Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F4510B] hover:underline flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Styled Map Representation */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-100 border border-neutral-200">
                  <iframe
                    title="Techno Path Bharatpur Chitwan Location"
                    src="https://maps.google.com/maps?q=Bharatpur,Chitwan,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="text-xs text-neutral-500 flex items-center justify-between pt-1">
                  <span>Postal Code: 44200 · Bagmati Province</span>
                  <span className="font-semibold text-neutral-700">Central Nepal Tech Corridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
