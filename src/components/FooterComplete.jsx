import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function FooterComplete(){
  const footerRef = useRef(null)
  const subscribeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer sections entrance animation
      gsap.from('.footer-brand, .footer-links, .footer-contact, .footer-newsletter', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%'
        }
      })

      // Footer bottom animation
      gsap.from('.footer-bottom', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer-bottom',
          start: 'top 95%'
        }
      })

      // Social icons hover effects
      const socialIcons = footerRef.current.querySelectorAll('.socials a')
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

      // Newsletter form interactions
      const form = footerRef.current.querySelector('.footer-newsletter form')
      const input = form.querySelector('input')
      const button = subscribeRef.current

      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      // Footer links hover effects
      const footerLinks = footerRef.current.querySelectorAll('.footer-links a, .legal-links a')
      footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        
        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

    }, footerRef)

    return () => ctx.revert()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    
    // Success animation
    gsap.to(subscribeRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        alert('Subscribed (demo)')
      }
    })
  }

  return (
    <footer className="site-footer" id="footer" ref={footerRef}>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-f9157655.png" alt="Rapid Hype" />
          <p>Rapid Hype is a full-service digital agency focused on growth and performance-driven marketing.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: hello@rapidhype.local</p>
          <p>Phone: +1 555 123 4567</p>
          <div className="socials">
            <a href="#"><img src="/assets/facebook-b1172216.svg" alt="facebook"/></a>
            <a href="#"><img src="/assets/instagram-a54e883a.svg" alt="instagram"/></a>
            <a href="#"><img src="/assets/linkedin-3be30c66.svg" alt="linkedin"/></a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your email" required />
            <button className="btn-started-oval" ref={subscribeRef} type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-grid">
          <span>© {new Date().getFullYear()} Rapid Hype. All rights reserved.</span>
          <div className="legal-links"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}
