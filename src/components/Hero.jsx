import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero(){
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const btnRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({defaults:{ease:'power3.out'}})
      
      // Hero entrance animation
      tl.from('.discount-tag', {y: -30, opacity: 0, duration: 0.8})
        .from('.hero-text h1', {y: 50, opacity: 0, duration: 1}, '-=0.6')
        .from('.hero-text p', {y: 30, opacity: 0, duration: 0.8}, '-=0.4')
        .from('.btn-wrapper', {y: 20, opacity: 0, duration: 0.6}, '-=0.2')
        .from(imageRef.current, {scale: 0.8, opacity: 0, duration: 1.2}, '-=0.8')
        .from('.circle-bg', {scale: 0.5, opacity: 0, duration: 1.5}, '-=1.2')

      // Continuous animations
      gsap.to(btnRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.circle-bg', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      })

      // Floating CTA animation
      gsap.to(ctaRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // CTA entrance
      gsap.fromTo(ctaRef.current, 
        {autoAlpha: 0, x: 50}, 
        {autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1}
      )

      // Parallax effect
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to('.hero-image', {
            y: progress * 100,
            duration: 0.3,
            ease: 'none'
          })
        }
      })

    }, containerRef)

    return ()=> ctx.revert()
  },[])

  return (
    <section id="home" className="hero" ref={containerRef}>
        <div className="discount-tag">
        <span className="flash-icon">🔥</span>
        Limited Time: 25% Off All Services
      </div>
      
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>
            Transform Your Brand Into a 
            <br />
            <span className="gradient-text">Digital Powerhouse</span>
          </h1>
          <p>
            We create stunning digital experiences that drive growth, engage audiences, 
            and deliver measurable results for forward-thinking businesses.
          </p>
          <div className="btn-wrapper">
            <a ref={btnRef} className="btn-started-oval" href="#contact" onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('contact')
              if (target) {
                const navHeight = 80
                const targetPosition = target.offsetTop - navHeight - 20
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                })
              }
            }} style={{
              background: 'linear-gradient(135deg, #dc2626, #991b1b)',
              boxShadow: '0 8px 25px rgba(220, 38, 38, 0.4)'
            }}>
              <span>Start Your Journey</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a className="btn-started-oval" href="#services" onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('services')
              if (target) {
                const navHeight = 80
                const targetPosition = target.offsetTop - navHeight - 20
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                })
              }
            }} style={{background: 'transparent', border: '2px solid rgba(220, 38, 38, 0.5)', color: '#dc2626'}}>
              <span>View Our Work</span>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="circle-bg"></div>
          <img ref={imageRef} src="/assets/herosample-1a9dfd8b.png" alt="Digital Marketing Dashboard" />
        </div>
      </div>

      <div className="cta-floating" ref={ctaRef}>
        <div style={{textAlign: 'center', color: 'white'}}>
          <div style={{fontSize: '24px', marginBottom: '8px'}}>💬</div>
          <div style={{fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Free Consultation</div>
          <a href="#contact" className="btn-started-oval" style={{fontSize: '12px', padding: '8px 16px'}} onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById('contact')
            if (target) {
              const navHeight = 80
              const targetPosition = target.offsetTop - navHeight - 20
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              })
            }
          }}>
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}
