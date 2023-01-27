
import './Testmonial.css'
import React from 'react'
import ME from '../../assets/giftproject.jpeg'
import ME2 from '../../assets/cpu sch.jpeg'
import ME3 from '../../assets/music player.jpg'

const Testmonial = () => {
  return (
    <section id='testomonial'>
    <h5> What I Have Made </h5>
    <h2>My Project</h2>
    <div className='container portfolio__container'>
      

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={ME} className="a"></img>
        </div>
          <h3>Random gift</h3>
          <br></br>
          <a href='https://aditya-pratap.github.io/hide-seek.github.io/' className='btn' target='_blank'>Live project</a>
          {/* <a href='' className='btn btn-primary' target='_blank'></a> */}
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={ME2} className="b"></img>
        </div>
          <h3>CPU Scheduling</h3>
          <br></br>
          <a href='https://aditya-pratap.github.io/CPUScheduler.github.io/' className='btn' target='_blank'>Live Project</a>
          {/* <a href='' className='btn btn-primary' target='_blank'></a> */}
        </article>
 
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={ME3} className="c"></img>
        </div>
          <h3>music player</h3>
          <br></br>
          <a href='https://aditya-pratap.github.io/musicplayer.github.io/' className='btn' target='_blank'>Live Projects</a>
          {/* <a href='' className='btn btn-primary' target='_blank'></a> */}
        </article>

        
      </div>
{/* ======================================================================= */}


    </section>
  )
}

export default Testmonial


