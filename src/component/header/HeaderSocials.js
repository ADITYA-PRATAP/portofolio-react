import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {AiFillInstagram} from 'react-icons/ai'
import {CgScrollV} from 'react-icons/cg'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/aditya-pratap-singh-2134571b7/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/ADITYA-PRATAP" target="_blank"><FiGithub/></a>
    <a href="https://www.instagram.com/mr._aditya_1/" target="_blank"><AiFillInstagram/></a>
    <a href="google.com" targer="_blank"><CgScrollV/></a>
    

      
    </div>
    

  )
}

export default HeaderSocials
