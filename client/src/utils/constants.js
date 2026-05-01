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

// ─── Confirmed Unsplash CDN base URLs (extracted from og:image on each photo page) ───
// Append  ?auto=format&fit=crop&w=XXX&q=85  when rendering
export const HERO_IMAGE    = 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e'  // Cranes at golden sunset
export const ABOUT_IMAGES  = [
  'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',            // Tower crane, low angle
  'https://plus.unsplash.com/premium_photo-1682148826211-99809e7034eb',      // Construction site at dusk
  'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c',      // Construction professionals on site
  'https://images.unsplash.com/photo-1694521787162-5373b598945c',            // Workers on active build
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Tskneti Hills Residence',
    category: 'Residential',
    location: 'Tskneti, Tbilisi',
    year: '2024',
    area: '850 m²',
    // Luxury house with pool (confirmed: premium Unsplash residential)
    image: 'https://plus.unsplash.com/premium_photo-1694475117121-0c14f8ddf7bb',
    featured: true,
  },
  {
    id: 2,
    title: 'Vake Business Center',
    category: 'Commercial',
    location: 'Vake, Tbilisi',
    year: '2023',
    area: '4,200 m²',
    // Two tall office towers with greenery (confirmed: premium Unsplash office buildings)
    image: 'https://plus.unsplash.com/premium_photo-1676357175446-8e85f2205ea6',
    featured: true,
  },
  {
    id: 3,
    title: 'Batumi Skyline Apartments',
    category: 'Residential',
    location: 'Batumi, Adjara',
    year: '2024',
    area: '12,000 m²',
    // Modern residential building 3D-render / architectural render (confirmed)
    image: 'https://images.unsplash.com/photo-1661883964999-c1bcb57a7357',
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
    image: 'https://picsum.photos/seed/albuild-t1/400/400',
  },
  {
    id: 2,
    name: 'Nino Lomidze',
    role: 'Chief Architect',
    bio: 'Award-winning architect with an international portfolio and a philosophy rooted in functional beauty.',
    image: 'https://picsum.photos/seed/albuild-t2/400/400',
  },
  {
    id: 3,
    name: 'Davit Beridze',
    role: 'Head of Engineering',
    bio: 'Structural engineering specialist with 15+ years of experience on landmark residential and commercial projects.',
    image: 'https://picsum.photos/seed/albuild-t3/400/400',
  },
  {
    id: 4,
    name: 'Mariam Jgerenaia',
    role: 'Director of Operations',
    bio: 'Operations leader ensuring every ALBuild project meets the highest standards of precision, safety, and timeliness.',
    image: 'https://picsum.photos/seed/albuild-t4/400/400',
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

export const CONTACT_INFO = {
  address: '24 Rustaveli Avenue, Tbilisi, Georgia 0108',
  phone: '+995 32 123 4567',
  email: 'info@albuildgroup.ge',
  hours: 'Mon – Fri: 9:00 – 18:00',
}
