import React from 'react';
import { Link } from 'react-router-dom';

const MymensinghHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Delta Health Care, Mymensingh',
            link: '/dhcm'
        },
        {
            id: 2,
            name: 'Icon Diagnostic Center, Mymensingh',
            link: '/idcm'
        },
        {
            id: 3,
            name: 'Labaid Diagnostic, Mymensingh',
            link: '/ldm'
        },
        {
            id: 4,
            name: 'Mymensingh Medical College & Hospital',
            link: '/mmch'
        },
        {
            id: 5,
            name: 'Nexus Hospital, Mymensingh',
            link: '/nhm'
        },
        {
            id: 6,
            name: 'Popular Diagnostic Center, Mymensingh',
            link: '/pdcm'
        },
        {
            id: 7,
            name: 'Pranto Specialized Hospital, Mymensingh',
            link: '/pshm'
        },
        {
            id: 8,
            name: 'Sayem Diagno Complex & Hospital, Mymensingh',
            link: '/sdchm'
        },
        {
            id: 9,
            name: 'Serum Lab & Hospital, Mymensingh',
            link: '/slhm'
        },
        {
            id: 10,
            name: 'Sodesh Hospital, Mymensingh',
            link: '/shm'
        },
        {
            id: 11,
            name: 'TMC Hospital & Diagnostic, Mymensingh',
            link: '/tmchdm'
        },
        {
            id: 12,
            name: 'Union Specialized Hospital, Mymensingh',
            link: '/ushm'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Mymensingh</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default MymensinghHospitals;