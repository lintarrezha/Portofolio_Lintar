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
    name: 'Certificates',
    hash: '#certificates',
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
      'Program beasiswa coding gratis yang diselenggarakan oleh Indosat Ooredoo Hutchison. Tujuan program ini adalah untuk mengembangkan talenta digital muda Indonesia agar siap bersaing di ekonomi digital global, dengan berbagai jalur pembelajaran seperti Kecerdasan Buatan (AI), Pengembangan Web, dan lainnya.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2025 - Dec 2025',
  },
  {
    title: 'Project Research',
    location: 'Dinas Sosial Kota Batu',
    description: 'Merancang sistem informasi berbasis web untuk Dinas Sosial Kota Batu guna memantau kegiatan dan kehadiran peserta magang. Proyek ini juga digunakan sebagai bahan penelitian tugas akhir.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2025 - Mei 2025',
  },
  {
    title: 'Internship',
    location: 'Dinas Sosial Kota Batu',
    description: 'Menyelesaikan magang selama satu bulan di Dinas Sosial Kota Batu sebagai salah satu syarat kelulusan mahasiswa. Selama magang, saya berkontribusi dalam input data, pengembangan website, dan pemeliharaan sistem.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'Web Development',
    location: 'Dunia Coding',
    description: 'Mengikuti kelas mini Tailwind CSS yang diselenggarakan oleh Dunia Coding dan dilaksanakan secara online melalui Google Meet.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2024 - Jan 2025',
  },
  {
    title: 'Mobile Development',
    location: 'Dicoding Indonesia | Bangkit Academy',
    description: 'Menyelesaikan program MBKM Studi Independen dan Magang Bersertifikat (MSIB) Batch 5 di bawah naungan Bangkit Academy 2023 dengan fokus pada jalur pembelajaran Mobile Development.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2023 - Dec 2023',
  },
  {
    title: 'Learning UI/UX Design',
    location: '-',
    description: 'Mempelajari perancangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi dan situs web.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Student of Informatics Engineering',
    location: 'University of Muhammadiyah Malang',
    description: 'Memulai perjalanan akademiknya pada tahun 2021 dengan menempuh studi di Program Studi Teknik Informatika, Universitas Muhammadiyah Malang (UMM).',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2021 - Aug 2025',
  },
] as const;

export const projectsData = [
  {
    title: 'Quran App',
    description:
      'Aplikasi Quran ini merupakan aplikasi berbasis mobile menggunakan Flutter yang menyediakan akses ayat dan terjemahan Al-Qur’an melalui API dari EQuran.id. Aplikasi ini dirancang dengan antarmuka sederhana dan bersih untuk memudahkan pengguna membaca serta menelusuri Al-Qur’an.',
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
    description:
      'Aplikasi To-Do List berbasis web yang sederhana dan responsif, dibuat menggunakan HTML, CSS, dan JavaScript. Aplikasi ini membantu pengguna mengatur daftar tugas harian secara efisien dengan tampilan yang bersih dan ramah di perangkat mobile.',
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
    description:
      'GitHub User App adalah aplikasi Android yang dikembangkan menggunakan Kotlin untuk mencari dan menampilkan profil pengguna GitHub. Proyek ini dibuat sebagai tugas submission kelas Dicoding dengan fokus pada integrasi API dan desain antarmuka modern.',
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
    description:
      'Aplikasi berbasis web yang dikembangkan menggunakan HTML, CSS, dan JavaScript untuk membuat serta mengunduh QR Code dengan cepat dan mudah. Proyek ini menampilkan penerapan logika front-end dan manipulasi DOM secara dinamis.',
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
      'Aplikasi ini dirancang untuk membantu mengelola kegiatan magang dengan sistem presensi berbasis web di Badan Kesatuan Bangsa dan Politik Kota Batu. Tujuan utama dari aplikasi ini adalah untuk mempermudah instansi atau perusahaan dalam memantau kehadiran peserta magang secara real-time. Dengan antarmuka yang sederhana dan fitur yang relevan, aplikasi ini memastikan pengelolaan data magang menjadi lebih efisien dan terorganisir.',
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
    description:
      'Website ini merupakan proyek portofolio pribadi sederhana yang dibuat sebagai template sekaligus sarana pembelajaran menggunakan HTML, CSS, dan JavaScript. Meskipun versi ini masih memiliki beberapa bug dan tampilan yang belum sepenuhnya rapi, proyek ini menjadi langkah awal dalam memahami dasar pengembangan web serta penerapan struktur dan desain responsif.',
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
    name: 'Tailwind CSS',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 2,
    name: 'MySQL',
    imgUrl: '/images/icon/mysql.svg',
  },
  {
    id: 3,
    name: 'TypeScript',
    imgUrl: '/images/icon/typescript.svg',
  },
  {
    id: 4,
    name: 'JavaScript',
    imgUrl: '/images/icon/javascript.svg',
  },
  {
    id: 5,
    name: 'React',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 6,
    name: 'HTML',
    imgUrl: '/images/icon/html-5.svg',
  },
  {
    id: 7,
    name: 'CSS',
    imgUrl: '/images/icon/css.svg',
  },
  {
    id: 8,
    name: 'Java',
    imgUrl: '/images/icon/java.svg',
  },
  {
    id: 9,
    name: 'Kotlin',
    imgUrl: '/images/icon/kotlin.svg',
  },
  {
    id: 10,
    name: 'Python',
    imgUrl: '/images/icon/python.svg',
  },
  {
    id: 11,
    name: 'Flutter',
    imgUrl: '/images/icon/flutter.svg',
  },
  {
    id: 12,
    name: 'Figma',
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
