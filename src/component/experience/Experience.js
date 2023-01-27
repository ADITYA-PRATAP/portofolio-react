import React from 'react'
import './Experience.css'
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs'
import{FaDAndD} from 'react-icons/fa'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development  <FaDAndD/>  Programming Languages </h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill />
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                          <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>AngularJS</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>JAVA</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

          </div>
          

          
        </div>
        {/* Frontend Devoloper END */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small> 
                </div>
            </article>
            </div>
          

          
        </div>
      </div>
    </section>
  )
}

export default Experience
