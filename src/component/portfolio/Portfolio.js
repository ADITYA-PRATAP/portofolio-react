import React from 'react'
import './Portfolio.css'
import ME from '../../assets/dsa completed course.png'
import ME1 from '../../assets/GA.png'
import ME2 from '../../assets/dsaab.png'
import ME3 from '../../assets/techno.png'
import ME4 from '../../assets/prob.png'
import ME5 from '../../assets/publicis sapient.png'
import ME6 from '../../assets/hack.png'
import ME7 from '../../assets/gfg dsa .png'
import ME8 from '../../assets/css.png'
import ME9 from '../../assets/internship.png'
import ME10 from '../../assets/CAM.png'
import {AiOutlinePlusCircle} from 'react-icons/ai'


const Portfolio = () => {
  return (
    <section>
    <h5>What Certificate i Have</h5>
    <h2>MY Portfolio</h2>
    <div className='container portfolio_'>
    {/* ========================================================================================================== */}
    <div className='protfolio_sec'>
    <article className="abot__car">          
          <img src={ME} ></img>
      </article>

          <article className='abot__car'>         
          <img src={ME1} ></img>
          </article>

          <article className='abot__car'>         
          <img src={ME2} ></img>
          </article>

              
    </div>
    {/* ======================================================================================================== */}
    <div className='protfolio_sec'>
    <article className="abot__car">
    <img src={ME4} ></img>
          </article>

          <article className='abot__car'>         
          <img src={ME5} ></img>
          </article>

          <article className='abot__car'>         
          <img src={ME6} ></img>
          </article>   
    </div>
    {/* ==================================================================================== */}
    <div className='protfolio_sec'>
          
          <article className='abot__car'>         
          <img src={ME7} ></img>
          </article>

          <article className='abot__car'>         
          <img src={ME8} ></img>
          </article>
          <article className='abot__car'>         
          <img src={ME3} ></img>
          </article>

          

          
    </div>
    {/* ============================================================================================== */}
    <div className='protfolio_sec'>
          
          <article className='abot__car'>         
          <img src={ME9} className="k" ></img>
          </article>

          <article className='abot__car'>         
          <img src={ME10} ></img>
          </article>
          <article className='abot__car car'>         
          {/* <img src={ME3} ></img> */}
          <AiOutlinePlusCircle className='d'/>

          </article>

          

          
    </div>
    </div>
        
     
    </section>
  )
}

export default Portfolio
