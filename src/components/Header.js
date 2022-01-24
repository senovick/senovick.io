import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className="logo">
                    <h1>SENOVICK .</h1>
                </div>
                <ul className="ul-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
