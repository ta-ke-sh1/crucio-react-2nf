import '../css/animation.css'
import '../css/common.css'
import '../css/icons.css'
import '../css/navigation.css'
import React from "react";
import Navigation from './widgets/navigation';
import Landing from './widgets/landing';
import About from './widgets/about';
import Service from './widgets/service';
import Team from './widgets/team';
import Portfolio from './widgets/portfolio';
import Contact from './widgets/contact';
import Footer from './widgets/footer';

export default function Crucio(){
   return(
      <main>
         <Navigation />
         <Landing />
         <About />
         <Service />
         <Team />
         <Portfolio />
         <Contact />
         <Footer />
      </main>
   )
}
