export interface Qualification {
  id: string;
  level: 'university' | 'secondary';
  qualification: string;
  shortLabel: string;
  institute: string;
  boardOrUniversity: string;
  scoreLabel: string;
  scoreValue: string;
  yearOfPassing: string;
  location: string;
  summary: string;
}

export interface TechnicalSkill {
  id: string;
  name: string;
  category: string;
  focusLabel: string;
  summary: string;
  competencies: string[];
}

export interface KeyStrength {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const RESUME_PDF_PATH = '/assets/aistudio/KARNAPU_LOSHINI_Resume_d3f2bb46.pdf';

export const PROFILE = {
  fullName: 'Karnapu Loshini',
  signature: 'K. Loshini',
  roleLine: 'B.Tech. Undergraduate',
  institutionLine: 'SITAM College · JNTUGV, Vizianagaram',
  email: 'loshinikarnapu@gmail.com',
  phone: '7898443471',
  address: 'Door No. 8-22-26/A, Balaji Nagar, Vizianagaram (District), Andhra Pradesh',
  shortLocation: 'Vizianagaram, Andhra Pradesh',
  dob: '14-02-2005',
  dobReadable: '14 February 2005',
  fatherName: 'Karnapu Adinarayana',
  motherName: 'Karanapu Bangaru Chitti',
  languages: ['English', 'Telugu'],
  hobbies: ['Listening to Music', 'Learning New Things'],
  careerObjective:
    'To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction and self-development and help me to achieve personal as well as organizational goals.',
  declaration:
    'I hereby declare that the above information is true to the best of my knowledge and belief and I bear the responsibility for the correctness of the above-mentioned particulars.',
  declarationPlace: 'Vizianagaram',
};

export const SNAPSHOT_METRICS = [
  {
    value: '10.0',
    label: 'SSC Grade Point',
    context: 'Board of SSC Education, AP · 2021',
  },
  {
    value: '86.8%',
    label: 'Intermediate Score',
    context: 'Board of Intermediate Education, AP · 2023',
  },
  {
    value: '7.0',
    label: 'B.Tech. CGPA',
    context: 'JNTUGV, Vizianagaram · Pursuing',
  },
  {
    value: '2',
    label: 'Languages Known',
    context: 'English & Telugu',
  },
];

export const QUALIFICATIONS: Qualification[] = [
  {
    id: 'btech',
    level: 'university',
    qualification: 'Bachelor of Technology (B.Tech.)',
    shortLabel: 'B.Tech.',
    institute: 'SITAM College, Vizianagaram',
    boardOrUniversity: 'JNTUGV, Vizianagaram',
    scoreLabel: 'CGPA (till date)',
    scoreValue: '7.0',
    yearOfPassing: 'Pursuing',
    location: 'Vizianagaram, AP',
    summary:
      'Undergraduate engineering studies under Jawaharlal Nehru Technological University-Gurajada Vizianagaram (JNTUGV), building foundational problem-solving skills in C, Python, and structured documentation.',
  },
  {
    id: 'intermediate',
    level: 'secondary',
    qualification: 'Intermediate (10+2)',
    shortLabel: 'Intermediate',
    institute: 'Srinivasa Junior College, Vizianagaram',
    boardOrUniversity: 'Board of Intermediate Education, AP',
    scoreLabel: 'Percentage',
    scoreValue: '86.8%',
    yearOfPassing: '2023',
    location: 'Vizianagaram, AP',
    summary:
      'Completed higher secondary education under the Andhra Pradesh Board of Intermediate Education with 86.8%, strengthening analytical reasoning and quantitative fundamentals.',
  },
  {
    id: 'ssc',
    level: 'secondary',
    qualification: 'Secondary School Certificate (SSC)',
    shortLabel: 'SSC',
    institute: 'New Central School, Vizianagaram',
    boardOrUniversity: 'Board of SSC Education, AP',
    scoreLabel: 'GPA',
    scoreValue: '10.0',
    yearOfPassing: '2021',
    location: 'Vizianagaram, AP',
    summary:
      'Graduated with a perfect 10.0 GPA under the Board of Secondary Education, Andhra Pradesh, demonstrating consistent academic discipline.',
  },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    id: 'c-lang',
    name: 'C Programming',
    category: 'Systems & Procedural Logic',
    focusLabel: 'Structured Programming',
    summary:
      'Solid grounding in procedural programming fundamentals, memory-conscious logic, control structures, arrays, functions, and modular problem solving.',
    competencies: [
      'Control flow, loops, and modular functions',
      'Arrays, strings, pointers, and structured data',
      'Algorithmic thinking and dry-run debugging',
    ],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'General-Purpose Scripting',
    focusLabel: 'Clean Readable Code',
    summary:
      'Practical familiarity with Python syntax, data structures, iterative logic, and rapid problem formulation for academic exercises and structured tasks.',
    competencies: [
      'Lists, dictionaries, sets, and string processing',
      'Readable functions and file-handling workflows',
      'Rapid prototyping and logical validation',
    ],
  },
  {
    id: 'ms-office',
    name: 'M.S. Office',
    category: 'Documentation & Productivity',
    focusLabel: 'Reporting & Presentation',
    summary:
      'Effective command of Microsoft Office suite for structured academic reporting, tabular data organization, formatting, and clear presentation materials.',
    competencies: [
      'Microsoft Word for formal documentation & resumes',
      'Microsoft Excel for organized tables & calculations',
      'Microsoft PowerPoint for structured project briefings',
    ],
  },
];

export const KEY_STRENGTHS: KeyStrength[] = [
  {
    id: 'self-motivated',
    index: '01',
    title: 'Self-Motivated',
    description:
      'Driven by personal curiosity and steady self-development—consistently taking initiative to learn new concepts and follow through on commitments without external prompting.',
  },
  {
    id: 'collaboration',
    index: '02',
    title: 'Group & Individual Collaboration',
    description:
      'Comfortable contributing constructively within team settings while remaining equally reliable and focused when executing independent assignments.',
  },
  {
    id: 'adaptability',
    index: '03',
    title: 'Flexibility & Adaptability',
    description:
      'Receptive to evolving environments, constructive feedback, and new tools—adapting smoothly to fresh academic and organizational challenges.',
  },
];
