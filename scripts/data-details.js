// Detailed ID Information (Used for specific ID detail pages)
const idDetails = {
  philsys: {
    name: "PhilSys National ID",
    tagline: "The national ID of every Filipino citizen and resident alien",
    cost: "FREE",
    validity: "Lifetime (Non-expiring)",
    processingTime:
      "Instant (Digital ePhilID) | 3 to 9+ months (Physical Card)",
    eligibility: [
      "All Filipino citizens (including dual citizens)",
      "Resident foreign nationals staying in the Philippines for more than 3 months",
    ],
    requirements: [
      "PSA-issued Birth Certificate (Original)",
      "OR 1 Valid Primary ID (e.g. Passport, UMID, Driver's License)",
      "OR 2 Valid Secondary IDs (e.g. PhilHealth Card, TIN ID, Barangay Certificate)",
      "Note: First-time registrants under RA 11261 can register completely free",
    ],
    steps: [
      "Visit any PSA fixed registration center, mall-based center, or mobile registration site (fully walk-in)",
      "Present your supporting documents to the PSA Kit Operator for verification",
      "Have your biometric details captured (front-facing photo, fingerprints, and iris scans)",
      "Review your demographic information encoded in the system for accuracy",
      "Receive your Transaction Slip containing your Transaction Reference Number (TRN)",
      "Download your digital ePhilID via the official eGovPH app while waiting for the physical card",
    ],
    acceptedAt: [
      "All government agencies (DFA, SSS, GSIS, LTO, Pag-IBIG)",
      "All banks and financial institutions for opening accounts",
      "Remittance centers, telcos, and utility companies",
      "All private establishments nationwide",
    ],
    reminder:
      "The PhilSys ID registration is completely free. Establishment owners are legally mandated to accept both the physical card and the digital ePhilID via eGovPH app. Do not pay any fees.",
  },
  passport: {
    name: "Philippine Passport",
    tagline: "Your gateway to travel and the strongest proof of citizenship",
    cost: "₱950 (Regular) | ₱1,200 (Expedite)",
    validity: "10 years (Adults 18+) | 5 years (Minors below 18)",
    processingTime:
      "12-15 working days (Regular) | 6-8 working days (Expedite)",
    eligibility: [
      "All Filipino citizens",
      "Dual citizens with complete citizenship documents",
    ],
    requirements: [
      "DFA Online Appointment Confirmation Sheet",
      "Accomplished DFA Application Form",
      "PSA-issued Birth Certificate (Original and Photocopy)",
      "At least 1 Valid Primary Government-issued ID",
      "For renewals: Old/Current passport",
      "For minors: Parent's passport or birth certificate + parental consent",
    ],
    steps: [
      "Book an appointment online via passport.gov.ph",
      "Fill out the online application form completely and print it",
      "Pay the passport fee online through GCash, PayMaya, or authorized payment centers",
      "Appear in person at the selected DFA site on your scheduled date and time",
      "Present your original documents and photocopies to the processing officer",
      "Undergo biometric capture (photo, fingerprints, and signature)",
      "Keep your claim slip or pay for optional home courier delivery (usually ₱150)",
    ],
    acceptedAt: [
      "All international borders and travel check points",
      "All banking, financial, and credit institutions",
      "All government and private establishments as a primary ID",
    ],
    reminder:
      "Ensure you book only via official dfa.gov.ph. Senior citizens, PWDs, pregnant women, and solo parents can use the Courtesy Lane without prior appointments.",
  },
  "voter-id": {
    name: "Voter's Certification",
    tagline: "Official proof of registered voter status issued by COMELEC",
    cost: "FREE (standard certification at local OEO)",
    validity: "1 Year from date of issuance",
    processingTime: "Same day (usually within 30 minutes)",
    eligibility: [
      "Registered voters with active registration status in the Philippines",
    ],
    requirements: [
      "At least 1 Valid Government ID",
      "Photocopy of the Valid ID",
      "Note: Physical Voter's ID card printing has been discontinued by COMELEC",
    ],
    steps: [
      "Go to the local Office of the Election Officer (OEO) in the city/municipality where you are registered",
      "Present your valid ID and inform the staff you need a Voter's Certification",
      "Wait for the officer to verify your record in the voter database",
      "Receive the printed Voter's Certification signed by the Election Officer",
    ],
    acceptedAt: [
      "DFA for passport applications (as supporting ID)",
      "Most local banks and credit unions",
      "Government agencies for official transactions",
    ],
    reminder:
      "Always bring small change for local municipal fees if applicable. If your registration is deactivated, you must file for reactivation during registration periods.",
  },
  "sss-umid": {
    name: "SSS UMID / MySSS Card",
    tagline: "Unified Multi-Purpose ID linked with SSS benefit accounts",
    cost: "FREE (Initial issuance)",
    validity: "Non-expiring (Indefinite)",
    processingTime: "Varies depending on partner bank (RCBC or UnionBank)",
    eligibility: [
      "Active SSS members with a permanent SS number",
      "Must have at least 1 posted contribution",
      "Must be registered in the My.SSS portal",
    ],
    requirements: [
      "My.SSS Member Portal Account",
      "National ID (PhilID) Registration",
      "Accomplished UMID/MySSS Card Application Form",
      "1 Primary Valid ID (e.g. Passport, Driver's License)",
    ],
    steps: [
      "Log in to your My.SSS Member Portal account",
      "Navigate to the Services tab and select 'MySSS Card Application'",
      "Agree to share your PhilSys data for identity authentication via eVerify",
      "Select your preferred partner bank (RCBC or UnionBank) for account linkage",
      "Complete the bank's digital account opening procedure",
      "Wait for card production and pickup instructions from the partner bank",
    ],
    acceptedAt: [
      "All banks and financial institutions as a primary ID",
      "All government agencies (SSS, GSIS, PhilHealth, Pag-IBIG)",
      "Acceptable as an ATM debit card for cash withdrawals",
    ],
    reminder:
      "Existing legacy UMID cards without smart chips remain valid. The new MySSS card functions as both a premium ID and a banking card.",
  },
  "gsis-id": {
    name: "GSIS Digital ID",
    tagline: "Primary identification card for government employees",
    cost: "FREE",
    validity: "Non-expiring (Valid during active membership)",
    processingTime: "Instant (Digital via app) | 5 working days (ATM card)",
    eligibility: ["Active government employees and GSIS pensioners"],
    requirements: [
      "Active GSIS Membership Number",
      "2 Valid Government-issued IDs",
      "Smartphone with GSIS Touch app installed",
    ],
    steps: [
      "Download the official GSIS Touch mobile app",
      "Register an account using your GSIS Business Partner (BP) number",
      "Log in and access the 'GSIS Digital ID' section",
      "Follow the screen prompts for facial recognition/selfie validation",
      "Use the digital card inside the app or request a linked ATM card from UnionBank/Landbank",
    ],
    acceptedAt: [
      "All government transactions, offices, and embassies",
      "LTO, SSS, and PhilHealth for ID validation",
      "Official partner banks for salary loan disbursements",
    ],
    reminder:
      "Physical UMID card production for GSIS has been discontinued. Members are encouraged to use the GSIS Digital ID in the GSIS Touch app.",
  },
  philhealth: {
    name: "PhilHealth ID",
    tagline: "Required for healthcare discounts and hospital claims",
    cost: "FREE (Paper-based)",
    validity: "Non-expiring",
    processingTime: "Same day (usually within 1 hour at LHIO offices)",
    eligibility: [
      "All registered PhilHealth members (employees, self-employed, indigent, senior citizens)",
    ],
    requirements: [
      "2 copies of completely filled PhilHealth Member Registration Form (PMRF)",
      "2 pieces of 1x1 ID pictures (recent, white background)",
      "At least 2 valid secondary IDs or 1 primary ID",
    ],
    steps: [
      "Visit any PhilHealth Local Health Insurance Office (LHIO) or Express branch",
      "Submit the accomplished PMRF and valid IDs to the clerk",
      "Wait for the generation of your PhilHealth Identification Number (PIN)",
      "Request the printing of your PhilHealth Member ID Card",
      "Laminate the paper card once printed",
    ],
    acceptedAt: [
      "All hospitals and clinics in the Philippines to claim benefits",
      "Most government agencies and private firms as a secondary ID",
      "Remittance outlets and local drugstores",
    ],
    reminder:
      "Your Member Data Record (MDR) can be downloaded online and is also accepted alongside the ID to avail of medical discounts.",
  },
  "tin-id": {
    name: "TIN ID / Digital TIN ID",
    tagline: "Official tax identification number card issued by BIR",
    cost: "FREE (Digital ID)",
    validity: "Permanent (Non-expiring)",
    processingTime: "Immediate after online registration",
    eligibility: [
      "All registered taxpayers with active Tax Identification Numbers",
    ],
    requirements: [
      "Active Tax Identification Number (TIN)",
      "Digital Photo (Selfie with white background)",
      "Valid Government ID",
    ],
    steps: [
      "Go to the BIR Online Registration and Update System (ORUS) portal: orus.bir.gov.ph",
      "Create a user account and register your details",
      "Select 'Generate Digital TIN ID' in the portal interface",
      "Upload your clear selfie photo following size guidelines",
      "Download and print your official Digital TIN ID card",
    ],
    acceptedAt: [
      "Banks and financial institutions as a secondary ID",
      "Employers for payroll enrollment",
      "All Bureau of Internal Revenue transactions",
    ],
    reminder:
      "Taxpayers are permitted only ONE TIN. BIR has fully transitioned to the Digital TIN ID; physical card distribution at RDOs is restricted.",
  },
  "pagibig-loyalty": {
    name: "Pag-IBIG Loyalty Card Plus",
    tagline: "Discount card and benefit ATM for Pag-IBIG members",
    cost: "₱125",
    validity: "Membership-tied (ATM functionality governed by bank)",
    processingTime: "Same day (usually within 1-2 hours)",
    eligibility: [
      "Active Pag-IBIG members with at least 1 posted monthly contribution",
    ],
    requirements: [
      "Pag-IBIG Member ID Number (MID)",
      "1 Valid Government ID",
      "Accomplished Loyalty Card Plus Application Form",
    ],
    steps: [
      "Download and fill out the Loyalty Card Plus Application Form",
      "Visit the nearest Pag-IBIG branch offering card printing services",
      "Present the application form and your valid government ID",
      "Have your biometrics and photo captured by the officer",
      "Pay the ₱125 card fee to the bank representative on-site",
      "Claim your card and banking PIN mailer (UnionBank or AUB)",
    ],
    acceptedAt: [
      "Partner merchants for member discounts (supermarkets, schools, drugstores)",
      "All ATMs as a debit card to withdraw Pag-IBIG multi-purpose loans",
      "Government transactions as a valid secondary ID",
    ],
    reminder:
      "Upgrade your old non-chip card to Loyalty Card Plus. Keep the card active: UnionBank-powered cards are subject to dormancy rules if unused for 2 years.",
  },
  "drivers-license": {
    name: "Driver's License",
    tagline: "Official LTO permit to operate motor vehicles in the Philippines",
    cost: "₱585 (License Fee) + ~₱600 (Medical Certificate)",
    validity: "5 years (Initial/With violations) | 10 years (Clean record)",
    processingTime: "A few hours to 1 day",
    eligibility: [
      "Filipino citizens and resident foreigners at least 17 years old (Student/Non-Pro)",
      "Must be physically and mentally fit to operate a vehicle",
    ],
    requirements: [
      "LTO LTMS Account (Registered on portal.lto.gov.ph)",
      "15-Hour Theoretical Driving Course (TDC) Certificate",
      "Active Student Permit (Held for at least 31 days)",
      "Practical Driving Course (PDC) Certificate",
      "Medical Certificate from LTO-accredited clinic",
    ],
    steps: [
      "Log in to the LTO LTMS Portal and file an application for a Driver's License",
      "Go to an LTO licensing branch with your requirements",
      "Present your documents and medical certificate at the evaluation window",
      "Take the written computerized driving exam via the LTMS terminal",
      "Undergo the practical driving test on the LTO test track",
      "Proceed to the cashier for payment of fees",
      "Have your biometrics captured and claim your license card",
    ],
    acceptedAt: [
      "Universally accepted as a primary valid ID nationwide",
      "Banks, passport offices, courts, and airlines",
      "LTO check points for driving verification",
    ],
    reminder:
      "The digital e-Driver's License inside your LTMS account is officially recognized by traffic enforcers. Do not drive without carrying your physical card or logging into your LTMS account.",
  },
  "prc-id": {
    name: "PRC ID / Professional Identification Card",
    tagline:
      "ID for state-regulated professionals (engineers, teachers, nurses)",
    cost: "₱450 - ₱600 (Depending on profession)",
    validity: "3 years (Renewable on birth month)",
    processingTime: "Same day (at select renewal centers) to 5 working days",
    eligibility: ["Licensed professionals who passed state board examinations"],
    requirements: [
      "Active PRC LERIS Account (online.prc.gov.ph)",
      "Printed Application for Professional ID Card",
      "Proof of CPD units (or signed CPD Undertaking extended to June 30, 2026)",
      "1 Passport-sized Photo (white background, with name tag)",
    ],
    steps: [
      "Log in to the PRC LERIS portal and choose 'Renewal'",
      "Select your preferred PRC branch, date, and appointment slot",
      "Settle the fee online using GCash, debit/credit cards, or PayMaya",
      "Print the system-generated application form",
      "Appear at the PRC office on your scheduled date and submit the form",
      "Wait for the printing and claim your card",
    ],
    acceptedAt: [
      "Primary government valid ID for all transactions",
      "All banks, financial agencies, and courts",
      "Proof of authority to practice your specific profession",
    ],
    reminder:
      "Ensure your CPD records are updated or use the CPD Undertaking form. PRC operates on a strict appointment-only policy.",
  },
  "ibp-id": {
    name: "IBP ID",
    tagline: "Official ID for members of the Integrated Bar of the Philippines",
    cost: "Varies by chapter (approx. ₱300 - ₱1,500)",
    validity: "Annual (Covers calendar year) | Lifetime (for Lifetime members)",
    processingTime: "2 to 4 weeks",
    eligibility: [
      "Lawyers admitted to the Philippine Bar in good standing with fully paid dues",
    ],
    requirements: [
      "Active myIBP mobile app profile",
      "Proof of paid IBP annual dues",
      "2x2 ID photo (wearing formal attire)",
    ],
    steps: [
      "Download and register on the official myIBP mobile app",
      "Access the ID section inside the app to initiate request",
      "Upload your photo and settle chapter dues through the app payment",
      "Select card delivery (home address or pick up at local chapter office)",
    ],
    acceptedAt: [
      "All courts, government offices, and notary public regulators",
      "Accepted as a primary valid ID for banking and passport applications",
    ],
    reminder:
      "Keep your membership in good standing. The QR code on modern IBP IDs can be scanned to check active legal status instantly.",
  },
  "seamans-book": {
    name: "MARINA Seaman's Book (SIRB)",
    tagline:
      "Seafarer's record book and passport-level document for maritime crew",
    cost: "FREE (1st time for graduates) | ₱800 - ₱1,500 (Renewals/Expedite)",
    validity: "10 years",
    processingTime: "Same day (Rush) | 3-5 working days (Regular)",
    eligibility: ["Filipino seafarers, maritime graduates, and crew members"],
    requirements: [
      "PSA Birth Certificate",
      "Valid NBI Clearance",
      "Certificate of Completion of Basic Training (STCW compliant)",
      "Online appointment confirmation sheet",
    ],
    steps: [
      "Register on the MARINA Online Appointment System: sidsrb.marina.gov.ph",
      "Fill out the profile details and select appointment branch/date",
      "Pay the fees via G-Cash or accredited bank channels",
      "Arrive at the MARINA branch in formal collared attire",
      "Submit original documents and have biometrics captured",
      "Collect your Seaman's Book on the scheduled release date",
    ],
    acceptedAt: [
      "All maritime agencies, border gates, and shipping lines",
      "Primary government ID for local banking and passport applications",
    ],
    reminder:
      "Book your appointment weeks in advance. First-time issuances are free for graduates of maritime academies under specific government rules.",
  },
  "firearms-license": {
    name: "Firearms License (LTOPF)",
    tagline: "PNP license to own and possess firearms legally",
    cost: "₱1,000 (Type 1) | up to ₱10,000 (Type 5) + Test fees (~₱1,500)",
    validity: "5 years or 10 years",
    processingTime: "2 to 4 weeks",
    eligibility: [
      "Filipino citizens at least 21 years old",
      "Must have clean criminal record and stable source of income",
    ],
    requirements: [
      "PNP Neuro-Psychiatric Clearance (passed)",
      "PNP Forensic Group Drug Test Clearance (negative)",
      "National Police Clearance",
      "Gun Safety Seminar Certificate",
      "Proof of income (ITR, Payslip, or Certificate of Employment)",
    ],
    steps: [
      "Create an account on the PNP FEO portal: feo.pnp.gov.ph",
      "Book an appointment for neuro and drug testing at PNP regional camps",
      "Take the tests and attend the gun safety seminar",
      "Once results are posted online, upload income and identification documents",
      "Submit your application and pay the LTOPF fee online",
      "Claim your physical LTOPF card at the PNP FEO office or selected camp",
    ],
    acceptedAt: [
      "Gun stores, firing ranges, and PNP verification gates",
      "Accepted as a secondary ID in some banking circles",
    ],
    reminder:
      "Discounts of 50% are available for active government personnel and 20% for senior citizens.",
  },
  "senior-citizen": {
    name: "Senior Citizen ID",
    tagline: "Grants 20% discount and VAT exemption to seniors aged 60+",
    cost: "FREE",
    validity: "Lifetime (Indefinite)",
    processingTime: "Same day to 3 working days",
    eligibility: [
      "Filipino citizens at least 60 years old",
      "Must be a resident of the municipality where applying",
    ],
    requirements: [
      "PSA Birth Certificate or any ID showing date of birth",
      "Barangay Certificate of Residency",
      "1x1 ID pictures (recent, white background, 3 copies)",
      "Accomplished OSCA Application Form",
    ],
    steps: [
      "Go to the Office for Senior Citizens Affairs (OSCA) in your city or town hall",
      "Submit the completed form and residency requirements",
      "Wait for the clerk to register your data and print the card",
      "Receive your physical Senior Citizen ID and discount purchase booklets",
    ],
    acceptedAt: [
      "All drugstores, restaurants, supermarkets, and public transport nationwide",
      "Airlines, hotels, theaters, and dental clinics",
      "Primary valid ID for all government transactions",
    ],
    reminder:
      "Establishments are legally required to accept your Senior Citizen ID. Establishments must also honor the digital NSCID available via eGovPH app.",
  },
  "pwd-id": {
    name: "PWD ID / Person with Disability ID",
    tagline:
      "Provides discounts and social services to Persons with Disabilities",
    cost: "FREE",
    validity: "3 to 5 years (subject to LGU verification)",
    processingTime: "Same day to 5 working days",
    eligibility: [
      "Filipino citizens with long-term or permanent physical, sensory, cognitive, or psychological disabilities",
    ],
    requirements: [
      "Medical Certificate signed by a licensed specialist matching the disability",
      "1x1 ID pictures (recent, white background, 2 copies)",
      "Barangay Residency Certificate",
      "Valid Government-issued ID",
    ],
    steps: [
      "Secure a medical certificate describing your disability from a certified specialist",
      "Visit the Persons with Disability Affairs Office (PDAO) in your city/municipal hall",
      "Submit your form and medical papers to the officer",
      "Undergo brief verification assessment or interview",
      "Claim your PWD ID and purchase booklets upon approval",
    ],
    acceptedAt: [
      "All medical clinics, hospitals, drugstores, and public transport",
      "Supermarkets, food chains, cinemas, and toll gates",
      "Accepted as a primary valid ID for banking and passport applications",
    ],
    reminder:
      "General physicians may not sign medical certificates for invisible disabilities (e.g. autism, psychiatric disorders) — must be signed by a specialized physician.",
  },
  "ofw-id": {
    name: "OFW ID / OWWA e-Card",
    tagline: "Provides airport and processing privileges to overseas workers",
    cost: "FREE",
    validity: "Co-terminus with active OWWA membership (usually 2 years)",
    processingTime: "Immediate (Digital ID) | 5 working days (Physical Card)",
    eligibility: [
      "Overseas Filipino Workers with active OWWA membership payments",
    ],
    requirements: [
      "Active OWWA membership",
      "Valid Philippine Passport",
      "Verified Overseas Employment Certificate (OEC) or OFW Pass",
    ],
    steps: [
      "Download the official OWWA Mobile App on your smartphone",
      "Register/Log in using your passport details",
      "Access the digital OWWA e-Card instantly inside the app",
      "For physical cards, visit the OWWA Desk at NAIA or OWWA regional offices",
    ],
    acceptedAt: [
      "NAIA airports for travel tax and terminal fee exemptions",
      "DFA and POEA offices for contract processing",
      "Accepted as a valid secondary ID for passport and SSS transactions",
    ],
    reminder:
      "Do not pay anyone for this card. The digital card in the OWWA app is free and holds full legality.",
  },
  "solo-parent": {
    name: "Solo Parent ID",
    tagline: "Grants cash subsidies and leaves to single parents",
    cost: "FREE",
    validity: "1 Year (Renewable annually)",
    processingTime: "15 to 30 days (due to home visit scheduling)",
    eligibility: [
      "Single parents solely raising minor children (due to death, separation, abandonment, single status)",
      "Must not be cohabiting with a partner",
    ],
    requirements: [
      "Accomplished Solo Parent Application Form",
      "Barangay Certificate of Solo Parent Residency (min. 6 months)",
      "Birth Certificate of your children (photocopy)",
      "Income Tax Return (ITR) or certificate of low income from Barangay",
      "Supporting proof (Death Certificate, Court Decision on legal separation, etc.)",
    ],
    steps: [
      "Go to the City/Municipal Social Welfare and Development Office (CSWDO)",
      "Present your documents and fill out the intake registration form",
      "Wait for the schedule of a social worker home visit/interview",
      "Once approved, visit the town hall to claim your Solo Parent ID card",
    ],
    acceptedAt: [
      "Supermarkets and drugstores for 10% discount on baby supplies (children under 6)",
      "Schools and universities for tuition grants/subsidies",
      "Employers for claiming 7 days of paid solo parent leave",
    ],
    reminder:
      "You must renew your Solo Parent ID yearly. Cohabiting or marrying void Solo Parent benefits immediately.",
  },
  "acr-card": {
    name: "ACR I-Card",
    tagline:
      "Alien Certificate of Registration for foreigners staying 59+ days",
    cost: "Varies (approx. $50 + ₱250 express fee)",
    validity: "1 year (Standard) | 5 years (Permanent Resident)",
    processingTime: "3 to 5 working days",
    eligibility: [
      "Foreign nationals staying in the Philippines for more than 59 days",
    ],
    requirements: [
      "Accomplished ACR I-Card Application Form",
      "Valid Foreign Passport (Original and Photocopy of visa pages)",
      "Official visa order extension document",
    ],
    steps: [
      "Go to the Bureau of Immigration (BI) Main Office or accredited field branches",
      "Submit the application form and passport",
      "Pay the fees at the immigration cashier",
      "Proceed to the biometrics window for photo and fingerprint scans",
      "Claim your physical ACR I-Card on the scheduled release date",
    ],
    acceptedAt: [
      "All immigration check points and exit gates in the Philippines",
      "Local banks for opening accounts",
      "All public and private offices in the country",
    ],
    reminder:
      "Foreigners holding ACR I-Cards must file their Annual Report within the first 60 days of every calendar year (Jan 1 to Mar 1).",
  },
  "nbi-clearance": {
    name: "NBI Clearance",
    tagline: "Official crime-free background certificate issued by the NBI",
    cost: "₱155 (₱130 application + ₱25 convenience fee)",
    validity: "1 Year from date of issuance",
    processingTime: "Same day (if 'clear') | 5-15 working days (if with 'hit')",
    eligibility: [
      "Filipino citizens and foreigners requiring background check certifications",
    ],
    requirements: [
      "NBI Online Appointment Reference Number",
      "2 Valid Government-issued IDs (Original, unexpired)",
      "Note: Free for first-time job seekers with a Barangay Certification under RA 11261",
    ],
    steps: [
      "Register an account on the NBI Clearance portal: clearance.nbi.gov.ph",
      "Select your appointment branch, date, and time slot",
      "Settle the payment through GCash, 7-Eleven, or online banks",
      "Appear at the NBI center on your scheduled time with your IDs",
      "Proceed to the biometric station for photo and fingerprint capture",
      "Receive your printed clearance paper (if clear) or wait for release date (if hit)",
    ],
    acceptedAt: [
      "Employers for job hiring requirements",
      "DFA for passport applications",
      "Government licensing boards and visa processing bureaus",
    ],
    reminder:
      "Walk-ins are generally rejected at major NBI centers. Ensure you pay online and secure an appointment reference first.",
  },
  "police-clearance": {
    name: "National Police Clearance",
    tagline: "National police record check certificate issued by the PNP",
    cost: "₱150 + small online fee",
    validity: "6 Months from date of issuance",
    processingTime: "Same day (usually 15 to 30 minutes)",
    eligibility: ["Any individual seeking police record check clearance"],
    requirements: [
      "NPCS Online Appointment Reference Number",
      "2 Valid Government IDs (Original)",
      "Barangay First-Time Job Seeker Certificate (for free application under RA 11261)",
    ],
    steps: [
      "Log in to the PNP Clearance portal: pnpclearance.ph",
      "Complete your personal details profile",
      "Schedule your appointment at the nearest police station",
      "Settle the payment via Landbank link or GCash",
      "Visit the police station on your scheduled date for photo and biometric scans",
      "Wait for card release (printed same day if clear)",
    ],
    acceptedAt: [
      "Private employers for local jobs",
      "Municipal/city offices for local permit applications",
      "Secondary ID validation at bank branches",
    ],
    reminder:
      "Ensure your profile matches your IDs exactly. Some renewals can be done online without visiting the police station.",
  },
  "barangay-clearance": {
    name: "Barangay Clearance",
    tagline: "Basic municipal clearance certifying good residency standing",
    cost: "₱20 - ₱100 (varies by barangay)",
    validity: "3 to 6 Months",
    processingTime: "Same day (usually within 15-30 minutes)",
    eligibility: ["Any resident of the barangay for at least 6 months"],
    requirements: [
      "Proof of residency (e.g. Utility bill, lease contract)",
      "Community Tax Certificate (Cedula)",
      "Filled Barangay Form",
    ],
    steps: [
      "Go to the Barangay Hall in the area where you live",
      "Fill out the Barangay Clearance request sheet",
      "Secure a Cedula (Community Tax Certificate) at the treasurer desk if you don't have one",
      "Pay the clearance fee at the cashier",
      "Wait for the Barangay Captain's signature and claim the clearance document",
    ],
    acceptedAt: [
      "NBI and Police offices for securing clearances",
      "Employers as a local residency proof",
      "Banks and schools for secondary registration",
    ],
    reminder:
      "Free of charge for first-time job seekers who present a Barangay First-Time Job Seeker certification.",
  },
  "postal-id": {
    name: "Postal ID",
    tagline: "PHLPost identity card accepted as a primary ID for transactions",
    cost: "₱550 (Regular) | ₱650 (Rush)",
    validity: "3 Years (Filipinos) | 1 Year (Foreign residents)",
    processingTime: "3-10 working days (Regular) | Same day/Next day (Rush)",
    eligibility: [
      "Filipino citizens and foreign residents staying in the Philippines",
    ],
    requirements: [
      "Accomplished Postal ID Application Form",
      "1 Primary Valid ID (e.g. PSA Birth Certificate, Passport, Driver's License)",
      "Barangay Certificate of Residency (issued within 3 months)",
    ],
    steps: [
      "Visit any PHLPost post office offering biometric capture services",
      "Submit the accomplished application form and documents",
      "Pay the card fee to the postal cashier",
      "Proceed to the biometric window for photo, fingerprint, and signature capture",
      "Wait for the card delivery to your home address via postman",
    ],
    acceptedAt: [
      "Universally accepted as a primary valid ID in banks and government offices",
      "DFA for passport application",
      "Private and court transactions",
    ],
    reminder:
      "If applying under your married name, you must provide your PSA Marriage Certificate. Check PHLPost updates for active capture stations.",
  },
  "school-id": {
    name: "Student ID",
    tagline: "Identification card issued to enrolled students",
    cost: "Varies (usually included in tuition fees)",
    validity: "Duration of enrollment (usually per school year/semester)",
    processingTime: "Varies by school (usually within first week of classes)",
    eligibility: [
      "Enrolled students in primary, secondary, or tertiary educational institutions",
    ],
    requirements: [
      "Proof of enrollment (School Registration Form / Enrollment Assessment)",
      "Accomplished school ID application sheet",
      "Recent ID photo (if not captured on-site)",
    ],
    steps: [
      "Complete your enrollment registration for the semester/school year",
      "Go to the school's ID capture desk (usually at the Registrar or IT department)",
      "Present your enrollment form and have your photo taken",
      "Claim your physical Student ID card once printed",
    ],
    acceptedAt: [
      "Public transportation (for student fare discounts)",
      "Government clearance offices (NBI, Police, COMELEC)",
      "Museums, libraries, and book stores",
    ],
    reminder:
      "Must be signed by the school principal or registrar to be valid for outside government transactions. Combine it with a birth certificate for best validity.",
  },
  "company-id": {
    name: "Company ID",
    tagline: "Employee identification badge issued by private employers",
    cost: "FREE (provided by employer)",
    validity: "Active employment duration",
    processingTime: "Varies by employer (usually 1-3 days from start date)",
    eligibility: ["Regular or contractual employees of a registered company"],
    requirements: [
      "Signed Employment Contract",
      "HR onboarding details",
      "Employee ID photo",
    ],
    steps: [
      "Complete the HR onboarding documentation upon hire",
      "Have your photo captured by HR or submit a professional headshot",
      "Wait for HR to print and hand you the company ID lanyard",
    ],
    acceptedAt: [
      "Company premises for security clearance",
      "Selected banks (especially BSP-regulated companies) as a secondary ID",
      "Local establishments offering employee partnership discounts",
    ],
    reminder:
      "Not all agencies accept company IDs for high-value transactions. They are more readily accepted if the company is regulated by BSP, SEC, or IC.",
  },
};
