import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Portfolio(){
   return(
      <>
      <div id="portfolio" className="f-container" style={{"background-color": "#F7F7F7", "padding-bottom": "60px"}}>
         <div className="content">
            <h1>OUR PORTFOLIO</h1>
            <br />
            <div className="line"></div>
            <div className="projects-type">
               <div className="item-type selected height-20" id="select-all">All</div>
               <div className="item-type height-20" id="select-graphic">Graphic Design</div>
               <div className="item-type height-20" id="select-web">Web Design</div>
               <div className="item-type height-20" id="select-development">Web Development</div>
            </div>
            <div className="projects-container" id="projects">
               <div className="grid-item" id="project-1">
                  <div className="info">
                     <h1>Project #1</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work1.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-2">
                  <div className="info">
                     <h1>Project #2</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work2.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-3">
                  <div className="info">
                     <h1>Project #3</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work3.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-4">
                  <div className="info">
                     <h1>Project #4</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work4.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-5">
                  <div className="info">
                     <h1>Project #5</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work5.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-6">
                  <div className="info">
                     <h1>Project #6</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work6.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-7">
                  <div className="info">
                     <h1>Project #7</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work7.jpg)"}}></div>
               </div>
               <div className="grid-item" id="project-8">
                  <div className="info">
                     <h1>Project #8</h1>
                     <p>Description</p>
                  </div>
                  <div className="image" style={{"background-image": "url(/assets/work/work8.jpg)"}}></div>
               </div>
            </div>
         </div>
         <br />
         <a href="/" className="button" id="subscribe">
            LOAD MORE
         </a>
      </div>

      <div id="hidden">
         <div className="grid-item" id="project-9">
            <div className="info">
               <h1>Project #8</h1>
               <p>Description</p>
            </div>
            <div className="image" style={{"background-image": "url(./assets/work/work1.jpg)"}}></div>
         </div>
      </div>

      <div className="f-container">
         <center>
            <h2>Subscribe To Our Newsletter</h2>\
               <br />
               <div className="row" style={{"width": "60%"}}>
                  <input type="text" name="" className="textInput" placeholder="Enter your email" />
               </div>
               <br /> <br /> <br />
               <div class="row" style={{"width": "10%"}}>
                  <a href="/" className="button" id="subscribe">
                     SEND
                  </a>
               </div>
         </center>
      </div>
      <div id="want-to-contact" className="f-container purple-bg">
         <div className="content">
            <h1 style={{"color": "white", "font-size": "24px", "letter-spacing": "5px"}}>WANT TO DISCUSS YOUR NEW PROJECT?</h1>
            <br />
            <a href="#contact" className="button">CONTACT US</a>
         </div>
      </div>
      <div id="testimonials" className="f-container" style={{"background-color": "rgb(0, 0, 0)"}}>
         <div class="content">
            <h1 style={{"color": "white"}}>TESTIMONIALS</h1>
            <div className="line"></div>
            <div className="t-carousel-container">
               <div className="carousel slide" data-ride="carousel">
                  <Carousel indicators={false} controls={false} interval={2500}>
                     <Carousel.Item>
                        <p style={{"color": "white", "width": "100%"}}>
                           Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
                           labore
                           et
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi
                           ut
                           aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
                           cillum
                           dolore eu fugiat nulla pariatur.
                           <br />
                           <span style={{"font-style":"italic"}}>- Jim P. -</span>
                        </p>
                     </Carousel.Item>
                     <Carousel.Item>
                        <p style={{"color": "white", "width": "100%"}}>
                           Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
                           labore
                           et
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi
                           ut
                           aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
                           cillum
                           dolore eu fugiat nulla pariatur.
                           <br />
                           <span style={{"font-style":"italic"}}>- Morgan F. -</span>
                        </p>
                     </Carousel.Item>
                     <Carousel.Item>
                        <p style={{"color": "white", "width": "100%"}}>
                           Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
                           labore
                           et
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi
                           ut
                           aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
                           cillum
                           dolore eu fugiat nulla pariatur.
                           <br />
                           <span style={{"font-style":"italic"}}>- John K. -</span>
                        </p>
                     </Carousel.Item>
                  </Carousel>
               </div>
            </div>
         </div>
      </div>
      <div id="associates" className="f-container">
         <div className="associates-grid">
            <div className="grid-item">
               <div className="associate-logo" style={{"background-image": "url(./assets/logo/client-1.png)"}}></div>
            </div>
            <div className="grid-item">
               <div class="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-2.png)"}}></div>
            </div>
            <div className="grid-item">
               <div class="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-3.png)"}}></div>
            </div>
            <div className="grid-item">
               <div class="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-4.png)"}}></div>
            </div>
            <div className="grid-item">
               <div class="associate-logo"style={{"background-image": "url(./assets/logo/client-5.png)"}}></div>
            </div>
            <div className="grid-item">
               <div class="associate-logo" style={{"background-image": "url(./assets/logo/client-6.png)"}}></div>
            </div>
         </div>
      </div>
      </>
   )
   
}