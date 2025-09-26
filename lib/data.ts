import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;
export const experiencesData = [
  {
    title: 'Indosat ooredoo hutchison',
    location: 'IDCamp 2025 | dicoding',
    description:
      'A free coding scholarship program organized by Indosat Ooredoo Hutchison. The goal is to develop young Indonesian digital talent who are ready to compete in the global digital economy, with various learning paths available in fields such as artificial intelligence (AI), web development, and others.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2025 - Dec 2025',
  },
  {
    title: 'Project Research',
    location: 'Dinas Sosial Kota Batu',
    description: 'Designing a web-based information system at the Social Services Agency of Batu City to monitor the activities and attendance of student interns and as material for final project research.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2025 - Mei 2025',
  },
  {
    title: 'Internship',
    location: 'Dinas Sosial Kota Batu',
    description: 'Completed a one-month internship at the Social Services Office of Batu City to fulfill the graduation requirements as a student.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'Web Development',
    location: 'Dunia Coding',
    description: 'Participated in the Tailwind CSS mini class held by Dunia Coding and conducted online through Google Meet.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2024 - Jan 2025',
  },
  {
    title: 'Mobile Development',
    location: 'Dicoding Indonesia | Bangkit Academy',
    description: 'MBKM Certified Independent Study Internship (MSIB) Batch 5 on the Bangkit Academy 2023 learning path Mobile Development partner program.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2023 - Dec 2023',
  },
  {
    title: 'Learning UI/UX Design',
    location: '-',
    description: 'Learn to design User Interface and User Experience (UI/UX) of Apps and Websites.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Student of Informatics Engineering',
    location: 'University of Muhammadiyah Malang',
    description: 'Started his journey as a student in 2021, studying Informatics Engineering at Universitas Muhammadiyah Malang (UMM).',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2021 - Aug 2025',
  },
] as const;

export const projectsData = [
  {
    title: 'Quran App',
    description: 'This Quran application is a Flutter application project based on Mobile (android) and uses API from EQuran.id.',
    image: 'images/project/quran-app/1.png',
    screenshots: ['images/project/quran-app/2.png', 'images/project/quran-app/3.png', 'images/project/quran-app/4.png', 'images/project/quran-app/5.png'],
    tech: ['/images/icon/figma.svg', '/images/icon/flutter.svg', '/images/icon/Dart.svg', '/images/icon/C++.svg', '/images/icon/Swift.svg'],
    demoUrl: null,
    githubUrl: 'https://github.com/lintarrezha/quran_app',
    features: ['Read Surah'],
    languages: ['Figma', 'Flutter', 'Dart'],
  },
  {
    title: 'To-do List Web App',
    description: 'This is a simple website-based To-do list application with a smartphone interface.',
    image: 'images/project/to-do-list/1.png',
    screenshots: ['images/project/to-do-list/2.png', 'images/project/to-do-list/3.png', 'images/project/to-do-list/4.png'],
    tech: ['/images/icon/html-5.svg', '/images/icon/css.svg', '/images/icon/javascript.svg'],
    demoUrl: 'https://todo-list-crud-ebon.vercel.app/',
    githubUrl: 'https://github.com/lintarrezha/Todo-list-CRUD',
    features: ['Fixed Bug Update and Delete Task Feature.', 'Create, Read, Update and Delete Task.'],
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Github User App',
    description: 'Github user app is an android-based application that is used to search for users on github, this is a Dicoding class submission task project.',
    screenshots: ['images/project/github-user/2.png', 'images/project/github-user/3.png', 'images/project/github-user/4.png'],
    image: 'images/project/github-user/1.png',
    tech: ['/images/icon/kotlin.svg'],
    demoUrl: null,
    githubUrl: 'https://github.com/lintarrezha/GitHubUser-Final',
    features: ['Search user github.', 'Add to favorite user.', 'Dark mode.'],
    languages: ['Kotlin'],
  },
  {
    title: 'QR Code Generator',
    description: 'Tools to create QR codes and download them for free quickly and easily.',
    screenshots: ['images/project/qr-code/1.png'],
    image: 'images/project/qr-code/1.png',
    tech: ['/images/icon/html-5.svg', '/images/icon/css.svg', '/images/icon/javascript.svg'],
    demoUrl: 'https://qr-code-generator-amber-seven.vercel.app/',
    githubUrl: null,
    features: ['Generate Your Text or URL.', 'Download QR Code result.'],
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Monitoring Peserta Magang',
    description:
      'This application is designed to help manage internship activities with a web-based attendance system at the Badan Kesatuan Bangsa dan Politik Kota Batu. The main purpose of the application is to make it easier for agencies or companies to monitor the attendance of interns in real-time. With a simple interface and relevant features, this application ensures internship data management becomes more efficient and organized.',
    screenshots: ['images/project/monitoring/1.png', 'images/project/monitoring/2.png', 'images/project/monitoring/3.png', 'images/project/monitoring/4.png'],
    image: 'images/project/monitoring/1.png',
    tech: ['/images/icon/php.svg', '/images/icon/mysql.svg', '/images/icon/bootstrap.svg', '/images/icon/javascript.svg', '/images/icon/html-5.svg', '/images/icon/css.svg'],
    demoUrl: null,
    githubUrl: null,
    features: ['Login as Admin/Mahasiswa', 'CRUD', 'Realtime'],
    languages: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Portofolio Website V1',
    description: 'This website is a simple personal portfolio website created as a template & learning using simple HTML, CSS, and JavaScript. However, there are still many bugs and it still looks messy.',
    screenshots: ['images/project/portofolio-html/1.png', 'images/project/portofolio-html/2.png'],
    image: 'images/project/portofolio-html/1.png',
    tech: ['/images/icon/html-5.svg', '/images/icon/css.svg', '/images/icon/javascript.svg'],
    demoUrl: 'https://linxyzv2.netlify.app/#profile',
    githubUrl: null,
    features: ['Download CV.', 'Responsive.', 'Dark mode.'],
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
] as const;

export const skillsData = ['Java', 'Kotlin', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'React', 'MYSQL'] as const;

export const skilss = [
  {
    id: 1,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 2,
    imgUrl: '/images/icon/mysql.svg',
  },
  {
    id: 3,
    imgUrl: '/images/icon/typescript.svg',
  },
  {
    id: 4,
    imgUrl: '/images/icon/javascript.svg',
  },
  {
    id: 5,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 6,
    imgUrl: '/images/icon/html-5.svg',
  },
  {
    id: 7,
    imgUrl: '/images/icon/css.svg',
  },
  {
    id: 8,
    imgUrl: '/images/icon/java.svg',
  },
  {
    id: 9,
    imgUrl: '/images/icon/kotlin.svg',
  },
  {
    id: 10,
    imgUrl: '/images/icon/python.svg',
  },
  {
    id: 11,
    imgUrl: '/images/icon/flutter.svg',
  },
  {
    id: 12,
    imgUrl: '/images/icon/figma.svg',
  },
] as const; //const baseUrlMeta = `${new URL("https://bayumaulanaikhsan.my.id/")}`;

const baseUrlMeta = 'http://localhost:3000/';
export const metadata = {
  //metadataBase: new URL("https://bayumaulanaikhsan.my.id/"),
  title: 'Lintar Rezha Candra Krisna | Portfolio',
  description: 'Lintar Rezha Candra Krisna is a web developer with 2 years of experience.',
  author: 'Lintar Rezha Candra Krisna',
  subject: 'Web Development',
  copyright: '© Lintar Rezha Candra Krisna',
  keywords: ['Lintar Rezha Candra Krisna', 'Next.js', 'React', 'JavaScript', 'Laravel', 'Codeigniter', 'PHP', 'HTML', 'Web developer', 'coding services', 'website development services'],
  generator: 'Next.js',
  applicationName: 'Lintar Rezha Candra Krisna | Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  creator: 'Lintar Rezha Candra Krisna',
  publisher: 'Lintar Rezha Candra Krisna',
  language: 'id',
  geo: {
    country: 'ID',
    placename: 'Malang',
  },
  openGraph: {
    images: [
      {
        url: `${baseUrlMeta}images/profile_2.jpg`,
        alt: 'Lintar Rezha Candra Krisna',
      },
      {
        url: `${baseUrlMeta}images/project/quran-app/1.png`,
        alt: 'Portofolio Quran App',
      },
      {
        url: `${baseUrlMeta}images/project/qr-code/1.png`,
        alt: 'Portofolio QR Code Generator',
      },
    ],
    description: 'Lintar Rezha Candra Krisna is a web developer with 2 years of experience.',
    author: 'Lintar Rezha Candra Krisna',
  },
  basic: {
    title: 'Lintar Rezha Candra Krisna - Fullstack Engineer',
    type: 'website',
    image: {
      url: `${baseUrlMeta}images/profile_2.jpg`,
      alt: 'Lintar Rezha Candra Krisna',
    },
  },
};
