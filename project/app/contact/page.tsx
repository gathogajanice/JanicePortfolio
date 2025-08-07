"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Apple as WhatsApp } from "lucide-react"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"

export default function Contact() {
  return (
    <main className="min-h-screen grid-background text-white overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-12"
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
            contact.
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-['Bricolage_Grotesque'] font-bold mb-4">
            Schedule a 1on1 call
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get in touch or shoot me an email directly on{" "}
            <a 
              href="mailto:janicegathoga@gmail.com"
              className="text-[#b4f71c] hover:underline"
            >
              janicegathoga@gmail.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative w-40 h-40"
            >
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp QR Code"
                width={160}
                height={160}
                className="rounded-xl"
              />
              <motion.div
                className="absolute inset-0 border-2 border-[#b4f71c] rounded-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col gap-3"
            >
              <p className="text-lg text-white/90">
                Scan the QR code to message me directly on whatsapp
              </p>
              <div className="flex items-center gap-3 text-[#b4f71c]">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <WhatsApp className="w-5 h-5" />
                </motion.div>
                <span className="font-['Bricolage_Grotesque'] font-bold">+254741582231</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              href="/"
              className="font-['Anton'] text-xl tracking-wider mb-6 border-b-2 border-[#b4f71c] pb-1 inline-block"
            >
              BACK TO HOME
            </Link>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}