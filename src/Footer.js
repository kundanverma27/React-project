import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin ,faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div  className="footer-info">
      
      <p>© 2025 MyProject. All rights reserved.</p>

       <div className="social-links">

       <a href="https://instagram.com/yourusername"  >
        <FontAwesomeIcon icon ={faInstagram} size= "2x"/>
       </a>

       <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
      </a>

      </div>
    </div>
  )
}
