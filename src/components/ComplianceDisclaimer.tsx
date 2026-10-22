import React from 'react';
import { ShieldCheck, Scale, AlertCircle } from 'lucide-react';

export const ComplianceDisclaimer: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-slate-100 border-b border-slate-200 text-slate-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b border-slate-100">
            <Scale className="w-5 h-5 text-slate-700 shrink-0" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Regulatory Disclosure & Independent Advisory Notice
            </h3>
          </div>

          <div className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs leading-relaxed text-slate-600">
            <p>
              <strong>Independent Consultancy Status:</strong> Jess Advisory operates strictly as an independent management, loan structuring, and financial readiness consultancy in Malaysia. We are <strong>NOT</strong> a bank, licensed money lender under the Moneylenders Act 1951, credit community (Kredit Komuniti), pawnshop, or direct credit provider. We do not provide direct loans, credit advances, or hold client deposits.
            </p>
            <p>
              <strong>Direct Bank Disbursement:</strong> All financing, credit facilities, overdrafts, and mortgages referenced on this website are issued, underwritten, and disbursed solely by Bank Negara Malaysia (BNM) regulated commercial banks, Islamic banking institutions, or authorized development financial institutions. Loan approvals, interest rates, facility limits, and final covenants are subject to the sole discretion and underwriting policies of the respective lending institutions.
            </p>
            <p className="flex items-start gap-2 pt-1 text-slate-700">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Consumer Fraud Advisory:</strong> Jess Advisory will never request upfront "processing deposits", "runner fees", or "collateral guarantees" transferred to individual or third-party personal bank accounts. Official advisory contracts are executed transparently. If you receive any solicitations claiming to represent Jess Advisory that ask for cash transfers to private bank accounts, please report them immediately.
              </span>
            </p>
          </div>

          <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-slate-700">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Personal Data Protection Act 2010 (PDPA) Compliant</span>
            </div>
            <div>
              Registered Business Entity · Kuala Lumpur, Malaysia
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
