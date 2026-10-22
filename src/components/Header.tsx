import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssessment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark as per Top Bar Contract) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
            aria-label="Jess Advisory Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg sm:text-xl tracking-tight shadow-sm">
              JA
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                Jess Advisory
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold hidden md:block mt-0.5">
                Financial Readiness Consultancy
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
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

          {/* Zone 3: 1 Primary Action (Responsive) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop CTA */}
            <button
              onClick={onOpenAssessment}
              className="cursor-pointer hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Free Eligibility Assessment</span>
            </button>

            {/* Mobile Header Compact CTA */}
            <button
              onClick={onOpenAssessment}
              className="cursor-pointer sm:hidden inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Pre-Check</span>
            </button>

            {/* Mobile Hamburger Button with comfortable 44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with touch-first row sizes */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800 divide-y divide-slate-100">
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>Why Us (Comparison)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>Advisory Solutions</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>4-Step Advisory Process</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>Document Preparation Checklist</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>Repayment & DSR Reference Table</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-all"
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
