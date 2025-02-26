import React from 'react';
import './Footer.css';
import DroneButton from './DroneButton';

const Footer = () => {
    return (
        <div className='footer-holder'>
            <div className='upper-footer'>
                <div className='footer-email'>
                    <div className='email-title'><span className='boldList'>Stay updated</span></div>
                    <div className='email-text'>Monthly insights on navigation tech and drone innovation.</div>
                    <div className='email-interact-holder'>
                    <div className='email-field'>
                        <div class="custom_input">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg_icon bi-newspaper" viewBox="0 0 16 16">
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                            </svg>
                            <input class="input" type="text" placeholder="email@example.com"></input>
                        </div>

                    </div>
                    <div className='email-btn'>
                        <DroneButton onButtonClick={() => { window.location.href = 'https://vanenet.hu' }} text={'SIGN UP'}></DroneButton>
                    </div>
                    </div>
                </div>
                <div className='footer-contact'>
                    <span className='boldList'>Contact Us</span>mail@gpsjamming.com
                </div>
                <div className='footer-links'>
                    <ul className='footer-list center-list bullet-list flex-list-right'>
                        <li><span className='boldList'>GPS/GNSS:</span>How It Works | Technology | Solutions | Events</li>
                        <li><span className='boldList'>Drone Tech:</span>Applications | Safety | Solutions | Events</li>
                        <li>Services | Blog</li>
                    </ul>
                </div>

            </div>
            <div className='lower-footer'>
                <div className='firm-name'><span className='boldList'>Reliable Navigation Solutions – Precision, Safety, Innovation</span></div>
                <div className='all-rights'>© 2024 | Privacy Policy | Terms of Service</div>
            </div>
        </div>
    )
}

export default Footer