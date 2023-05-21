import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto px-72 pt-7'>
            <div className='flex justify-center border p-4 text-3xl font-bold text-[#2a7fba] hover:underline hover:text-green-500'>
                <button><Link to="/home">DOCTOR BANGLADESH</Link></button>
            </div>
            <p className='flex justify-center border py-1 px-[5px] mt-3 text-[#999] text-lg hover:underline hover:cursor-pointer'> <Link target='-blank' to="https://cse.google.com/cse?cx=52ed85adb20fc20ba#gsc.tab=0">Search Doctor</Link></p>

            {/* navbar */}

            <div className="bg-[#2a7fba] text-white my-3 z-[10000] top-0">
                <nav className="relative px-10 flex justify-between items-center container mx-auto">
                    <ul className="grid grid-cols-2 w-full items-center">

                        <li className="relative group py-2 text-center cursor-pointer">
                            <Link
                                className="text-lg font-medium group hover:underline"
                                to="#">Doctors
                            </Link>
                            <ul className="absolute top-[44px] -left-0 bg-[#2a7fba] border border-gray-200 shadow-lg w-full flex flex-col -translate-y-3 text-center invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] border-t border-t-white">
                                <li className='w-full py-2 hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/dhakaD">Dhaka</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/chittagongD">Chittagong</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/sylhetD">Sylhet</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/comillaD">Comilla</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/narayanganjD">Narayanganj</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/rajshahiD">Rajshahi</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/rangpurD">Rangpur</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/khulnaD">Khulna</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/barisalD">Barishal</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/mymensinghD">Mymensingh</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/pabnaD">Pabna</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/bograD">Bogra</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group py-2 text-center cursor-pointer">
                            <Link
                                className="text-lg font-medium group hover:underline"
                                to="#">Hospitals
                            </Link>
                            <ul className="absolute top-[44px] -left-0 bg-[#2a7fba] border border-gray-200 shadow-lg w-full flex flex-col -translate-y-3 text-center invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] border-t border-t-white">
                                <li className='w-full py-2 hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/dhakaH">Dhaka</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/chittagongH">Chittagong</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/sylhetH">Sylhet</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/comillaH">Comilla</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/narayanganjH">Narayanganj</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/rajshahiH">Rajshahi</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/rangpurH">Rangpur</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/khulnaH">Khulna</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/barishalH">Barishal</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/mymensinghH">Mymensingh</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/pabnaH">Pabna</Link>
                                </li>
                                <li className='w-full py-2 border-t hover:underline'>
                                    <Link
                                        className="text-lg font-medium pr-0"
                                        to="/bograH">Bogra</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;