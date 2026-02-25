import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import PortfolioModal from './PortfolioModal'

export default function Navbar(){
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial navbar animation
      gsap.from('.logo-img', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out'
      })
      
      gsap.from('.nav-menu li', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      })

      // Navbar scroll effect
      let lastScrollY = 0
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        
        // Change navbar background on scroll
        if (currentScrollY > 50) {
          gsap.to(navRef.current, {
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            duration: 0.3,
            ease: 'power2.out'
          })
        } else {
          gsap.to(navRef.current, {
            background: 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            duration: 0.3,
            ease: 'power2.out'
          })
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          gsap.to(navRef.current, {
            y: -100,
            duration: 0.3,
            ease: 'power2.out'
          })
        } else {
          // Scrolling up
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
        
        lastScrollY = currentScrollY

        // Update active section
        updateActiveSection()
      }

      const updateActiveSection = () => {
        const sections = ['home', 'services', 'privacy', 'contact']
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && scrollPosition >= section.offsetTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      
      return () => window.removeEventListener('scroll', handleScroll)
    }, navRef)

    return () => ctx.revert()
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        // Set initial display
        mobileMenuRef.current.style.display = 'block'
        
        // Open animation
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out'
        })
        
        // Animate menu items
        const items = document.querySelectorAll('.mobile-menu-item')
        gsap.fromTo(items, 
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2
          }
        )

        // Prevent body scroll
        document.body.style.overflow = 'hidden'
      } else {
        // Close animation
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
          onComplete: () => {
            if (mobileMenuRef.current) {
              mobileMenuRef.current.style.display = 'none'
            }
          }
        })

        // Restore body scroll
        document.body.style.overflow = 'auto'
      }
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handlePortfolioClick = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId)
    
    if (target) {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 80
      const targetPosition = target.offsetTop - navHeight - 20
      
      gsap.to(window, {
        scrollTo: { y: targetPosition, autoKill: false },
        duration: 1,
        ease: 'power2.inOut'
      })
      
      setActiveSection(targetId)
    }
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    smoothScrollTo(targetId)
    setIsMobileMenuOpen(false) // Close mobile menu after click
  }

  return (
    <>
      <nav className="navbar slide-in-down" ref={navRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container nav-content" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          position: 'relative'
        }}>
          <div className="logo">
            <img 
              src="/react-app/assets/logo-f9157655.png" 
              alt="Rapid Hype" 
              className="logo-img hover-scale"
              onClick={(e) => handleNavClick(e, 'home')}
              style={{ 
                cursor: 'pointer',
                height: '40px',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          
          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                style={{
                  color: activeSection === 'home' ? '#dc2626' : 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                style={{
                  color: activeSection === 'services' ? '#dc2626' : 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#privacy" 
                onClick={(e) => handleNavClick(e, 'privacy')}
                style={{
                  color: activeSection === 'privacy' ? '#dc2626' : 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                style={{
                  color: activeSection === 'contact' ? '#dc2626' : 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a 
                className="btn-download pulse" 
                href="#" 
                onClick={handlePortfolioClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Portfolio
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 1001
            }}
          >
            <span style={{
              width: '28px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none'
            }}></span>
            <span style={{
              width: '28px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              width: '28px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
            }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div 
        ref={mobileMenuRef}
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '85%',
          maxWidth: '400px',
          height: '100vh',
          background: '#1a1a1a',
          zIndex: 9999,
          transform: 'translateX(100%)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
          overflowY: 'auto',
          borderLeft: '3px solid #dc2626',
          display: 'none',
          opacity: 0
        }}
      >
        <div style={{
          padding: '80px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)'
        }}>
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(220, 38, 38, 0.15)',
              border: '2px solid #dc2626',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: '300',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              lineHeight: '1'
            }}
            onMouseDown={(e) => {
              e.target.style.background = 'rgba(220, 38, 38, 0.3)'
              e.target.style.transform = 'scale(0.95)'
            }}
            onMouseUp={(e) => {
              e.target.style.background = 'rgba(220, 38, 38, 0.15)'
              e.target.style.transform = 'scale(1)'
            }}
          >
            ×
          </button>

          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="mobile-menu-item"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '26px',
              padding: '20px 16px',
              transition: 'all 0.3s ease',
              display: 'block',
              background: activeSection === 'home' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '12px',
              borderLeft: activeSection === 'home' ? '4px solid #dc2626' : '4px solid transparent'
            }}
          >
            🏠 Home
          </a>
          
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="mobile-menu-item"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '26px',
              padding: '20px 16px',
              transition: 'all 0.3s ease',
              display: 'block',
              background: activeSection === 'services' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '12px',
              borderLeft: activeSection === 'services' ? '4px solid #dc2626' : '4px solid transparent'
            }}
          >
            ⚡ Services
          </a>
          
          <a 
            href="#privacy" 
            onClick={(e) => handleNavClick(e, 'privacy')}
            className="mobile-menu-item"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '26px',
              padding: '20px 16px',
              transition: 'all 0.3s ease',
              display: 'block',
              background: activeSection === 'privacy' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '12px',
              borderLeft: activeSection === 'privacy' ? '4px solid #dc2626' : '4px solid transparent'
            }}
          >
            🔒 Privacy Policy
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mobile-menu-item"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '26px',
              padding: '20px 16px',
              transition: 'all 0.3s ease',
              display: 'block',
              background: activeSection === 'contact' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '12px',
              borderLeft: activeSection === 'contact' ? '4px solid #dc2626' : '4px solid transparent'
            }}
          >
            📧 Contact Us
          </a>
          
          <a 
            href="#" 
            onClick={handlePortfolioClick}
            className="mobile-menu-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px 32px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #dc2626, #991b1b)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '20px',
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.5)',
              marginTop: '32px',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(220, 38, 38, 0.5)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Portfolio
          </a>

          {/* Social Links or Additional Info */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '40px',
            textAlign: 'center',
            color: '#999999',
            fontSize: '13px'
          }}>
            <p style={{ margin: 0, fontWeight: '600' }}>© 2024 Rapid Hype</p>
            <p style={{ margin: '8px 0 0 0', color: '#666666' }}>Digital Marketing Agency</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 998,
            backdropFilter: 'blur(5px)'
          }}
        />
      )}

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
      
      <PortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
