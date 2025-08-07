"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const imageVariants = {
  initial: { scale: 1.15 },
  animate: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const revealVariants = {
  initial: { y: "0%" },
  animate: {
    y: "-100%",
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ImageReveal({
  src,
  alt,
  className,
  priority = false,
}: ImageRevealProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div variants={imageVariants} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </motion.div>
      <motion.div
        variants={revealVariants}
        className="absolute inset-0 bg-[#24172e] z-10"
      />
    </motion.div>
  )
} 