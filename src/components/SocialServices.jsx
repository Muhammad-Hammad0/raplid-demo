import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function SocialServices(){
  const ref = useRef(null)
  const mockupRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      // Simple entrance animation
      gsap.from('.features-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      })

      // Floating animation for mockup
      gsap.to(mockupRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, ref)
    return ()=>ctx.revert()
  },[])

  return (
    <section className="features-section" ref={ref} style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(180deg, rgba(26, 10, 10, 0.9) 0%, rgba(15, 5, 5, 0.9) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="features-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left Content */}
          <div className="features-left">
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '24px',
              color: 'white'
            }}>
              Digital Solutions for 
              <br />
              <span className="gradient-text">Growing Businesses</span>
            </h2>
            
            <p style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#94a3b8',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              Transform your business with our comprehensive digital marketing solutions designed to drive growth, increase engagement, and maximize your ROI.
            </p>

            <div className="features-list" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginBottom: '40px'
            }}>
              
              {/* Feature 1 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 0'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '4px',
                    color: 'white'
                  }}>
                    Lightning Fast Results
                  </h4>
                  <p style={{
                    color: '#94a3b8',
                    margin: '0',
                    fontSize: '16px'
                  }}>
                    See measurable improvements in your digital presence within weeks
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 0'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  boxShadow: '0 8px 25px rgba(240, 147, 251, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '4px',
                    color: 'white'
                  }}>
                    Proven Strategies
                  </h4>
                  <p style={{
                    color: '#94a3b8',
                    margin: '0',
                    fontSize: '16px'
                  }}>
                    Data-driven approaches that have delivered success for 500+ clients
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 0'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f87171, #dc2626)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  boxShadow: '0 8px 25px rgba(79, 172, 254, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '4px',
                    color: 'white'
                  }}>
                    Expert Team Support
                  </h4>
                  <p style={{
                    color: '#94a3b8',
                    margin: '0',
                    fontSize: '16px'
                  }}>
                    Dedicated specialists working to achieve your business goals
                  </p>
                </div>
              </div>

            </div>

            <a href="#contact" className="btn-started-oval" ref={ctaRef} style={{
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
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
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
              e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.5)'
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)'
            }}>
              Get Started Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Content - Mockup */}
          <div className="features-right">
            <div ref={mockupRef} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                borderRadius: '16px',
                padding: '8px',
                marginBottom: '20px'
              }}>
                <img src="/assets/herosample-1a9dfd8b.png" alt="Digital Marketing Dashboard" style={{
                  width: '100%',
                  borderRadius: '12px',
                  display: 'block'
                }} />
              </div>
              
              {/* Stats overlay */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '12px',
                padding: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '16px',
                  textAlign: 'center'
                }}>
                  <div>
                    <div style={{color: '#4facfe', fontSize: '18px', fontWeight: '700'}}>2.5M+</div>
                    <div style={{color: '#ccc', fontSize: '12px'}}>Impressions</div>
                  </div>
                  <div>
                    <div style={{color: '#f093fb', fontSize: '18px', fontWeight: '700'}}>150+</div>
                    <div style={{color: '#ccc', fontSize: '12px'}}>Projects</div>
                  </div>
                  <div>
                    <div style={{color: '#667eea', fontSize: '18px', fontWeight: '700'}}>500+</div>
                    <div style={{color: '#ccc', fontSize: '12px'}}>Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
