import { Link } from 'react-router-dom'
import React, { useEffect, useRef } from "react";
import Navigation from './navigation'
function Navbar() {
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
        <div className='nav'

            ref={headerRef}
        >
            <Link className='logoLink' to="/"><h1 className='logo'>Mario</h1></Link>

            <Navigation />

        </div>
    )
}



export default Navbar