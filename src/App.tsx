/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ComparisonSection } from './components/ComparisonSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { ChecklistSection } from './components/ChecklistSection.tsx';
import { RepaymentSection } from './components/RepaymentSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ComplianceDisclaimer } from './components/ComplianceDisclaimer.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';
import { AssessmentModal } from './components/AssessmentModal.tsx';
import { MessageCircle, FileCheck2 } from 'lucide-react';
import { WHATSAPP_PHONE, DEFAULT_WHATSAPP_MSG } from './data/landingData.ts';

export default function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* 1. Header / Navigation */}
      <Header onOpenAssessment={() => setAssessmentModalOpen(true)} />

      {/* Main Content with bottom padding on mobile to accommodate ergonomic thumb-bar */}
      <main className="flex-grow pb-20 sm:pb-0">
        {/* 2. Hero Section (Above the Fold) */}
        <Hero onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* 3. Key Pillars / Why Work With Us (Comparison Grid) */}
        <ComparisonSection onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* 4. Solutions & Core Services */}
        <ServicesSection onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* 5. The 4-Step Advisory Process */}
        <ProcessSection onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* 6. Document Preparation Checklist */}
        <ChecklistSection />

        {/* 7. Estimated Installment & Repayment Reference Table + DSR Simulator */}
        <RepaymentSection onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* 8. Frequently Asked Questions (Native <details> and <summary> accordions) */}
        <FaqSection />

        {/* 9. Trust & Regulatory Compliance Disclaimer */}
        <ComplianceDisclaimer />

        {/* 10. Final Call-to-Action (CTA) Banner */}
        <FinalCta onOpenAssessment={() => setAssessmentModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* DESKTOP FLOATING WHATSAPP BUTTON (>= 640px) */}
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Jess Advisory"
        className="hidden sm:flex fixed bottom-6 right-6 z-30 items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>WhatsApp Us</span>
      </a>

      {/* MOBILE FIXED ERGONOMIC THUMB BAR (< 640px) */}
      {/* Follows Mobile Touch Guidelines (Pattern C: Natural Thumb Zone with < 15% sticky cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-xl flex items-center gap-2">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 active:bg-emerald-700 rounded-xl shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setAssessmentModalOpen(true)}
          className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-slate-900 active:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <FileCheck2 className="w-4 h-4 shrink-0" />
          <span>Free Pre-Check</span>
        </button>
      </div>

      {/* Free Eligibility Assessment Interactive Bottom Sheet / Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
      />
    </div>
  );
}
