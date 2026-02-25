import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GraphicDesign(){
  const ref = useRef(null)
  const galleryRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      // Simple entrance animation
      gsap.from('.design-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      })

      // Stagger design cards
      gsap.from('.design-card', {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.design-services',
          start: 'top 90%'
        }
      })

      // Gallery animation
      gsap.from('.gallery-item', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 90%'
        }
      })

    }, ref)
    return ()=>ctx.revert()
  },[])

  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity & Logo Design',
      description: 'Create memorable brand identities that resonate with your target audience'
    },
    {
      icon: '📱',
      title: 'Social Media Creatives',
      description: 'Eye-catching graphics optimized for all social media platforms'
    },
    {
      icon: '🎯',
      title: 'Ad Creatives & Banners',
      description: 'High-converting advertisement designs that drive results'
    },
    {
      icon: '📄',
      title: 'Marketing Collateral',
      description: 'Professional brochures, flyers, and presentation materials'
    }
  ]

  return (
    <section ref={ref} style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(180deg, rgba(10, 5, 5, 0.9) 0%, rgba(15, 10, 10, 0.9) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Header */}
        <div className="design-content" style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: 'white'
          }}>
            Graphic Design <span className="gradient-text">Services</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our creative team designs stunning visuals that capture attention, 
            communicate your message, and drive engagement across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="design-services" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {services.map((service, index) => (
            <div key={service.title} className="design-card" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              padding: '32px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(240, 147, 251, 0.3)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}>
              
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${
                  index % 4 === 0 ? '#dc2626, #991b1b' :
                  index % 4 === 1 ? '#ef4444, #b91c1c' :
                  index % 4 === 2 ? '#f87171, #dc2626' :
                  '#dc2626, #7f1d1d'
                })`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '12px'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#94a3b8',
                margin: '0',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <div ref={galleryRef} style={{marginBottom: '60px'}}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Our Design Portfolio
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {/* Portfolio Item 1 */}
            <div className="gallery-item" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px'
              }}>
                🎨
              </div>
              <div style={{padding: '20px'}}>
                <h4 style={{color: 'white', fontSize: '18px', marginBottom: '8px'}}>Brand Identity Design</h4>
                <p style={{color: '#94a3b8', fontSize: '14px', margin: '0'}}>Complete brand package with logo, colors, and guidelines</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="gallery-item" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px'
              }}>
                📱
              </div>
              <div style={{padding: '20px'}}>
                <h4 style={{color: 'white', fontSize: '18px', marginBottom: '8px'}}>Social Media Graphics</h4>
                <p style={{color: '#94a3b8', fontSize: '14px', margin: '0'}}>Engaging social media posts and story templates</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="gallery-item" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #f87171, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px'
              }}>
                🎯
              </div>
              <div style={{padding: '20px'}}>
                <h4 style={{color: 'white', fontSize: '18px', marginBottom: '8px'}}>Advertisement Banners</h4>
                <p style={{color: '#94a3b8', fontSize: '14px', margin: '0'}}>High-converting ad creatives for digital campaigns</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}>
              Ready to Elevate Your Brand?
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#94a3b8',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Let our creative team design stunning visuals that make your brand stand out and drive results.
            </p>
            <a href="#contact" style={{
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
              boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
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
              e.target.style.boxShadow = '0 12px 35px rgba(240, 147, 251, 0.5)'
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 25px rgba(240, 147, 251, 0.4)'
            }}>
              Start Your Design Project
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
