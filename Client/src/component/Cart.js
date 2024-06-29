
import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CartItem from './CartItem';
import { modifyItem, removeItem } from './redux/reducer/cartreducer';
import { useDispatch } from 'react-redux';
import emptyCart from "../images/emptyCart.png"
import { Link } from "react-router-dom"
function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();

    const increaseItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    };

    const decreaseItem = (item) => {
        if (item.count > 1) {
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    };

    const removeItemFromCart = (item) => {
        dispatch(removeItem(item));
    };

    // Calculate the total in the Cart component
    const calculateTotal = () => {
        let total = 0;
        list.forEach((item) => {
            total += item.count * item.price;
        });
        return total;
    };

    return (
        <div className='cart-container'>
            <div className='cart-title-section'>
                <h1 className='about-title'>Cart</h1>
                <div className='about-from'>
                    <span className='greaterthan'><HiOutlineChevronRight /></span>
                    <span className='to'>Cart</span>
                </div>
            </div>
            {list.length > 0 ? (
                <div className='CartItem-section'>
                    {list.map((item) => (
                        <CartItem
                            {...item}
                            key={item._id}
                            increaseItem={() => increaseItem(item)}
                            decreaseItem={() => decreaseItem(item)}
                            removeItem={() => removeItemFromCart(item)}
                        />
                    ))}
                    <div className='payment'>
                        <h1>Cart Totals</h1>

                        <div className='total'>
                            <h2>Subtotal <span>${calculateTotal()}</span></h2>
                            <h2>Shipping Price <span>$30</span></h2>
                            <h2>Total Price <span>${calculateTotal() + 30}</span></h2>
                        </div>
                        <Link to="/Payment"><button>Proceed To Pay</button></Link>


                    </div>
                </div >
            ) : (
                <div className='emptycart'>
                    <img src={emptyCart} alt="Empty cart" />
                    <div className='emptycart-content'>
                        <h1>YOUR CART FEELS LONELY.</h1>
                        <h2>Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</h2>
                        <Link to="/Shopping"><button>Continue Shopping</button></Link>

                    </div>
                </div>
            )
            }
            <br />
        </div>
    );
}

export default Cart;
