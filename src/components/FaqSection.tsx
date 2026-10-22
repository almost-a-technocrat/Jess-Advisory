import React from 'react';
import { FAQ_DATA } from '../data/landingData.ts';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Clear Answers & Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Borrowing from commercial banks in Malaysia should not feel like an opaque guessing game.
            Here is everything you need to know about our independent advisory model.
          </p>
        </div>

        {/* Native HTML5 details & summary accordions (Zero JavaScript required) */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-2xl bg-slate-50/60 open:bg-white open:shadow-sm open:border-slate-300 transition-all duration-200"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-800 transition-colors">
                <span className="pr-4 leading-snug">{faq.question}</span>
                <span className="ml-2 w-8 h-8 rounded-full bg-slate-200/60 group-open:bg-emerald-100 flex items-center justify-center shrink-0 transition-colors">
                  <ChevronDown className="w-4 h-4 text-slate-600 group-open:text-emerald-700 transition-transform duration-200" />
                </span>
              </summary>
              <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                <p>{faq.answer}</p>
                {faq.highlight && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{faq.highlight}</span>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions helper block */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific or complex case?</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Our senior financial advisors can review your situation privately on WhatsApp.
              </div>
            </div>
          </div>
          <a
            href="#assessment"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Speak to a Specialist
          </a>
        </div>

      </div>
    </section>
  );
};
