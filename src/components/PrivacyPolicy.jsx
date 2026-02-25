import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PrivacyPolicy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.privacy-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="privacy" className="privacy-section" ref={sectionRef} style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%)'
    }}>
      <div className="container">
        <div className="privacy-content" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '40px',
            textAlign: 'center',
            color: 'white'
          }}>
            Privacy <span className="gradient-text">Policy</span>
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div style={{color: '#ccc', lineHeight: '1.7', fontSize: '16px'}}>
              
              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                Information We Collect
              </h3>
              <p style={{marginBottom: '16px'}}>
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, or contact us for support. This may include your name, 
                email address, phone number, and any other information you choose to provide.
              </p>

              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                How We Use Your Information
              </h3>
              <p style={{marginBottom: '16px'}}>
                We use the information we collect to:
              </p>
              <ul style={{marginBottom: '16px', paddingLeft: '20px'}}>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>

              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                Information Sharing
              </h3>
              <p style={{marginBottom: '16px'}}>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with trusted service providers who assist us in operating our website and conducting our business.
              </p>

              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                Data Security
              </h3>
              <p style={{marginBottom: '16px'}}>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                Your Rights
              </h3>
              <p style={{marginBottom: '16px'}}>
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>

              <h3 style={{color: 'white', fontSize: '24px', marginBottom: '16px', marginTop: '32px'}}>
                Contact Us
              </h3>
              <p style={{marginBottom: '16px'}}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p style={{marginBottom: '8px'}}>
                <strong style={{color: 'white'}}>Email:</strong> privacy@rapidhype.local
              </p>
              <p style={{marginBottom: '8px'}}>
                <strong style={{color: 'white'}}>Phone:</strong> +1 555 123 4567
              </p>

              <div style={{
                marginTop: '40px',
                padding: '20px',
                background: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <p style={{margin: '0', fontSize: '14px', color: '#a0a0a0'}}>
                  <strong style={{color: 'white'}}>Last Updated:</strong> February 25, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}