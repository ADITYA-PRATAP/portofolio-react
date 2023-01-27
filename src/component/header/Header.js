import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/frontd.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aditya Pratap singh</h1>
        <h5 className="text-light">Fullstack Devoloper</h5>
        <CTA/>
        <div className='scroll__down'>Scrool down</div>
        <div className="me">
        <img src={ME} alt="me"/>
      </div>
        <HeaderSocials/>
      </div>

      
      <a href="#contact" className='scrool__down'>Scrool__down</a>
    </header>
  )
}

export default Header
