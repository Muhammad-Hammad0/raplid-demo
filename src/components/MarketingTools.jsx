import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  { name: 'Google Ads', icon: '🎯', description: 'PPC Campaign Management' },
  { name: 'Facebook Ads', icon: '📘', description: 'Social Media Advertising' },
  { name: 'Google Analytics', icon: '📊', description: 'Data & Analytics' },
  { name: 'Mailchimp', icon: '📧', description: 'Email Marketing' },
  { name: 'Hootsuite', icon: '🐦', description: 'Social Media Management' },
  { name: 'Canva', icon: '🎨', description: 'Graphic Design' },
  { name: 'WordPress', icon: '🌐', description: 'Website Development' },
  { name: 'Shopify', icon: '🛒', description: 'E-commerce Solutions' }
]

export default function MarketingTools(){
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation
      gsap.from('.tools-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%'
        }
      })

      // Stagger tool cards
      gsap.from('.tool-card', {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.tools-grid',
          start: 'top 90%'
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.9) 0%, rgba(5, 5, 10, 0.9) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="tools-content slide-in-up" style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            Marketing Tools We
            <br />
            <span className="gradient-text">Master</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our team is proficient in industry-leading tools and platforms to deliver 
            exceptional results for your digital marketing campaigns.
          </p>
        </div>

        <div className="tools-grid stagger-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {tools.map((tool, index) => (
            <div key={`tool-${index}`} className="tool-card stagger-item" style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '32px 24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
              e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              
              <div className="float" style={{
                width: '70px',
                height: '70px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, ${
                  index % 4 === 0 ? '#dc2626, #991b1b' :
                  index % 4 === 1 ? '#ef4444, #b91c1c' :
                  index % 4 === 2 ? '#f87171, #dc2626' :
                  '#dc2626, #7f1d1d'
                })`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '32px',
                boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)',
                flexShrink: 0
              }}>
                {tool.icon}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px',
                textAlign: 'center'
              }}>
                {tool.name}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#d1d5db',
                margin: '0',
                lineHeight: '1.5',
                textAlign: 'center'
              }}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Add responsive CSS */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .tools-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .tools-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        {/* Bottom CTA */}
        <div className="slide-in-up" style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Ready to Leverage These Tools?
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#d1d5db',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Let our experts use these powerful tools to grow your business and maximize your ROI.
            </p>
            <a href="#contact" className="pulse" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 8px 25px rgba(220, 38, 38, 0.4)',
              transition: 'all 0.3s ease'
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
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 12px 35px rgba(220, 38, 38, 0.5)'
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.4)'
            }}>
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
