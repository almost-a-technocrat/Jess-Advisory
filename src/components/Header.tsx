import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssessment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark as per Top Bar Contract) */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label="Jess Advisory Home"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xl tracking-tight shadow-sm">
              JA
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Jess Advisory
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-700 font-medium hidden sm:block">
                Financial Readiness Consultancy
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links with hover transitions) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a
              href="#why-us"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Why Us
            </a>
            <a
              href="#services"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              4-Step Process
            </a>
            <a
              href="#checklist"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Document Checklist
            </a>
            <a
              href="#calculator"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Installment Table
            </a>
            <a
              href="#faq"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAssessment}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Free Eligibility Assessment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-700">
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Why Us (Comparison)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Advisory Solutions
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              4-Step Advisory Process
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Document Preparation Checklist
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Repayment & DSR Reference Table
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Free Profile Assessment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
