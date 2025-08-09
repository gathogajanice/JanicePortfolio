"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import SocialIcons from "@/components/social-icons"
import CursorGlow from "@/components/cursor-glow"
import NoSSR from "@/components/no-ssr"

export default function Home() {
  return (
    <main className="min-h-screen grid-background text-white overflow-hidden">
      <NoSSR>
        <CursorGlow />
      </NoSSR>
      <Navbar />
      
      <div className="relative min-h-screen flex flex-col justify-between">
        <div className="flex-grow flex items-center">
          <motion.div 
            className="container mx-auto px-6 sm:px-8 pt-24 sm:pt-28 lg:pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="heading mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="text-base sm:text-lg font-normal text-white/80 mb-4 block">
                Hey, I'm Janice Gathoga 👋
              </span>
              web3 can be complex. I build the
              <br />
              <span className="highlight">tech & frontend</span> that is
              <br />
              simple, scalable & user-friendly.
            </motion.h1>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/about"
                className="see-more inline-block border-b-2 border-[#b4f71c] pb-1"
              >
                SEE MORE ABOUT ME
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <footer className="container mx-auto px-6 sm:px-8 pb-4 sm:pb-6">
          <SocialIcons />
        </footer>
      </div>
    </main>
  )
}