'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { skillsData, skilss } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BurstBload2 from './burst-bload-2';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Triple the skills array for smoother infinite scroll
  const reversedSkills = [...skilss].reverse();
  const doubleSkills = [...reversedSkills, ...reversedSkills];

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-none w-full scroll-mt-28 text-center sm:mb-40 overflow-hidden">
      {/* Background blur effect */}
      <div className="bg-emerald-400 absolute bottom-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#183D3D]"></div>

      <div className="flex justify-center mb-16">
        <SectionHeading>🎯 Skills Developed</SectionHeading>
        <BurstBload2 />
      </div>

      {/* BARIS PERTAMA - Kiri ke Kanan */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling container */}
        <div className="flex animate-infinite-scroll-smooth hover:animate-pause-smooth gap-6 py-8">
          {doubleSkills.map((skill, index) => (
            <div key={index} className="flex-shrink-0">
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
              >
                {/* Glassmorphism card */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 dark:from-gray-800/30 dark:to-gray-900/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden group-hover:scale-110">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>

                  {/* Skill icon */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <Image src={skill.imgUrl} alt="Skill icon" width={64} height={64} quality={95} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg" />
                  </div>

                  {/* Hover overlay with skill name */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-2 ${
                      hoveredIndex === index ? 'opacity-100' : ''
                    }`}
                  >
                    <span className="text-white text-xs font-medium truncate">{skill.name}</span>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>

                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {hoveredIndex === index && (
                    <>
                      <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                      <div className="absolute bottom-3 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* BARIS KEDUA - Kanan ke Kiri (ARAH BERLAWANAN) */}
      <div className="relative w-full overflow-hidden mt-6">
        {/* Scrolling container - ARAH BERLAWANAN */}
        <div className="flex animate-infinite-scroll-reverse hover:animate-pause-smooth gap-6 py-8">
          {doubleSkills.map((skill, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <motion.div
                onMouseEnter={() => setHoveredIndex(index + 1000)}
                onMouseLeave={() => setHoveredIndex(null)}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
              >
                {/* Glassmorphism card */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 dark:from-gray-800/30 dark:to-gray-900/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden group-hover:scale-110">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>

                  {/* Skill icon */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <Image src={skill.imgUrl} alt="Skill icon" width={64} height={64} quality={95} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg" />
                  </div>

                  {/* Hover overlay with skill name */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-1xl flex items-end justify-center p-2 ${
                      hoveredIndex === index + 1000 ? 'opacity-100' : ''
                    }`}
                  >
                    <span className="text-white text-xs font-medium truncate">{skill.name}</span>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>

                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {hoveredIndex === index + 1000 && (
                    <>
                      <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                      <div className="absolute bottom-3 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced CSS with better animations */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes pause-smooth {
          0% {
            transform: translateX(var(--current-translate, 0));
          }
          100% {
            transform: translateX(var(--current-translate, 0));
          }
        }

        .animate-infinite-scroll-smooth {
          animation: infinite-scroll 15s linear infinite alternate;
          will-change: transform;
        }

        .animate-infinite-scroll-reverse {
          animation: infinite-scroll 15s linear infinite alternate-reverse;
          will-change: transform;
        }

        .animate-infinite-scroll-smooth:hover,
        .animate-infinite-scroll-reverse:hover,
        .hover\\:animate-pause-smooth:hover {
          animation-play-state: paused;
        }

        /* Add smooth transitions for better performance */
        .animate-infinite-scroll-smooth > *,
        .animate-infinite-scroll-reverse > * {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Additional gradient animations */
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .group:hover .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
