import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <div className='border'>
                <div className='px-10 py-3'>
                    <div className='py-2 flex justify-center gap-4 text-white text-center text-lg font-medium'>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'><Link to="/contact">Add Yourself</Link></p>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'>
                            <Link to="/payment">Payment</Link></p>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'><Link to="/contact">Contact</Link></p>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'><Link to="/about">About</Link></p>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'><Link to="/privacy">Privacy</Link></p>
                        <p className='text-[#2a7fba] hover:cursor-pointer hover:underline'><Link to="/disclaimer">Disclaimer</Link></p>
                    </div>
                </div>
                <div className='border-t text-center text-lg py-2'>
                    <p>Copyright © 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;