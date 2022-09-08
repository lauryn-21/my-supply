import React from 'react'
import {
   BrowserRouter,
   Routes,
   Route,
} from "react-router-dom"

import Home from '../components/Homepage/Navbar';
import Gallery from "../components/Gallery";
import Footer from "../components/Homepage/Footer";
import Badge from "../components/Homepage/Badge";
import Homepage from '../components/Homepage/Homepage';
import Productdetail from '../components/Productdetail';
import Shopstore from '../components/Shop/Shopstore';
import Shop from '../components/Shop/Shop';
import Shopstore1 from '../components/Shop/Shopstore1';




function routes() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<Homepage />} />
               <Route path="/home" element={<Home />} />
               <Route path="Gallery" element={<Gallery />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/productdetail" element={<Productdetail />} />
               <Route path="/shopstore" element={<Shopstore />} />
               <Route path="/shopstore1" element={<Shopstore1 />} />
               <Route path="Badge" element={<Badge />} />
               <Route path="Footer" element={<Footer />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default routes