import React from 'react';
import "./Navbar.css";
import Logo from "../assets/s.png"
// import TwitterIcon from "@material-ui/core";

function Navbar() {
  return (
    <div className='navbar center-content'>
      <img src={Logo} alt="logo" sizes="15x15"className="logo"/>
      <h1>Sosh...</h1>
    </div>
  )
}

export default Navbar;