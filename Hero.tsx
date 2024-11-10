import React from 'react'
import Nevbar from './Nevbar'
import '../app/styles/hero.css';
const Hero = () => {
  return (
    <div id="hero" className="hero-container"
   
    >
      <Nevbar />
      <div className="hero-container">
        <div className='hidden lg:block'></div>
        <div className="hero.msin">
            <div>
                <p data-aos="flip-right">I'am Rida Danish</p>
                <p className="hero-text" data-aos="flip-right">It's tremendously exciting to be able to use the newest tools and methods to build practical and engaging websites and applications while also pushing the boundaries of what the web is capable of. Every project offers the opportunity for creative expression, and I find it to be tremendously fulfilling.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

