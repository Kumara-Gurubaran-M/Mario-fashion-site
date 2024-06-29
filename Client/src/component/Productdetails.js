import React, { useState } from 'react'
import { SplOfferData } from "./content"
import { HiOutlineChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom"
import { addItem } from './redux/reducer/cartreducer';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

function Productdetails() {
    const [cart, setCart] = useState(true)
    const params = useParams();
    const dispatch = useDispatch();
    const item = SplOfferData.find(
        (element) => element._id === parseInt(params._id)
    );
    const addToCart = () => {
        dispatch(addItem(item))
        setCart(false)
    }
    return (
        <div className='details-section'>
            <div className='about-from'>
                <p> /Product/{item.productName}</p>
                <span className='greaterthan'><HiOutlineChevronRight /></span>
                <span className='to'>Product</span>
            </div>
            <div className='detail-container'>
                <img className='detail-container-img' src={item.img} alt={item.productName} />
                <div className='details'>
                    <h1>{item.productName}</h1>
                    <h2>${item.price}</h2>
                    <h5>{item.des}</h5>
                    <h3>Stock: <span>{item.stock}</span></h3>
                    <h3>Colors: <span>{item.color}</span></h3>
                    {cart ?
                        <button onClick={addToCart}>Add to Cart</button>
                        :
                        <Link to="/Cart"><button className='gotocart-btn'>Go to Cart</button></Link>

                    }
                </div>
            </div>
        </div>
    )
}

export default Productdetails;
