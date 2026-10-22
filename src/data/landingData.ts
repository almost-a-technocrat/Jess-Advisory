import {
  ComparisonItem,
  ServiceItem,
  ProcessStep,
  ChecklistCategory,
  RepaymentRow,
  FaqItem,
} from '../types.ts';

export const WHATSAPP_PHONE = '60178823198'; // Standard professional Malaysian contact format
export const DEFAULT_WHATSAPP_MSG = encodeURIComponent(
  'Hello Jess Advisory, I would like to request a confidential Free Profile Assessment to evaluate my bank readiness.'
);

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    dimension: 'Product Choice & Access',
    directBank: 'Restricted to a single bank’s internal product line and seasonal sales targets.',
    directBankRisk: 'If you do not fit their exact risk score, your application is flatly rejected.',
    jessAdvisory: 'Evaluates your profile against underwriting criteria across 18+ commercial banks and alternative financing channels in Malaysia.',
    jessAdvantage: 'Matches you with the specific bank whose current risk appetite favors your business or personal profile.',
  },
  {
    dimension: 'Whose Interest is Represented?',
    directBank: 'The bank branch and loan officer must meet monthly sales quotas set by their branch management.',
    directBankRisk: 'Officers focus on selling what is easiest for them, not what best preserves your cash flow.',
    jessAdvisory: '100% independent client advocacy. We work solely for you to secure optimal tenure, pricing, and approval probabilities.',
    jessAdvantage: 'Objective, unbiased recommendations tailored to your long-term balance sheet health.',
  },
  {
    dimension: 'Credit Score & Rejection Risk',
    directBank: 'Every direct submission triggers an immediate hard inquiry recorded on your Bank Negara CCRIS & CTOS report.',
    directBankRisk: 'Multiple bank rejections create a negative signaling trail, locking you out of the banking system for 6 to 12 months.',
    jessAdvisory: 'Safe, confidential preliminary credit health and DSR pre-assessment with ZERO hard inquiries on CCRIS/CTOS.',
    jessAdvantage: 'We identify and rectify potential red flags before any official document is formally registered with a bank.',
  },
  {
    dimension: 'Underwriting Strategy & DSR',
    directBank: 'Mechanical "take-it-or-leave-it" credit scoring. Branch officers rarely restructure your file if numbers fall outside standard thresholds.',
    directBankRisk: 'Slight discrepancies in bank statement cash-flow or director commitments trigger automated rejection.',
    jessAdvisory: 'Strategic financial engineering: we optimize your DSR calculation, reorganize debtor aging, and present cash-flow in compliant banking language.',
    jessAdvantage: 'Significantly higher approval rates by aligning your documents with credit committee expectations.',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'sme-business',
    category: 'business',
    title: 'SME & Business Capital Advisory',
    subtitle: 'Working Capital, Expansion & Machinery Facilities',
    description:
      'We help Malaysian SMEs (Enterprise & Sdn Bhd) structure their audited financials, 6-month bank cash flows, and director commitments to unlock bank working capital loans, overdraft (OD) facilities, and government-backed schemes (SJPP).',
    quantum: 'RM100,000 to RM10,000,000+',
    tenure: '3 to 10 Years (or Revolving)',
    idealFor: [
      'Manufacturing, Trading, F&B, Logistics, and Construction businesses',
      'Companies needing working capital buffers to fulfill purchase orders',
      'Businesses requiring industrial equipment or commercial fleet financing',
    ],
    keyHighlights: [
      'Bank statement cash-flow velocity and debit-to-credit balance audit',
      'Syndication with SJPP (Syarikat Jaminan Pembiayaan Perniagaan) guarantees',
      'Structuring management accounts to substantiate healthy turnover trends',
    ],
    commonPitfall:
      'Banks reject SMEs with erratic average daily balances or undisclosed director overdraft commitments even if top-line revenue is healthy.',
  },
  {
    id: 'personal-financing',
    category: 'personal',
    title: 'Personal Financial & Capacity Advisory',
    subtitle: 'Strategic Borrowing for Salaried & Self-Employed',
    description:
      'Navigating personal financing in Malaysia requires precise DSR (Debt Service Ratio) containment. We help executives, civil servants, and business directors organize net income proofs and resolve credit commitments for clean banking approvals.',
    quantum: 'RM50,000 to RM400,000',
    tenure: '2 to 10 Years',
    idealFor: [
      'Salaried professionals needing liquidity for emergency or capital allocation',
      'Commission-based agents (real estate, insurance) with variable monthly earnings',
      'Sole proprietors seeking unsecured personal funding for personal-business bridge',
    ],
    keyHighlights: [
      'EPF/KWSP contribution consistency and LHDN Form BE verification',
      'Calculation of gross-to-net income multipliers recognized by top-tier banks',
      'Guidance on resolving unresolved commitments or minor CCRIS delays prior to submission',
    ],
    commonPitfall:
      'Applying while holding unused high-limit credit cards that inflate bank-assumed monthly commitments in the DSR equation.',
  },
  {
    id: 'refinance-restructure',
    category: 'refinance',
    title: 'Restructuring & Mortgage Refinancing',
    subtitle: 'Debt Consolidation & Unlocking Property Equity',
    description:
      'Cash-out refinancing allows property owners to tap into accrued property market appreciation at residential interest rates (typically 4.0% - 4.5% p.a.), consolidating high-interest credit cards (18% p.a.) and personal loans (8% - 12% p.a.) into one manageable monthly commitment.',
    quantum: 'RM200,000 to RM5,000,000+',
    tenure: 'Up to 30 or 35 Years (subject to age limit)',
    idealFor: [
      'Homeowners with properties whose market value has appreciated significantly',
      'Individuals spending over 60% of monthly income on fragmented high-interest loans',
      'Investors seeking to release idle equity for business investment or family reserves',
    ],
    keyHighlights: [
      'Potential reduction of total monthly debt outflow by 40% to 65%',
      'Independent valuation assessment with accredited bank panel valuers',
      'Legal and stamp duty absorption advisory during loan restructuring',
    ],
    commonPitfall:
      'Waiting until commitments are already past due (CCRIS grade 1 or 2), making mortgage approval significantly more challenging.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Initial Financial Pre-Check',
    tagline: '100% Confidential Discovery & Needs Mapping',
    description:
      'We conduct an initial, private review of your declared income, business type, and target funding quantum. We listen to your timeline and business goals to determine realistic viability.',
    deliverables: [
      'Confidential preliminary eligibility assessment',
      'Target facility identification (Term Loan, Overdraft, Mortgage Refinancing, or Personal Financing)',
      'Zero credit score impact — no CCRIS or CTOS pulls performed',
    ],
    timeframe: 'Same-Day (within 2 to 4 business hours)',
    securityNote: 'Non-disclosure compliance: Your data is never shared with third-party telemarketers.',
  },
  {
    stepNumber: '02',
    title: 'DSR & Credit Health Assessment',
    tagline: 'Deep-Dive Banking Ratio Calculation',
    description:
      'Banks calculate Debt Service Ratio (DSR) using divergent formulas (e.g. Net Income vs Gross Income, fixed commitment haircuts). We calculate your exact DSR using the exact formulas of target banks.',
    deliverables: [
      'Comprehensive DSR simulation report across tier-1 and tier-2 banks',
      'CCRIS / CTOS health audit (checking for late payments, special attention accounts, or high utilization)',
      'Action plan to clear or restructure problematic commitments prior to application',
    ],
    timeframe: '1 to 2 Working Days',
    securityNote: 'Conducted without initiating hard bank inquiry footprints that compromise your record.',
  },
  {
    stepNumber: '03',
    title: 'Document Organization & Optimization',
    tagline: 'Pre-Audit and File Structuring',
    description:
      'Over 70% of loan rejections in Malaysia stem from poor document organization or conflicting figures between tax returns, bank statements, and company filings. We pre-audit your dossier to meet credit committee standards.',
    deliverables: [
      '6-Month bank statement cash-flow and average daily balance audit',
      'Verification of SSM profile, Form B/BE, and audited balance sheets',
      'Executive financial presentation pack tailored for bank underwriting managers',
    ],
    timeframe: '2 to 3 Working Days',
    securityNote: 'Eliminating discrepancies between LHDN tax declarations and reported income.',
  },
  {
    stepNumber: '04',
    title: 'Targeted Application Guidance',
    tagline: 'Strategic Submission to Optimal Bank Channels',
    description:
      'Instead of spraying your application across 10 random branches, we pinpoint the exact 1–2 commercial banks or specialized financing institutions whose current underwriting guidelines best match your specific profile.',
    deliverables: [
      'Direct routing to experienced bank business bankers and mortgage underwriters',
      'End-to-end liaison during credit query and valuation stages',
      'Letter of Offer (LO) review to ensure transparent interest margins and repayment terms',
    ],
    timeframe: '7 to 21 Working Days (depending on facility type)',
    securityNote: 'You sign the official Letter of Offer directly with the licensed bank.',
  },
];

export const DOCUMENT_CHECKLISTS: ChecklistCategory[] = [
  {
    id: 'sme',
    name: 'SME & Business Owners',
    targetPersona: 'Enterprise, Sole Proprietor, Partnership, or Sdn Bhd',
    description:
      'Standard document set required by Malaysian commercial banks to assess business turnover, cash flow viability, and repayment capacity.',
    items: [
      {
        name: 'SSM Business Registration / Profile',
        description: 'Full SSM search report, Certificate of Incorporation (Form 9, 24, 44, 49 or Section 14, 15, 17, 58).',
        importance: 'Essential',
      },
      {
        name: 'Latest 6 Months Company Bank Statements',
        description: 'Complete monthly statements in PDF with clear transaction trails and average end-of-month balances.',
        importance: 'Essential',
      },
      {
        name: 'Latest 2 Years Audited Accounts / Management Accounts',
        description: 'Profit & Loss (P&L) statement and Balance Sheet signed by directors or accredited chartered accountants.',
        importance: 'Essential',
      },
      {
        name: 'Latest LHDN Tax Submission (Form B / Form C)',
        description: 'Official e-Filing submission acknowledgment and tax payment receipts.',
        importance: 'Essential',
      },
      {
        name: 'Directors / Key Shareholders NRIC Copies',
        description: 'Clear front and back copies of all directors holding 20% or more equity.',
        importance: 'Essential',
      },
      {
        name: 'List of Existing Business Credit Facilities',
        description: 'Sanction letters or latest statements for current Hire Purchase, Overdraft, or Term Loans.',
        importance: 'Supporting',
      },
      {
        name: 'Key Invoices / Purchase Orders or Major Contracts',
        description: 'Demonstrating upcoming cash flows and revenue stability to support higher working capital limit.',
        importance: 'Supporting',
      },
    ],
  },
  {
    id: 'salaried',
    name: 'Salaried Employees & Executives',
    targetPersona: 'Employed individuals in private or public sector in Malaysia',
    description:
      'Required documentation to prove sustained employment, statutory EPF contributions, and verified net take-home salary.',
    items: [
      {
        name: 'NRIC (MyKad) Copy',
        description: 'High-resolution color copy of front and back with clear photo and chip area.',
        importance: 'Essential',
      },
      {
        name: 'Latest 3 to 6 Months Payslips',
        description: 'Official monthly payslips showing basic salary, allowances, EPF/SOCSO/PCB deductions.',
        importance: 'Essential',
      },
      {
        name: 'Latest 3 to 6 Months Salary Bank Statements',
        description: 'Bank statements showing the exact net salary credits matching your payslip amounts.',
        importance: 'Essential',
      },
      {
        name: 'Latest EPF (KWSP) Statement',
        description: 'Detailed 2-year contribution statement downloaded directly from i-Akaun portal.',
        importance: 'Essential',
      },
      {
        name: 'Latest LHDN Form BE & Tax Receipt',
        description: 'Annual tax assessment e-Filing proof to substantiate supplemental or bonus income.',
        importance: 'Conditional',
      },
      {
        name: 'Latest EA Form',
        description: 'Provided by your employer detailing total remuneration and statutory deductions for the prior tax year.',
        importance: 'Conditional',
      },
    ],
  },
  {
    id: 'property',
    name: 'Property Refinancing & Investors',
    targetPersona: 'Residential or commercial property owners seeking cash-out or debt consolidation',
    description:
      'Documents needed by bank panel valuers and mortgage underwriters to evaluate collateral equity and existing title status.',
    items: [
      {
        name: 'Individual / Strata Title Copy or Master Title Details',
        description: 'Showing registered proprietor name, property parcel number, and encumbrance endorsements.',
        importance: 'Essential',
      },
      {
        name: 'Sales and Purchase Agreement (SPA)',
        description: 'Original stamped SPA showing purchase price, developer details, and completion date.',
        importance: 'Essential',
      },
      {
        name: 'Latest 3 Months Existing Housing Loan Statement',
        description: 'Showing current outstanding principal balance, current interest rate, and repayment track record.',
        importance: 'Essential',
      },
      {
        name: 'Latest Quit Rent (Cukai Tanah) & Assessment (Cukai Pintu)',
        description: 'Paid receipts verifying no local authority tax arrears on the subject collateral.',
        importance: 'Essential',
      },
      {
        name: 'Tenancy Agreement & Rental Bank Statements (If rented out)',
        description: 'Legally stamped tenancy agreements with proof of 6-month rental receipts into your bank account.',
        importance: 'Supporting',
      },
    ],
  },
];

export const REPAYMENT_TABLE_DATA: RepaymentRow[] = [
  {
    amount: 50000,
    label: 'RM 50,000',
    term5yr: 978,
    term10yr: 541,
    term15yr: 400,
    term20yr: 334,
    minGrossIncomeEst: 2500,
  },
  {
    amount: 100000,
    label: 'RM 100,000',
    term5yr: 1957,
    term10yr: 1082,
    term15yr: 801,
    term20yr: 668,
    term30yr: 507,
    minGrossIncomeEst: 3500,
  },
  {
    amount: 250000,
    label: 'RM 250,000',
    term5yr: 4892,
    term10yr: 2706,
    term15yr: 2002,
    term20yr: 1671,
    term30yr: 1267,
    minGrossIncomeEst: 5000,
  },
  {
    amount: 500000,
    label: 'RM 500,000',
    term5yr: 9783,
    term10yr: 5411,
    term15yr: 4003,
    term20yr: 3342,
    term30yr: 2534,
    minGrossIncomeEst: 8000,
  },
  {
    amount: 750000,
    label: 'RM 750,000',
    term5yr: 14675,
    term10yr: 8117,
    term15yr: 6005,
    term20yr: 5013,
    term30yr: 3801,
    minGrossIncomeEst: 11000,
  },
  {
    amount: 1000000,
    label: 'RM 1,000,000',
    term5yr: 19566,
    term10yr: 10823,
    term15yr: 8006,
    term20yr: 6684,
    term30yr: 5068,
    minGrossIncomeEst: 15000,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Does consulting with Jess Advisory impact my CCRIS or CTOS credit score?',
    answer:
      'No. Absolutely not. When you speak with Jess Advisory or share your profile for pre-assessment, we perform an independent financial assessment without submitting credit inquiries to Bank Negara Malaysia (BNM) or commercial credit reporting agencies. Hard inquiries only occur when a commercial bank formally processes a loan submission. By pre-auditing your profile first, we ensure you only apply when your file is in prime condition, avoiding damaging rejection inquiries.',
    highlight: 'Zero CCRIS/CTOS impact during pre-assessment.',
  },
  {
    question: 'Is Jess Advisory a bank, licensed moneylender (KPKT), or money lender?',
    answer:
      'Jess Advisory is strictly an independent corporate and individual financial consultancy and advisory firm. We are NOT a direct bank, licensed moneylender under the Moneylenders Act 1951, cooperative, or unlicensed credit operator ("Ah Long"). We do not disburse private loans or take customer deposits. All financing facilities are originated, underwritten, and disbursed directly by Bank Negara Malaysia regulated commercial banks and licensed financial institutions into your verified corporate or personal bank account.',
    highlight: 'We are independent advisors, not lenders.',
  },
  {
    question: 'Why shouldn’t I just walk into 4 or 5 banks myself to apply simultaneously?',
    answer:
      'This is one of the most common and costly mistakes borrowers make in Malaysia. Every time a bank pulls your CCRIS report, an inquiry footprint is logged. When multiple banks see 4 or 5 simultaneous inquiries within a 30-day window, credit scoring algorithms automatically flag you as "credit hungry" or high-risk. Furthermore, if one bank rejects your submission, subsequent banks see the rejection and decline by default. Jess Advisory prevents this by matching your profile with the single best bank whose underwriting appetite fits your numbers before any formal submission.',
    highlight: 'Avoid "credit-hungry" flags that trigger multiple bank rejections.',
  },
  {
    question: 'What is DSR (Debt Service Ratio) and why do banks reject high-income earners?',
    answer:
      'DSR is the primary metric Malaysian banks use to measure your ability to service debt. It is calculated as: Total Monthly Debt Commitments divided by Recognized Net Income multiplied by 100%. While a client might earn RM20,000 a month, if they hold multiple car loans, unused high-limit credit cards, and director guarantees, their DSR might exceed 75%—which exceeds the policy cap of most commercial banks (typically 60%–70%). Jess Advisory calculates your exact DSR using each bank’s proprietary formula and guides you on structuring commitments to bring your ratio within approved thresholds.',
    highlight: 'DSR optimization turns rejections into solid approvals.',
  },
  {
    question: 'Do you charge upfront consultation or checking fees?',
    answer:
      'No. We believe in complete transparency. We do not charge upfront fees to review your situation or run a preliminary eligibility assessment. If you proceed with our full file-structuring and advisory services, our advisory terms are clearly stated in writing beforehand, with success-oriented milestone arrangements. Beware of scammers who ask for upfront "processing deposits", "stamping fees", or "runner fees" into personal accounts before reviewing any documents.',
    highlight: 'Zero upfront checking fees. Transparent advisory agreements.',
  },
  {
    question: 'Can you help if my company has had a previous rejection or weak bank balance?',
    answer:
      'Yes. Past rejections do not permanently close doors if the root cause is resolved. We analyze past rejection reasons (e.g., negative average daily balance, uneven turnover, insufficient tax declared, or director commitment drag). We then advise on a remedial timeline (typically 30 to 90 days) to rebuild the profile, strengthen bank statement velocity, or shift to government-guaranteed financing channels (such as SJPP) that provide partial credit risk underwriting.',
    highlight: 'Turnaround strategies for past rejections and rebuilding cash-flow history.',
  },
  {
    question: 'How long does the entire assessment and approval process usually take?',
    answer:
      'Our preliminary financial assessment is completed within 2 to 4 hours of receiving your basic numbers. Full document pre-auditing and profile structuring takes 1 to 3 business days. Once submitted to the selected commercial bank, standard bank approval times range from 5 to 10 working days for personal financing or mortgage refinancing, and 14 to 21 working days for commercial SME working capital facilities.',
    highlight: 'Fast 2-to-4 hour pre-assessment; structured bank turnaround.',
  },
];
