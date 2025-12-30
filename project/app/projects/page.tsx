"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import CursorGlow from '@/components/cursor-glow'
import SocialIcons from '@/components/social-icons'
import NoSSR from '@/components/no-ssr'
import ImageReveal from '@/components/image-reveal'

const projects = [
  {
    id: 1,
    title: 'XERO - Food Waste Reduction Platform',
    description: 'A blockchain-based intelligent platform that helps restaurants reduce food waste through AI-powered demand forecasting, real-time inventory tracking, and dynamic pricing. Built on Internet Computer (ICP) and Rust with features like automated waste reduction strategies and blockchain-verified transparency.',
    images: ['/images/Xeroproject.png'],
    tags: ['RUST', 'INTERNET COMPUTER', 'AI', 'BLOCKCHAIN', 'REACT'],
    deployedUrl: 'https://snk7t-niaaa-aaaal-qr7gq-cai.icp0.io/',
    featured: true
  },
  {
    id: 2,
    title: 'Invoiced',
    description: 'A hackathon-winning project where I am the cofounder, winning $7,500 USD. Invoiced is a Bitcoin invoice payment platform built with modern frontend technologies including React and Next.js. The platform features a responsive UI with smooth animations, real-time payment tracking, and seamless integration with Mezo for Bitcoin-backed stable payments. Built with TypeScript, Tailwind CSS, and Framer Motion for an exceptional user experience.',
    images: ['/images/invoiced.png'],
    tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'BITCOIN', 'WEB3'],
    deployedUrl: 'https://binvoiced.com/',
    featured: true
  },
  {
    id: 3,
    title: 'Christmas Bonanza',
    description: 'A dynamic event website for the Christmas Bonanza festival built with Next.js and React. Features include interactive countdown timers, animated sections, responsive design with Tailwind CSS, and smooth page transitions. The frontend utilizes modern React patterns, custom animations, and optimized performance for an engaging user experience.',
    images: ['/images/bonanza.png'],
    tags: ['NEXT.JS', 'REACT', 'TAILWIND CSS', 'ANIMATIONS', 'RESPONSIVE DESIGN'],
    deployedUrl: 'https://christmas-bonanza.vercel.app/',
    featured: true
  },
  {
    id: 4,
    title: 'Welcome Home International',
    description: 'A blockchain land tokenization website for a freelance project I worked on. Connecting people with unique home ownership opportunities in exotic locations through secure, transparent blockchain-based property transactions.',
    images: ['/images/Welcomehome.png'],
    tags: ['BLOCKCHAIN', 'TOKENIZATION', 'REAL ESTATE', 'WEB3'],
    deployedUrl: 'https://welcomehomeinternationalgroup.com/',
    featured: true
  },
  {
    id: 5,
    title: 'Story Ripple',
    description: 'A project I built on Base Sepolia - a Farcaster mini app with Zora coins integration. Control the narrative of every story with Story Ripple, a platform for collaborative storytelling and narrative exploration.',
    images: ['/images/Storyripple.png'],
    tags: ['BASE SEPOLIA', 'FARCASTER', 'ZORA', 'WEB3'],
    deployedUrl: 'https://storyripple.vercel.app/',
    featured: true
  },
  {
    id: 6,
    title: 'Assetra',
    description: 'Built on the Hedera Hashgraph, Assetra is a tokenized asset platform for the Nairobi Stock Exchange market. Discover and trade tokenized securities with secure and efficient transactions powered by Hedera\'s consensus mechanism.',
    images: ['/images/Assetra1.png'],
    tags: ['HEDERA HASHGRAPH', 'TOKENIZATION', 'NSE', 'BLOCKCHAIN'],
    deployedUrl: 'https://timely-nougat-e71dc9.netlify.app/',
    featured: true
  },
  {
    id: 7,
    title: 'Client Portfolio',
    description: 'A professional portfolio website built with modern frontend technologies including React and Next.js. Features a clean, minimalist design with smooth scroll animations, responsive layouts using Tailwind CSS, and optimized performance. The site showcases creative work with interactive galleries and seamless navigation built with TypeScript for type safety.',
    images: ['/images/tevin.png'],
    tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'RESPONSIVE', 'ANIMATIONS'],
    deployedUrl: 'https://tevinisaac.xyz/',
    featured: true
  }
];

export default function Projects() {
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
            projects.
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-white/70 text-lg mb-12 max-w-3xl font-['Bricolage_Grotesque']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Here are some of my featured projects that demonstrate my expertise in Web3 technologies, 
          modern web development, and creating impactful solutions.
        </motion.p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.25, 0, 1]
              }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#b4f71c]/30 transition-all duration-500 hover:bg-white/10">
                <div className="lg:flex lg:items-center">
                  <div className="lg:w-1/2 relative">
                    {project.images.length > 1 ? (
                      <div className="carousel flex overflow-x-auto snap-x snap-mandatory">
                        {project.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="snap-center flex-shrink-0 w-full">
                            <ImageReveal
                              src={image}
                              alt={project.title}
                              className="aspect-video transition-transform duration-500 ease-in-out transform hover:scale-105"
                              priority={index === 0 && imgIndex === 0}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ImageReveal
                        src={project.images[0]}
                        alt={project.title}
                        className="aspect-video transition-transform duration-500 ease-in-out transform hover:scale-105"
                        priority={index === 0}
                      />
                    )}
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="project-title font-['Bricolage_Grotesque'] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#b4f71c] transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="project-description text-white/80 mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                          {project.description}
                        </p>
                      </div>
                      
                      <Link 
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 flex-shrink-0"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="bg-[#b4f71c] rounded-full p-3 hover:bg-[#9ee011] transition-colors duration-200"
                        >
                          <ArrowUpRight className="w-5 h-5 text-[#24172e]" />
                        </motion.div>
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-[#b4f71c]/10 border border-[#b4f71c]/20 rounded-full text-[#b4f71c] text-xs font-['Anton'] tracking-wider hover:bg-[#b4f71c]/20 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-['Anton'] text-sm tracking-wider text-[#b4f71c] border-b-2 border-[#b4f71c] pb-1 hover:border-[#9ee011] hover:text-[#9ee011] transition-all duration-200"
                    >
                      VIEW PROJECT
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              href="/resume"
              className="see-more inline-block border-b-2 border-[#b4f71c] pb-1 hover:border-[#9ee011] hover:text-[#9ee011] transition-all duration-200"
            >
              CHECK OUT MY RESUME
            </Link>
          </motion.div>

          <div className="mt-8">
            <SocialIcons />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-8 text-white/50 text-sm text-center font-['Bricolage_Grotesque']"
          >
            portfolio made by Janicegathoga@gmail.com
          </motion.p>
        </motion.div>
      </div>
    </main>
  )
}