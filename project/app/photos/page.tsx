"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"
import ImageReveal from "@/components/image-reveal"

const photos = [
  {
    id: 1,
    src: "/images/Janiceimage1.jpg",
    alt: "Janice at work event"
  },
  {
    id: 2,
    src: "/images/Janiceimage2.jpg",
    alt: "Janice portrait with braids"
  },
  {
    id: 3,
    src: "/images/Janiceimage3.jpg",
    alt: "Janice with Internet Computer shirt"
  },
  {
    id: 4,
    src: "/images/Janiceimage4.jpg",
    alt: "Janice with teal top"
  },
  {
    id: 5,
    src: "/images/Janiceimage5.jpg",
    alt: "Janice with Internet Computer team"
  },
  {
    id: 6,
    src: "/images/janiceimage6.jpg",
    alt: "Janice professional portrait"
  }
]

export default function Photos() {
  return (
    <main className="min-h-screen grid-background text-white overflow-x-hidden">
      <CursorGlow />
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
            gallery.
          </motion.h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="font-['Anton'] text-2xl tracking-wider mb-12 border-b-2 border-[#b4f71c] pb-2 inline-block"
        >
          TAKE A PEAK THROUGH
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {photos.map((photo, index) => (
            <ImageReveal
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className="aspect-square rounded-2xl"
              priority={index < 3}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
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