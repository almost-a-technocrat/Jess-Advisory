import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { WHATSAPP_PHONE, DEFAULT_WHATSAPP_MSG } from '../data/landingData.ts';

interface FinalCtaProps {
  onOpenAssessment: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenAssessment }) => {
  return (
    <section id="assessment" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>Confidential Pre-Qualification · Zero Inquiries on CCRIS</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
          Ready to Secure Your Funding the Smart Way?
        </h2>

        {/* Sub-text */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop guessing bank requirements and risking your credit record. Speak to our experts today.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Chat Directly on WhatsApp</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          <button
            type="button"
            onClick={onOpenAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <span>Fill Detailed Pre-Check Form</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Safe & Confidential</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">·</span>
            <span>Zero CCRIS Pulls</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">·</span>
            <span>No Upfront Checking Fees</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">·</span>
            <span>Malaysian Banks Network</span>
          </div>
        </div>

      </div>
    </section>
  );
};
