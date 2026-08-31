/**
 * Central content object for Kanvi's identity/summary blocks.
 * In the full build this is replaced by a CMS fetch (services/api.js);
 * for the foundation it's static so pages render real content immediately.
 */
export const personalInfo = {
  name: 'Kanvi Panchal',
  role: 'Full Stack Web Developer',
  tagline: 'I build fast, scalable web apps with the MERN stack.',
  summary:
    'Results-driven Full Stack Web Developer with hands-on experience building 10+ live websites and scalable, high-performance web applications using the MERN stack, Next.js, and Firebase. Skilled in REST APIs, authentication systems, and dynamic UIs for e-commerce and business platforms.',
  location: 'Mumbai, India',
  email: 'kanvipanchal2004@gmail.com',
  phone: '+91 8623808507',
  linkedin: 'https://linkedin.com/in/kanvi-panchal-65951a313',
  github: 'https://github.com/dashboard',
  availability: {
    freelance: true,
    contract: true,
    fullTime: true,
    responseTime: 'Usually responds within 24 hours',
  },
  stats: [
    { label: 'Live Websites Shipped', value: '10+' },
    { label: 'CGPA', value: '9.91' },
    { label: 'Since at PTCGRAM', value: 'Feb 2024-Present' },
    { label: 'Core Stack', value: 'MERN' },
  ],
}

export const coreValues = [
  { title: 'Clean Code', description: 'Readable, reusable, and documented - built to be maintained, not just shipped.' },
  { title: 'Performance First', description: 'Every page is optimized for speed, from bundle size to database queries.' },
  { title: 'Client Collaboration', description: 'Close communication from requirements to deployment, no surprises.' },
]
