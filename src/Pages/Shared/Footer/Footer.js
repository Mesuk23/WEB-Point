import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center mt-5 p-5 bg-dark text-light'>
            <h3>Contact Us</h3> <hr />
            <p>
                <Link className='me-3' to='https://facebook.com'>
                    <FaFacebook></FaFacebook>
                </Link>
                <Link className='me-3' to='https://twitter.com'>
                    <FaTwitter></FaTwitter>
                </Link>
                <Link className='me-3' to='https://instagram.com'>
                    <FaInstagram></FaInstagram>
                </Link>
            </p>
            <p>Copyright @2022 || All right reserved</p>

        </div>
    );
};

export default Footer;