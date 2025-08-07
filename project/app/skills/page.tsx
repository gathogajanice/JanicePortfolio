"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CursorGlow from "@/components/cursor-glow"
import SocialIcons from "@/components/social-icons"
import NoSSR from "@/components/no-ssr"

const skillCategories = [
  {
    title: "WEB2 DEVELOPMENT",
    description: "Frontend heavy with a little backend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  },
  {
    title: "WEB3 DEVELOPMENT",
    description: "Blockchain and decentralized technologies",
    skills: [
      { name: "Rust", icon: "https://cdn.simpleicons.org/rust" },
      { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/000000" },
      { name: "Motoko", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjM0I4MkY2Ii8+CiAgPHRleHQgeD0iMjQiIHk9IjMyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+TTwvdGV4dD4KPC9zdmc+" },
      { name: "Internet Computer", icon: "https://cdn.simpleicons.org/internetcomputer" },
      { name: "Web3.js", icon: "https://raw.githubusercontent.com/ChainSafe/web3.js/4.x/assets/logo/web3js.svg" },
      { name: "Ethers.js", icon: "https://docs.ethers.io/v5/static/logo.svg" },
      { name: "Smart Contracts", icon: "https://cdn.simpleicons.org/ethereum" },
      { name: "DeFi", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjMTBCOTgxIi8+CiAgPHRleHQgeD0iMjQiIHk9IjMyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+JDwvdGV4dD4KPC9zdmc+" },
      { name: "Hedera", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyMCIgZmlsbD0iIzAwRDRBQSIvPgogIDx0ZXh0IHg9IjI0IiB5PSIzMiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPkg8L3RleHQ+Cjwvc3ZnPg==" },
      { name: "Base", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjMDA1MkZGIi8+CiAgPHRleHQgeD0iMjQiIHk9IjMyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+QjwvdGV4dD4KPC9zdmc+" }
    ]
  },
  {
    title: "EXTRA SKILLS",
    description: "Design, AI, and mobile development",
    skills: [
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "AI Prompting", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Content Creation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/contentful/contentful-original.svg" },
      { name: "Team Leader", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" }
    ]
  }
]

export default function Skills() {
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
            skills.
          </motion.h1>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="font-['Anton'] text-2xl tracking-wider mb-2 border-b-2 border-[#b4f71c] pb-2 inline-block">
                  {category.title}
                </h2>
                <p className="text-white/60 text-sm mt-2 font-['Bricolage_Grotesque']">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: {
                        duration: 0.2
                      }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-3 border border-white/10 hover:border-[#b4f71c]/30 transition-all duration-300 hover:bg-white/10"
                  >
                    <motion.div 
                      className="w-12 h-12 relative flex items-center justify-center"
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Try alternative icon sources
                          const alternativeIcons: { [key: string]: string } = {
                            "Rust": "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
                            "Solidity": "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg",
                            "Motoko": "https://internetcomputer.org/img/IC_logo_horizontal.svg",
                            "Internet Computer": "https://internetcomputer.org/img/IC_logo_horizontal.svg",
                            "Web3.js": "https://raw.githubusercontent.com/ChainSafe/web3.js/4.x/assets/logo/web3js.svg",
                            "Ethers.js": "https://docs.ethers.io/v5/static/logo.svg",
                            "Smart Contracts": "https://raw.githubusercontent.com/devicons/devicon/master/icons/ethereum/ethereum-original.svg",
                            "DeFi": "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
                            "Hedera": "https://hedera.com/hh-logo.svg",
                            "Base": "https://base.org/static/base-logo.svg"
                          };
                          
                          if (alternativeIcons[skill.name]) {
                            e.currentTarget.src = alternativeIcons[skill.name];
                          } else {
                            // Fallback to placeholder with skill initial
                            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="8" fill="#b4f71c"/>
                                <text x="24" y="32" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#24172e">${skill.name.charAt(0)}</text>
                              </svg>
                            `)}`;
                          }
                        }}
                      />
                    </motion.div>
                    <span className="font-['Bricolage_Grotesque'] font-semibold text-white/80 text-center text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
              className="see-more inline-block border-b-2 border-[#b4f71c] pb-1 hover:border-[#9ee011] hover:text-[#9ee011] transition-all duration-200"
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