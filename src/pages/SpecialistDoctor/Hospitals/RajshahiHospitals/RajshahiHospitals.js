import React from 'react';
import { Link } from 'react-router-dom';

const RajshahiHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Al Arafa Clinic & Diagnostic Center, Rajshahi',
            link: '/aacdcr'
        },
        {
            id: 2,
            name: 'Amana Hospital, Rajshahi',
            link: '/ahr'
        },
        {
            id: 3,
            name: 'Biopath Diagnostic Center, Rajshahi',
            link: '/bdcr'
        },
        {
            id: 4,
            name: 'Famous Diagnostic Center, Rajshahi',
            link: '/fdcr'
        },
        {
            id: 5,
            name: 'Hepta Health Care, Rajshahi',
            link: '/hhcr'
        },
        {
            id: 6,
            name: 'Holypath Diagnostic Center, Rajshahi',
            link: '/hdcr'
        },
        {
            id: 7,
            name: 'Islami Bank Hospital, Rajshahi',
            link: '/ibhr'
        },
        {
            id: 8,
            name: 'Labaid Diagnostic, Rajshahi',
            link: '/ldr'
        },
        {
            id: 9,
            name: 'Life Line Diagnostic Center, Rajshahi',
            link: '/lldcr'
        },
        {
            id: 9,
            name: 'Medipath Diagnostic Complex, Rajshahi',
            link: '/mdcr'
        },
        {
            id: 10,
            name: 'Metro Diagnostic Center, Rajshahi',
            link: '/medcr'
        },
        {
            id: 11,
            name: 'Micropath Diagnostic Center, Rajshahi',
            link: '/midcr'
        },
        {
            id: 12,
            name: 'Motherland Infertility Center & Hospital, Rajshahi',
            link: '/michr'
        },
        {
            id: 13,
            name: 'North Bengal Diagnostic Center, Rajshahi',
            link: '/nbdcr'
        },
        {
            id: 14,
            name: 'Popular Diagnostic Center, Rajshahi',
            link: '/pdcr'
        },
        {
            id: 15,
            name: 'Rajshahi Central Hospital & Diagnostic Center',
            link: '/rchdc'
        },
        {
            id: 16,
            name: 'Rajshahi Medical College & Hospital',
            link: '/rmch'
        },
        {
            id: 17,
            name: 'Rajshahi Metropolitan Hospital & Diagnostic Center',
            link: '/rmhdc'
        },
        {
            id: 18,
            name: 'Rajshahi Model Hospital',
            link: '/rmh'
        },
        {
            id: 19,
            name: 'Re-Life Hospital & Diagnostic, Rajshahi',
            link: '/rlhdr'
        },
        {
            id: 20,
            name: 'Rajshahi Royal Hospital & Diagnostic Center',
            link: '/rrhdc'
        },
        {
            id: 21,
            name: 'Shapla Diagnostic Complex, Rajshahi',
            link: '/sdcr'
        },
        {
            id: 22,
            name: 'Sharmin Nursing Home, Rajshahi',
            link: '/snhr'
        },
        {
            id: 23,
            name: 'Unique Diagnostic Center, Rajshahi',
            link: '/udcr'
        },
        {
            id: 24,
            name: 'Zamzam Islami Hospital, Rajshahi',
            link: '/zihr'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Rajshahi</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 28, 2022</p>
        </div>
    );
};

export default RajshahiHospitals;