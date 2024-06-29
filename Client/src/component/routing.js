import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Shop from './shop/Shop'
import Offer from './Home/offer'
import Journal from './about/journal/Journal'
import About from './about/journal/About'
import Contact from './contact/contact'
import Details from "./Productdetails"
import Detail from "./Productdetails02"
import Cart from "./Cart"
import Payment from './payment/payment'
import Ai from "./Ai"


export default function Routing() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shopping" element={<Shop />} />
                <Route path="/Offer" element={<Offer />} />
                <Route path="/Aboutus" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Journey" element={<Journal />} />
                <Route path='/details/:_id' element={<Details />} />
                <Route path='/detail/:_id' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/Payment' element={<Payment />} />
                <Route path='/Ai' element={<Ai />} />

            </Routes>
        </div>
    )
}

