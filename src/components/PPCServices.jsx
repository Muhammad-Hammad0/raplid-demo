import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '/src/styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function PPCServices(){
  const ref = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.ppc-left h2, .ppc-left p, .ppc-left .ppc-bullet',{opacity:0,y:20,stagger:0.12,duration:0.8,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 85%'}})
      gsap.from('.ppc-right img',{opacity:0,x:30,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 85%'}})
    }, ref)
    return ()=>ctx.revert()
  },[])

  return (
    <section className="ppc-section" ref={ref}>
      <div className="container ppc-grid">
        <div className="ppc-left">
          <h2>Our <span className="gradient-text">PPC</span> Services:</h2>
          <p>We run data-driven paid advertising campaigns across platforms to maximize ROI and scale customer acquisition efficiently.</p>
          <ul className="ppc-bullets">
            <li className="ppc-bullet">Strategy &amp; audience research</li>
            <li className="ppc-bullet">Campaign setup &amp; A/B testing</li>
            <li className="ppc-bullet">Conversion tracking &amp; analytics</li>
            <li className="ppc-bullet">Budget optimisation &amp; bid management</li>
            <li className="ppc-bullet">Ad creatives &amp; landing page guidance</li>
          </ul>
          <a href="#contact" className="btn-getstarted gradient-cta">Get Started</a>
        </div>

        <div className="ppc-right">
          <img src="/assets/PPC-c21511a6.png" alt="PPC mockup" />
        </div>
      </div>
    </section>
  )
}
