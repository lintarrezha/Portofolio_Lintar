import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });
const baseUrlMeta = 'http://localhost:3000/';
//const baseUrlMeta = `${new URL("https://linxyz-nine.vercel.app/")}`;
export const metadata = {
  metadataBase: new URL("https://linxyz-nine.vercel.app/"),
  title: 'Lintar Rezha | Portfolio',
  description: 'Lintar Rezha Candra Krisna is a web developer with 2 years of experience.',
  author: 'Lintar Rezha Candra Krisna',
  subject: 'Web Development',
  copyright: '© Lintar Rezha Candra Krisna',
  keywords: ['Lintar Rezha Candra Krisna', 'Next.js', 'React', 'JavaScript', 'PHP', 'HTML', 'Web developer', 'coding services', 'website development services'],
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
        url: `${baseUrlMeta}images/project/cekresi/1.png`,
        alt: 'Portofolio Cek Resi CGN',
      },
      {
        url: `${baseUrlMeta}images/project/ikanme/1.png`,
        alt: 'Portofolio Ikan Me',
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
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-cyan-500 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
