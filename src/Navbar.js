import { useState, useEffect } from 'react';
import React from 'react';
import './Navbar.css';
import droneLoop from './img/drone-loop.gif';
import DroneButton from './DroneButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the menu
    const hamburgerClick = () => setMenuOpen(!menuOpen);

    // Close menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest('.navbar-container') && !event.target.closest('.mobile-navbar-group')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [menuOpen]);

    return (
        <>
            <div className='navbar-container'>
                <div onClick={() =>{ window.location.href = '#' }} className='navbar-group navbar-left'>
                    <img className='drone-icon' alt={'drone-loop-animation'} src={droneLoop}></img>
                </div>

                {/* Desktop Menu */}
                <div className='navbar-group navbar-mid desktop-only'>
                    <div onClick={() => { window.location.href = '/' }} className='navbar-item animated-link'>Home</div>
                    <div onClick={() => { window.location.href = '/articles' }} className='navbar-item animated-link'>Articles</div>
                    <div onClick={() => { window.location.href = '/contact' }} className='navbar-item animated-link'>Contact</div>
                </div>
                <div className='navbar-group navbar-right desktop-only'>
                    <div className='email-btn'>
                        <DroneButton onButtonClick={() => { window.location.href = 'https://vanenet.hu' }} text={'SIGN UP'}></DroneButton>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <div onClick={hamburgerClick} className='navbar-group hamburger mobile-only'>
                    {menuOpen ? '✖' : '☰'}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-navbar-group ${menuOpen ? 'show' : 'hide'}`}>
                <div onClick={() => { window.location.href = '/' }} className='mobile-navbar-item'>Home</div>
                <div onClick={() => { window.location.href = '/articles' }} className='mobile-navbar-item'>Articles</div>
                <div onClick={() => { window.location.href = '/contact' }} className='mobile-navbar-item'>Contact</div>
            </div>
        </>
    );
};

export default Navbar;
