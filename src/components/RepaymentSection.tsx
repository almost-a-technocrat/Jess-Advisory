import React, { useState } from 'react';
import { REPAYMENT_TABLE_DATA } from '../data/landingData.ts';
import { Calculator, ArrowRight, Info, Eye, Table } from 'lucide-react';

interface RepaymentProps {
  onOpenAssessment: () => void;
}

export const RepaymentSection: React.FC<RepaymentProps> = ({ onOpenAssessment }) => {
  // Mobile table display mode: 'cards' or 'table'
  const [mobileViewMode, setMobileViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedMobileRowIdx, setSelectedMobileRowIdx] = useState<number>(1); // Default to RM 100k

  // Interactive Calculator State
  const [calcAmount, setCalcAmount] = useState<number>(350000);
  const [calcRate, setCalcRate] = useState<number>(4.5); // % per annum
  const [calcYears, setCalcYears] = useState<number>(15);

  // Quick preset helper
  const setAmountPreset = (amt: number) => {
    setCalcAmount(amt);
  };

  // Amortization calculation
  const monthlyRate = calcRate / 100 / 12;
  const totalMonths = calcYears * 12;
  const calculatedMonthly = Math.round(
    (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  // Estimated Minimum Gross Income under standard 60% DSR guideline
  const estimatedMinIncome = Math.round(calculatedMonthly / 0.6);

  const selectedMobileRow = REPAYMENT_TABLE_DATA[selectedMobileRowIdx];

  return (
    <section id="calculator" className="py-12 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Financial Planning & Estimation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Estimated Installment & Repayment Reference Table
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            Plan your cash-flow requirements with clarity. The static reference table below illustrates
            estimated monthly installments across common funding tiers based on prevailing commercial benchmark rates (indicative 4.5%–6.5% p.a.).
          </p>
        </div>

        {/* Static Reference Table (Section 7 requirement) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8 sm:mb-12">
          <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900 text-white">
            <div>
              <h3 className="text-sm sm:text-lg font-bold">Standard Malaysian Funding Amortization Matrix</h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                Indicative reference values for commercial term loans, personal facilities, and mortgage refinancing.
              </p>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                Rate: ~5.0% p.a.
              </span>
              
              {/* Mobile View Switcher (Cards vs Table) */}
              <div className="flex md:hidden bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                <button
                  type="button"
                  onClick={() => setMobileViewMode('cards')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                    mobileViewMode === 'cards' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400'
                  }`}
                  aria-label="Card View"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileViewMode('table')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                    mobileViewMode === 'table' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400'
                  }`}
                  aria-label="Table View"
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Card-Based Inspector (Solves horizontal scroll issues on 375px screens) */}
          <div className={`p-4 md:hidden ${mobileViewMode === 'cards' ? 'block' : 'hidden'}`}>
            <div className="text-xs font-semibold text-slate-600 mb-2">
              Select Funding Amount to Inspect:
            </div>
            
            {/* Amount Selector Pills */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {REPAYMENT_TABLE_DATA.map((row, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedMobileRowIdx(idx)}
                  className={`cursor-pointer px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap min-h-[40px] transition-all ${
                    selectedMobileRowIdx === idx
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {row.label}
                </button>
              ))}
            </div>

            {/* Selected Card Breakdown */}
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Facility Quantum</div>
                  <div className="text-lg font-black text-slate-900">{selectedMobileRow.label}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Min. Gross Income (60% DSR)</div>
                  <div className="text-sm font-bold text-emerald-700">~RM {selectedMobileRow.minGrossIncomeEst.toLocaleString()} / mo</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium">5-Year Term</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">RM {selectedMobileRow.term5yr.toLocaleString()}<span className="text-[10px] font-normal text-slate-500">/mo</span></div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium">10-Year Term</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">RM {selectedMobileRow.term10yr.toLocaleString()}<span className="text-[10px] font-normal text-slate-500">/mo</span></div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium">15-Year Term</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">RM {selectedMobileRow.term15yr.toLocaleString()}<span className="text-[10px] font-normal text-slate-500">/mo</span></div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium">20-Year Term</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">RM {selectedMobileRow.term20yr.toLocaleString()}<span className="text-[10px] font-normal text-slate-500">/mo</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Table View (Always visible on desktop, toggleable on mobile) */}
          <div className={`${mobileViewMode === 'table' ? 'block' : 'hidden md:block'} overflow-x-auto relative`}>
            {/* Mobile swipe helper indicator */}
            <div className="md:hidden px-4 py-2 bg-slate-100 text-[11px] text-slate-600 font-medium flex items-center justify-between border-b border-slate-200">
              <span>← Swipe horizontally to see full tenures →</span>
              <span className="font-bold text-emerald-800">Indicative RM</span>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[10px] sm:text-[11px] font-bold">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Facility Quantum</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">5-Year Term</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">10-Year Term</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">15-Year Term</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">20-Year Term</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Min. Gross Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                {REPAYMENT_TABLE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-3.5 font-bold text-slate-900 font-sans whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium whitespace-nowrap">
                      RM {row.term5yr.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium whitespace-nowrap">
                      RM {row.term10yr.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium whitespace-nowrap">
                      RM {row.term15yr.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium whitespace-nowrap">
                      RM {row.term20yr.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-emerald-700 font-semibold font-sans whitespace-nowrap">
                      ~RM {row.minGrossIncomeEst.toLocaleString()} / mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 text-[10px] sm:text-[11px] text-slate-700 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Figures are indicative estimations for cash-flow structuring purposes only. Final loan pricing, tenure limits, and approved margins depend on individual bank credit underwriting, client credit risk rating (CCRIS/CTOS), collateral type, and current Base Rate (BR) / Standardised Base Rate (SBR).
            </span>
          </div>
        </div>

        {/* Interactive Custom DSR & Loan Simulator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-5 sm:pb-6 border-b border-slate-100">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Custom Loan & DSR Repayment Calculator
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Adjust the sliders or quick presets below to calculate projected monthly commitment.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Target Facility Amount
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">
                    RM {calcAmount.toLocaleString()}
                  </span>
                </div>

                {/* Mobile Quick Presets */}
                <div className="flex gap-1.5 mb-2 overflow-x-auto scrollbar-none">
                  {[100000, 250000, 500000, 750000, 1000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmountPreset(preset)}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border transition-all ${
                        calcAmount === preset
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      RM {(preset / 1000)}k
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="25000"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 touch-pan-x"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-600 mt-1 tabular-nums">
                  <span>RM 50k</span>
                  <span>RM 1M</span>
                  <span>RM 2M</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Indicative Interest / Profit Rate
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">
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
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 touch-pan-x"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-600 mt-1">
                  <span>3.5% (Refinance)</span>
                  <span>5.5% (SME)</span>
                  <span>9.0% (Personal)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Loan Tenure (Repayment Period)
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">
                    {calcYears} Years ({calcYears * 12} Mos)
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={calcYears}
                  onChange={(e) => setCalcYears(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 touch-pan-x"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-600 mt-1 tabular-nums">
                  <span>3 Yrs</span>
                  <span>15 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Projected Monthly Commitment
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-white">
                  RM {calculatedMonthly.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800 space-y-2.5 sm:space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Total Repayment:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">
                      RM {(calculatedMonthly * totalMonths).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Total Interest:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">
                      RM {Math.max(0, calculatedMonthly * totalMonths - calcAmount).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs pt-2 border-t border-slate-800/60">
                    <span className="text-emerald-300 font-medium">Min. Gross Income (60% DSR):</span>
                    <span className="font-bold text-emerald-400 tabular-nums">
                      ~RM {estimatedMinIncome.toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={onOpenAssessment}
                  className="w-full min-h-[48px] cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-200 rounded-xl transition-colors shadow-sm"
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
