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
      message: "Engineering the impossible into regional reality. We blueprint future benchmarks, today."
    },
    {
      id: 2,
      name: 'Areel Tahir',
      role: 'CEO | Owner',
      src: '/images/Areel-Tahir.jpg',
      linkedin: 'https://www.linkedin.com/in/areeltahir/',
      message: "Progression is executed, not imagined. We scale limits to build lasting national assets."
    },
  ],
  executives: [
    { id: 3, name: 'Kashif', role: 'Chief Human Resources Officer', linkedin: '#' },
    { id: 4, name: 'Unknown', role: 'Head of Marketing & Strategy', linkedin: '#' },
    { id: 5, name: 'Unknown', role: 'Director, AAA Developments', linkedin: '#' },
    { id: 6, name: 'Unknown', role: 'Head of Retail & Supply Chain', linkedin: '#' },
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
    title: "Pioneering the Future of Ultra-Luxury Urban Living in Lahore",
    excerpt: "How AAA Developments is utilizing AI and sustainable engineering to redefine the residential skyline.",
    src: "/images/housing-society.png",
  },
  {
    id: "2",
    tag: "Energy Infrastructure",
    date: "May 24, 2026",
    readTime: "4 Min Read",
    title: "The Shift to Smart Hubs: Upgrading the National Transit Network",
    excerpt: "Areeb & Areel Corporation announces the expansion of AAA-standard petroleum stations across key logistical routes.",
    src: "/images/petrol pump.png",
  },
  {
    id: "3",
    tag: "Retail Operations",
    date: "April 10, 2026",
    readTime: "6 Min Read",
    title: "Integrating Premium Retail with Daily Commutes",
    excerpt: "The strategic vision behind the Express Smart Mart expansion and how it maximizes consumer convenience.",
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
