import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <footer className="footer p-10  ">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>

                </div>
            </footer>
            <p className='text-center pb-11 text-sm'>Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;