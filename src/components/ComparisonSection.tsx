import React, { useState } from 'react';
import { COMPARISON_DATA } from '../data/landingData.ts';
import { XCircle, CheckCircle2, AlertOctagon, Sparkles } from 'lucide-react';

interface ComparisonProps {
  onOpenAssessment: () => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ onOpenAssessment }) => {
  const [mobileView, setMobileView] = useState<'jess' | 'direct'>('jess');

  return (
    <section id="why-us" className="py-12 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Pillars of Financial Advocacy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Going Directly to a Bank vs. Partnering with Jess Advisory
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            Most loan applicants in Malaysia do not realize that walking straight into a bank branch
            submits them to a single officer's monthly KPI and unyielding automated credit algorithms.
            Here is how an independent advisory changes the odds.
          </p>

          {/* Mobile Comparison Switcher (Mobile Only) */}
          <div className="mt-6 flex md:hidden justify-center">
            <div className="grid grid-cols-2 p-1 bg-slate-200/90 rounded-xl w-full max-w-sm">
              <button
                type="button"
                onClick={() => setMobileView('jess')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all min-h-[44px] flex items-center justify-center gap-1.5 ${
                  mobileView === 'jess'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Jess Advisory</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileView('direct')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all min-h-[44px] flex items-center justify-center gap-1.5 ${
                  mobileView === 'direct'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Direct Bank</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card A: The Direct Bank Walk-in Reality */}
          <div
            className={`bg-white rounded-2xl border border-rose-200/90 p-5 sm:p-8 shadow-sm flex flex-col justify-between ${
              mobileView === 'direct' ? 'block' : 'hidden md:flex'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 pb-4 sm:pb-5 border-b border-rose-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Direct Bank Walk-In</h3>
                  <div className="text-[11px] sm:text-xs text-rose-600 font-semibold mt-0.5">
                    High Risk of Premature Rejection & Credit Burns
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 space-y-5 sm:space-y-6">
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className="pb-4 sm:pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      {item.dimension}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item.directBank}
                    </div>
                    <div className="mt-2 text-xs text-rose-800 bg-rose-50/70 rounded-lg p-2.5 border border-rose-100 flex items-start gap-2">
                      <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span><strong>The Hidden Downside:</strong> {item.directBankRisk}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 text-[11px] sm:text-xs text-slate-700 italic">
              Result: Multiple uncoordinated submissions burn your CCRIS footprint, locking you out of bank facilities for 6–12 months.
            </div>
          </div>

          {/* Card B: The Jess Advisory Structured Advantage */}
          <div
            className={`bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden ${
              mobileView === 'jess' ? 'block' : 'hidden md:flex'
            }`}
          >
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 pb-4 sm:pb-5 border-b border-slate-800">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Working with Jess Advisory</h3>
                  <div className="text-[11px] sm:text-xs text-emerald-400 font-semibold mt-0.5">
                    Structured Pre-Audit & Safe Underwriting Alignment
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 space-y-5 sm:space-y-6">
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className="pb-4 sm:pb-5 border-b border-slate-800/80 last:border-0 last:pb-0">
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400/90 mb-1">
                      {item.dimension}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      {item.jessAdvisory}
                    </div>
                    <div className="mt-2 text-xs text-emerald-200 bg-emerald-950/60 rounded-lg p-2.5 border border-emerald-800/50 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>The Advisory Advantage:</strong> {item.jessAdvantage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-[11px] sm:text-xs text-emerald-300">
                100% Client Advocacy · Safe Pre-Qualification
              </div>
              <button
                type="button"
                onClick={onOpenAssessment}
                className="cursor-pointer min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Protect My Credit Profile</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
