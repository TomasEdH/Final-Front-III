import React from 'react'
import dhLogo from '../Images/DH.png'
import faceIcon from '../Images/ico-facebook.png'
import wpIcon from '../Images/ico-whatsapp.png'
import tkIcon from '../Images/ico-tiktok.png'

const Footer = () => {
  return (
    <footer>
      <img src={dhLogo} id='footer-icon-dh'/>
      <div>
        <img src={faceIcon} className='footer-icon' />
        <img src={wpIcon} className='footer-icon' />
        <img src={tkIcon} className='footer-icon' />
      </div>
    </footer>
  )
}


export default Footer