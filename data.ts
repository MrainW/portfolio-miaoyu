import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { IProject, Service, Skill } from './types';

import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Build a beautiful and scalable SPA using React,  Tailwindcss, and Next.js',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'Handle database, server, and APIs using Express, Mongoose, and Springboot',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Develop REST APIs using Express and JavaScript',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Visualization',
    about: 'Visualize data by WebGL and Three.js',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'CV & NLP',
    about: 'Detect potential customers, riots, and accidents',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Java',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'SQL',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'HTML/CSS',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'AWS',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Google/Oracle cloud',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Azure',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Docker',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Node.js',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '60',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Express',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Mongoose',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Tailwindcss',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Springboot',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Three.js',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '55',
  },
  {
    Icon: BsCircleFill,
    name: 'TypeScript',
    level: '55',
  },
];

export const projects: IProject[] = [
  {
    name: 'Amazon copy',
    image_path: '/images/amazon.png',
    deployed_url: 'https://mern-amazona-mrain.herokuapp.com/',
    github_url: 'https://github.com/MrainW/amazon-copy',
    category: ['frontend', 'backend'],
    description: 'Amazon copy by MERN stack',
    key_techs: [
      'React',
      'MongoDB',
      'Bootstrap',
      'Express',
      'Node.js',
      'PayPal REST APIs',
    ],
  },

  {
    name: 'Facebook copy',
    image_path: '/images/facebook.png',
    deployed_url: 'https://fcopy.vercel.app/',
    github_url: 'https://github.com/MrainW/facebook-copy',
    category: ['frontend', 'backend'],
    description: 'Built a SPA like Facebook',
    key_techs: [
      'Next.js',
      'Tailwindcss',
      'Firebase',
      'Next-auth',
      'Facebook REST APIs',
    ],
  },

  {
    name: 'Portfolio',
    image_path: '/images/portfolio.png',
    deployed_url: 'https://miaoyu.vercel.app/',
    github_url: 'https://github.com/MrainW/facebook-copy',
    category: ['frontend'],
    description: 'Built a online portfolio',
    key_techs: ['Next.js', 'Tailwindcss', 'TypeScript'],
  },
];
