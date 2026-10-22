import React from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';
import { WHATSAPP_PHONE, DEFAULT_WHATSAPP_MSG } from '../data/landingData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-base tracking-tight">
                JA
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Jess Advisory
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Independent loan structuring and financial readiness consultancy based in Kuala Lumpur, Malaysia.
              We evaluate your balance sheet, audit documentary evidence, and align your financial profile
              with Malaysian commercial bank guidelines to maximize approval success.
            </p>
            <div className="pt-1 text-slate-500 text-[11px] leading-relaxed">
              Strictly non-money lender · 100% Client Advocacy · Bank Underwriting Alignment
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Jess Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Advisory Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  4-Step Process
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-white transition-colors">
                  Document Checklist
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Repayment Matrix
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Core Advisory Areas
            </div>
            <ul className="space-y-2">
              <li className="text-slate-400">
                SME Working Capital & Term Loans
              </li>
              <li className="text-slate-400">
                Overdraft (OD) Facility Structuring
              </li>
              <li className="text-slate-400">
                SJPP Government Guarantee Schemes
              </li>
              <li className="text-slate-400">
                Mortgage Cash-Out & Debt Consolidation
              </li>
              <li className="text-slate-400">
                Personal Financing & DSR Optimization
              </li>
              <li className="text-slate-400">
                CCRIS / CTOS Pre-Submission Audit
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Consultation Desk
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Level 28, Menara Ilham, No. 8, Jalan Binjai, 50450 Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>advisory@jessadvisory.com.my</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  WhatsApp: +60 17-882 3198
                </a>
              </div>
              <div className="pt-1.5 text-[11px] text-slate-500">
                Operating Hours: Mon–Fri: 9:00 AM – 6:00 PM (MYT)<br />
                Saturday: 9:00 AM – 1:00 PM (By Appointment)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Jess Advisory. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Independent Financial Advisory</span>
            <span aria-hidden="true">·</span>
            <span>Non-Money Lender</span>
            <span aria-hidden="true">·</span>
            <span>PDPA 2010 Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
