import React, {useState} from 'react'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'



const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='innovai__navbar'>
      <div className='innovai__navbar-links'>
       <div className='innovai__navbar-links_logo'>
      <h2>InnovAI</h2>
       </div>
       <div className='innovai__navbar-links_container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wia'>What is InnovAI?</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='features'>Case Studies</a></p>
        <p><a href='blog'>Library</a></p>
       </div>
      </div>
      <div className='innovai__navbar-sign'>
        <p>Sign in</p>
        <button type='button'><h3></h3>Sign up</button>
      </div>
      <div className='innovai__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={24} onClick={()=> setToggleMenu(false)}></RiCloseLine>
        : <RiMenu3Line color='#fff' size={24} onClick={()=> setToggleMenu(true)}></RiMenu3Line>
        }


        
      </div>
      </div>

  )
}

export default navbar
