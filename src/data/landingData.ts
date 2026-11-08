import {
  ComparisonItem,
  ServiceItem,
  ProcessStep,
  ChecklistCategory,
  RepaymentRow,
  FaqItem,
  ReviewItem,
} from '../types.ts';

export const WHATSAPP_PHONE = '60178823198'; // Standard professional Malaysian contact format
export const DEFAULT_WHATSAPP_MSG = encodeURIComponent(
  'Hello Jess Advisory, I would like to request a confidential Free Profile Assessment to evaluate my bank readiness.'
);

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    dimension: 'Product Scope & Parameters',
    directBank: 'Evaluations are limited to that specific institution’s internal product suite and risk guidelines.',
    directBankRisk: 'If your profile does not meet that institution’s specific parameters, the application may be declined without alternate routing.',
    jessAdvisory: 'Evaluates your financial profile against commercial underwriting criteria across multiple licensed financial institutions in Malaysia.',
    jessAdvantage: 'Identifies institutions whose current underwriting appetite best accommodates your profile structure.',
  },
  {
    dimension: 'Advisory Focus & Representation',
    directBank: 'Branch representatives advise strictly within the framework and offerings of their own institution.',
    directBankRisk: 'Recommendations are focused on internal product availability rather than cross-market financial optimization.',
    jessAdvisory: 'Independent client-centered advisory focused on your balance sheet health, cash flow stability, and financing viability.',
    jessAdvantage: 'Objective, transparent guidance tailored to your long-term operational and capital requirements.',
  },
  {
    dimension: 'Credit File Inquiry Management',
    directBank: 'Direct formal submissions immediately initiate an official credit inquiry on your credit reference file.',
    directBankRisk: 'Multiple uncoordinated formal submissions within a short period may result in repetitive inquiry records affecting credit scoring.',
    jessAdvisory: 'Confidential preliminary profile review conducted without initiating formal credit reference searches.',
    jessAdvantage: 'Identifies and addresses potential documentation gaps before formal bank submission.',
  },
  {
    dimension: 'File Structuring & DSR Presentation',
    directBank: 'Standard branch applications evaluate submissions against rigid baseline scoring models.',
    directBankRisk: 'Minor documentation gaps or unoptimized debt ratios can lead to unnecessary delays or unfavorable terms.',
    jessAdvisory: 'Comprehensive pre-submission review: optimizing DSR presentation, clarifying cash flow velocity, and organizing audited statements.',
    jessAdvantage: 'Strengthens credit presentation to meet underwriting standards before formal application.',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'sme-business',
    category: 'business',
    title: 'SME & Business Capital Advisory',
    subtitle: 'Working Capital, Expansion & Machinery Facilities',
    description:
      'We help Malaysian SMEs (Enterprise & Sdn Bhd) structure their audited financials, 6-month bank cash flows, and director commitments to unlock bank working capital loans, overdraft (OD) facilities, and government-supported credit guarantee schemes through participating financial institutions.',
    quantum: 'RM100,000 to RM10,000,000+',
    tenure: '3 to 10 Years (or Revolving)',
    idealFor: [
      'Manufacturing, Trading, F&B, Logistics, and Construction businesses',
      'Companies needing working capital buffers to fulfill purchase orders',
      'Businesses requiring industrial equipment or commercial fleet financing',
    ],
    keyHighlights: [
      'Bank statement cash-flow velocity and debit-to-credit balance audit',
      'Facilitating applications for government-supported credit guarantee schemes',
      'Structuring management accounts to substantiate healthy turnover trends',
    ],
    commonPitfall:
      'Erratic average daily balances or unmanaged director commitments can impede bank approvals even when top-line revenue is positive.',
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
      'Calculation of gross-to-net income multipliers recognized by financial institutions',
      'Guidance on structuring commitments and addressing credit history timing prior to formal submission',
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
      'Waiting until commitments are in delinquent status, which significantly restricts institutional refinancing options.',
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
      'Zero credit score impact — no formal credit reporting inquiries initiated',
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
      'Credit profile review (evaluating payment track records, facility utilization, and risk indicators)',
      'Action plan to clear or restructure problematic commitments prior to application',
    ],
    timeframe: '1 to 2 Working Days',
    securityNote: 'Conducted without initiating formal bank credit search records.',
  },
  {
    stepNumber: '03',
    title: 'Document Organization & Optimization',
    tagline: 'Pre-Audit and File Structuring',
    description:
      'Incomplete documentation and unresolved discrepancies between tax filings, bank statements, and company records remain leading causes of bank application delays and rejections. We pre-audit your dossier to meet credit committee standards.',
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
      'Rather than submitting uncoordinated applications to multiple lenders, we identify the specific financial institutions whose underwriting guidelines best align with your profile.',
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
    question: 'Does consulting with Jess Advisory impact my credit score or credit file?',
    answer:
      'No. When you consult with Jess Advisory for a preliminary assessment, we review your financial documents and declared figures independently without initiating formal searches with credit reporting agencies. Formal credit search records are only created when an applicant formally submits an application through a financial institution. By pre-auditing your profile first, we help identify and resolve documentation gaps before you proceed with a formal bank submission.',
    highlight: 'Zero credit score impact during preliminary assessment.',
  },
  {
    question: 'Is Jess Advisory a bank, licensed moneylender, or direct credit provider?',
    answer:
      'Jess Advisory is strictly an independent financial consultancy and advisory firm. We are NOT a direct bank, licensed moneylender under the Moneylenders Act 1951, credit cooperative, or unlicensed credit operator. We do not provide credit directly, disburse loans, or take customer deposits. All credit facilities are evaluated, underwritten, and disbursed directly by licensed commercial banks and financial institutions in Malaysia into your verified corporate or personal bank account.',
    highlight: 'We are independent advisors, not lenders.',
  },
  {
    question: 'Why shouldn’t I submit multiple simultaneous applications to different banks myself?',
    answer:
      'Submitting multiple simultaneous applications to different institutions can generate multiple credit search records within a short timeframe. Automated credit scoring models may interpret numerous sudden inquiry footprints as elevated credit risk. Jess Advisory helps you avoid unnecessary multi-submission footprints by pre-aligning your documentation with institutions whose current risk appetite and underwriting parameters best match your profile.',
    highlight: 'Avoid repetitive credit search records across multiple lenders.',
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
      'Yes. Past rejections do not permanently close doors once root issues are addressed. We analyze prior factors (e.g., negative average daily balance, uneven turnover, insufficient tax declared, or director commitment drag). We then advise on a remedial timeline (typically 30 to 90 days) to reinforce documentation, enhance cash-flow stability, or explore institutional credit guarantee schemes with participating lenders.',
    highlight: 'Remedial strategies for past rejections and rebuilding cash-flow history.',
  },
  {
    question: 'How long does the entire assessment and approval process usually take?',
    answer:
      'Our preliminary financial assessment is completed within 2 to 4 hours of receiving your basic numbers. Full document pre-auditing and profile structuring takes 1 to 3 business days. Once submitted to the selected commercial bank, standard bank approval times range from 5 to 10 working days for personal financing or mortgage refinancing, and 14 to 21 working days for commercial SME working capital facilities.',
    highlight: 'Fast 2-to-4 hour pre-assessment; structured bank turnaround.',
  },
];

export const FACEBOOK_REVIEWS_URL = 'https://www.facebook.com/ycefinadvise/reviews';

export const FACEBOOK_REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Kelvin Tan',
    role: 'Managing Director, Precision Engineering SME',
    location: 'Penang',
    category: 'sme',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: 'RM650,000 SME Term Loan Approved',
    highlightQuote: 'Walked into 2 banks earlier and got delayed for months. Jess Advisory restructured our 6-month statements and secured approval in 3 weeks.',
    reviewText:
      'Highly recommend their professional team! We previously applied directly to two commercial banks and got stuck due to messy debtor statements and director commitment queries. The advisory team took the time to audit our cash flow velocity, presented our upcoming purchase orders properly to bank credit officers, and secured a RM650k working capital facility at competitive commercial rates. Transparent and efficient throughout.',
    verifiedOnFacebook: true,
  },
  {
    id: 'rev-2',
    author: 'Michelle Lim',
    role: 'Senior Marketing Manager',
    location: 'Kuala Lumpur',
    category: 'refinance',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: 'Monthly Commitment Reduced by RM2,350/mo',
    highlightQuote: 'Consolidated 4 credit cards and personal loans into our housing loan. Cash flow is completely stress-free now.',
    reviewText:
      'I was struggling with high-interest card commitments (almost RM4,200/month) after medical emergencies. Other agents pushed high-interest moneylender options, but Jess Advisory recommended a proper mortgage cash-out refinancing package at 4.15% p.a. My monthly repayment dropped to under RM1,900. Zero hidden charges and no upfront fees asked before approval.',
    verifiedOnFacebook: true,
  },
  {
    id: 'rev-3',
    author: 'En. Hafiz & Puan Nurul',
    role: 'F&B Chain Founders',
    location: 'Shah Alam, Selangor',
    category: 'sme',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: 'Zero Upfront Fees · RM280,000 Facility Approved',
    highlightQuote: 'There are so many scam loan brokers on Facebook asking for upfront runner fees. Jess Advisory never asked for a single cent upfront.',
    reviewText:
      'What impressed us most was their integrity. In Malaysia today, there are too many dubious "agents" asking for upfront processing or stamping fees into personal bank accounts. Jess Advisory clearly stated all terms in an official agreement and took zero upfront fees. They helped clean up our company management accounts and secured bank financing smoothly.',
    verifiedOnFacebook: true,
  },
  {
    id: 'rev-4',
    author: 'Raymond Chew',
    role: 'Property Investor & Consultant',
    location: 'Johor Bahru',
    category: 'refinance',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: '85% Loan Margin Secured via DSR Optimization',
    highlightQuote: 'Bank branch officers simply reject without explanation. Jess Advisory broke down the exact DSR formula and fixed my application.',
    reviewText:
      'Bank officers at retail branches rarely help you structure your file if you fall just 2% outside their DSR threshold. Jess Advisory showed me how different commercial banks calculate rental income haircuts and net commitments. By restructuring two unused credit cards, my DSR became healthy and the bank approved my facility at an 85% margin.',
    verifiedOnFacebook: true,
  },
  {
    id: 'rev-5',
    author: 'Gary Wong',
    role: 'Sole Proprietor, Hardware Supplies',
    location: 'Bukit Mertajam, Penang',
    category: 'debt',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: 'RM300,000 Revolving Buffer Secured',
    highlightQuote: 'Saved my supply business from high-interest private borrowing during year-end inventory restock.',
    reviewText:
      'When year-end shipment orders surged, our bank overdraft limit was maxed out. Instead of resorting to expensive private lenders, the advisory team helped us prepare trade documents and secured an additional RM300k bank revolving facility with credit guarantee scheme backing. Fast, professional, and patient service.',
    verifiedOnFacebook: true,
  },
  {
    id: 'rev-6',
    author: 'Siti Aishah',
    role: 'Civil Servant & Property Buyer',
    location: 'Petaling Jaya',
    category: 'personal',
    rating: 5,
    timeAgo: 'Verified Facebook Review',
    outcomeMetric: 'Zero Credit Inquiries During Pre-Check',
    highlightQuote: 'Fast pre-check without leaving inquiry footprints on my credit file.',
    reviewText:
      'I was nervous about applying because my report had one small telco dispute from two years ago. Jess Advisory pre-audited my file first without triggering any hard inquiries on formal credit registers. They guided me on how to clear the dispute letter, and my subsequent housing loan was approved in just 8 business days.',
    verifiedOnFacebook: true,
  },
];
