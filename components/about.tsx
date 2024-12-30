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
        Hello, I'm Lintar Rezha! I am dedicated to continuously expanding my knowledge and skills in <span className="font-semibold">Fullstack web development </span> and <span className="font-semibold">Frontend developer </span>while
        learning about new technologies.
        <br />
        <br />I am a student of Informatics Engineering at <span className="font-semibold">Universitas Muhammadiyah Malang (UMM)</span> and I am currently in the process of developing my skills in developing web applications, creating UI/UX
        designs, and striving to create quality code.
        <br />
        <br />
        Outside of coding I also like to exercise, such as Gym, Badminton, Billiard, Mini soccer, and many others. Because I think exercising is a way to maintain discipline and focus, values that I also apply in every project. My dream is
        to be an innovative web developer, able to create solutions that are beneficial to many people.
      </p>
    </motion.section>
  );
}
