import React from 'react'
import { Link } from "react-router-dom"
import { HiOutlineChevronRight } from 'react-icons/hi';
function Payment() {
    return (
        <div className='about'>
            <h1 className='about-title'>Payment gateway</h1>
            <div className='about-from'>
                <span className='greaterthan'><HiOutlineChevronRight /></span>
                <span className='to'>Paymentgateway</span>
            </div>
            <p className='about-content'>Payment gateway only applicable for Production build.</p>
            <Link to="/"><button className='about-btn'>Explore More</button></Link>

        </div>
    )
}


export default Payment