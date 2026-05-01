export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'Custom homes and multi-family residences built with premium materials and meticulous craftsmanship tailored to your vision.',
    icon: 'Home',
  },
  {
    id: 2,
    title: 'Commercial Buildings',
    description: 'Office towers, retail centers, and commercial spaces combining architectural excellence with functional design.',
    icon: 'Building2',
  },
  {
    id: 3,
    title: 'Industrial Facilities',
    description: 'Warehouses, manufacturing plants, and logistics hubs engineered for maximum operational efficiency.',
    icon: 'Factory',
  },
  {
    id: 4,
    title: 'Renovation & Restoration',
    description: 'Breathing new life into existing structures — preserving character while elevating quality and functionality.',
    icon: 'Hammer',
  },
  {
    id: 5,
    title: 'Project Management',
    description: 'End-to-end oversight ensuring every project is delivered on time, within budget, and to exact specification.',
    icon: 'ClipboardList',
  },
  {
    id: 6,
    title: 'Interior Finishing',
    description: 'Premium interior work that transforms raw spaces into refined environments of lasting beauty and comfort.',
    icon: 'Paintbrush',
  },
]

// Unsplash free CDN — append ?auto=format&fit=crop&w=XXX&q=85 when rendering
export const HERO_IMAGE   = 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e'  // Cranes at golden sunset

// 4K page-hero backgrounds (use w=3840 for full 4K)
export const PAGE_HERO_IMAGES = {
  about:    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5', // Construction workers on site
  projects: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', // Looking up at a glass skyscraper
  contact:  'https://images.unsplash.com/photo-1497366216548-37526070297c', // Modern building exterior
  cta:      'https://images.unsplash.com/photo-1504307651254-35680f356dfd', // Active construction site wide
}

export const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',  // Tower crane, low angle
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd',  // Active construction site
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e',     // Construction blueprints & team
  'https://images.unsplash.com/photo-1694521787162-5373b598945c',  // Workers on active build
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Tskneti Hills Residence',
    category: 'Residential',
    location: 'Tskneti, Tbilisi',
    year: '2024',
    area: '850 m²',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', // Modern luxury villa
    featured: true,
  },
  {
    id: 2,
    title: 'Vake Business Center',
    category: 'Commercial',
    location: 'Vake, Tbilisi',
    year: '2023',
    area: '4,200 m²',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e', // Glass office tower
    featured: true,
  },
  {
    id: 3,
    title: 'Batumi Skyline Apartments',
    category: 'Residential',
    location: 'Batumi, Adjara',
    year: '2024',
    area: '12,000 m²',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', // Modern residential high-rise
    featured: true,
  },
  {
    id: 4,
    title: 'Rustavi Industrial Hub',
    category: 'Industrial',
    location: 'Rustavi, Georgia',
    year: '2023',
    area: '8,500 m²',
    // Large warehouse storage facility (confirmed: real warehouse photo)
    image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0',
    featured: false,
  },
  {
    id: 5,
    title: 'Mtatsminda Hotel & Spa',
    category: 'Commercial',
    location: 'Mtatsminda, Tbilisi',
    year: '2022',
    area: '6,300 m²',
    // Modern glass high-rise tower (confirmed: Netherlands glass office tower)
    image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22',
    featured: false,
  },
  {
    id: 6,
    title: 'Kutaisi Office Complex',
    category: 'Commercial',
    location: 'Kutaisi, Georgia',
    year: '2023',
    area: '3,100 m²',
    // Brown concrete modern office building (confirmed: Tempe AZ building)
    image: 'https://images.unsplash.com/photo-1560922604-d08a31f8f7d1',
    featured: false,
  },
  {
    id: 7,
    title: 'Gori Modern Villas',
    category: 'Residential',
    location: 'Gori, Georgia',
    year: '2024',
    area: '2,400 m²',
    // High-rise residential at night with cranes (confirmed: urban night skyline)
    image: 'https://images.unsplash.com/photo-1599995903128-531fc7fb694b',
    featured: false,
  },
  {
    id: 8,
    title: 'Poti Logistics Center',
    category: 'Industrial',
    location: 'Poti, Georgia',
    year: '2022',
    area: '15,000 m²',
    // Tower crane close-up — industrial/construction (confirmed: ESZRBtkQ_f8)
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    featured: false,
  },
]

export const STATS_DATA = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Expert Specialists' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const TEAM_DATA = [
  {
    id: 1,
    name: 'Giorgi Kvirikashvili',
    role: 'CEO & Founder',
    bio: '20+ years leading major construction projects across the South Caucasus region with a vision for sustainable excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 2,
    name: 'Nino Lomidze',
    role: 'Chief Architect',
    bio: 'Award-winning architect with an international portfolio and a philosophy rooted in functional beauty.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  },
  {
    id: 3,
    name: 'Davit Beridze',
    role: 'Head of Engineering',
    bio: 'Structural engineering specialist with 15+ years of experience on landmark residential and commercial projects.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  },
  {
    id: 4,
    name: 'Mariam Jgerenaia',
    role: 'Director of Operations',
    bio: 'Operations leader ensuring every ALBuild project meets the highest standards of precision, safety, and timeliness.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
]

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Irakli Okruashvili',
    company: 'Okruashvili Holdings',
    role: 'CEO',
    text: 'ALBuild Group transformed our vision into reality with remarkable precision. The quality of their work and their professionalism throughout the entire project was simply exceptional.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r1/100/100',
  },
  {
    id: 2,
    name: 'Tamar Khachidze',
    company: 'Khachidze Real Estate',
    role: 'Managing Director',
    text: 'We have collaborated with ALBuild on three major residential developments. Their attention to detail and unwavering commitment to deadlines is unmatched in the Georgian market.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r2/100/100',
  },
  {
    id: 3,
    name: 'Levan Guruli',
    company: 'GurTech Solutions',
    role: 'Founder',
    text: 'Our headquarters was designed and built by ALBuild. They delivered on time, within budget, and the final result genuinely exceeded every expectation we had set.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r3/100/100',
  },
]

export const VALUES_DATA = [
  {
    id: 1,
    title: 'Quality First',
    description: 'Every project reflects our unwavering commitment to superior materials, expert craftsmanship, and rigorous quality control at every stage.',
    icon: 'Star',
  },
  {
    id: 2,
    title: 'Integrity & Trust',
    description: 'Transparent communication, honest pricing, and reliable timelines form the foundation of every client relationship we build.',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'We embrace modern construction technologies and sustainable building methods to deliver structures built for the future.',
    icon: 'Lightbulb',
  },
  {
    id: 4,
    title: 'Safety Culture',
    description: 'The wellbeing of our teams and clients is paramount. We maintain the strictest safety protocols on every site, every day.',
    icon: 'ShieldCheck',
  },
]

export const TIMELINE_DATA = [
  { year: '2009', title: 'Foundation', description: 'ALBuild Group was established in Tbilisi with a team of 8 specialists and a mission to redefine construction standards in Georgia.' },
  { year: '2012', title: 'First Major Commercial Project', description: 'Completed our first large-scale commercial building in Vake district, establishing our reputation for quality and precision.' },
  { year: '2016', title: 'Regional Expansion', description: 'Extended operations to Batumi, Kutaisi, and Rustavi, becoming one of Georgia\'s most recognized construction firms.' },
  { year: '2019', title: '10 Year Anniversary', description: 'Celebrated a decade of excellence with 150+ completed projects and a team grown to 50+ specialists.' },
  { year: '2022', title: 'Sustainability Initiative', description: 'Launched our green building program, integrating sustainable materials and energy-efficient design across all new projects.' },
  { year: '2024', title: 'Present Day', description: 'Over 250 projects delivered, serving clients across all sectors with an unwavering commitment to excellence.' },
]

export const PROJECT_CATEGORIES = ['All', 'Residential', 'Commercial', 'Industrial']

// YouTube video IDs — replace with your actual video IDs
export const VIDEO_DATA = [
  {
    id: 'v1',
    title: 'Our Story: Building Georgia',
    description: 'From a small team of 8 to Georgia\'s leading construction firm — watch how ALBuild Group grew over 15 years of excellence.',
    youtube_id: 'GNTb0cyiP8k',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    duration: '3:42',
  },
  {
    id: 'v2',
    title: 'Construction Process',
    description: 'A behind-the-scenes look at our meticulous construction methodology, from groundbreaking to handover.',
    youtube_id: 'Y5KHqCFTiMI',
    thumbnail: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    duration: '2:18',
  },
  {
    id: 'v3',
    title: 'Featured Project Walkthrough',
    description: 'Step inside the Vake Business Center — our award-winning commercial development in the heart of Tbilisi.',
    youtube_id: 'rdBdWKhHGxA',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    duration: '4:05',
  },
]

export const CONTACT_INFO = {
  address: '24 Rustaveli Avenue, Tbilisi, Georgia 0108',
  phone: '+995 32 123 4567',
  email: 'info@albuildgroup.ge',
  hours: 'Mon – Fri: 9:00 – 18:00',
}
