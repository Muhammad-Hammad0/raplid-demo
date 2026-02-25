import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function PortfolioModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Show modal with animation
      gsap.set(modalRef.current, { display: 'flex' })
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
      )
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Hide modal with animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(modalRef.current, { display: 'none' })
        }
      })
      
      // Restore body scroll
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleDownload = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      // Shake animation for validation
      gsap.to('.email-input', {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: 'power2.out'
      })
      return
    }

    setIsDownloading(true)
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Create and trigger download
    const link = document.createElement('a')
    link.href = '/assets/portfolio.pdf' // You can replace with actual portfolio file
    link.download = 'RapidHype-Portfolio.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setIsDownloading(false)
    
    // Success animation
    gsap.to('.download-btn', {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    })
    
    // Close modal after download
    setTimeout(() => {
      onClose()
      setEmail('')
      setMessage('')
    }, 1000)
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  return (
    <div 
      ref={modalRef}
      className="portfolio-modal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        ref={overlayRef}
        onClick={handleOverlayClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      <div 
        ref={contentRef}
        className="portfolio-modal-content"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          background: 'linear-gradient(145deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%)',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(30px)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)'
            e.target.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)'
            e.target.style.transform = 'scale(1)'
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #dc2626, #991b1b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            Portfolio
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
            margin: 0
          }}>
            Get our complete portfolio and case studies
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleDownload} style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="JohnDoe@gmail.com"
              className="email-input"
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid rgba(220, 38, 38, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(220, 38, 38, 0.6)'
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'
                e.target.style.background = 'rgba(255, 255, 255, 0.05)'
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Optional Message..."
              rows="4"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid rgba(220, 38, 38, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                resize: 'vertical',
                minHeight: '100px'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(220, 38, 38, 0.6)'
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'
                e.target.style.background = 'rgba(255, 255, 255, 0.05)'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isDownloading}
            className="download-btn"
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '16px',
              border: 'none',
              background: 'linear-gradient(135deg, #dc2626, #991b1b)',
              color: 'white',
              fontSize: '18px',
              fontWeight: '700',
              cursor: isDownloading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: isDownloading ? 0.7 : 1,
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (!isDownloading) {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.4)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isDownloading) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.3)'
              }
            }}
          >
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </form>

        {/* Rocket Animation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '100px',
            background: 'linear-gradient(145deg, #dc2626, #991b1b)',
            borderRadius: '40px 40px 20px 20px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            {/* Rocket Window */}
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-10px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #dc2626, #991b1b)'
              }} />
            </div>
            
            {/* Rocket Fins */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-15px',
              width: '0',
              height: '0',
              borderLeft: '15px solid transparent',
              borderRight: '15px solid #991b1b',
              borderTop: '25px solid #991b1b'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-15px',
              width: '0',
              height: '0',
              borderLeft: '15px solid #991b1b',
              borderRight: '15px solid transparent',
              borderTop: '25px solid #991b1b'
            }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .portfolio-modal input::placeholder,
        .portfolio-modal textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}