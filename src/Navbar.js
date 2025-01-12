import { useState } from 'react';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function hamburgerClick() {
        if (menuOpen) return setMenuOpen(false);
        return setMenuOpen(true);
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-group navbar-left'>LOGO</div>
                <div className='navbar-group navbar-mid desktop-only'>
                    <div className='navbar-item animated-link'>Home</div>
                    <div className='navbar-item animated-link'>Articles</div>
                    <div className='navbar-item animated-link'>Contact</div>
                </div>
                <div className='navbar-group navbar-right desktop-only'>BUTTON</div>
                <div onClick={hamburgerClick} className='navbar-group hamburger mobile-only'>{menuOpen ? '|||' : '☰'}</div>
            </div>
            <div className={menuOpen ? 'mobile-navbar-group show' : 'mobile-navbar-group hide'}>
                <div className='mobile-navbar-item'>Home</div>
                <div className='mobile-navbar-item'>Articles</div>
                <div className='mobile-navbar-item'>Contact</div>
            </div>
        </>
    )
}

export default Navbar