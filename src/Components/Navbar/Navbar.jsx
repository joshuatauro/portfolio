import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="">
          <h1><span>Joshua Tauro</span></h1>
          <p> UX/UI Designer, Developer</p>
        </div>
        <ul>
          <li>about,</li>
          <li>work,</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar