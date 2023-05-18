import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <div className='border px-10 py-3'>
                <div className='mt-2 flex justify-center gap-4 text-white text-center text-lg font-medium'>
                    <p className='text-[#2a7fba] hover:underline'>Add Yourself</p>
                    <p className='text-[#2a7fba] hover:underline'>Contact</p>
                    <p className='text-[#2a7fba] hover:underline'>About</p>
                    <p className='text-[#2a7fba] hover:underline'>Privacy</p>
                    <p className='text-[#2a7fba] hover:underline'>Disclaimer</p>
                </div>
            </div>
            <div className='border text-center text-lg py-2'>
                <p>Copyright © 2023</p>
            </div>
        </div>
    );
};

export default Footer;