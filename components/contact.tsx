'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { BsSpotify, BsLinkedin, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="bg-[#fbe2e3] absolute bottom-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#7d5353]"></div>

      <SectionHeading>Get In Touch</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        In addition, I am also currently opening up opportunities for freelance or part-time work. If you have an interesting project or need additional help and might fit my position, please feel free to get in touch!
        <br />
        <br />
        Feel free to get in touch with me whenever you need assistance or want to discuss anything. I'm here to help you with pleasure! 🚀
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const dataForm = { senderEmail: email, message: message };

          if (email == '') {
            toast.error('Email is Required !');
            return;
          }

          if (message == '') {
            toast.error('Message is Required !');
            return;
          }

          const containsTest = /test/i.test(email);
          // || /test/i.test(message);

          if (containsTest) {
            toast.error('Mohon maaf, input tidak valid. Harap berikan email dan pesan yang benar.\n\nWesbite sudah berjalan dengan baik jadi tidak perlu testing lagi 😁', {
              duration: 6000,
            });
            return;
          }
          const isValidEmail = email.length > 4 && message.length > 9 && email.endsWith('@gmail.com');

          if (!isValidEmail) {
            toast.error('Please provide a valid email (minimum 5 characters, ending with @gmail.com) and message minimum 10 characters.');
            return;
          }
          const { data, error } = await sendEmail(dataForm);
          if (error) {
            toast.error(error);
            return;
          }
          setEmail('');
          setMessage('');
          toast.success('Email sent successfully!');
        }}
      >
        <input
          className="h-14 px-4 bg-white rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-40 bg-white my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        <br />
        <br />
        Visit the social media I have:
      </p>

      <motion.div
        className="flex flex-row items-center justify-center mt-5 gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lintarrezha/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/lintarrezha"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/r.zhaaa_/"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://open.spotify.com/user/gri0o4eppqpsljgc11nxwvglz?si=sQ9MzozKTQicAl6YsH8u3w"
          target="_blank"
        >
          <BsSpotify />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://pin.it/2xEjheTky"
          target="_blank"
        >
          <BsPinterest />
        </a>
      </motion.div>
    </motion.section>
  );
}
