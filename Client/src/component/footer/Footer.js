import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { paymentCard } from '../../images'
function Footer() {
    const [emailInfo, setEmailInfo] = useState("");
    const [subscription, setSubscription] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const emailValidation = () => {
        return String(emailInfo)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSubscription = () => {
        if (emailInfo === "") {
            setErrMsg("Please provide an Email !");

        } else if (!emailValidation(emailInfo)) {
            setErrMsg("Please give a valid Email!");
            console.log(errMsg)
        } else {
            setSubscription(true);
            setErrMsg("");
            setEmailInfo("");
        }
    };
    console.log("error", errMsg)
    return (
        <footer>
            <div className='footer-main'>
                <div>
                    <h2>More about Orebi Shop</h2>
                    <p className='footer-main-p'>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Enim sint ab ullam, numquam nesciunt in.
                    </p>
                    <div className='icon'>
                        <a href='https://www.linkedin.com/in/kumara-gurubara-m/' target='_blank' rel="noreferrer" ><FaLinkedin className='icon-li' /></a>
                        <a href='https://github.com/Kumara-Gurubaran-M' target='_blank' rel="noreferrer"><FaGithub className='icon-li' /></a>
                    </div>

                </div>
                <div className='footer-2ndcontainer'>
                    <div>
                        <h2>Shop</h2>
                        <p>Accesories</p>
                        <p>Clothes</p>
                        <p>Electronics</p>
                        <p>Home appliances</p>
                        <p>New Arrivals</p>
                    </div>
                    <div>
                        <h2>Your account</h2>
                        <p>Profile</p>
                        <p>Orders</p>
                        <p>Addresses</p>
                        <p>Account Details</p>
                        <p>Payment Options</p>
                    </div>
                </div>
                <div className='footer-subscribe'>
                    <h2>Subscribe to our newsletter.</h2>
                    <p className='footer-main-p'>A at pellentesque et mattis porta enim elementum.</p>
                    {subscription ? (
                        <p className='successfullmsg'> Subscribed Successfully !</p>
                    ) : (
                        <div className='mail-box'>
                            <div className='mail-check' >
                                <input
                                    onChange={(e) => setEmailInfo(e.target.value)}
                                    value={emailInfo}
                                    type='text'
                                    placeholder='Insert your email ...*'
                                />
                                {errMsg && (
                                    <p className='errormsg' >{errMsg}</p> // Add your custom error message class
                                )}
                            </div>
                            <button
                                onClick={handleSubscription}
                            >
                                Subscribe
                            </button>
                        </div>
                    )}
                    <img src={paymentCard} alt='payment Cart' />
                </div>
            </div>
            <hr />
            <p className='footer-bottom'>© Copyright 2023 | Orebi shopping | All Rights Reserved </p>
        </footer>
    )
}
export default Footer
