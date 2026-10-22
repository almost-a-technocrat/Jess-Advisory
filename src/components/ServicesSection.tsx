import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/landingData.ts';
import { Briefcase, UserCheck, RefreshCw, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import meetingImage from '../assets/images/advisory_consultant_meeting_1792654864757.jpg';

interface ServicesProps {
  onOpenAssessment: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenAssessment }) => {
  const [activeTab, setActiveTab] = useState<string>('sme-business');

  const selectedService = CORE_SERVICES.find((s) => s.id === activeTab) || CORE_SERVICES[0];

  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Tailored Financial Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Advisory Services for Malaysia’s Real Economy
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            Whether you are expanding a multi-million Ringgit commercial enterprise or streamlining personal commitments,
            we align your documentation to meet the precise risk appetite of Malaysian commercial lenders.
          </p>
        </div>

        {/* Interactive Segmented Tabs - Mobile Scrollable & Touch-Friendly */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="flex sm:inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200/90 w-full sm:w-auto overflow-x-auto scrollbar-none gap-1">
            <button
              onClick={() => setActiveTab('sme-business')}
              className={`cursor-pointer flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap min-h-[44px] ${
                activeTab === 'sme-business'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>SME & Business</span>
            </button>
            <button
              onClick={() => setActiveTab('personal-financing')}
              className={`cursor-pointer flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap min-h-[44px] ${
                activeTab === 'personal-financing'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4 shrink-0" />
              <span>Personal Financing</span>
            </button>
            <button
              onClick={() => setActiveTab('refinance-restructure')}
              className={`cursor-pointer flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap min-h-[44px] ${
                activeTab === 'refinance-restructure'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <RefreshCw className="w-4 h-4 shrink-0" />
              <span>Refinancing</span>
            </button>
          </div>
        </div>

        {/* Active Service Showcase - Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                    {selectedService.subtitle}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">Typical Quantum</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">
                    {selectedService.quantum}
                  </div>
                </div>
              </div>

              <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Ideal Audience List */}
              <div className="mt-5 sm:mt-6">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Tailored For:
                </div>
                <ul className="space-y-2">
                  {selectedService.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div className="mt-5 sm:mt-6">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Our Pre-Submission Structuring:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedService.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                      {hl}
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Pitfall Alert */}
              <div className="mt-5 sm:mt-6 p-3 sm:p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong className="font-bold">Common Bank Pitfall:</strong> {selectedService.commonPitfall}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs text-slate-700">
                Indicative Tenure: <strong className="text-slate-800">{selectedService.tenure}</strong>
              </span>
              <button
                type="button"
                onClick={onOpenAssessment}
                className="cursor-pointer min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all"
              >
                <span>Assess This Facility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere Visual + Credential Box */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 h-52 sm:h-72 lg:h-full">
              <img
                src={meetingImage}
                alt="Jess Advisory consultant analyzing loan profile with client in Kuala Lumpur office"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-400">
                  Pre-Submission Audit Desk
                </div>
                <div className="text-sm sm:text-base font-bold mt-1">
                  100% Client-First Structuring
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                  We pre-vet your credit files to bank committee guidelines before an official application is launched.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm">
              <div className="text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Advisory Protocol
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">
                Direct Bank Underwriting Alignment
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                We work directly with commercial business managers across Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, Alliance, UOB, OCBC, Standard Chartered, HSBC, and government development institutions.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
