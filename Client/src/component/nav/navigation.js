import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
function Navigation() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [menu, setMenu] = useState(true)

    useEffect(() => {
        const currentPage = location.pathname;

        setActiveLink(currentPage);
    }, [location]);

    return (
        <div className='navbar-section' >
            <Link className={`navbar ${activeLink === '/' ? 'active' : ''}`} to="/">
                Home
            </Link>
            <Link className={`navbar ${activeLink === '/Shopping' ? 'active' : ''}`} to="/Shopping">
                Shop
            </Link>
            <Link className={`navbar ${activeLink === '/Cart' ? 'active' : ''}`} to="/Cart">
                Cart
            </Link>
            <Link className={`navbar ${activeLink === '/Aboutus' ? 'active' : ''}`} to="/Aboutus">
                About
            </Link>
            <Link className={`navbar ${activeLink === '/Contact' ? 'active' : ''}`} to="/Contact">
                Contact
            </Link>
            <Link className={`navbar ${activeLink === '/Journey' ? 'active' : ''}`} to="/Journey">
                Journey
            </Link>
            <Link className={`navbar ${activeLink === '/Ai' ? 'active' : ''}`} to="/Ai">
                Customize
            </Link>
            {menu ? <></> :

                <div className='hidden-navbar'>
                    <RxCross1 onClick={() => setMenu(true)} className='menu-icon' />
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/">
                        Home
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Shopping">
                        Shop
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Cart">
                        Cart
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Aboutus">
                        About
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Contact">
                        Contact
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Journey">
                        Journey
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Ai">
                        Customize
                    </Link>
                </div>

            }
            <div className='menu'>
                {menu ? <AiOutlineMenu onClick={() => setMenu(false)} className='menu-icon' /> : <></>}



            </div>


        </div>
    );
}

export default Navigation;
