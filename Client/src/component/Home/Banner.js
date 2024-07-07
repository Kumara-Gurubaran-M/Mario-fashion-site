import React from 'react'
import { poster1, poster2, poster3, poster4 } from '../../images'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Banner() {
    return (
        <>
            <div className='banner'>
                <Link to="/offer"><img src={poster1} alt='Banner 1' /></Link>
            </div>
            <div className='banner-details'>
                <p data-aos="fade-right" data-aos-duration="1500">Two Years Warranty</p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">Free Shopping</p>
                <p data-aos="fade-left" data-aos-duration="1500">Return Policy In 7 Days</p>
            </div>
            <div className='sale-banner'>

                <Link to="/Shopping"><img className='sale-banner-one' src={poster2} alt='Sale banner 1' /></Link>
                <div className='sale-banners-ryt'>
                    <Link to="/Shopping"><img className='sale-banner-other' src={poster3} alt='Sale banner 2' /></Link>
                    <Link to="/Shopping"><img className='sale-banner-other' src={poster4} alt='Sale banner 3' /></Link>
                </div>
            </div>
        </>
    )
}


export default Banner