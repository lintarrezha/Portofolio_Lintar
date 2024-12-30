'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import BurstBload2 from './burst-bload-2';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <div className="flex justify-center">
        <SectionHeading>🚀 Projects</SectionHeading>
        <BurstBload2 />
        <p>I have worked on various projects, mainly coursework projects ranging from small MVPs to full-scale applications, also developing various features and functionalities in those projects.</p>
      </div>
      <div className="flex">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
