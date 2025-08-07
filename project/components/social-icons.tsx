"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

const socialLinks = [
  { Icon: Github, href: "https://github.com/jan-ice17" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/janicegathoga/" },
  { Icon: Twitter, href: "https://twitter.com" },
  { Icon: MessageCircle, href: "https://discord.com/users/jan_ice." }
]

export default function SocialIcons() {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#b4f71c] transition-colors"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  )
}