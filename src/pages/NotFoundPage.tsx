import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Server, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#F4510B]/10 text-[#F4510B] flex items-center justify-center mx-auto text-4xl font-extrabold font-mono">
          404
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            The page or resource you requested does not exist or has been relocated to another route.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Server className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-neutral-100 text-xs text-neutral-400">
          Need immediate technical support? Call <a href={`tel:${COMPANY_INFO.phoneTel}`} className="text-[#F4510B] font-semibold">{COMPANY_INFO.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
};
