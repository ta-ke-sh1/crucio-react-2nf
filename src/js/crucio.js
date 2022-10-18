import '../css/animation.css'
import '../css/common.css'
import '../css/icons.css'
import '../css/navigation.css'
import React, {useEffect} from "react";
import Navigation from './widgets/navigation';
import Landing from './widgets/landing';
import About from './widgets/about';
import Service from './widgets/service';
import Team from './widgets/team';
import Portfolio from './widgets/portfolio';
import Contact from './widgets/contact';
import Footer from './widgets/footer';
import "@fontsource/montserrat";
import $ from 'jquery';

export default function Crucio(){

   useEffect(() => {
      $(window).scroll(scrollTrigger);
      $(window).ready(loadTrigger);
   });

   var numbersLoad = false
   var landed = false;
   var subscribe = false;
   var services = false;
   var discuss = false;

   const loadTrigger = () => {
      if (!landed) {
         landed = true;
         document.getElementById('crucio-headline').classList.add('leftToRight');
         document.getElementById('crucio-paragraph').classList.add('rightToLeft');
      }
   }

   const scrolledToSection = (elem) => {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
   }

   const scrollTrigger = () => {
      if (scrolledToSection($('.numbers')) && !numbersLoad) {
         numbersLoad = true;
         $('.value').each(function () {
            $(this).prop('Counter', 0).animate({
               Counter: $(this).text()
            }, {
               duration: 2500,
               easing: 'swing',
               step: function (now) {
                  $(this).text(Math.ceil(now));
               }
            });
         })
      }

      if (scrolledToSection($('#get-started')) && !services) {
         services = true;
         document.getElementById('started-headline').classList.add('leftToRight');
         document.getElementById('started-btn').classList.add('bottomToTop');
      }

      if (scrolledToSection($('#subscribe')) && !subscribe) {
         subscribe = true;
         document.getElementById('s-input').classList.add('leftToRight');
         document.getElementById('s-headline').classList.add('topToBottom');
         document.getElementById('subscribe').classList.add('bottomToTop');
      }

      if (scrolledToSection($('#want-to-contact')) && !discuss) {
         discuss = true;
         document.getElementById('discuss-headline').classList.add('leftToRight');
         document.getElementById('discuss-p').classList.add('bottomToTop');
      }
   }

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
