export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Academics' | 'Examinations' | 'Holidays' | 'Events' | 'General';
  isNew?: boolean;
  fileSize: string;
  content: string;
  targetGrades: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Cultural' | 'Academics' | 'Celebrations';
  imageUrl: string;
  caption: string;
  year: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  specifications: string;
}

export const SCHOOL_INFO = {
  name: 'FortuneSchool',
  fullName: 'FortuneSchool, New Delhi',
  motto: 'In Veritate et Sapientia (In Truth & Wisdom)',
  affiliation: 'Affiliated to Central Board of Secondary Education (CBSE), New Delhi',
  affiliationNo: '2730048',
  schoolCode: '85210',
  foundedYear: '1970',
  address: 'Malcha Marg, Chanakyapuri, New Delhi - 110021, India',
  phone: '+91-11-26872990 / +91-11-26873114',
  tollFree: '1800-112-9900',
  email: 'office@fortuneschool.edu.in',
  admissionsEmail: 'admissions@fortuneschool.edu.in',
  principalName: 'Dr. Evelyn R. Vance, Ph.D., M.Ed.',
  principalDesignation: 'Principal & Executive Director',
  timings: 'Monday - Friday: 7:45 AM - 2:00 PM | Saturday (Office only): 8:30 AM - 12:30 PM',
  visitingHours: 'Parents visiting hours: 8:30 AM - 10:00 AM (By prior appointment)',
};

export const NOTICES: NoticeItem[] = [
  {
    id: 'cir-2025-01',
    title: 'Admission Registration Open for Nursery (Pre-School) & Grade XI (2025-26 Session)',
    date: 'Oct 18, 2026',
    category: 'Admissions',
    isNew: true,
    fileSize: '1.4 MB',
    content: 'Online registration for Pre-School (Nursery) and Grade XI (Science, Commerce, and Humanities streams) is now live on the school web portal. Parents are advised to submit forms before the specified deadline. Upload attested birth certificate and proof of residence.',
    targetGrades: 'Pre-School, Grade XI',
  },
  {
    id: 'cir-2025-02',
    title: 'Datesheet for Mid-Term Assessment & Pre-Board Examinations (Grades IX - XII)',
    date: 'Oct 15, 2026',
    category: 'Examinations',
    isNew: true,
    fileSize: '820 KB',
    content: 'The detailed date sheet for Mid-Term evaluations for Grades IX to XII has been finalized. Reporting time is 7:45 AM. Admit cards must be presented during every exam. Hall tickets will be issued through student portal.',
    targetGrades: 'Grades IX to XII',
  },
  {
    id: 'cir-2025-03',
    title: 'FortuneSchool Inter-School Model United Nations (FS-MUN 2026) Delegate Registrations',
    date: 'Oct 12, 2026',
    category: 'Events',
    isNew: true,
    fileSize: '2.1 MB',
    content: 'The 14th Annual FortuneSchool Model United Nations will be convened on November 14-16, 2026. Committees include UNSC, UNHRC, Lok Sabha, and Historic Crisis Committee. Schools across Delhi NCR are invited.',
    targetGrades: 'Grades VIII to XII',
  },
  {
    id: 'cir-2025-04',
    title: 'Autumn Break & Diwali Holiday Notification for Kindergarten to Grade XII',
    date: 'Oct 08, 2026',
    category: 'Holidays',
    isNew: false,
    fileSize: '410 KB',
    content: 'The school shall remain closed for Autumn & Diwali festivities from October 28 to November 03, 2026. The administrative office will resume operations on November 04, 2026 at 8:00 AM.',
    targetGrades: 'All Grades (K-12)',
  },
  {
    id: 'cir-2025-05',
    title: 'CBSE Science & Innovation Exhibition 2026 - Zonal Level Selections',
    date: 'Sep 29, 2026',
    category: 'Academics',
    isNew: false,
    fileSize: '950 KB',
    content: 'Congratulations to our junior and senior robotics teams for qualifying for the National Round of CBSE Science Exhibition held at Siri Fort Auditorium. Mentors and students to report for the briefing.',
    targetGrades: 'Grades VI to X',
  },
  {
    id: 'cir-2025-06',
    title: 'Mandatory Advisory Regarding Seasonal Health Protocols & Air Quality Index Measures',
    date: 'Sep 22, 2026',
    category: 'General',
    isNew: false,
    fileSize: '670 KB',
    content: 'In compliance with Directorate of Education guidelines, outdoor physical drills will be scheduled during optimal AQI hours. All classrooms are equipped with HEPA filtration units. Adequate hydration is recommended.',
    targetGrades: 'All Students & Staff',
  },
  {
    id: 'cir-2025-07',
    title: 'Annual Sports Conclave & Track and Field Championship 2026',
    date: 'Sep 15, 2026',
    category: 'Events',
    isNew: false,
    fileSize: '1.8 MB',
    content: 'Annual Athletic Meet heats and house selections will commence next week across Ruby, Sapphire, Emerald, and Topaz houses. Parents are cordially invited for the Grand Finale.',
    targetGrades: 'Grades III to XII',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: '14th Annual FS-MUN (Model United Nations)',
    date: 'Nov 14 - 16, 2026',
    time: '8:30 AM - 4:30 PM',
    venue: 'Auditorium & Conference Suites',
    category: 'Symposium',
    description: 'Premier diplomacy and global policy debating conference welcoming 45 delegations from across the country.',
  },
  {
    id: 'evt-2',
    title: 'Annual Inter-House Sports Conclave & Marathon',
    date: 'Nov 28, 2026',
    time: '8:00 AM - 2:00 PM',
    venue: 'Main Athletic Grounds & Track',
    category: 'Sports',
    description: 'Track and field competitions, synchronized march past, gymnastics, and grand relay finals.',
  },
  {
    id: 'evt-3',
    title: 'STEAM & Artificial Intelligence Expo 2026',
    date: 'Dec 08, 2026',
    time: '9:00 AM - 3:00 PM',
    venue: 'Tinkering Lab & Senior Quadrangle',
    category: 'Academics',
    description: 'Interactive working models, robotic rovers, green tech solutions, and coding challenge presentations.',
  },
  {
    id: 'evt-4',
    title: 'Christmas Carol Evening & Winter Festive Gala',
    date: 'Dec 22, 2026',
    time: '5:30 PM - 8:00 PM',
    venue: 'Open-Air Amphitheatre',
    category: 'Cultural',
    description: 'Melodious choir performances, orchestra symphony, nativity tableau, and student charity drive.',
  },
];

export const HIGHLIGHTS = [
  {
    metric: '55+',
    label: 'Years of Scholastic Glory',
    detail: 'Upholding values, moral integrity, and progressive education since 1970.',
  },
  {
    metric: '100%',
    label: 'CBSE Board Results',
    detail: 'Consistently ranked among the top schools with 82% students scoring distinction.',
  },
  {
    metric: '18 Acres',
    label: 'Lush Green Diplomatic Enclave',
    detail: 'State-of-the-art campus equipped with Olympic standard courts and clean green tech.',
  },
  {
    metric: '1:14',
    label: 'Teacher-Student Ratio',
    detail: 'Individual attention, mentor support, and personalized learning trajectories.',
  },
];

export const HOUSES = [
  {
    name: 'Ruby House',
    motto: 'Courage & Zeal',
    color: 'from-rose-600 to-red-800',
    accent: '#dc2626',
    symbol: 'Shield of Valor',
    description: 'Represents fearlessness, determination, and fiery passion in sports and academic leadership.',
  },
  {
    name: 'Sapphire House',
    motto: 'Truth & Loyalty',
    color: 'from-blue-600 to-indigo-900',
    accent: '#2563eb',
    symbol: 'Falcon of Wisdom',
    description: 'Embodies integrity, steadfast moral rectitude, intellectual depth, and serene resilience.',
  },
  {
    name: 'Emerald House',
    motto: 'Honor & Growth',
    color: 'from-emerald-600 to-teal-900',
    accent: '#059669',
    symbol: 'Oak of Endurance',
    description: 'Stands for vitality, environmental stewardship, empathy, and continuous self-transcendence.',
  },
  {
    name: 'Topaz House',
    motto: 'Knowledge & Brilliance',
    color: 'from-amber-500 to-yellow-700',
    accent: '#d97706',
    symbol: 'Torch of Enlightenment',
    description: 'Radiates creativity, scientific temper, artistic dynamism, and golden sportsmanship.',
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'smart-classrooms',
    name: 'Interactive Smart Classrooms',
    tagline: 'Digitally empowered multimedia pedagogy',
    description: 'All classrooms from Kindergarten to Grade XII feature interactive 85" 4K digital smartboards, ergonomic modular seating, acoustic paneling, and HEPA air purifying climate systems.',
    features: ['85-inch 4K Interactive Panels', 'Air Purification Units', 'Ergonomic Posture Seating', 'High-Speed Wi-Fi 6 Network'],
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    specifications: '72 Multimedia Classrooms, 3500+ student capacity',
  },
  {
    id: 'science-labs',
    name: 'Advanced Science & STEAM Labs',
    tagline: 'Fostering inquiry-led scientific exploration',
    description: 'Dedicated spacious research laboratories for Physics, Chemistry, Biology, and Biotechnology built to exceed international safety regulations with specialized eyewash stations and safety hoods.',
    features: ['Compound & Binocular Digital Microscopes', 'Spectrophotometers & Incubators', 'Precision Analytical Balances', 'Safety Fume Hoods & Fire Suppression'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    specifications: '4 specialized discipline labs accommodating 45 students each',
  },
  {
    id: 'robotics-tinkering',
    name: 'Atal Tinkering & Robotics Studio',
    tagline: 'Empowering future innovators, coders, and makers',
    description: 'Equipped with 3D printers, laser cutters, Arduino microcontrollers, Raspberry Pi workstations, and AI vision kits to foster practical engineering problem-solving.',
    features: ['Dual Extruder 3D Printers', 'Drone Assembly & Flight Testing', 'IoT & Sensor Modules', 'VEX & LEGO Robotics Kits'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    specifications: '3000 sq.ft state-of-the-art incubation hub',
  },
  {
    id: 'library',
    name: 'The Central Library & Knowledge Center',
    tagline: 'A treasure of literature, journals, and digital archives',
    description: 'Houses over 45,000 volumes across fiction, reference encyclopedia, peer-reviewed journals, and subscriptions to JSTOR and British Council Digital Library.',
    features: ['45,000+ Physical Print Titles', 'Kindle e-Reader Stations', 'Quiet Research Carrels', 'Storytelling Pod for Juniors'],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    specifications: 'Two-tier library with 200 reading stations',
  },
  {
    id: 'sports-complex',
    name: 'Sports Arena & Aquatic Complex',
    tagline: 'Nurturing champions and promoting fitness',
    description: 'An all-weather heated semi-Olympic 25m swimming pool, full-size synthetic turf football pitch, 400m synthetic running track, wooden badminton courts, and floodlit tennis courts.',
    features: ['25m Heated Swimming Pool', 'FIFA Standard Turf Football Field', '4 Synthetic Tennis Courts', 'Indoor Table Tennis & Squash Arena'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    specifications: '7.5-acre dedicated athletic zone with certified NIS coaches',
  },
  {
    id: 'auditorium',
    name: 'Dr. Radhakrishnan Auditorium & Arts Pavilion',
    tagline: 'Celebrating dramatic arts, music, and grand convocations',
    description: 'A 1,200-seat acoustically treated auditorium with motorized stage lighting, Dolby surround sound, green rooms, and orchestra pit for theatre and recitals.',
    features: ['1,200 Tiered Pushback Seats', 'Motorized Cyclorama & Light Trusses', 'Steinway Grand Piano', 'Digital Broadcast Studio'],
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    specifications: 'Acoustic rating STC 55 with climate control',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Annual Day Pageant "Udaan"',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Grade IX and X students performing the classical symphony choreography.',
    year: '2026',
  },
  {
    id: 'gal-2',
    title: 'Inter-School Football Championship Finals',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80',
    caption: 'FortuneSchool senior girls football team lifting the Zonal Gold Trophy.',
    year: '2026',
  },
  {
    id: 'gal-3',
    title: 'Senior Chemistry Lab Practical Investigations',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Students conducting titration analysis and volumetric assays.',
    year: '2026',
  },
  {
    id: 'gal-4',
    title: 'Lush Campus Quadrangle in Autumn Bloom',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    caption: 'The historical colonial stone facade and botanical garden.',
    year: '2026',
  },
  {
    id: 'gal-5',
    title: 'Independence Day Tricolor Flag Hoisting Ceremony',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80',
    caption: 'NCC cadet squad presenting the guard of honour to the Principal.',
    year: '2026',
  },
  {
    id: 'gal-6',
    title: 'Robotics Team at the National STEM Challenge',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    caption: 'Autonomous obstacle navigation robot built by Grade XI engineers.',
    year: '2026',
  },
  {
    id: 'gal-7',
    title: 'Inter-House Swimming Gala - 100m Butterfly Stroke',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sapphire House swimmer setting a new inter-school record.',
    year: '2026',
  },
  {
    id: 'gal-8',
    title: 'Junior Wing Creative Clay & Canvas Art Workshop',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80',
    caption: 'Budding junior artists exploring watercolours and pottery sculpting.',
    year: '2026',
  },
  {
    id: 'gal-9',
    title: 'Model United Nations General Assembly in Session',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Delegates deliberating climate action resolutions at FS-MUN.',
    year: '2026',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Evelyn R. Vance',
    role: 'Principal & Executive Director',
    department: 'Administration & Policy',
    qualification: 'Ph.D. in Educational Leadership, M.Ed., Harvard Alum',
    experience: '28+ Years in Education',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-2',
    name: 'Prof. Rajeshwar K. Sharma',
    role: 'Vice Principal & Head of Senior Wing',
    department: 'Mathematics & STEM',
    qualification: 'M.Sc. Mathematics, B.Ed., CBSE Master Trainer',
    experience: '22+ Years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-3',
    name: 'Mrs. Margaret D’Souza',
    role: 'Headmistress (Middle Wing)',
    department: 'English & Humanities',
    qualification: 'M.A. English Literature, M.Ed.',
    experience: '19+ Years',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-4',
    name: 'Mrs. Sunita Chawla',
    role: 'Headmistress (Primary & Pre-School)',
    department: 'Early Childhood Education',
    qualification: 'M.A. Child Psychology, Montessori Certified',
    experience: '17+ Years',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-5',
    name: 'Dr. Amitabh Roy',
    role: 'Post Graduate Teacher (PGT)',
    department: 'Physics & Robotics',
    qualification: 'Ph.D. in Applied Physics, CSIR-NET',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-6',
    name: 'Dr. Shalini Mukhopadhyay',
    role: 'Post Graduate Teacher (PGT)',
    department: 'Biology & Life Sciences',
    qualification: 'M.Sc. Biotech, Ph.D., B.Ed.',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=600&q=80',
  },
];

export const FAQS = [
  {
    q: 'What is the minimum age criterion for Nursery (Pre-School) admission for 2025-26?',
    a: 'As per the Directorate of Education (DoE) guidelines, children must be at least 3 years of age as of March 31, 2025 (born between April 1, 2021 and March 31, 2022). A 30-day relaxation is considered by written application.',
  },
  {
    q: 'What streams are offered at FortuneSchool in Senior Secondary (Grades XI & XII)?',
    a: 'We offer three distinct CBSE streams: 1) Science (Physics, Chemistry, with Mathematics / Biology / Computer Science), 2) Commerce (Accountancy, Business Studies, Economics, Mathematics / Applied Math), and 3) Humanities (History, Political Science, Psychology, Sociology, Legal Studies, Economics).',
  },
  {
    q: 'Does the school provide air-conditioned GPS-monitored bus transportation?',
    a: 'Yes. FortuneSchool operates a dedicated fleet of 35+ speed-governed, GPS-enabled buses with certified CCTV cameras, female attendants on every route, and real-time app tracking for parents across South, Central, West, and East Delhi.',
  },
  {
    q: 'What is the point system criteria for General Category Pre-School admissions?',
    a: 'Points are allocated transparently according to DoE norms: Neighborhood / Distance (up to 70 points), Sibling currently studying in FortuneSchool (20 points), and Alumni wards (10 points).',
  },
  {
    q: 'How can parents track student academic progress and fee dues?',
    a: 'FortuneSchool provides an integrated Parent Portal and Mobile App where attendance, homework, report cards, fee receipts, and teacher remarks are updated in real-time.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Rohini Sengupta',
    role: 'Parent of Ananya (Grade X)',
    quote: 'FortuneSchool provides that rare blend of scholastic rigor and convent ethos. The discipline, values, and individual attention my daughter receives have shaped her into a confident, compassionate young orator.',
  },
  {
    name: 'Vikramaditya Oberoi',
    role: 'Alum (Batch of 2014) • Vice President, Global Tech',
    quote: 'The leadership grounding and ethical compass instilled in me at FortuneSchool during our debates, MUNs, and sports championships remain the cornerstone of my professional success today.',
  },
  {
    name: 'Sr. Mary Grace, CSST',
    role: 'Former Provincial Counselor',
    quote: 'May this institution always remain a lighthouse of truth, service, and excellence for the thousands of young minds that pass through its sacred gates.',
  },
];

export const MOCK_TC_RECORDS = [
  {
    tcNo: 'FS/TC/2026/041',
    studentName: 'Aarav Malhotra',
    admissionNo: 'ADM-2019-1422',
    fatherName: 'Rajesh Malhotra',
    motherName: 'Meenakshi Malhotra',
    gradeLastStudied: 'Grade X-B',
    dateOfIssue: '04-Apr-2026',
    reason: 'Parent transfer to Mumbai',
    status: 'Verified & Issued',
  },
  {
    tcNo: 'FS/TC/2026/042',
    studentName: 'Zoya Fatima Khan',
    admissionNo: 'ADM-2021-2098',
    fatherName: 'Dr. Tariq Khan',
    motherName: 'Farhana Khan',
    gradeLastStudied: 'Grade VII-A',
    dateOfIssue: '18-May-2026',
    reason: 'Higher studies relocation',
    status: 'Verified & Issued',
  },
  {
    tcNo: 'FS/TC/2026/043',
    studentName: 'Devansh Singhal',
    admissionNo: 'ADM-2018-0932',
    fatherName: 'Sanjay Singhal',
    motherName: 'Preeti Singhal',
    gradeLastStudied: 'Grade XII-Science',
    dateOfIssue: '22-Jun-2026',
    reason: 'Course completed (Class XII Pass)',
    status: 'Verified & Issued',
  },
];
