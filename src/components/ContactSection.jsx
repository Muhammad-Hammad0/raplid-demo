import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection(){
  const ref = useRef(null)
  const successRef = useRef(null)
  const formRef = useRef(null)
  const buttonRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      // Simple entrance animation
      gsap.from('.contact-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      })

    }, ref)
    return ()=>ctx.revert()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if(!name || !email || !message){
      // Error shake animation
      gsap.to(form, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: 'power2.inOut',
        onComplete: () => gsap.set(form, { x: 0 })
      })
      return
    }

    setLoading(true)

    try{
      await new Promise(res => setTimeout(res, 900))
      setSent(true)
      
      // Success animation
      gsap.fromTo(successRef.current, {
        y: 10,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      
      // Reset form
      form.reset()
      
    }catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(180deg, rgba(15, 10, 10, 0.9) 0%, rgba(10, 5, 5, 0.9) 100%)'
    }}>
      <div className="container">
        
        {/* Header */}
        <div className="contact-content" style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: 'white'
          }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Ready to take your business to the next level? Let's discuss your project 
            and create something amazing together.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Contact Info */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}>
              Let's Start a Conversation
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#94a3b8',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Have a project in mind? We'd love to hear about it. 
              Get in touch and we'll get back to you within 24 hours.
            </p>

            <div style={{marginBottom: '24px'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div style={{color: 'white', fontWeight: '600'}}>Email</div>
                  <div style={{color: '#94a3b8', fontSize: '14px'}}>hello@rapidhype.local</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div style={{color: 'white', fontWeight: '600'}}>Phone</div>
                  <div style={{color: '#94a3b8', fontSize: '14px'}}>+1 555 123 4567</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f87171, #dc2626)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/>
                  </svg>
                </div>
                <div>
                  <div style={{color: 'white', fontWeight: '600'}}>Response Time</div>
                  <div style={{color: '#94a3b8', fontSize: '14px'}}>Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              
              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Your Name
                </label>
                <input 
                  name="name" 
                  type="text"
                  placeholder="John Doe" 
                  required 
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Email Address
                </label>
                <input 
                  name="email" 
                  type="email"
                  placeholder="john@example.com" 
                  required 
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Project Details
                </label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  rows="5" 
                  required 
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    resize: 'vertical',
                    minHeight: '120px',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>

              <button 
                ref={buttonRef}
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '12px',
                  border: 'none',
                  background: loading ? 'rgba(220, 38, 38, 0.5)' : 'linear-gradient(135deg, #dc2626, #991b1b)',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 12px 35px rgba(220, 38, 38, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)'
                  }
                }}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>

              {sent && (
                <div ref={successRef} style={{
                  padding: '16px',
                  background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>
    </section>
  )
}
