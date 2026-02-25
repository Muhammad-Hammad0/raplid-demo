import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection(){
  const ref = useRef(null)
  const imageRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 20%'
        }
      })

      // Staggered text animation
      tl.from('.about-left .small', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
      })
      .from('.about-left h2', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.about-left p', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.6')
      .from(imageRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')

      // Parallax effect for the image
      gsap.to(imageRef.current, {
        y: -20,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Subtle floating animation
      gsap.to(imageRef.current, {
        y: '+=10',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Hover effect for the image
      const image = imageRef.current
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

    }, ref)
    return ()=>ctx.revert()
  },[])

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container about-grid">
        <div className="about-left">
          <h3 className="small">About Us</h3>
          <h2>We grow brands with measurable strategies</h2>
          <p>Rapid Hype is a performance-driven agency focused on growth, using data-led campaigns, creative design and modern web experiences to scale businesses.</p>
        </div>
        <div className="about-right">
          <div className="team-row">
            <img ref={imageRef} src="/assets/team-edaa25a9.png" alt="team" />
          </div>
        </div>
      </div>
    </section>
  )
}
