"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"
import NoSSR from "@/components/no-ssr"

export default function About() {
  const timelineItems = [
    {
      title: "Full Stack Developer",
      description: "I build web applications from frontend to backend. React is my go-to, but I'm comfortable with the full stack.",
      link: "GITHUB",
      url: "https://github.com/jan-ice17"
    },
    {
      title: "My Education",
      description: "Learned coding through ALX Software Engineering program. Focused on practical skills and real-world projects.",
      link: "EDUCATION",
      url: "/education"
    },
    {
      title: "Skills",
      description: "Web2: React, Next.js, TypeScript. Web3: Rust, Solidity, ICP. Always learning new technologies.",
      link: "SKILLS",
      url: "/skills"
    },
    {
      title: "Projects",
      description: "Built blockchain apps, NFT marketplaces, and web platforms. Each project solves a real problem.",
      link: "PROJECTS",
      url: "/projects"
    },
    {
      title: "Achievements",
      description: "Won 5 hackathons. Led Women of ALX team. Spoke at Code Blossom. Featured in ALX Women in STEM.",
      link: "AWARDS",
      url: "/achievements"
    },
    {
      title: "Photos",
      description: "Snapshots from hackathons, conferences, and building projects. The journey so far.",
      link: "PHOTOS",
      url: "/photos"
    }
  ]

  return (
    <main className="min-h-screen grid-background text-white overflow-x-hidden">
      <NoSSR>
        <CursorGlow />
      </NoSSR>
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            initial={{ rotate: -45, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-12 h-12 -ml-2"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#b4f71c] transform -rotate-45">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <motion.h1 
            className="text-[#b4f71c] font-['Bricolage_Grotesque'] text-4xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            about me.
          </motion.h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-[32px] bottom-16 w-px bg-[#b4f71c]"/>
          
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-6 items-start relative"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#b4f71c] z-10 relative"/>
                </motion.div>
                <Link 
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : '_self'}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex-1 pt-0 cursor-pointer"
                >
                  <h2 className="font-['Bricolage_Grotesque'] text-2xl font-bold mb-2 hover:text-[#b4f71c] transition-colors duration-300">{item.title}</h2>
                  <p className="text-white/80 mb-2 max-w-3xl text-base leading-relaxed">{item.description}</p>
                </Link>
                <div className="min-w-[120px] text-right">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="inline-block"
                  >
                    <Link 
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : '_self'}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-['Anton'] text-sm tracking-[0.15em] text-[#b4f71c] border-b-2 border-[#b4f71c] pb-1 hover:border-[#9ee011] hover:text-[#9ee011] transition-all duration-200"
                    >
                      {item.link}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="/projects"
              className="see-more inline-block border-b-2 border-[#b4f71c] pb-1 hover:border-[#9ee011] hover:text-[#9ee011] transition-all duration-200"
            >
              LET&apos;S CONTINUE TO PROJECTS
            </Link>
          </motion.div>

          <div className="mt-12">
            <SocialIcons />
          </div>
        </motion.div>
      </div>
    </main>
  )
}