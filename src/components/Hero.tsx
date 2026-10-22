import React, { useState } from 'react';
import { ShieldCheck, Users, FileCheck, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/landingData.ts';
import heroImage from '../assets/images/hero_financial_advisory_1792654865023.jpg';

interface HeroProps {
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  const [fundingAmount, setFundingAmount] = useState('RM 300,000');
  const [profileType, setProfileType] = useState('SME Business Owner');

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Jess Advisory, I am a ${profileType} looking to explore funding of approximately ${fundingAmount}. I would like to request a confidential Free Profile Assessment for bank readiness.`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      {/* Background subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Trust Badges, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed category kicker without pill wrappers, wraps on mobile */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-3 sm:mb-4">
              <span>Independent Financial Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Kuala Lumpur & Nationwide</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">18+ Commercial Banks</span>
            </div>

            {/* Headline - Carefully scaled for mobile readability without overflow */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] text-balance">
              Structure Your Financial Profile for Bank Readiness.
            </h1>

            {/* Sub-headline */}
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Navigate bank criteria with total clarity. We evaluate your financial health,
              organize your key documents, and align your profile with appropriate banking
              guidelines before you apply.
            </p>

            {/* Trust Badges - Optimized for thumb tapping & scanning */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Zero Credit Score Impact</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Pre-assessed without hard CCRIS or CTOS inquiries.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Users className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">100% Client Advocacy</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Independent consulting — on your side, not the bank’s.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Block - Mobile-friendly stacked full width */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={onOpenAssessment}
                className="cursor-pointer w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Request a Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href="#checklist"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <FileCheck className="w-4 h-4 text-slate-500 shrink-0" />
                <span>View Document Checklist</span>
              </a>
            </div>

            {/* Proof Metric Adjacency - Tight responsive grid on small mobile */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 tabular-nums">RM180M+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Assisted Facilities</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 tabular-nums">94.2%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Pre-Audit Approval</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 tabular-nums">18+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Bank Criteria Network</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual + Interactive Quick Assessment Card */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900">
              <img
                src={heroImage}
                alt="Jess Advisory corporate office overlooking Kuala Lumpur financial skyline"
                className="w-full h-52 sm:h-64 object-cover object-center brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-300">
                  Kuala Lumpur Advisory Desk
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                  Strategic Profile Structuring for Commercial & SME Bank Guidelines
                </div>
              </div>
            </div>

            {/* Interactive Fast Assessment Form */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs sm:text-sm font-bold text-slate-900">Quick Profile Pre-Assessment</span>
                <span className="text-[11px] sm:text-xs font-medium text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No CCRIS Impact
                </span>
              </div>

              <form onSubmit={handleQuickWhatsApp} className="mt-3.5 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    I Am Applying As:
                  </label>
                  {/* Using text-base on mobile to avoid iOS Safari auto-zoom */}
                  <select
                    value={profileType}
                    onChange={(e) => setProfileType(e.target.value)}
                    className="w-full min-h-[44px] text-base sm:text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  >
                    <option value="SME Business Owner">SME / Sdn Bhd / Enterprise Owner</option>
                    <option value="Salaried Employee">Salaried Professional / Executive</option>
                    <option value="Property Owner">Property Owner Seeking Refinancing</option>
                    <option value="Self-Employed">Self-Employed / Commission Agent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Funding Requirement:
                  </label>
                  <select
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(e.target.value)}
                    className="w-full min-h-[44px] text-base sm:text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all tabular-nums"
                  >
                    <option value="RM 50,000 - RM 150,000">RM 50,000 - RM 150,000</option>
                    <option value="RM 150,000 - RM 300,000">RM 150,000 - RM 300,000</option>
                    <option value="RM 300,000 - RM 500,000">RM 300,000 - RM 500,000</option>
                    <option value="RM 500,000 - RM 1,000,000">RM 500,000 - RM 1,000,000</option>
                    <option value="RM 1,000,000 - RM 5,000,000+">RM 1,000,000 - RM 5,000,000+</option>
                  </select>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Check Pre-Eligibility via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Direct confidential chat. Never submitted to banks without your signed consent.
                  </p>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
