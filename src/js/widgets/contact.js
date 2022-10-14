import React from "react";

export default function Contact(){
   return(
      <>
      <div id="contact" className="f-container">
         <div className="content">
            <h1>CONTACT</h1>
            <div className="line"></div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col">
                  <input type="text" className="textInput" name="" id="" placeholder="Name *" />
               </div>
               <div className="col">
                  <input type="text" className="textInput" name="" id="" placeholder="Email *" />
               </div>
            </div>
            <br /><br /><br /><br />
            <div className="row">
               <div className="col">
                  <textarea name="" className="textArea" id="" rows="4" cols="50" placeholder="Message *"></textarea>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <a href="/" className="submit-button" id="submit" style={{ "margin-right" : "15%"}}>
                     SEND
                  </a>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}