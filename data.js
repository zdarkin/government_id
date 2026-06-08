// 1. Category Data (Used for category list pages)
const idDatabase = {
  "national-civil": {
    title: "National & Civil IDs",
    description: "Primary government-issued identification for all Filipino citizens.",
    icon: "🇵🇭",
    items: [
      {
        id: "philsys",
        name: "PhilSys ID",
        tagline: "The national ID of every Filipino",
        cost: "FREE",
        link: "philsys.html"
      },
      {
        id: "passport",
        name: "Philippine Passport",
        tagline: "Your gateway to travel and the strongest proof of citizenship",
        cost: "₱1,000",
        link: "passport.html"
      }
    ]
  }
};

// 2. Full ID Details (Used for the specific ID pages)
const idDetails = {
  "passport": {
    name: "Philippine Passport",
    tagline: "Your gateway to travel and the strongest proof of citizenship",
    cost: "₱1,000 (Regular) | ₱1,200 (Expedite)",
    validity: "10 years (adults) | 5 years (minors below 18)",
    processingTime: "15 working days (Regular) | 7-8 working days (Expedite)",
    eligibility: [
      "Minors and adults",
      "Dual citizens (with proper documentation)",
      "Filipinos abroad through the Philippine Consulate or Embassy"
    ],
    requirements: [
      "1 PSA-issued Birth Certificate",
      "Accomplished DFA application form",
      "Valid government-issued ID for adults",
      "For minors: parent's passport or birth certificate + parental consent",
      "For renewals: old passport + PSA Birth Certificate",
      "Marriage Certificate (for name change)"
    ],
    steps: [
      "Set an appointment at passport.gov.ph (online scheduling)",
      "Select your preferred DFA Office or satellite site",
      "Fill out the online application form before your appointment",
      "Appear on your scheduled date with original documents and photocopies",
      "Pay the passport fee at the cashier (Skip if paid online)",
      "Have your photo and biometrics taken",
      "Receive your claim stub and wait for release (courier delivery available)"
    ],
    acceptedAt: [
      "All international border crossings",
      "All banks and financial institutions",
      "Strongest ID for identity verification in the Philippines",
      "All government offices and agencies",
      "All private companies and establishments"
    ],
    reminder: "Requirements, fees and processing times may change without notice. Always verify the latest information with the issuing agency before applying."
  }
};