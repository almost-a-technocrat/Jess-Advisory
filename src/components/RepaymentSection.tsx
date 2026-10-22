import React, { useState } from 'react';
import { REPAYMENT_TABLE_DATA } from '../data/landingData.ts';
import { Calculator, ArrowRight, Info } from 'lucide-react';

interface RepaymentProps {
  onOpenAssessment: () => void;
}

export const RepaymentSection: React.FC<RepaymentProps> = ({ onOpenAssessment }) => {
  // Interactive Calculator State
  const [calcAmount, setCalcAmount] = useState<number>(350000);
  const [calcRate, setCalcRate] = useState<number>(4.5); // % per annum
  const [calcYears, setCalcYears] = useState<number>(15);

  // Amortization calculation
  const monthlyRate = calcRate / 100 / 12;
  const totalMonths = calcYears * 12;
  const calculatedMonthly = Math.round(
    (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  // Estimated Minimum Gross Income under standard 60% DSR guideline
  const estimatedMinIncome = Math.round(calculatedMonthly / 0.6);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Financial Planning & Estimation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Estimated Installment & Repayment Reference Table
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Plan your cash-flow requirements with clarity. The static reference table below illustrates
            estimated monthly installments across common funding tiers based on prevailing commercial benchmark rates (indicative 4.5%–6.5% p.a.).
          </p>
        </div>

        {/* Static Reference Table (Section 7 requirement) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900 text-white">
            <div>
              <h3 className="text-lg font-bold">Standard Malaysian Funding Amortization Matrix</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Indicative reference values for commercial term loans, personal facilities, and mortgage refinancing.
              </p>
            </div>
            <div className="text-xs font-medium text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-800/60">
              Indicative Benchmark Rate: ~5.0% p.a.
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th scope="col" className="px-6 py-4">Facility Quantum</th>
                  <th scope="col" className="px-6 py-4">5-Year Term (Monthly)</th>
                  <th scope="col" className="px-6 py-4">10-Year Term (Monthly)</th>
                  <th scope="col" className="px-6 py-4">15-Year Term (Monthly)</th>
                  <th scope="col" className="px-6 py-4">20-Year Term (Monthly)</th>
                  <th scope="col" className="px-6 py-4">Min. Estimated Gross Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                {REPAYMENT_TABLE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-slate-900 font-sans">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      RM {row.term5yr.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      RM {row.term10yr.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      RM {row.term15yr.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      RM {row.term20yr.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-emerald-700 font-semibold font-sans">
                      ~RM {row.minGrossIncomeEst.toLocaleString()} / mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-700 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Figures are indicative estimations for cash-flow structuring purposes only. Final loan pricing, tenure limits, and approved margins depend on individual bank credit underwriting, client credit risk rating (CCRIS/CTOS), collateral type, and current Base Rate (BR) / Standardised Base Rate (SBR).
            </span>
          </div>
        </div>

        {/* Interactive Custom DSR & Loan Simulator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Custom Loan & DSR Repayment Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust the sliders below to calculate projected monthly commitment and bank capacity requirements.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Target Facility Amount
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    RM {calcAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="25000"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-700 mt-1 tabular-nums">
                  <span>RM 50,000</span>
                  <span>RM 1,000,000</span>
                  <span>RM 2,000,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Indicative Interest / Profit Rate
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {calcRate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min="3.5"
                  max="9.0"
                  step="0.1"
                  value={calcRate}
                  onChange={(e) => setCalcRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-700 mt-1">
                  <span>3.5% (Mortgage / Refinance)</span>
                  <span>5.5% (SME Capital)</span>
                  <span>9.0% (Unsecured Personal)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Loan Tenure (Repayment Period)
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {calcYears} Years ({calcYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={calcYears}
                  onChange={(e) => setCalcYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-700 mt-1 tabular-nums">
                  <span>3 Years</span>
                  <span>15 Years</span>
                  <span>30 Years (Residential)</span>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Projected Monthly Commitment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-white">
                  RM {calculatedMonthly.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Total Repayment Over Tenure:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">
                      RM {(calculatedMonthly * totalMonths).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Estimated Total Interest:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">
                      RM {Math.max(0, calculatedMonthly * totalMonths - calcAmount).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs pt-2 border-t border-slate-800/60">
                    <span className="text-emerald-300 font-medium">Recommended Min. Gross Income (60% DSR):</span>
                    <span className="font-bold text-emerald-400 tabular-nums">
                      ~RM {estimatedMinIncome.toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={onOpenAssessment}
                  className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
                >
                  <span>Pre-Qualify for RM {calcAmount.toLocaleString()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
