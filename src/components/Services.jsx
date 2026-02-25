import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Services(){
  const ref = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.service-card',{stagger:0.12, y:30, opacity:0, duration:0.8, ease:'power3.out', scrollTrigger:{trigger: ref.current, start:'top 80%'}})
    }, ref)
    return ()=> ctx.revert()
  },[])

  return (
    <section id="services" className="main-services" ref={ref}>
      <div className="container">
        <h2 style={{color:'#fff', marginBottom:24}}>You do the business, we'll handle the hype!</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Social Media Marketing</h3>
            <p>Maximize your reach with social media management and campaigns.</p>
          </div>
          <div className="service-card">
            <h3>Graphic Designing</h3>
            <p>Visual branding, UI/UX and promotional creatives.</p>
          </div>
          <div className="service-card">
            <h3>PPC & Paid Ads</h3>
            <p>Data-driven paid campaigns to increase conversions.</p>
          </div>
          <div className="service-card">
            <h3>Web Design & Development</h3>
            <p>Beautiful, fast, and responsive websites built to convert.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
