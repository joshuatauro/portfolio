import React, { useContext } from 'react'
import './Navbar.scss'
const Navbar = ({mouseEnter, mouseLeave}) => {

  return (
    <nav className="nav">
      <div className="container">
        <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >Joshua Tauro</h1>
        <ul>
          <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  >about</li>
          <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>works</li>
          <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>contact</li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque temporibus eum exercitationem at. Corrupti ab veritatis aut, sit hic ipsum quos eaque, expedita vel, ex fuga quis in minus.</p>
    </nav>
  )
}

export default Navbar