"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"
import NoSSR from "@/components/no-ssr"

const educationTimeline = [
  {
    id: 1,
    year: "2024",
    degree: "Software Engineering Program",
    institution: "ALX Africa",
    description: "ALX didn't just teach me how to code—it taught me how to build. Now, I can confidently create Web2-based projects, with ease.",
    certificateUrl: "/images/SEcertificate.jpg"
  },
  {
    id: 2,
    year: "2024",
    degree: "Ethereum Safari Blockchain Conference",
    institution: "Ethereum Safari Kenya",
    description: "Participated in Kenya's premier blockchain conference, connecting with industry leaders and exploring cutting-edge Web3 technologies and DeFi innovations.",
    certificateUrl: "/images/Ethsafari.jpg"
  },
  {
    id: 3,
    year: "2024",
    degree: "Women in Blockchain Certification",
    institution: "Women in Blockchain Initiative",
    description: "Specialized program focusing on empowering women in blockchain technology, covering smart contracts, tokenomics, and leadership in Web3.",
    certificateUrl: "/images/WomenBlockchain.jpg"
  },
  {
    id: 4,
    year: "2024",
    degree: "Inter-University Blockchain Program",
    institution: "InterUni Blockchain Network",
    description: "Advanced blockchain development program covering consensus mechanisms, smart contract security, and decentralized application architecture.",
    certificateUrl: "/images/Interuniblockchain.jpg"
  },
  {
    id: 5,
    year: "2024",
    degree: "Web Development Bootcamp",
    institution: "RiseIn",
    description: "Intensive full-stack web development bootcamp covering modern JavaScript, React, Node.js, and database management systems.",
    certificateUrl: "/images/Risein.jpg"
  }
]

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  // Preload images for better performance
  useEffect(() => {
    educationTimeline.forEach(item => {
      const img = new window.Image()
      img.src = item.certificateUrl
    })
  }, [])

  const selectedItem = educationTimeline.find(item => item.id === selectedCertificate)

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
            education.
          </motion.h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-[32px] bottom-16 w-px bg-[#b4f71c]"/>
          
          <div className="space-y-16">
            {educationTimeline.map((item, index) => (
              <motion.div
                key={item.id}
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
                <div className="flex-1 pt-0">
                  <span className="text-[#b4f71c] font-['Anton'] text-sm tracking-wider mb-2 block">
                    {item.year}
                  </span>
                  <h2 className="font-['Bricolage_Grotesque'] text-2xl font-bold mb-1">
                    {item.degree}
                  </h2>
                  <h3 className="text-white/80 font-['Bricolage_Grotesque'] text-lg mb-2">
                    {item.institution}
                  </h3>
                  <p className="text-white/60 mb-4 max-w-3xl">
                    {item.description}
                  </p>
                  
                  <motion.button
                    onClick={() => setSelectedCertificate(item.id)}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 45
                    }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#b4f71c] rounded-full p-2 hover:bg-[#9ee011] transition-colors"
                  >
                    <ArrowUpRight className="w-6 h-6 text-[#24172e]" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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

      <AnimatePresence>
        {selectedCertificate && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
              className="relative max-w-3xl w-full max-h-[85vh] bg-[#24172e]/95 rounded-2xl overflow-hidden border border-[#b4f71c]/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-[#b4f71c] rounded-full p-2 hover:bg-[#9ee011] transition-colors duration-200 z-10 shadow-lg"
              >
                <X className="w-5 h-5 text-[#24172e]" />
              </motion.button>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#b4f71c] mb-1">
                    {selectedItem.degree}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedItem.institution} • {selectedItem.year}
                  </p>
                </div>

                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white">
                  <Image
                    src={selectedItem.certificateUrl}
                    alt={`${selectedItem.degree} Certificate`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                    quality={95}
                    loading="eager"
                  />
                </div>

                <div className="mt-4 p-4 bg-white/5 rounded-lg">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}