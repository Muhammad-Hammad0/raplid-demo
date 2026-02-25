import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ScrollProgress() {
  const progressRef = useRef(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      gsap.to(progressRef.current, {
        width: `${scrollPercent}%`,
        duration: 0.1,
        ease: 'none'
      })
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return <div ref={progressRef} className="scroll-indicator" />
}