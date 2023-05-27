import React from 'react';
import { Link } from 'react-router-dom';

const KhulnaHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Ankur Diagnostic & Health Care, Khulna',
            link: '/adhck'
        },
        {
            id: 2,
            name: 'Bangladesh Eye Hospital, Khulna',
            link: '/behk'
        },
        {
            id: 3,
            name: 'Doctors Point Specialized Hospital, Khulna',
            link: '/dpshk'
        },
        {
            id: 4,
            name: 'Fortis Escorts Heart Institute, Khulna',
            link: '/fehik'
        },
        {
            id: 5,
            name: 'Garib Nawaz Clinic Diagnostic Limited, Khulna',
            link: '/gncdlk'
        },
        {
            id: 6,
            name: 'General Hospital, Khulna',
            link: '/ghk'
        },
        {
            id: 7,
            name: 'Islami Bank Hospital, Khulna',
            link: '/ibhk'
        },
        {
            id: 8,
            name: 'Khulna City Medical College & Hospital',
            link: '/kcmch'
        },
        {
            id: 9,
            name: 'Khulna Eye Hospital & Laser Center Limited',
            link: '/kehlcl'
        },
        {
            id: 9,
            name: 'Khulna Lab Diagnostic & Consultation Center',
            link: '/kldcc'
        },
        {
            id: 10,
            name: 'Khulna Medical College & Hospital',
            link: '/kmch'
        },
        {
            id: 11,
            name: 'Labaid Diagnostic Ltd, Khulna',
            link: '/ldlk'
        },
        {
            id: 12,
            name: 'Labcon Diagnostic & Consultation Center, Khulna',
            link: '/ldcck'
        },
        {
            id: 13,
            name: 'Popular Diagnostic Center, Khulna',
            link: '/pdck'
        },
        {
            id: 14,
            name: 'Prince Hospital, Khulna',
            link: '/phk'
        },
        {
            id: 15,
            name: 'Royal Diagnostic & Consultation Limited, Khulna',
            link: '/rdclk'
        },
        {
            id: 16,
            name: 'Sandhani Clinic & Diagnostic Complex, Khulna',
            link: '/scdck'
        },
        {
            id: 17,
            name: 'Shaheed Shaikh Abu-Naser Specialized Hospital',
            link: '/ssansh'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Khulna</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default KhulnaHospitals;