'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import BurstBload from './burst-bload';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Halo!🙌 Saya Lintar Rezha, seorang pengembang web junior yang bersemangat dan terus berupaya mengembangkan pengetahuan serta keterampilan dalam Fullstack Web Development dan Frontend Development. Saya menikmati proses mengubah ide menjadi
        pengalaman digital yang fungsional, menarik, dan ramah pengguna😁👌.
        <br />
        <br />
        Saya telah lulus dengan gelar Sarjana Teknik Informatika (S.Kom.) dari Universitas Muhammadiyah Malang (UMM)🎓. Selama masa studi, saya mendapatkan pengalaman langsung dalam pengembangan aplikasi web, perancangan UI/UX yang intuitif, serta
        penulisan kode yang rapi dan mudah dipelihara. Saat ini saya sedang mencari peluang kerja untuk berkontribusi, belajar, dan berkembang bersama tim pengembang profesional💼.
        <br />
        <br />
        Di luar dunia pemrograman, saya menyukai kegiatan seperti gym, badminton, biliar, dan mini soccer🏸. Saya percaya bahwa berolahraga membantu menjaga disiplin, fokus, dan konsistensi — nilai yang juga saya terapkan dalam setiap proyek yang saya kerjakan😊.
        <br />
        <br />
        Tujuan saya adalah menjadi pengembang web atau pekerja yang inovatif, mampu menciptakan solusi digital yang efisien serta memberikan dampak positif bagi banyak orang melalui teknologi.
      </p>
    </motion.section>
  );
}
