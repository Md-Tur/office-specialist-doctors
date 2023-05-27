import React from 'react';
import { Link } from 'react-router-dom';

const NarayanganjHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Medinova Medical Services, Narayanganj',
            link: '/mmsn'
        },
        {
            id: 2,
            name: 'Modern Diagnostic Center, Narayanganj',
            link: '/mdcn'
        },
        {
            id: 3,
            name: 'Popular Diagnostic Center, Narayanganj',
            link: '/pdcn'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Narayanganj</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated onOctober 11, 2022</p>
        </div>
    );
};

export default NarayanganjHospitals;