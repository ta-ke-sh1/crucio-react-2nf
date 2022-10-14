import React from "react";

export default function About(){
   return(
      <>
      <div id="about" className="m-container">
         <div className="content">
            <h1>WELCOME TO <span style={{"color": "#AD00FF"}}>CRUCIO</span></h1>
            <h2>WE CREATE AWESOME WEBSITES</h2>
            <p style={{"color": "black"}}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
               ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
               mollit anim id est laborum.</p>
         </div>
      </div>
      <div className="our-abilities">
         <div className="grid-item" style={{"background-color": "#AD00FF"}}>
            <h1>RESPONSIVE</h1>
            <p style={{"color": "white", "text-align": "left"}}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
               eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>
         </div>
         <div className="grid-item" style={{"background-color": "#8200BF"}}>
            <h1>CUSTOMIZABLE</h1>
            <p style={{"color": "white", "text-align": "left"}}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
               eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>
         </div>
         <div className="grid-item" style={{"background-color": "#56007F"}}>
            <h1>MODERN</h1>
            <p style={{"color": "white", "text-align": "left"}}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
               eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>
         </div>
      </div>
      </>
   )
}