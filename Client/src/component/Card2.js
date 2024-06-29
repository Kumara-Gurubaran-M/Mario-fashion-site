import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className='card' onClick={() => navigate(`/detail/${props._id}`)}>
            <img src={props.img} alt={props.productName} />
            <div className='card-content'>
                <div className='card-topcontent'>
                    <h2>{props.productName}</h2>
                    <p>$ {props.price}</p>
                </div>

                <p>{props.color}</p>

            </div>
        </div>
    )
}


export default Card