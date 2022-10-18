import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Portfolio(){

   const [portfolioItems, setPortfolioItems] = useState([]);
   const [isAdded, setAdded] = useState(false);
   const [currentSort, setCurrentSort] = useState(null);

   useEffect(() => {
      setPortfolioItems(portfolio);
      setCurrentSort(document.getElementById('select-All'))
   }, []);

   function sort(code){
      const sortButton = document.getElementById('select-'+code);

      if(code === "All"){
         if(!isAdded){
            portfolio.push({
               "id":"project-9",
               "title":"Project #9",
               "description":"Description",
               "image":"url(/assets/work/work8.jpg)",
               "type": ["D"]
            },)
         }
         setAdded(true);
         setPortfolioItems(portfolio);
      } else {
         const newList = portfolio.filter((item) => item.type.includes(code));
         setPortfolioItems(newList);
      }

      currentSort.classList.remove("selected");
      setCurrentSort(sortButton);
      sortButton.classList.add('selected');
      return;
   }

   return(
      <>
      <div id="portfolio" className="f-container" style={{"backgroundColor": "#F7F7F7", "paddingBottom": "60px"}}>
         <div className="content">
            <h1>OUR PORTFOLIO</h1>
            <br />
            <div className="line"></div>
            <div className="projects-type">
               <div className="item-type selected height-20" id="select-All" onClick={() => sort("All")} >All</div>
               <div className="item-type height-20" id="select-A" onClick={() => sort("A")} >Graphic Design</div>
               <div className="item-type height-20" id="select-B" onClick={() => sort("B")} >Web Design</div>
               <div className="item-type height-20" id="select-C" onClick={() => sort("C")} >Web Development</div>
            </div>
            <div className="projects-container" id="projects">
               {portfolioItems.map((item) => <PortfiolioItem key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} />)}
            </div>
         </div>
         <br />
         <div className="button purple-btn" onClick={() => sort("All")}>
            LOAD MORE
         </div>
      </div>

      <div id="hidden">
      <PortfiolioItem id={portfolio[0].id} title={portfolio[0].title} description={portfolio[0].description} image={portfolio[0].image} />
      </div>

      <div className="f-container">
         <center>
            <div id="s-headline">
               <h2>Subscribe To Our Newsletter</h2>
            </div>
            <br />
            <input id="s-input" type="text" name="" className="textInput" placeholder="Enter your email" style={{width: '60%'}} />
            <br /> <br /> <br />
            <div className="button purple-btn" id="subscribe" style={{padding: '15px 45px'}}>
               SEND
            </div>
         </center>
      </div>
      <div id="want-to-contact" className="f-container purple-bg">
         <div className="content">
            <h1 id="discuss-headline" style={{"color": "white", "fontSize": "24px", "letterSpacing": "5px"}}>WANT TO DISCUSS YOUR NEW PROJECT?</h1>
            <br />
            <a id="discuss-p" href="#contact" className="button">CONTACT US</a>
         </div>
      </div>
      <div id="testimonials" className="f-container" style={{backgroundColor: "rgb(0, 0, 0)"}}>
         <div className="content">
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
                           <span style={{"fontStyle":"italic"}}>- Jim P. -</span>
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
                           <span style={{"fontStyle":"italic"}}>- Morgan F. -</span>
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
                           <span style={{"fontStyle":"italic"}}>- John K. -</span>
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
               <div className="associate-logo" style={{backgroundImage: "url(./assets/logo/client-1.png)"}}></div>
            </div>
            <div className="grid-item">
               <div className="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-2.png)"}}></div>
            </div>
            <div className="grid-item">
               <div className="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-3.png)"}}></div>
            </div>
            <div className="grid-item">
               <div className="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-4.png)"}}></div>
            </div>
            <div className="grid-item">
               <div className="associate-logo"style={{ backgroundImage: "url(./assets/logo/client-5.png)"}}></div>
            </div>
            <div className="grid-item">
               <div className="associate-logo" style={{ backgroundImage: "url(./assets/logo/client-6.png)"}}></div>
            </div>
         </div>
      </div>
      </>
   )
}

const PortfiolioItem = (props) => {
   return(
      <div className="grid-item" id={props.id}>
         <div className="info">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
         </div>
         <div className="image" style={{"backgroundImage": props.image}}></div>
      </div>
   )
}

const portfolio = [
   {
      "id":"project-1",
      "title":"Project #1",
      "description":"Description",
      "image":"url(/assets/work/work1.jpg)",
      "type": ["A", "B"]
   },
   {
      "id":"project-2",
      "title":"Project #2",
      "description":"Description",
      "image":"url(/assets/work/work2.jpg)",
      "type": ["A"]
   },
   {
      "id":"project-3",
      "title":"Project #3",
      "description":"Description",
      "image":"url(/assets/work/work3.jpg)",
      "type": ["A", "C"]
   },
   {
      "id":"project-4",
      "title":"Project #4",
      "description":"Description",
      "image":"url(/assets/work/work4.jpg)",
      "type": ["B"]
   },
   {
      "id":"project-5",
      "title":"Project #5",
      "description":"Description",
      "image":"url(/assets/work/work5.jpg)",
      "type": ["B","C"]
   },
   {
      "id":"project-6",
      "title":"Project #6",
      "description":"Description",
      "image":"url(/assets/work/work6.jpg)",
      "type": ["C"]
   },
   {
      "id":"project-7",
      "title":"Project #7",
      "description":"Description",
      "image":"url(/assets/work/work7.jpg)",
      "type":["A"] 
   },
   {
      "id":"project-8",
      "title":"Project #8",
      "description":"Description",
      "image":"url(/assets/work/work8.jpg)",
      "type": ["A", "B"]
   },
]