import React from 'react'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import About from './component/about/About'
 import Contact from './component/contact/Contact'
import Testmonial from './component/testmonial/Testmonial'

import Portfolio from './component/portfolio/Portfolio'
import Nav from './component/nav/Nav'
// import Services from './component/services/Services'
// import Section from './component/section/Section'
import Experience from './component/experience/Experience'

const app = () => {
  return (
    <>
   
      <Header/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testmonial/>
      <Nav/>
      <Contact/>
      {/* <Services/> */}
      {/* <Section/>  */}
      <Footer/>
      
    </>
  )
}

export default app
