import React from 'react'
import Navbar from '../Homepage/Navbar'
import Gallery from "../Gallery";
import Footer from "./Footer";
// import Shop from "./components/Shop";
import Badge from "./Badge";

function Homepage() {
   return (
      <div> 
         <Navbar/>
         <Badge />
         <Gallery />
         {/* <Shop/> */}
         <Footer />
         </div>
   )
}

export default Homepage