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
            { aboutItems.map((item) => <AboutItem
               key={item.id}
               backgroundColor={item.background} 
               headline={item.headline} 
               paragraph={item.paragraph} />)
            }
         </div>
      </>
   )
}

function AboutItem(props){
   return(
      <div className="grid-item" style={{"backgroundColor": props.backgroundColor}}> 
         <h1>{props.headline}</h1>
         <p style={{"color": "white", "textAlign": "left"}}>{props.paragraph}</p>
      </div>
   )
}

const aboutItems = [
   {
      "id":1,
      "background": "#AD00FF",
      "headline": "RESPONSIVE",
      "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
   },
   {
      "id":2,
      "background": "#8200BF",
      "headline": "CUSTOMIZABLE",
      "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
   },
   {
      "id":3,
      "background": "#56007F",
      "headline": "MODERN",
      "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
   }
]