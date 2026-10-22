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
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE, DEFAULT_WHATSAPP_MSG } from './data/landingData.ts';

export default function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* 1. Header / Navigation */}
      <Header onOpenAssessment={() => setAssessmentModalOpen(true)} />

      <main className="flex-grow">
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

      {/* Floating Quick WhatsApp Action for Mobile / Desktop (Quiet affordance) */}
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Jess Advisory"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Free Eligibility Assessment Interactive Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
      />
    </div>
  );
}
