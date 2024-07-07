
import React, { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im";
export default function CartItem(props) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        calculateTotal();
    }, [props.cartItems]);

    const calculateTotal = () => {
        let total = 0;
        if (props.cartItems) {
            props.cartItems.forEach(item => {
                total += item.count * item.price;
            });
        }
        setTotal(total);
    }

    return (
        <div className='cartItem'>


            <img className='cartItem-img' src={props.img} alt={props.productName} />


            <div className='cartItem-details'>
                <h2> <span>{props.productName}</span></h2>
                <h2> <span>₹ {props.price}</span></h2>
                {props.selectedSize && props.clothType ? (
                    <>
                        <h2 >Size: <span>{props.selectedSize}</span></h2>
                        <h2 >Cloth Type: <span>{props.clothType}</span></h2>
                    </>
                ) : <h2>Size: <span>{props.size}</span></h2>

                }

                <div className='cartItem-count'>
                    <button onClick={props.increaseItem} >+</button>
                    <h2 ><span> {props.count}</span></h2>
                    <button onClick={props.decreaseItem}>-</button>
                </div>

                <h2 >Subtotal :<span>₹ {props.count * props.price}</span> </h2>
            </div>

            <ImCross className='cancel' onClick={props.removeItem} />
        </div>

    )
}

