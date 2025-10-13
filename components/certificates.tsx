'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

// Data sertifikat - sesuaikan dengan data Anda
const certificatesData = [
  {
    id: 1,
    title: 'Android Developer Fundamental Certificate',
    issuer: 'Dicoding | Bangkit Academy 2023',
    date: 'September 2023',
    description: 'Mempelajari skill Android yang dibutuhkan perusahaan. Mulai dari UI/UX, background process, API sampai database.',
    imageUrl: '/certificates/imgAndroid_fundamental.jpg', // Ganti dengan path image Anda
    credentialUrl: 'https://www.dicoding.com/certificates/N9ZO5R2Q0PG5', // Link verifikasi sertifikat
    pdfUrl: '/certificates/dicoding Android Fundamentalpdf.pdf',
  },
  {
    id: 2,
    title: 'Android Developer Beginner Certificate',
    issuer: 'Dicoding | Bangkit Academy 2023',
    date: 'September 2023',
    description: 'Membuat aplikasi pertama pada Android Studio dengan mempelajari dasar Activity, Intent, View & ViewGroup, Style & Theme sampai RecyclerView.',
    imageUrl: '/certificates/imgAndroidBeginner.jpg', // Ganti dengan path image Anda
    credentialUrl: 'https://www.dicoding.com/certificates/NVP78GJ3GXR0', // Link verifikasi sertifikat
    pdfUrl: '/certificates/dicoding Android Beginner.pdf',
  },
  {
    id: 3,
    title: 'Android Developer Intermediate Certificate',
    issuer: 'Dicoding | Bangkit Academy 2023',
    date: 'December 2023',
    description: 'Meningkatkan pengalaman pengguna dengan mempelajari Custom View, Animation, Localization, Media, Location, Testing, dan Advanced Database.',
    imageUrl: '/certificates/imgAndroidIntermediate.jpg',
    credentialUrl: 'https://www.dicoding.com/certificates/L4PQQGEQOPO1',
    pdfUrl: '/certificates/dicoding Android Intermediate.pdf',
  },
  {
    id: 4,
    title: 'Bangkit Academy 2023 Batch 2 Mobile Development Certificate',
    issuer: 'Dicoding | Batch Academy 2023',
    date: 'Januari 2024',
    description: 'Program kesiapan karier yang diinisiasi oleh Google dan didukung oleh GoTo, Traveloka, dan Kemendikbudristek melalui program Kampus Merdeka.',
    imageUrl: '/certificates/imgBangkit.jpg',
    credentialUrl: '-',
    pdfUrl: '/certificates/Sertif_Bangkit.pdf',
  },
  {
    id: 5,
    title: 'Cisco CCNA (Cisco Certified Network Associate) Certificate',
    issuer: 'Cisco',
    date: 'Februari 2023',
    description:
      'sertifikasi tingkat pemula yang memvalidasi pengetahuan dan keterampilan seseorang dalam memasang, mengonfigurasi, mengoperasikan, dan memecahkan masalah jaringan komputer berukuran sedang menggunakan perangkat Cisco, mencakup dasar-dasar jaringan, keamanan, otomatisasi, dan teknologi jaringan terbaru.',
    credentialUrl: '',
    pdfUrl: '/certificates/CCNA.pdf',
  },
  {
    id: 6,
    title: 'Dunia Coding Mini Course Tailwind CSS',
    issuer: 'Dunia Coding',
    date: 'Desember 2024',
    description: 'Belajar Tailwind dari Nol: Kuasai Framework yang Sedang Diburu Industri.',
    imageUrl: '/certificates/duniacoding.jpg',
    credentialUrl: 'https://duniacoding.id/certificate/E-MC7-0027',
    pdfUrl: '/certificates/Sertif_Bangkit.pdf',
  },
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Certificates() {
  const { ref } = useSectionInView('Certificates');
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certificates" ref={ref} className="mb-28 max-w-7xl mx-auto px-4 scroll-mt-28 sm:mb-40">
      {/* Background effects */}
      <div className="hidden sm:block bg-purple-400 absolute top-[-6rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#3D1851]"></div>

      <div className="text-center mb-16">
        <SectionHeading>🏆 Certificates & Awards</SectionHeading>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Beberapa sertifikasi dan penghargaan yang menunjukkan dedikasi saya dalam meningkatkan keterampilan dan pengetahuan🎗️.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div key={cert.id} custom={index} variants={cardVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="group relative">
            {/* Certificate Card */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-400 overflow-hidden">
                {cert.imageUrl ? (
                  <Image src={cert.imageUrl} alt={cert.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-blue-500 dark:text-blue-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>

                {/* Issuer & Date */}
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</span>
                  <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{cert.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    View Credential
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group/link"
                  >
                    View PDF
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
