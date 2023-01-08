import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
    <section class="hero">
      <div className="container">
        <div className="grid1">
          <p>Creative</p>
          <h1>DESIGNER &<br/> DEVELOPER </h1>
        </div>
        <div className="grid2">
          <p>Hey there, i am Joshua Tauro, a UI/UX Designer as well as a Fullstack Developer who is currently based in Karnataka, India. I love converting peoples dreams into reality by the means of code</p>
          <a href="#contact">
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero