import React from 'react'
import { Link } from "react-router-dom"
import { HiOutlineChevronRight } from "react-icons/hi";
export default function Main(props) {
    return (
        <div className='about'>
            <h1 className='about-title'>{props.title}</h1>
            <div className='about-from'>
                <p>{props.from} </p>
                <span className='greaterthan'><HiOutlineChevronRight /></span>
                <span className='to'>{props.to}</span>
            </div>

            <p className='about-content'><span>{props.contenttitle}</span>{props.content}</p>
            <Link to="/Shopping"><button className='about-btn'>Continue Shopping</button></Link>
        </div>
    )
}
