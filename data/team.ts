export interface ResponsibilitySection {
  section: string;
  items: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "FACULTY" | "DIRECTOR" | "EXECUTIVE" | "AMBASSADOR";
  designation?: string;
  image: string;
  domains: string[];
  reportingTo?: string;
  managingAmbassadors?: string;
  generalLeadership?: string;
  responsibilities: ResponsibilitySection[];
  featuredOrder: number;
}

export const teamMembers: TeamMember[] = [
  // Faculty Coordinators
  {
    id: "dr-k-akila",
    name: "Dr. K. Akila",
    role: "Cell Faculty Coordinator",
    category: "FACULTY",
    designation: "Assistant Professor (Sr.G), DCSE",
    image: "/team/source/akila.png",
    domains: ["Institutional Mentorship", "Strategic Advisory", "Incubation Oversight"],
    responsibilities: [
      {
        section: "Faculty Coordination & Institutional Oversight",
        items: [
          "Provide strategic counsel and mentorship for all EDC initiatives, flagship summits, and student ventures.",
          "Serve as primary liaison between the Department of Computer Science & Engineering, institutional leadership, and the student council.",
          "Facilitate administrative approvals, institutional resources, and official faculty endorsements for cell operations."
        ]
      }
    ],
    featuredOrder: 1
  },
  {
    id: "dr-h-mary-shyni",
    name: "Dr. H. Mary Shyni",
    role: "Cell Faculty Coordinator",
    category: "FACULTY",
    designation: "Assistant Professor (O.G), DCSE",
    image: "/team/source/mary-shyni.png",
    domains: ["Academic Integration", "Entrepreneurship Advisory", "Operational Guidance"],
    responsibilities: [
      {
        section: "Academic & Entrepreneurial Guidance",
        items: [
          "Mentor students on commercialization of technology, intellectual property, and research-to-venture pathways.",
          "Ensure compliance with academic schedules, institutional standards, and inter-departmental collaborations.",
          "Guide executive leadership during the planning and execution of campus-wide entrepreneurship symposiums."
        ]
      }
    ],
    featuredOrder: 2
  },

  // Cell Directors
  {
    id: "j-joshua-haniel",
    name: "J Joshua Haniel",
    role: "Cell Director",
    category: "DIRECTOR",
    image: "/team/source/3.png",
    domains: ["Technical", "Content", "Design", "Working Committee (WC)"],
    generalLeadership: "Overseeing the daily operations of the assigned domains, providing final approval for domain ambassador-led initiatives, and co-managing the daily OD letter distributions.",
    responsibilities: [
      {
        section: "Technical Domain Oversight",
        items: [
          "Serve as the chief architect for all web-based solutions required for EDC events and operations.",
          "Oversee the Ambassador in developing, testing, and deploying perfect, highly functional websites.",
          "Ensure all digital infrastructure is secure, scalable, and provides an optimal user experience for participants and sponsors.",
          "Review and approve all codebase deployments and technical architectures prior to launch."
        ]
      },
      {
        section: "Design Domain Oversight",
        items: [
          "Define and enforce the visual identity and branding guidelines for the EDC 2026-2027 term.",
          "Review and provide final approval for all event posters, digital banners, physical badges, and promotional assets created by the design team.",
          "Ensure all designs align perfectly with the target audience and institutional standards."
        ]
      },
      {
        section: "Content Domain Oversight",
        items: [
          "Provide strategic direction for all outgoing communications, including social media campaigns and official email correspondence.",
          "Approve the final drafts of event promotional materials, ensuring maximum engagement.",
          "Validate the selection of high-impact hashtags (strictly those with over 1 million existing posts) to optimize social media reach."
        ]
      },
      {
        section: "Working Committee (WC) Oversight",
        items: [
          "Provide high-level strategic management for on-the-ground event operations.",
          "Authorize the delegation of critical tasks such as crisis management, guest and participant refreshments, and venue decoration."
        ]
      }
    ],
    featuredOrder: 3
  },
  {
    id: "athish-kirthik-j-d",
    name: "Athish Kirthik J D",
    role: "Cell Director",
    category: "DIRECTOR",
    image: "/team/source/4.png",
    domains: ["Public Relations (PR)", "Treasury", "Logistics"],
    generalLeadership: "Driving external engagement, managing financial health, securing resources, providing final approval for their domain ambassador-led initiatives, and co-managing the daily OD letter distributions.",
    responsibilities: [
      {
        section: "Public Relations (PR) Oversight",
        items: [
          "Formulate the core strategy for event promotions and corporate sponsor acquisition.",
          "Lead the team in actively promoting EDC events through direct outreach, phone calls, and face-to-face meetings with potential participants.",
          "Negotiate with external companies and local businesses to secure sponsorships and partnerships for EDC events."
        ]
      },
      {
        section: "Treasury Domain Management",
        items: [
          "Maintain absolute authority over club financials, operating strictly alongside the Treasury Ambassador.",
          "Liaise directly with faculty to acquire the exact necessary funds for event operations.",
          "Ensure capital is spent exclusively on strictly necessary items.",
          "Finalize and submit the post-event financial spreadsheet, meticulously cross-verifying expenditures against participant registration revenues."
        ]
      },
      {
        section: "Logistics Domain Oversight",
        items: [
          "Oversee the procurement of all physical goods, materials, and equipment required for events.",
          "Strategize and execute the promotion of non-food stall sponsorships to local vendors (enforcing the prohibition of food stalls).",
          "Ensure all materials arrive on time and within the allocated budget constraints."
        ]
      }
    ],
    featuredOrder: 4
  },

  // Cell Executives
  {
    id: "thanish-l-s",
    name: "Thanish L.S",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/5.png",
    domains: ["Logistics", "Treasury"],
    reportingTo: "Athish Kirthik J D",
    managingAmbassadors: "Revanth Raj (Treasury) and Vivekasri (Logistics)",
    responsibilities: [
      {
        section: "Logistics Responsibilities",
        items: [
          "Execute the physical procurement of necessary materials and goods from designated shops.",
          "Manage inventory tracking for all purchased items before, during, and after events.",
          "Actively promote event stall spaces to potential vendors, ensuring zero food-related stalls are pitched or accepted.",
          "Coordinate the physical setup and breakdown of sponsor stalls on the day of the event."
        ]
      },
      {
        section: "Treasury Responsibilities",
        items: [
          "Assist Leader Athish directly in the secure management of club funds.",
          "Collect, organize, and digitize all physical and digital receipts for every single purchase made by the club.",
          "Draft the preliminary sections of the financial tracking spreadsheet, ensuring every rupee is accounted for.",
          "Assist in the physical collection and counting of participant registration fees, ensuring accurate cross-verification."
        ]
      }
    ],
    featuredOrder: 5
  },
  {
    id: "praveen-k",
    name: "Praveen K",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/6.png",
    domains: ["Working Committee (WC)"],
    reportingTo: "J Joshua Haniel",
    managingAmbassadors: "Dheerka Dharshini (WC)",
    responsibilities: [
      {
        section: "Working Committee Responsibilities",
        items: [
          "Directly manage and instruct the general Working Committee members, delegating tasks only after receiving approval from Leader Joshua.",
          "Serve as the primary point person for on-site crisis management, identifying issues and deploying committee members to resolve them instantly.",
          "Oversee the complete procurement, setup, and distribution of refreshments for all chief guests, speakers, and VIPs.",
          "Manage the distribution of refreshments for all event participants, ensuring organized crowd control.",
          "Lead the committee in executing all venue decorations, ensuring the physical space matches the design team's vision."
        ]
      }
    ],
    featuredOrder: 6
  },
  {
    id: "deepak-b-t",
    name: "Deepak B T",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/7.png",
    domains: ["Technical", "Content"],
    reportingTo: "J Joshua Haniel",
    managingAmbassadors: "Revanth Raj (Technical) and Pranesh (Content)",
    responsibilities: [
      {
        section: "Technical Responsibilities",
        items: [
          "Write, test, and deploy code to create perfect, highly responsive websites for EDC events.",
          "Develop robust web-based solutions for registration portals, participant tracking, and information dissemination.",
          "Ensure all technical platforms are bug-free and optimized for desktop viewing prior to Director approval."
        ]
      },
      {
        section: "Content Responsibilities",
        items: [
          "Draft highly engaging copy for all social media platforms to promote EDC initiatives.",
          "Write professional, persuasive email content for outreach to students, faculty, and corporate entities.",
          "Conduct precise research to identify and implement perfect, popular hashtags (strictly verifying they have equal to or over 1 million existing posts) to maximize algorithm reach."
        ]
      }
    ],
    featuredOrder: 7
  },
  {
    id: "nithila-k",
    name: "Nithila K",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/8.png",
    domains: ["Design"],
    reportingTo: "J Joshua Haniel",
    managingAmbassadors: "Vivekasri (Design)",
    responsibilities: [
      {
        section: "Design Responsibilities",
        items: [
          "Utilize professional design software to create high-quality event posters, digital banners, and physical participant/guest badges.",
          "Iterate on designs based on direct feedback from Director Joshua to ensure brand consistency.",
          "Deliver all graphic assets in the required formats and resolutions for both print (Logistics) and digital (Content) teams."
        ]
      }
    ],
    featuredOrder: 8
  },
  {
    id: "karthi-balaji",
    name: "Karthi Balaji",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/9.png",
    domains: ["Public Relations (PR)"],
    reportingTo: "Athish Kirthik JD",
    managingAmbassadors: "Magdaleena R (PR)",
    responsibilities: [
      {
        section: "PR Responsibilities",
        items: [
          "Execute direct promotional campaigns, including cold-calling potential participants and organizing physical meet-and-greets to drive registration.",
          "Identify target companies for sponsorships and deliver compelling pitches to secure their financial or resource backing.",
          "Act as the primary conversational liaison between the EDC and the student body to build hype and ensure high event turnout."
        ]
      }
    ],
    featuredOrder: 9
  },
  {
    id: "harshavardhan",
    name: "Harshavardhan",
    role: "Cell Executive",
    category: "EXECUTIVE",
    image: "/team/source/10.png",
    domains: ["Operations & Event Strategy"],
    reportingTo: "Cell Directors",
    responsibilities: [
      {
        section: "Operations & Cross-Domain Synergy",
        items: [
          "Coordinate workflow alignment between technical, logistics, and design teams for seamless event rollouts.",
          "Oversee operational schedule tracking, staging protocols, and on-ground resource alignment during major summits.",
          "Support outreach drives to maximize student registration and ensure operational standard adherence."
        ]
      }
    ],
    featuredOrder: 10
  },

  // Cell Ambassadors
  {
    id: "revanth-raj",
    name: "G P Revanth Raj",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/11.png",
    domains: ["Technical", "Treasury"],
    reportingTo: "Deepak B T (Technical) and Thanish L S (Treasury)",
    responsibilities: [
      {
        section: "Technical Responsibilities",
        items: [
          "Assist Executive Deepak B T in writing, testing, and deploying codebase segments for EDC event websites.",
          "Test and debug web platforms for responsiveness across multiple devices prior to final deployment reviews."
        ]
      },
      {
        section: "Treasury Responsibilities",
        items: [
          "Aid Executive Thanish L S in collecting, organizing, and digitizing physical and digital receipts for club expenditures.",
          "Support the physical collection and meticulous cross-verification of participant registration fees during events."
        ]
      }
    ],
    featuredOrder: 11
  },
  {
    id: "vivekasri-k",
    name: "Vivekasri K",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/12.png",
    domains: ["Logistics", "Design"],
    reportingTo: "Thanish L S (Logistics) and Nithila K (Design)",
    responsibilities: [
      {
        section: "Logistics Responsibilities",
        items: [
          "Assist Executive Thanish L S with the physical procurement and transport of event materials from designated shops.",
          "Help coordinate the on-site physical setup, inventory tracking, and breakdown of sponsor stalls."
        ]
      },
      {
        section: "Design Responsibilities",
        items: [
          "Assist Executive Nithila K in generating and formatting graphic assets, including posters, banners, and badges.",
          "Ensure all finalized designs are appropriately formatted and delivered to the Content and Logistics teams for distribution."
        ]
      }
    ],
    featuredOrder: 12
  },
  {
    id: "dheerka-dharshini",
    name: "Dheerka Dharshini",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/13.png",
    domains: ["Working Committee (WC)"],
    reportingTo: "Praveen K (WC)",
    responsibilities: [
      {
        section: "Working Committee Responsibilities",
        items: [
          "Execute on-site tasks, including venue decoration and crowd control, strictly as delegated by Executive Praveen K.",
          "Assist in the organized setup and distribution of refreshments for VIPs, chief guests, and event participants."
        ]
      }
    ],
    featuredOrder: 13
  },
  {
    id: "magdaleena-r",
    name: "Magdaleena R",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/14.png",
    domains: ["Public Relations (PR)"],
    reportingTo: "Karthi Balaji (PR)",
    responsibilities: [
      {
        section: "Public Relations Responsibilities",
        items: [
          "Support Executive Karthi Balaji in executing promotional campaigns and physical meet-and-greets to drive event registration.",
          "Assist in identifying potential corporate sponsors and distributing compelling pitches to secure event backing."
        ]
      }
    ],
    featuredOrder: 14
  },
  {
    id: "pranesh-m-s",
    name: "Pranesh MS",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/15.png",
    domains: ["Content"],
    reportingTo: "Deepak B T (Content)",
    responsibilities: [
      {
        section: "Content Responsibilities",
        items: [
          "Support Executive Deepak B T by drafting initial copy for social media platforms and official email correspondence.",
          "Assist in researching and verifying high-impact hashtags (strictly over 1 million existing posts) to ensure maximum algorithmic reach."
        ]
      }
    ],
    featuredOrder: 15
  },
  {
    id: "yashwanth-s",
    name: "Yashwanth S",
    role: "Cell Ambassador",
    category: "AMBASSADOR",
    image: "/team/source/16.png",
    domains: ["Campus Relations & Delegation"],
    reportingTo: "Karthi Balaji (PR)",
    responsibilities: [
      {
        section: "Outreach & Engagement Responsibilities",
        items: [
          "Champion student outreach across diverse departments to drive participation in EDC events and hackathons.",
          "Coordinate on-ground logistics and check-in help desks during cell summits and competitions."
        ]
      }
    ],
    featuredOrder: 16
  }
];

// For backward compatibility
export const team = teamMembers;
