import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function DetailedServices(){
  const ref = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.service-detail',{stagger:0.12, y:40, opacity:0, duration:0.9, ease:'power3.out', scrollTrigger:{trigger: ref.current, start:'top 80%'}})
    }, ref)
    return ()=> ctx.revert()
  },[])

  return (
    <section className="detailed-services" ref={ref}>
      <div className="container">
        <div className="service-detail">
          <div className="detail-image"><img src="/assets/team-edaa25a9.png" alt="team"/></div>
          <div className="detail-content">
            <h2>Our Social Media Marketing Services:</h2>
            <ul>
              <li>Creation, Optimization & Branding of Social Media Accounts.</li>
              <li>Monthly Social Media Content Calendar.</li>
              <li>Graphics Designing & Content Creation.</li>
              <li>Social Media PPC Advertising.</li>
            </ul>
          </div>
        </div>

        <div className="service-detail reverse">
          <div className="detail-image"><img src="/assets/graphicdesign-d719c062.png" alt="graphic"/></div>
          <div className="detail-content">
            <h2>Graphic Designing Services:</h2>
            <ul>
              <li>Branding Design.</li>
              <li>Social Media Design.</li>
              <li>UI/UX Design.</li>
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="detail-image"><img src="/assets/PPC-c21511a6.png" alt="ppc"/></div>
          <div className="detail-content">
            <h2>Our PPC Services:</h2>
            <ul>
              <li>Strategy Development.</li>
              <li>Campaign Setup.</li>
              <li>Reporting and Analysis.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
