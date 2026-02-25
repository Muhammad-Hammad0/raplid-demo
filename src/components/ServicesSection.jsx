import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection(){
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      // Simple stats animation only
      const statNumbers = statsRef.current?.querySelectorAll('.stat-num')
      if (statNumbers) {
        statNumbers.forEach((stat, index) => {
          const targets = [2500000, 150, 500]
          ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            onEnter: () => {
              gsap.fromTo(stat, 
                { textContent: 0 },
                {
                  textContent: targets[index],
                  duration: 2,
                  ease: 'power2.out',
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    const value = Math.ceil(this.targets()[0].textContent)
                    if (targets[index] >= 1000000) {
                      stat.textContent = (value / 1000000).toFixed(1) + 'M+'
                    } else {
                      stat.textContent = value + '+'
                    }
                  }
                }
              )
            }
          })
        })
      }
    }, sectionRef)

    return ()=>ctx.revert()
  },[])

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-stats" ref={statsRef}>
          <div className="stat">
            <span className="stat-num">2.5M+</span>
            <span className="stat-label">Impressions Generated</span>
          </div>
          <div className="stat">
            <span className="stat-num">150+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>

        <div className="services-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start'}}>
          <div className="services-left">
            <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px', color: 'white'}}>
              You do the business,
              <br />
              we'll handle the <span className="gradient-text">hype!</span>
            </h2>
            <p className="services-intro" style={{fontSize: '18px', lineHeight: '1.7', color: '#94a3b8', maxWidth: '500px', marginBottom: '24px'}}>
              Our experienced team of digital marketers will provide a comprehensive suite of Digital Marketing Solutions including Social Media Marketing, Email Marketing, PPC Campaigns, Graphic Designing, Content Marketing, SEO, Web Development, and more.
            </p>
            <a href="#contact" className="btn-started-oval" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 8px 25px rgba(220, 38, 38, 0.4)'
            }} onClick={(e) => {
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
              Get Started
            </a>
          </div>

          <div className="services-right" style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            
            {/* Service 1 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h4 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'white'}}>Social Media Marketing</h4>
                <p style={{color: '#ccc', lineHeight: '1.6', margin: '0'}}>Get ready to maximize your reach with our Social Media Marketing Services!</p>
              </div>
            </div>

            {/* Service 2 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h4 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'white'}}>Graphic Designing Services</h4>
                <p style={{color: '#ccc', lineHeight: '1.6', margin: '0'}}>Our team of designers will take your vision and turn it into a visual masterpiece.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #f87171, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <div>
                <h4 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'white'}}>Paid Advertising (PPC)</h4>
                <p style={{color: '#ccc', lineHeight: '1.6', margin: '0'}}>Get a higher ROI with our highly targeted and data-driven PPC advertising strategies.</p>
              </div>
            </div>

            {/* Service 4 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #dc2626, #7f1d1d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h4 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'white'}}>Web Design & Development</h4>
                <p style={{color: '#ccc', lineHeight: '1.6', margin: '0'}}>Let us help you create a website that's not only visually appealing, but also highly functional and user-friendly.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
