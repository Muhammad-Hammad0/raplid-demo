import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Using actual client logos from your assets
const clients = [
  { name: 'GZ Client', image: 'gzclient4-f0431826.png' },
  { name: 'HWT Client', image: 'hwtclient2-a1228c06.png' },
  { name: 'PH Client', image: 'phclient1-9d603c1f.png' },
  { name: 'SH Client', image: 'shclient3-ccb11fab.png' }
]

export default function Clients() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation
      gsap.from('.clients-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      })

      // Client logos animation
      gsap.from('.client-card', {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.clients-grid',
          start: 'top 90%'
        }
      })

      // CTA animation
      gsap.from('.cta-section', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 90%'
        }
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={{
      padding: '100px 0 80px',
      background: 'linear-gradient(180deg, rgba(15, 10, 10, 0.95) 0%, rgba(10, 5, 5, 0.98) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="clients-content" style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: 'white'
          }}>
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            We're proud to work with amazing businesses and help them achieve 
            their digital marketing goals through innovative strategies.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="clients-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '100px',
          maxWidth: '1200px',
          margin: '0 auto 100px'
        }}>
          {clients.map((client, index) => (
            <div key={client.name} className="client-card" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '24px',
              padding: '50px 30px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(220, 38, 38, 0.2)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${
                  index % 4 === 0 ? '#dc2626, #991b1b' :
                  index % 4 === 1 ? '#ef4444, #b91c1c' :
                  index % 4 === 2 ? '#f87171, #dc2626' :
                  '#dc2626, #7f1d1d'
                })`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 12px 35px rgba(220, 38, 38, 0.3)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={`/react-app/assets/${client.image}`} 
                  alt={client.name}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'contain',
                    filter: 'brightness(1.2) contrast(1.1)'
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div style="
                        width: 70px; 
                        height: 70px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-size: 28px; 
                        font-weight: 900; 
                        color: white;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                      ">
                        ${client.name.split(' ')[0]}
                      </div>
                    `
                  }}
                />
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '12px',
                letterSpacing: '-0.01em'
              }}>
                {client.name}
              </h3>

              <div style={{
                width: '50px',
                height: '3px',
                background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                margin: '0 auto',
                borderRadius: '3px'
              }} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '60px 40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '900',
            color: 'white',
            marginBottom: '16px'
          }}>
            Ready, Set, <span className="gradient-text">Promote!</span>
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            marginBottom: '32px',
            lineHeight: '1.6',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Get in touch with us today and let us take your digital marketing 
            to the next level with proven strategies and expert execution.
          </p>
          
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
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
              Get Started Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            
            <a href="#services" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '50px',
              background: 'transparent',
              border: '2px solid rgba(220, 38, 38, 0.5)',
              color: '#dc2626',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }} onClick={(e) => {
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
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(220, 38, 38, 0.1)'
              e.target.style.color = 'white'
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#dc2626'
            }}>
              View Our Services
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}