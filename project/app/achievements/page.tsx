"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref)
  
  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = value / (duration * 60) // 60fps
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000/60)
      
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{count}</span>
}

const achievements = [
  {
    id: 1,
    title: "5-Time Hackathon Winner",
    description: "Consistently placed first in blockchain and web3 hackathons, building innovative solutions for food waste reduction, tokenized securities, and decentralized applications. Each win came with mentorship opportunities and industry recognition.",
    stat: 5,
    statLabel: "Hackathons Won"
  },
  {
    id: 2,
    title: "Women of ALX Team Leader",
    description: "Led a team of 50+ women developers, organizing online events, workshops, and mentorship programs. Coordinated technical sessions and fostered a supportive community for women in tech.",
    stat: 50,
    statLabel: "Team Members Led",
    suffix: "+"
  },
  {
    id: 3,
    title: "Code Blossom Guest Speaker",
    description: "Invited to speak at Code Blossom about blockchain development and women in tech. Shared insights on building decentralized applications and navigating the web3 ecosystem.",
    stat: 200,
    statLabel: "Attendees Reached",
    suffix: "+"
  },
  {
    id: 4,
    title: "ALX Women in STEM Feature",
    description: "Featured as a young developer in ALX's Women in STEM initiative, recognized for contributions to the tech community and inspiring the next generation of female developers.",
    stat: 1000,
    statLabel: "Community Impact",
    suffix: "+"
  }
]

export default function Achievements() {
  return (
    <main className="min-h-screen grid-background text-white overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            initial={{ rotate: -45, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            achievements.
          </motion.h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-[32px] bottom-16 w-px bg-[#b4f71c]"/>
          
          <div className="space-y-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start relative"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#b4f71c] z-10 relative"/>
                </motion.div>
                <div className="flex-1 pt-0">
                  <h2 className="font-['Bricolage_Grotesque'] text-2xl font-bold mb-2">
                    {achievement.title}
                  </h2>
                  <p className="text-white/80 mb-4 max-w-3xl">
                    {achievement.description}
                  </p>
                </div>
                <div className="min-w-[200px] text-right">
                  <div className="text-[#b4f71c] font-['Bricolage_Grotesque'] text-4xl mb-1">
                    ↑ <Counter value={achievement.stat} />
                    {achievement.stat <= 100 ? "%" : achievement.suffix}
                  </div>
                  <div className="text-white/60 text-sm">
                    {achievement.statLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="/about"
              className="see-more inline-block border-b-2 border-[#b4f71c] pb-1"
            >
              BACK TO ABOUT ME
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