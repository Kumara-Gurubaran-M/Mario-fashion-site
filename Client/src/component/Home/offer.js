import React from 'react'
import Card from '../Card'
import { SplOfferData } from "../content"
import { HiOutlineChevronRight } from "react-icons/hi";
function Offer() {
    return (
        <div className='about'>
            <h1 className='about-title'>Offer</h1>
            <div className='about-from'>
                <p>Home</p>
                <span className='greaterthan'><HiOutlineChevronRight /></span>
                <span className='to'>Offer</span>
            </div>
            <h2 className='about-h2'>Special Offers</h2>
            <div className='card-section'>{SplOfferData.map((offerProduct) => <Card {...offerProduct} />)}</div>

        </div>
    )
}


export default Offer