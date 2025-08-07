"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Music2, Headphones, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"

const genres = [
  "Afrobeats",
  "Amapiano",
  "R&B",
  "Hip Hop",
  "Alternative",
  "Jazz"
]

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"

export default function Spotify() {
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
            vibes.
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-4xl font-['Bricolage_Grotesque'] font-bold mb-6">
              Music is my escape
            </h2>
            <p className="text-white/80 text-lg mb-8">
              I love exploring different genres, but Afrobeats has a special place in my heart. 
              Scan the QR code or click the link below to check out my curated playlists.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-2"
                >
                  <Music2 className="w-4 h-4 text-[#b4f71c]" />
                  <span>{genre}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={SPOTIFY_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#b4f71c] hover:text-[#9ee011] transition-colors font-['Anton'] tracking-wider"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              OPEN IN SPOTIFY
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b4f71c]/20 to-transparent rounded-3xl -z-10" />
            <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 backdrop-blur-sm bg-white/5 p-8 flex flex-col items-center justify-center gap-6">
              <Headphones className="w-16 h-16 text-[#b4f71c]" />
              
              <img
                src="https://spotify-github-profile.vercel.app/api/view?uid=YOUR_SPOTIFY_ID&cover_image=true"
                alt="Spotify QR Code"
                className="w-48 h-48 object-contain"
              />
              
              <p className="text-center font-['Anton'] tracking-wider">
                SCAN TO LISTEN
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
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