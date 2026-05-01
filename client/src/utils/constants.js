export const NAV_LINKS = [
  { name: 'მთავარი', path: '/' },
  { name: 'ჩვენს შესახებ', path: '/about' },
  { name: 'პროექტები', path: '/projects' },
  { name: 'კონტაქტი', path: '/contact' },
]

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'საცხოვრებელი მშენებლობა',
    description: 'კერძო სახლები და მრავალბინიანი კომპლექსები, შენდება პრემიუმ მასალებით და ოსტატური ხელოვნებით — თქვენი ხედვის შესაბამისად.',
    icon: 'Home',
  },
  {
    id: 2,
    title: 'კომერციული შენობები',
    description: 'საოფისე კომპლექსები, სავაჭრო ცენტრები და კომერციული სივრცეები — სადაც შერწყმულია არქიტექტურული სრულყოფა და ფუნქციური დიზაინი.',
    icon: 'Building2',
  },
  {
    id: 3,
    title: 'სამრეწველო ობიექტები',
    description: 'საწყობები, სამანქანათმშენებლო ქარხნები და ლოჯისტიკური კვანძები — დაპროექტებული მაქსიმალური ოპერაციული ეფექტიანობისთვის.',
    icon: 'Factory',
  },
  {
    id: 4,
    title: 'რეკონსტრუქცია და რესტავრაცია',
    description: 'არსებულ შენობებს ახალი სიცოცხლის ჩასუნთქვა — ხასიათის შენარჩუნება ხარისხისა და ფუნქციონალობის ამაღლებასთან ერთად.',
    icon: 'Hammer',
  },
  {
    id: 5,
    title: 'პროექტის მართვა',
    description: 'სრული ზედამხედველობა, რომელიც უზრუნველყოფს ყოველი პროექტის ვადაში, ბიუჯეტის ფარგლებში და ზუსტ სპეციფიკაციაში მიწოდებას.',
    icon: 'ClipboardList',
  },
  {
    id: 6,
    title: 'ინტერიერის მოწყობა',
    description: 'პრემიუმ ინტერიერის სამუშაოები, რომლებიც ნედლ სივრცეებს გარდაქმნის დახვეწილ გარემოდ — მდგრადი სილამაზითა და კომფორტით.',
    icon: 'Paintbrush',
  },
]

// Unsplash free CDN — append ?auto=format&fit=crop&w=XXX&q=85 when rendering
export const HERO_IMAGE   = 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e'  // Cranes at golden sunset

// 4K page-hero backgrounds (use w=3840 for full 4K)
export const PAGE_HERO_IMAGES = {
  about:    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
  projects: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  contact:  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  cta:      'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
}

export const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
  'https://images.unsplash.com/photo-1694521787162-5373b598945c',
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'წყნეთის ბორცვების რეზიდენცია',
    category: 'საცხოვრებელი',
    location: 'წყნეთი, თბილისი',
    year: '2024',
    area: '850 მ²',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    featured: true,
  },
  {
    id: 2,
    title: 'ვაკის ბიზნეს ცენტრი',
    category: 'კომერციული',
    location: 'ვაკე, თბილისი',
    year: '2023',
    area: '4 200 მ²',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
    featured: true,
  },
  {
    id: 3,
    title: 'ბათუმის სასახლის აპარტამენტები',
    category: 'საცხოვრებელი',
    location: 'ბათუმი, აჭარა',
    year: '2024',
    area: '12 000 მ²',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    featured: true,
  },
  {
    id: 4,
    title: 'რუსთავის სამრეწველო კვანძი',
    category: 'სამრეწველო',
    location: 'რუსთავი, საქართველო',
    year: '2023',
    area: '8 500 მ²',
    image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0',
    featured: false,
  },
  {
    id: 5,
    title: 'მთაწმინდის სასტუმრო და სპა',
    category: 'კომერციული',
    location: 'მთაწმინდა, თბილისი',
    year: '2022',
    area: '6 300 მ²',
    image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22',
    featured: false,
  },
  {
    id: 6,
    title: 'ქუთაისის საოფისე კომპლექსი',
    category: 'კომერციული',
    location: 'ქუთაისი, საქართველო',
    year: '2023',
    area: '3 100 მ²',
    image: 'https://images.unsplash.com/photo-1560922604-d08a31f8f7d1',
    featured: false,
  },
  {
    id: 7,
    title: 'გორის თანამედროვე ვილები',
    category: 'საცხოვრებელი',
    location: 'გორი, საქართველო',
    year: '2024',
    area: '2 400 მ²',
    image: 'https://images.unsplash.com/photo-1599995903128-531fc7fb694b',
    featured: false,
  },
  {
    id: 8,
    title: 'ფოთის ლოჯისტიკის ცენტრი',
    category: 'სამრეწველო',
    location: 'ფოთი, საქართველო',
    year: '2022',
    area: '15 000 მ²',
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    featured: false,
  },
]

export const STATS_DATA = [
  { value: 15, suffix: '+', label: 'წელი წარმატებით' },
  { value: 250, suffix: '+', label: 'შესრულებული პროექტი' },
  { value: 50, suffix: '+', label: 'ექსპერტი სპეციალისტი' },
  { value: 98, suffix: '%', label: 'კლიენტის კმაყოფილება' },
]

export const TEAM_DATA = [
  {
    id: 1,
    name: 'გიორგი კვირიკაშვილი',
    role: 'აღმასრულებელი დირექტორი და დამფუძნებელი',
    bio: 'სამხრეთ კავკასიაში 20+ წელი მსხვილი სამშენებლო პროექტების ხელმძღვანელობისა და მდგრადი განვითარებისადმი ვალდებულების გამოცდილებით.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 2,
    name: 'ნინო ლომიძე',
    role: 'მთავარი არქიტექტორი',
    bio: 'ჯილდოს მქონე არქიტექტორი საერთაშორისო პორტფოლიოთი, ფილოსოფია დაფუძნებულია ფუნქციურ სილამაზეზე.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  },
  {
    id: 3,
    name: 'დავით ბერიძე',
    role: 'ინჟინერინგის ხელმძღვანელი',
    bio: 'კონსტრუქციული ინჟინერიის სპეციალისტი 15+ წლის გამოცდილებით სანიშნავ საცხოვრებელ და კომერციულ პროექტებზე.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  },
  {
    id: 4,
    name: 'მარიამ ჯღერენაია',
    role: 'ოპერაციების დირექტორი',
    bio: 'ოპერაციების ლიდერი, რომელიც ALBuild-ის ყოველ პროექტზე უზრუნველყოფს სიზუსტის, უსაფრთხოებისა და ვადების უმაღლეს სტანდარტებს.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
]

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'ირაკლი ოქრუაშვილი',
    company: 'ოქრუაშვილი ჰოლდინგი',
    role: 'აღმასრულებელი დირექტორი',
    text: 'ALBuild Group-მა ჩვენი ხედვა სრულყოფილი სიზუსტით გააცოცხლა. მათი სამუშაოს ხარისხი და პროფესიონალიზმი მთელი პროექტის განმავლობაში უბრალოდ განსაკუთრებული იყო.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r1/100/100',
  },
  {
    id: 2,
    name: 'თამარ ხაჩიძე',
    company: 'ხაჩიძე უძრავი ქონება',
    role: 'მართვის დირექტორი',
    text: 'ჩვენ ALBuild-თან ვიმუშავეთ სამ მსხვილ საცხოვრებელ პროექტზე. დეტალებზე ყურადღება და ვადების მიმართ ერთგულება ქართულ ბაზარზე უპირველესია.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r2/100/100',
  },
  {
    id: 3,
    name: 'ლევან გურული',
    company: 'გურტეკ სოლუშენსი',
    role: 'დამფუძნებელი',
    text: 'ჩვენი სათაო ოფისი ALBuild-მა შეიმუშავა და ააშენა. ვადაში, ბიუჯეტის ფარგლებში — და საბოლოო შედეგი ჩვენ ყველა მოლოდინს გადააჭარბა.',
    rating: 5,
    image: 'https://picsum.photos/seed/albuild-r3/100/100',
  },
]

export const VALUES_DATA = [
  {
    id: 1,
    title: 'ხარისხი პირველ რიგში',
    description: 'ყოველი პროექტი ასახავს ჩვენს ურყევ ვალდებულებას პრემიუმ მასალებისადმი, ექსპერტ ხელოსნობასა და მკაცრ ხარისხის კონტროლს — ყოველ ეტაპზე.',
    icon: 'Star',
  },
  {
    id: 2,
    title: 'მთლიანობა და ნდობა',
    description: 'გამჭვირვალე კომუნიკაცია, პატიოსანი ფასები და სანდო ვადები — ეს ყველაფერი ქმნის ყოველი კლიენტთან ურთიერთობის საფუძველს.',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'ინოვაცია',
    description: 'ჩვენ ვიყენებთ თანამედროვე სამშენებლო ტექნოლოგიებს და მდგრად მეთოდებს — ვქმნით სტრუქტურებს, რომლებიც მომავლისათვისაა გათვლილი.',
    icon: 'Lightbulb',
  },
  {
    id: 4,
    title: 'უსაფრთხოების კულტურა',
    description: 'ჩვენი გუნდებისა და კლიენტების კეთილდღეობა უმთავრესია. ყოველ სამუშაო მოედანზე, ყოველდღე ვახორციელებთ ყველაზე მკაცრ უსაფრთხოების სტანდარტებს.',
    icon: 'ShieldCheck',
  },
]

export const TIMELINE_DATA = [
  { year: '2009', title: 'დაფუძნება', description: 'ALBuild Group დაარსდა თბილისში 8 სპეციალისტიანი გუნდით მისიით — ხელახლა განეჩინოს სამშენებლო სტანდარტები საქართველოში.' },
  { year: '2012', title: 'პირველი მსხვილი კომერციული პროექტი', description: 'ვაკის უბანში ავაშენეთ პირველი მსხვილი კომერციული შენობა, რამაც ხარისხისა და სიზუსტის კუთხით ჩვენი რეპუტაცია დაამკვიდრა.' },
  { year: '2016', title: 'რეგიონული გაფართოება', description: 'გავავრცელეთ საქმიანობა ბათუმში, ქუთაისსა და რუსთავში — გახდით საქართველოს ერთ-ერთი ყველაზე სახელგანთქმული სამშენებლო კომპანია.' },
  { year: '2019', title: '10 წლის იუბილე', description: 'სრულყოფის ათი წელი 150+ დასრულებული პროექტით და 50+ სპეციალისტამდე გაზრდილი გუნდით.' },
  { year: '2022', title: 'მდგრადობის ინიციატივა', description: 'გავუშვით მწვანე მშენებლობის პროგრამა — ვაინტეგრირეთ მდგრადი მასალები და ენერგოეფექტური დიზაინი ყველა ახალ პროექტში.' },
  { year: '2024', title: 'დღეს', description: '250-ზე მეტი პროექტი და კვლავ ვიზრდებით — ვემსახურებით კლიენტებს ყველა სექტორში სრულყოფისადმი ურყევი ვალდებულებით.' },
]

export const PROJECT_CATEGORIES = ['ყველა', 'საცხოვრებელი', 'კომერციული', 'სამრეწველო']

export const CONTACT_INFO = {
  address: '24 რუსთაველის გამზირი, თბილისი, საქართველო 0108',
  phone: '+995 32 123 4567',
  email: 'info@albuildgroup.ge',
  hours: 'ორშ – პარ: 9:00 – 18:00',
}

// YouTube video IDs — replace with your actual video IDs
export const VIDEO_DATA = [
  {
    id: 'v1',
    title: 'ჩვენი ისტორია: ვაშენებთ საქართველოს',
    description: '8 სპეციალისტიანი მცირე გუნდიდან საქართველოს წამყვან სამშენებლო კომპანიამდე — ნახეთ ALBuild Group-ის ზრდა სრულყოფის 15 წლის განმავლობაში.',
    youtube_id: 'GNTb0cyiP8k',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    duration: '3:42',
  },
  {
    id: 'v2',
    title: 'სამშენებლო პროცესი',
    description: 'გახსენით კულისები ჩვენი გულდასმული სამშენებლო მეთოდოლოგიის — სამუშაოს დაწყებიდან პროექტის ჩაბარებამდე.',
    youtube_id: 'Y5KHqCFTiMI',
    thumbnail: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    duration: '2:18',
  },
  {
    id: 'v3',
    title: 'გამორჩეული პროექტის ტური',
    description: 'შედით ვაკის ბიზნეს ცენტრში — ჩვენი ჯილდოს მქონე კომერციული განვითარება თბილისის გულში.',
    youtube_id: 'rdBdWKhHGxA',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    duration: '4:05',
  },
]
