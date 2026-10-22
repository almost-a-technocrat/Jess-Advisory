import React from 'react';
import { PROCESS_STEPS } from '../data/landingData.ts';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenAssessment: () => void;
}

export const ProcessSection: React.FC<ProcessProps> = ({ onOpenAssessment }) => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Methodology & Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            The 4-Step Bank Readiness Process
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Eliminating guesswork from loan applications. We prepare your documentation so commercial
            credit committees see a robust, structured profile that meets their underwriting criteria.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Step Number + Timeline Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-2xl font-black text-slate-900 tracking-tight tabular-nums">
                    {step.stepNumber}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{step.timeframe}</span>
                  </div>
                </div>

                {/* Step Titles */}
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                  {step.tagline}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="mt-5 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Key Outcomes:
                  </div>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Note */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-[11px] text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step.securityNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Want to find out where your profile stands today?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Start with Step 01 today. We evaluate your baseline numbers with zero credit score footprint.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAssessment}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <span>Begin Step 01 Pre-Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
