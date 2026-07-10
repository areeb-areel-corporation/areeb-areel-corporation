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
    { id: 3, name: '[Insert Verified Name]', role: 'People & Operations | Chief People and Operations Officer', linkedin: '#' },
    { id: 4, name: '[Insert Verified Name]', role: 'Brand & Strategy | Head of Brand and Marketing Strategy', linkedin: '#' },
    { id: 5, name: '[Insert Verified Name]', role: 'Real Estate Development | Director of Real Estate Development', linkedin: '#' },
    { id: 6, name: '[Insert Verified Name]', role: 'Retail & Supply Chain | Head of Retail and Supply Chain', linkedin: '#' },
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




export const blogDatabase = [
  {
    id: "1",
    tag: "Real Estate",
    date: "June 18, 2026",
    readTime: "5 Min Read",
    title: "Designing Better Urban Living for Lahore's Growing Families",
    excerpt: "Why successful residential development begins with practical planning, community needs and long-term usability.",
    src: "/images/housing-society.png",
  },
  {
    id: "2",
    tag: "Energy Infrastructure",
    date: "May 24, 2026",
    readTime: "4 Min Read",
    title: "From Fuel Station to Integrated Travel Hub",
    excerpt: "How fuel, retail, food, prayer and vehicle-care services can improve the everyday travel experience.",
    src: "/images/petrol pump.png",
  },
  {
    id: "3",
    tag: "Retail Operations",
    date: "April 10, 2026",
    readTime: "6 Min Read",
    title: "Why Convenience Retail Belongs Along the Daily Commute",
    excerpt: "A closer look at how accessible retail services create value for travellers and local communities.",
    src: "/images/mart.png",
  },
  {
    id: "4",
    tag: "Corporate Strategy",
    date: "March 02, 2026",
    readTime: "8 Min Read",
    title: "Dubai Expansion: The New Executive Consulting Division",
    excerpt: "Bridging the gap between local enterprise and global markets from our new headquarters in the UAE.",
    src: "/images/construction.png",
  }
];
