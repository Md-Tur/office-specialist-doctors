import React from 'react';
import { Link } from 'react-router-dom';

const BograHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Doctors Clinic, Bogura',
            link: '/dcbo'
        },
        {
            id: 2,
            name: 'Ibn Sina Diagnostic & Consultation Center, Bogra',
            link: '/isdccbo'
        },
        {
            id: 3,
            name: 'Labaid Diagnostic, Bogura',
            link: '/ldbo'
        },
        {
            id: 4,
            name: 'Maleka Nursing Home & Diagnostic Center, Bogura',
            link: '/mnhdcbo'
        },
        {
            id: 5,
            name: 'Mohammad Ali Hospital, Bogra',
            link: '/mahbo'
        },
        {
            id: 6,
            name: 'Popular Diagnostic Center, Bogra',
            link: '/pdcbo'
        },
        {
            id: 7,
            name: 'Saic General Hospital, Bogra',
            link: '/sghbo'
        },
        {
            id: 8,
            name: 'Shaheed Ziaur Rahman Medical College & Hospital',
            link: '/szrmch'
        },
        {
            id: 9,
            name: 'Shamsun Nahar Clinic, Bogura',
            link: '/sncb'
        },
        {
            id: 10,
            name: 'TMSS Medical College & Rafatullah Community Hospital',
            link: '/tmssmcrch'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Bogra</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default BograHospitals;