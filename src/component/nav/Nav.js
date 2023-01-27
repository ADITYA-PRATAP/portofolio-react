import React from 'react'
import './Nav.css'
import {HiHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineContactMail} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
const Nav = () => {
  return (
    
    <nav>
    <a href="#home" className='active'><HiHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#testomonial"><BiBook/></a>
    <a href="#experience"><RiServiceLine/></a>
    <a href="#contact"><MdOutlineContactMail/></a>
    </nav>
    
    
  )
}

export default Nav
