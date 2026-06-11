// Category Database containing metadata for all 24 valid IDs in the Philippines
const idDatabase = {
  "national-civil": {
    title: "National & Civil IDs",
    description: "Primary government-issued identification for all Filipino citizens.",
    icon: "🇵🇭",
    items: [
      {
        id: "philsys",
        name: "PhilSys National ID",
        tagline: "The national ID of every Filipino citizen and resident alien",
        cost: "FREE",
        status: "primary",
        link: "detail.html?id=philsys"
      },
      {
        id: "passport",
        name: "Philippine Passport",
        tagline: "Your passport to travel and the strongest proof of citizenship",
        cost: "₱950 - ₱1,200",
        status: "primary",
        link: "detail.html?id=passport"
      },
      {
        id: "voter-id",
        name: "Voter's Certification",
        tagline: "Official proof of registered voter status issued by COMELEC",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=voter-id"
      }
    ]
  },
  "employment": {
    title: "Employment and Benefits",
    description: "IDs associated with national health insurance, social security, and housing funds.",
    icon: "💼",
    items: [
      {
        id: "sss-umid",
        name: "SSS UMID / MySSS Card",
        tagline: "Unified Multi-Purpose ID linked with SSS benefit accounts",
        cost: "FREE",
        status: "primary",
        link: "detail.html?id=sss-umid"
      },
      {
        id: "gsis-id",
        name: "GSIS Digital ID",
        tagline: "Primary identification card for government employees",
        cost: "FREE",
        status: "primary",
        link: "detail.html?id=gsis-id"
      },
      {
        id: "philhealth",
        name: "PhilHealth ID",
        tagline: "Required for healthcare discounts and hospital claims",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=philhealth"
      },
      {
        id: "tin-id",
        name: "TIN ID / Digital TIN",
        tagline: "Official tax identification number card issued by BIR",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=tin-id"
      },
      {
        id: "pagibig-loyalty",
        name: "Pag-IBIG Loyalty Card Plus",
        tagline: "Discount card and benefit ATM for Pag-IBIG members",
        cost: "₱125",
        status: "secondary",
        link: "detail.html?id=pagibig-loyalty"
      }
    ]
  },
  "licensure": {
    title: "Licensure and Profession",
    description: "Official documents granting legal authority to drive or practice a regulated profession.",
    icon: "📜",
    items: [
      {
        id: "drivers-license",
        name: "Driver's License",
        tagline: "Official LTO permit to operate motor vehicles in the Philippines",
        cost: "₱585 - ₱652",
        status: "primary",
        link: "detail.html?id=drivers-license"
      },
      {
        id: "prc-id",
        name: "PRC ID",
        tagline: "Identification for state-regulated professionals (engineers, teachers, nurses)",
        cost: "Varies",
        status: "primary",
        link: "detail.html?id=prc-id"
      },
      {
        id: "ibp-id",
        name: "IBP ID",
        tagline: "Official ID for members of the Integrated Bar of the Philippines",
        cost: "Varies",
        status: "primary",
        link: "detail.html?id=ibp-id"
      },
      {
        id: "seamans-book",
        name: "MARINA Seaman's Book (SIRB)",
        tagline: "Seafarer's record book and passport-level document for maritime crew",
        cost: "FREE (1st time)",
        status: "primary",
        link: "detail.html?id=seamans-book"
      },
      {
        id: "firearms-license",
        name: "Firearms License (LTOPF)",
        tagline: "PNP license to own and possess firearms legally",
        cost: "₱1,000+",
        status: "secondary",
        link: "detail.html?id=firearms-license"
      }
    ]
  },
  "special-groups": {
    title: "Special Groups",
    description: "IDs granting discounts, support, and legal benefits to specific citizen groups.",
    icon: "🤝",
    items: [
      {
        id: "senior-citizen",
        name: "Senior Citizen ID",
        tagline: "Grants 20% discount and VAT exemption to seniors aged 60+",
        cost: "FREE",
        status: "primary",
        link: "detail.html?id=senior-citizen"
      },
      {
        id: "pwd-id",
        name: "PWD ID",
        tagline: "Provides discounts and social services to Persons with Disabilities",
        cost: "FREE",
        status: "primary",
        link: "detail.html?id=pwd-id"
      },
      {
        id: "ofw-id",
        name: "OFW ID / OWWA e-Card",
        tagline: "Provides airport and processing privileges to overseas workers",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=ofw-id"
      },
      {
        id: "solo-parent",
        name: "Solo Parent ID",
        tagline: "Grants cash subsidies and leaves to single parents",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=solo-parent"
      },
      {
        id: "acr-card",
        name: "ACR I-Card",
        tagline: "Alien Certificate of Registration for foreigners staying 59+ days",
        cost: "Varies",
        status: "primary",
        link: "detail.html?id=acr-card"
      }
    ]
  },
  "clearances": {
    title: "Clearances",
    description: "Legal background check certifications required for job applications.",
    icon: "🔍",
    items: [
      {
        id: "nbi-clearance",
        name: "NBI Clearance",
        tagline: "Official crime-free background certificate issued by the NBI",
        cost: "₱155",
        status: "secondary",
        link: "detail.html?id=nbi-clearance"
      },
      {
        id: "police-clearance",
        name: "Police Clearance",
        tagline: "National police record check certificate issued by the PNP",
        cost: "₱150",
        status: "secondary",
        link: "detail.html?id=police-clearance"
      },
      {
        id: "barangay-clearance",
        name: "Barangay Clearance",
        tagline: "Basic municipal clearance certifying good residency standing",
        cost: "₱20 - ₱300",
        status: "secondary",
        link: "detail.html?id=barangay-clearance"
      }
    ]
  },
  "institutional": {
    title: "Institutional IDs",
    description: "Official cards issued by private entities, postal networks, or schools.",
    icon: "🏫",
    items: [
      {
        id: "postal-id",
        name: "Postal ID",
        tagline: "PHLPost identity card accepted as a primary ID for transactions",
        cost: "₱550 - ₱650",
        status: "primary",
        link: "detail.html?id=postal-id"
      },
      {
        id: "school-id",
        name: "Student ID",
        tagline: "Identification card issued to enrolled students",
        cost: "Varies",
        status: "secondary",
        link: "detail.html?id=school-id"
      },
      {
        id: "company-id",
        name: "Company ID",
        tagline: "Employee identification badge issued by private employers",
        cost: "FREE",
        status: "secondary",
        link: "detail.html?id=company-id"
      }
    ]
  }
};