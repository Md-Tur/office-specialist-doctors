import React from 'react';
import { Link } from 'react-router-dom';

const RangpurHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Apollo Diagnostic Center, Rangpur',
            link: '/adcr'
        },
        {
            id: 2,
            name: 'Doctor’s Community Hospital, Rangpur',
            link: '/dchr'
        },
        {
            id: 3,
            name: 'Good Health Hospital, Rangpur',
            link: '/ghhr'
        },
        {
            id: 4,
            name: 'Islami Bank Community Hospital, Rangpur',
            link: '/ibchra'
        },
        {
            id: 5,
            name: 'Labaid Diagnostic, Rangpur',
            link: '/ldr'
        },
        {
            id: 6,
            name: 'Popular Diagnostic Center, Rangpur',
            link: '/pdcra'
        },
        {
            id: 7,
            name: 'Rangpur Community Medical College & Hospital',
            link: '/rcmch'
        },
        {
            id: 8,
            name: 'Rangpur Medical College & Hospital',
            link: '/ramch'
        },
        {
            id: 9,
            name: 'Update Diagnostic, Rangpur',
            link: '/udra'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Rangpur</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default RangpurHospitals;