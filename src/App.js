import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Cursor from './Components/Cursor/Cursor';
import { useEffect, useRef, useState } from 'react';
import './cursor.scss'
function App() {
  const cursRef = useRef(0);
  let dimensions = 7.5
  useEffect(() => {
    const mouseMove = e => {
      console.log(dimensions)
      cursRef.current.style.top=(e.clientY-dimensions)+"px";
      cursRef.current.style.left=e.clientX-dimensions+"px";
    }
    document.addEventListener("mousemove", mouseMove)
    return () => document.removeEventListener("mousemove", mouseMove)
  }, [])

  const mouseEnter = (e) => {
    dimensions = 25
    cursRef.current.style.padding="25px"
    cursRef.current.style.top=(e.clientY-25)+"px";
    cursRef.current.style.left=e.clientX-25+"px";
  }
  const mouseLeave = (e) => {
    dimensions =7.5
    cursRef.current.style.padding="7.5px"
    cursRef.current.style.top=(e.clientY-7.5)+"px";
    cursRef.current.style.left=e.clientX-7.5+"px";
  }
  return (
    <div className="App">
      <div ref={cursRef} class="cursor"></div>
      <Navbar  mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <Hero/>
    </div>
  );
}

export default App;
