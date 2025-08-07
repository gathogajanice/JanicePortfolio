"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Moon, Sun, Menu } from "lucide-react"

// Theme toggle component to fix hydration issues
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
        <Sun className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
    </button>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: {
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.2, 1]
      }
    }
  }

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-10">
            <span className="logo">jg</span>
            <span className="nav-text ml-2">JANICE GATHOGA</span>
          </Link>
          
          <div className="desktop-nav items-center space-x-8">
            <Link href="/about" className="nav-text nav-link hover:text-[#b4f71c] transition-colors">
              ABOUT
            </Link>
            <Link href="/projects" className="nav-text nav-link hover:text-[#b4f71c] transition-colors">
              PROJECTS
            </Link>
            <Link href="/resume" className="nav-text nav-link hover:text-[#b4f71c] transition-colors">
              RESUME
            </Link>
            <Link href="/contact" className="nav-text nav-link hover:text-[#b4f71c] transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="mobile-nav flex items-center space-x-4">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuIconVariants}
              transition={{ duration: 0.3 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="nav-text nav-link hover:text-[#b4f71c] transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/projects"
                  className="nav-text nav-link hover:text-[#b4f71c] transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROJECTS
                </Link>
                <Link
                  href="/resume"
                  className="nav-text nav-link hover:text-[#b4f71c] transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  RESUME
                </Link>
                <Link
                  href="/contact"
                  className="nav-text nav-link hover:text-[#b4f71c] transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}