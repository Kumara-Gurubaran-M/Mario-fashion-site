import React, { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import { paginationItems } from "../content"
import Card from "../Card2"
function Shop() {
    const [searchTerm, setSearchTerm] = useState('')
    const filteredProducts = paginationItems.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className='about'>

            <h1 className='about-title'>Products</h1>
            <div className='about-from'>

                <span className='greaterthan'><HiOutlineChevronRight /></span>
                <span className='to'>Shop</span>
            </div>
            <input
                type='search'
                placeholder='Search....'
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='card-section'>
                {filteredProducts.map((product) => (
                    <div ><Card {...product} /></div>
                ))}
            </div>

            {/*<div className='card-section'>{paginationItems.map((Product) => <Card {...Product} />)}</div>*/}
        </div>
    )
}


export default Shop