import React, { useState } from 'react';
import { DOCUMENT_CHECKLISTS } from '../data/landingData.ts';
import { FileText, Check, Copy, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ChecklistSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sme');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const currentCategory = DOCUMENT_CHECKLISTS.find((c) => c.id === activeTab) || DOCUMENT_CHECKLISTS[0];

  const toggleCheck = (itemName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [`${activeTab}-${itemName}`]: !prev[`${activeTab}-${itemName}`],
    }));
  };

  const handleCopyChecklist = () => {
    const listText = [
      `📑 Jess Advisory Document Checklist — ${currentCategory.name}`,
      `Target: ${currentCategory.targetPersona}`,
      '',
      ...currentCategory.items.map((i, idx) => `${idx + 1}. [${i.importance}] ${i.name} - ${i.description}`),
      '',
      '📌 Tip: Prepare clear, original PDF statements (do not take phone screenshots of computer screens).',
    ].join('\n');

    navigator.clipboard.writeText(listText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="checklist" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Practical Preparation Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Document Preparation Checklist
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Bank credit underwriters make 80% of their risk decisions based on the quality and consistency of your documentary evidence.
            Review and tick off the essential documents required for your profile.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200/90 max-w-full overflow-x-auto">
            {DOCUMENT_CHECKLISTS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Checklist Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {currentCategory.name} Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {currentCategory.description}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyChecklist}
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors whitespace-nowrap shrink-0"
              title="Copy checklist to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Checklist Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Checklist to Clipboard</span>
                </>
              )}
            </button>
          </div>

          {/* Checklist Items */}
          <div className="mt-6 space-y-3">
            {currentCategory.items.map((item, idx) => {
              const itemKey = `${activeTab}-${item.name}`;
              const isChecked = !!checkedItems[itemKey];

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(item.name)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300/80 shadow-2xs'
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-white text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-sm font-bold ${
                          isChecked ? 'text-emerald-950 line-through opacity-70' : 'text-slate-900'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          item.importance === 'Essential'
                            ? 'bg-rose-100 text-rose-700'
                            : item.importance === 'Conditional'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {item.importance}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pro-Tip Box */}
          <div className="mt-8 p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <strong className="font-semibold">Malaysian Bank Auditor Requirement:</strong> Ensure all e-statements are exported as original vector PDFs directly from your online banking portal (e.g. Maybank2u, Clicks, PB engage). Photographed physical copies or camera screenshots often result in verification queries that delay credit committee review.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
