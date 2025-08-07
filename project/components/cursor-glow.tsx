"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mounted, setMounted] = useState(false)
  const lastUpdateTime = useRef<number>(0)
  const trailPointId = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updateMousePosition = (e: MouseEvent) => {
      const currentTime = Date.now()
      const timeDiff = currentTime - lastUpdateTime.current
      
      if (timeDiff > 16) { // Limit to ~60fps
        const newPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailPointId.current++
        }
        
        setMousePosition({ x: e.clientX, y: e.clientY })
        setTrail(prevTrail => {
          const newTrail = [newPoint, ...prevTrail.slice(0, 7)]
          return newTrail
        })
        
        lastUpdateTime.current = currentTime
      }
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Core glow */}
          <motion.div
            className="cursor-glow-core"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: [1, 1.3, 1],
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              default: {
                duration: 0.15,
                ease: "linear"
              }
            }}
          />
          
          {/* Trail effect */}
          {trail.map((point, index) => (
            <motion.div
              key={point.id}
              className="cursor-trail"
              initial={{ 
                x: point.x - 15,
                y: point.y - 15,
                opacity: 0.4,
                scale: 0.9
              }}
              animate={{
                opacity: 0,
                scale: 0.3
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  )
}