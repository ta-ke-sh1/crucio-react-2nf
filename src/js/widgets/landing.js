import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Landing(){
   return(
      <>
      <div id="landing-carousel" className="carousel slide" data-ride="carousel">
         <Carousel interval={2500}>
            <Carousel.Item>
               <div className="image" style={{"background-image": "url(./assets/landing/1.jpg)"}}></div>
            </Carousel.Item>
            <Carousel.Item>
               <div className="image" style={{"background-image": "url(./assets/landing/2.jpg)"}}></div>
            </Carousel.Item>
            <Carousel.Item>
               <div className="image" style={{"background-image": "url(./assets/landing/3.jpg)"}}></div>
            </Carousel.Item>
         </Carousel>
      </div>
      <div id="home" className="m-container" style={{"background-color": "rgb(0,0,0,0.9)"}}>
         <div className="content" style={{"color": "white"}}>
            <h1 style={{"font-size": "100px", "letter-spacing": "7px"}} id="crucio-headline">CRUCIO</h1>
            <div className="line"></div>
            <h2 style={{"font-size": "40px", "letter-spacing": "10px"}} id="crucio-paragraph">POWERFUL WEBSITES</h2>
         </div>
         <a href="#about" id="toAbout">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor"
               class="bi bi-chevron-down" viewBox="0 0 16 16">
               <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
         </a>
      </div>
      </>
   )
}