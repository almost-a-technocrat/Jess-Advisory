import React, { useState } from 'react';
import { X, ShieldCheck, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/landingData.ts';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [profileType, setProfileType] = useState('SME Business Owner');
  const [fundingAmount, setFundingAmount] = useState('RM 300,000');
  const [monthlyIncome, setMonthlyIncome] = useState('RM 15,000 - RM 30,000');
  const [ccrisStatus, setCcrisStatus] = useState('Clean (All 0s on record)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = [
      '👋 Hello Jess Advisory, I would like to request a confidential Free Profile Assessment for bank readiness.',
      '',
      `👤 Name: ${clientName || 'Prospective Client'}`,
      `📱 Contact: ${clientPhone || 'Not provided'}`,
      `🏢 Profile: ${profileType}`,
      `💰 Target Funding: ${fundingAmount}`,
      `📊 Monthly Income/Turnover: ${monthlyIncome}`,
      `🛡️ Credit Health Status: ${ccrisStatus}`,
      '',
      'Please advise on my preliminary eligibility and pre-audit requirements. Thank you!',
    ].join('\n');

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close assessment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Credit Score Impact · 100% Confidential</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Request Free Profile Assessment
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Share your general numbers with our advisors. We evaluate your bankability before any official credit search is triggered.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. I Am Applying As:
                </label>
                <select
                  value={profileType}
                  onChange={(e) => setProfileType(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                >
                  <option value="SME / Sdn Bhd Company">SME / Sdn Bhd Company (Working Capital / Expansion)</option>
                  <option value="Enterprise / Sole Proprietor">Enterprise / Sole Proprietor (Business Term Loan)</option>
                  <option value="Salaried Employee">Salaried Employee (Personal Financing / Debt Restructuring)</option>
                  <option value="Property Owner">Property Owner (Mortgage Cash-Out Refinancing)</option>
                  <option value="Self-Employed / Professional">Self-Employed / Commission Earner</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Target Funding:
                  </label>
                  <select
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all tabular-nums"
                  >
                    <option value="RM 50,000 - RM 150,000">RM 50,000 - RM 150,000</option>
                    <option value="RM 150,000 - RM 300,000">RM 150,000 - RM 300,000</option>
                    <option value="RM 300,000 - RM 500,000">RM 300,000 - RM 500,000</option>
                    <option value="RM 500,000 - RM 1,000,000">RM 500,000 - RM 1,000,000</option>
                    <option value="RM 1,000,000 - RM 5,000,000+">RM 1,000,000 - RM 5,000,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    3. Monthly Income / Turnover:
                  </label>
                  <select
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all tabular-nums"
                  >
                    <option value="RM 5,000 - RM 10,000">RM 5,000 - RM 10,000</option>
                    <option value="RM 10,000 - RM 25,000">RM 10,000 - RM 25,000</option>
                    <option value="RM 25,000 - RM 50,000">RM 25,000 - RM 50,000</option>
                    <option value="RM 50,000 - RM 150,000">RM 50,000 - RM 150,000</option>
                    <option value="RM 150,000+">RM 150,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  4. Current Credit Standing (Estimate):
                </label>
                <select
                  value={ccrisStatus}
                  onChange={(e) => setCcrisStatus(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                >
                  <option value="Clean (All 0s, prompt payments on time)">Clean (All 0s, on-time repayments)</option>
                  <option value="Minor Delays (1-2 missed monthly payments)">Minor Delays (1-2 missed monthly payments in last 12 months)</option>
                  <option value="High Utilization (Maxed credit cards or overdrafts)">High Card Utilization / Stretched commitments</option>
                  <option value="Past Bank Rejection (Declined in last 6 months)">Past Bank Rejection (Declined within last 6 months)</option>
                  <option value="Not Sure / First-Time Applicant">Not Sure / First-Time Applicant</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jason Tan / Sarah Lim"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 012-345 6789"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Send & Connect via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Protected under PDPA 2010. Never shared with third parties or banks without consent.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Assessment Request Ready</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              We have formatted your profile details into WhatsApp. A senior Jess Advisory specialist will connect with you shortly.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
