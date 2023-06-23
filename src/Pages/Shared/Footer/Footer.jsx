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
            <p className="text-black text-center text-sm">© 2023 Doctors Portal. All rights reserved. Developed by <span className="text-black">Shahadat Hossain</span></p>
            
        </footer>

        // <footer className="bg-gray-800 py-4">
        //     <div className="container mx-auto px-4">
        //         <div className="flex items-center justify-center">
        //             <p className="text-gray-300 text-sm">© 2023 Doctors Portal. All rights reserved.</p>
        //             <p className="ml-4 text-gray-300 text-sm">Developed by <span className="text-white">Shahadat Hossain</span></p>
        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;