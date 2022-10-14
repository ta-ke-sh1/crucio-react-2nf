import React from "react";

export default function Navigation(){
   return(
      <div className="navigation">
      <div className="envato-bar" style={{"padding": "15px"}}>
         <a href="/envato">
            <img src={"/assets/logo/envato-white.png"} alt="" height="35px" width="auto" />
         </a>
         <a className="nav-item" href="/" style={{
               "background-color": "green", 
               "padding": "5px 15px",
               "border-radius": "5px",
            }}>
            Buy Now</a>
      </div>
      <div className="nav-bar" id="main-nav" style={{
               "background-color": "rgb(25, 25, 25)", 
               "z-index": 10,
            }}
         >
         <a href="#portfolio" className="nav-item" style={{"margin-right": "40px"}}>Contact</a>
         <a href="/blog.html" className="nav-item">Blog</a>
         <a href="#contact" className="nav-item">Portfolio</a>
         <a href="#team" className="nav-item">Team</a>
         <a href="#services" className="nav-item">Services</a>
         <a href="#about" className="nav-item">About</a>
         <a href="#home" className="nav-item">Home</a>
         <a href="/" style={{"float": "left"}}><img src={require('././assets/logo/crucioTextLogo.png')} height="45px" width="auto" alt="" /></a>
      </div>
   </div>
   )
}