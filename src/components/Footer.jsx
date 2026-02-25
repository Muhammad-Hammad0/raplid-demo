import React from 'react'
import '/src/styles.css'

export default function Footer(){
  return (
    <footer className="site-footer" id="footer">
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
          <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed (demo)')}}>
            <input type="email" placeholder="Your email" required />
            <button className="btn-started-oval" type="submit">Subscribe</button>
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
import React from 'react'
import '/src/styles.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-f9157655.png" alt="logo" />
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
          <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed (demo)')}}>
            <input type="email" placeholder="Your email" required />
            <button className="btn-started-oval" type="submit">Subscribe</button>
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
import React from 'react'

export default function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Rapid Hype</h3>
          <img src="/assets/logo-f9157655.png" alt="logo" style={{maxWidth:150}} />
          <p>Rapid Hype is a dynamic digital marketing agency that specializes in creating customized marketing strategies.</p>
          <div className="social-media">
            <a href="#"><img src="/assets/instagram-a54e883a.svg" alt="ig" style={{width:24}}/></a>
            <a href="#"><img src="/assets/facebook-b1172216.svg" alt="fb" style={{width:24}}/></a>
            <a href="#"><img src="/assets/linkedin-3be30c66.svg" alt="li" style={{width:24}}/></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><a href="tel:+923072114006">+923072114006</a><br/><a href="mailto:hello@rapidhype.pk">hello@rapidhype.pk</a></p>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2024 Rapid Hype. All Rights Reserved.</div>
    </footer>
  )
}
