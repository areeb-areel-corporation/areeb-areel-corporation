// --- MOCK DATABASE ---



import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";



// Our Database






export const teamData = {
  ceos: [
    {
      id: 1,
      name: 'Areeb Tahir',
      role: 'Chief Executive Officer | Founder',
      src: '/images/Areeb-Tahir.jpg', 
      linkedin: 'https://www.linkedin.com/in/areeb-tahir-866088253/',
      message: "Strong businesses are built by understanding real needs and turning that understanding into responsible action."
    },
    {
      id: 2,
      name: 'Areel Tahir',
      role: 'Chief Executive Officer | Owner',
      src: '/images/Areel-Tahir.jpg',
      linkedin: 'https://www.linkedin.com/in/areeltahir/',
      message: "Progress becomes meaningful when ambition is supported by discipline, trust and lasting value."
    },
  ],
  executives: [
    { id: 3, name: '[Insert Verified Name]', role: 'Chief People and Operations Officer', linkedin: '#' },
    { id: 4, name: '[Insert Verified Name]', role: 'Head of Brand and Marketing Strategy', linkedin: '#' },
    { id: 5, name: '[Insert Verified Name]', role: 'Director of Real Estate Development', linkedin: '#' },
    { id: 6, name: '[Insert Verified Name]', role: 'Head of Retail and Supply Chain', linkedin: '#' },
  ]
};










export const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    href: 'https://www.linkedin.com/company/areeb-areel-corporation/posts/?feedView=all', 
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white' 
  },
  { 
    name: 'Facebook', 
    icon: FaFacebook, 
    href: 'https://www.facebook.com/areebareelcorp/', 
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white' 
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    href: 'https://www.instagram.com/areebareelfillingstation', 
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white' 
  },
  { 
    name: 'YouTube', 
    icon: FaYoutube, 
    href: 'https://www.youtube.com/@AreebAreelFillingStation', 
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white' 
  },
];


type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};



export const blogDatabase = [
  {
    id: "1",
    tag: "Real Estate",
    date: "June 18, 2026",
    readTime: "5 Min Read",
    title: "Designing Better Urban Living for Lahore's Growing Families",
    excerpt: "Why successful residential development begins with practical planning, community needs and long-term usability.",
    src: "/images/sentosa-2.jpeg",
    sections: [
      {
        heading: "Residential Development Begins with Understanding People",
        paragraphs: [
          "A successful housing development is not defined by its exterior appearance alone. Its real value is experienced in the way families move through their homes, use shared spaces and remain connected to the wider city.",
          "For Lahore's growing families, residential planning must respond to practical questions. Are the rooms proportioned for everyday use? Is privacy considered? Can natural light and ventilation reach important areas? Does the layout make efficient use of the available land? Can families access work, education, healthcare and daily services without unnecessary difficulty?",
          "These questions should guide the planning process before visual styling begins.",
        ],
      },
      {
        heading: "Better Use of Space",
        paragraphs: [
          "Smaller residential plots can still provide comfortable living when their layouts are carefully organised.",
          "Efficient planning reduces wasted circulation, improves relationships between rooms and gives each part of the home a clear purpose. Bedrooms require privacy. Living areas should support family interaction. Kitchens need practical movement and storage. Entrances should provide a comfortable transition between public and private areas.",
          "A thoughtful layout often creates more value than unnecessary decorative complexity.",
        ],
      },
      {
        heading: "Architecture with Long-Term Relevance",
        paragraphs: [
          "Architectural trends change, but good proportions and useful spaces remain valuable.",
          "Contemporary elevations can give a home a strong identity, but materials, maintenance requirements and environmental conditions should also influence design decisions. The objective should be to create a residence that continues to look appropriate and function well over time.",
        ],
      },
      {
        heading: "Community Matters",
        paragraphs: [
          "Families experience more than the inside of their homes.",
          "Security planning, circulation, shared spaces, maintenance and opportunities for children and residents to interact all contribute to the quality of community life.",
          "At Naseeb Homes, the wider vision is to combine practical residences with a family-focused environment. Project specifications, availability and payment terms should always be confirmed through official documentation.",
        ],
      },
      {
        heading: "Building for Everyday Life",
        paragraphs: [
          "Better urban living begins when development decisions are made around real people rather than marketing language.",
          "A home should support routines, relationships, privacy and future needs. When these priorities guide design and development, residential property becomes more than a physical structure - it becomes a place where families can build their lives.",
        ],
      },
    ] satisfies BlogSection[],
  },
  {
    id: "2",
    tag: "Energy Infrastructure",
    date: "May 24, 2026",
    readTime: "4 Min Read",
    title: "From Fuel Station to Integrated Travel Hub",
    excerpt: "How fuel, retail, food, prayer and vehicle-care services can improve the everyday travel experience.",
    src: "/images/petrol pump.png",
    sections: [
      {
        heading: "The Role of a Modern Fuel Station Is Changing",
        paragraphs: [
          "For many customers, a fuel station is no longer only a place to fill a vehicle.",
          "Commuters, families and professional drivers increasingly expect clean facilities, quick retail access, refreshments, prayer spaces and basic vehicle support within the same location.",
          "This shift is transforming traditional fuel stations into integrated travel hubs.",
        ],
      },
      {
        heading: "Convenience Reduces Unnecessary Stops",
        paragraphs: [
          "A traveller may need fuel, drinking water, food, a washroom, prayer facilities or tyre support during one journey.",
          "When these services are available at a single accessible location, customers can save time and continue travelling with fewer interruptions.",
          "The benefit is particularly relevant for families and drivers travelling longer distances.",
        ],
      },
      {
        heading: "Responsible Fuel Operations Remain the Foundation",
        paragraphs: [
          "Additional services can improve the customer experience, but fuel operations remain the core responsibility.",
          "Calibrated dispensing, clear prices, responsible storage, trained staff and compliance with relevant standards are essential to customer trust.",
          "Claims concerning fuel purity, measurement accuracy or quality should always be supported by appropriate testing, inspection and operational controls.",
        ],
      },
      {
        heading: "Supporting Drivers Beyond Fuel",
        paragraphs: [
          "Tyre-pressure checks, puncture repair and basic maintenance can help drivers identify common issues before returning to the road.",
          "These services do not replace a complete mechanical inspection, but they can provide useful support during everyday journeys.",
        ],
      },
      {
        heading: "Creating a Better Stop",
        paragraphs: [
          "A well-operated travel hub should feel clean, organised and easy to navigate.",
          "Clear signage, maintained washrooms, suitable lighting, efficient retail service and accessible prayer facilities all influence how customers experience the location.",
          "The future of fuel retail will belong to operators who understand that customers are not only purchasing fuel. They are trusting a facility to support part of their journey.",
        ],
      },
    ] satisfies BlogSection[],
  },
  {
    id: "3",
    tag: "Retail Operations",
    date: "April 10, 2026",
    readTime: "6 Min Read",
    title: "Why Convenience Retail Belongs Along the Daily Commute",
    excerpt: "A closer look at how accessible retail services create value for travellers and local communities.",
    src: "/images/mart.png",
    sections: [
      {
        heading: "Retail Is Most Valuable When It Is Accessible",
        paragraphs: [
          "Convenience retail is built around a simple customer need: access to useful products without unnecessary delay.",
          "At fuel stations and travel facilities, customers may need beverages, snacks, personal-care products or everyday travel items. A well-positioned mart allows them to purchase these essentials while completing an existing journey.",
        ],
      },
      {
        heading: "Product Selection Should Match the Customer",
        paragraphs: [
          "A successful convenience store does not need to stock everything.",
          "Its product mix should reflect the people using the location, the time they spend there and the needs most likely to occur during travel.",
          "Cold beverages, water, snacks, basic hygiene products, mobile accessories and selected automotive items may all have practical relevance.",
          "Inventory should be reviewed regularly so that shelf space remains focused on products customers actually purchase.",
        ],
      },
      {
        heading: "Cleanliness Influences Trust",
        paragraphs: [
          "Customers often judge an entire facility through small details.",
          "Clean floors, organised shelves, visible prices and maintained washrooms can create confidence. Poorly managed retail areas can damage the perception of the wider station, regardless of the quality of other services.",
          "Consistency is therefore more important than unnecessary luxury.",
        ],
      },
      {
        heading: "Retail and Hospitality Can Work Together",
        paragraphs: [
          "Food, seating and refreshments can encourage travellers to pause comfortably, particularly during longer journeys.",
          "However, food-service claims and franchise branding should only be used when current operating agreements and hygiene standards can be confirmed.",
        ],
      },
      {
        heading: "Everyday Convenience Creates Repeat Visits",
        paragraphs: [
          "Customers often return to locations that feel dependable.",
          "When products are available, service is efficient and the environment is maintained, a routine fuel stop can become a preferred destination.",
          "Convenience retail works best when it respects the customer's time and delivers the essential experience consistently.",
        ],
      },
    ] satisfies BlogSection[],
  },
  {
    id: "4",
    tag: "Corporate Strategy",
    date: "March 02, 2026",
    readTime: "8 Min Read",
    title: "Preparing for UAE Market Entry: What Pakistani Businesses Should Consider",
    excerpt: "Key considerations for Pakistani entrepreneurs exploring UAE licensing, setup routes, documentation and professional advisory support.",
    src: "/images/dubai-pic.jpg",
    sections: [
      {
        heading: "Start with the Business Activity",
        paragraphs: [
          "Before selecting a licence, jurisdiction or office, entrepreneurs should clearly define what the business will do.",
          "The intended activity can affect licensing requirements, ownership options, office needs and the authorities involved in the setup process.",
          "A clear activity description also makes conversations with professional advisers more productive.",
        ],
      },
      {
        heading: "Understand Different Setup Routes",
        paragraphs: [
          "The UAE offers multiple company-formation routes, including mainland and free-zone structures.",
          "Neither option is automatically better for every business. The appropriate route depends on factors such as:",
          "Businesses should compare the full operational implications rather than selecting an option based only on an advertised starting price.",
        ],
        list: [
          "Intended customers",
          "Nature of the business activity",
          "Ownership requirements",
          "Physical office needs",
          "Staffing plans",
          "Geographic operating scope",
          "Expected setup and renewal costs",
        ],
      },
      {
        heading: "Prepare Documentation Early",
        paragraphs: [
          "Setup processes commonly require identification, proof of address, corporate documents and information about shareholders or managers.",
          "Exact requirements vary according to the selected activity, jurisdiction and applicant profile.",
          "Preparing accurate documentation early can reduce avoidable delays.",
        ],
      },
      {
        heading: "Consider Ongoing Costs",
        paragraphs: [
          "The initial setup cost is only one part of the decision.",
          "Entrepreneurs should also consider renewals, visas, office expenses, accounting, tax compliance, insurance, banking requirements and staffing.",
          "A realistic budget should include both establishment and operating costs.",
        ],
      },
      {
        heading: "Use Qualified Professional Advice",
        paragraphs: [
          "Licensing, immigration, taxation, banking and legal matters are regulated areas.",
          "Businesses should obtain advice from appropriately qualified professionals and confirm current requirements with relevant UAE authorities and institutions.",
          "No consultant can guarantee a licence, visa, residency approval or bank account.",
        ],
      },
      {
        heading: "Enter with a Practical Plan",
        paragraphs: [
          "Successful market entry begins with research, realistic expectations and a clear understanding of the customer.",
          "Areeb & Areel Corporation provides initial planning and coordination support for businesses exploring opportunities between Pakistan and the UAE. Specialist matters are referred to relevant qualified professionals.",
        ],
      },
    ] satisfies BlogSection[],
  },
];
