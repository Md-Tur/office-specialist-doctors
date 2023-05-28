import React from 'react';
import { Link } from 'react-router-dom';

const PabnaHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Akota Diagnostic Center, Pabna',
            link: '/adcp'
        },
        {
            id: 2,
            name: 'Central Hospital, Pabna',
            link: '/chp'
        },
        {
            id: 3,
            name: 'City Diagnostic Center, Pabna',
            link: '/cdcp'
        },
        {
            id: 4,
            name: 'Digital Diagnostic Center, Pabna',
            link: '/ddcp'
        },
        {
            id: 5,
            name: 'Euro Medical Center, Pabna',
            link: '/emcp'
        },
        {
            id: 6,
            name: 'Fair Hospital & Diagnostic Center, Pabna',
            link: '/fhdcp'
        },
        {
            id: 7,
            name: 'Gaffar Diagnostic Complex, Pabna',
            link: '/gdcp'
        },
        {
            id: 8,
            name: 'General Hospital, Pabna',
            link: '/ghp'
        },
        {
            id: 9,
            name: 'Grameen Diagnostic Center, Pabna',
            link: '/grdcp'
        },
        {
            id: 10,
            name: 'Halima Clinic, Pabna',
            link: '/hcp'
        },
        {
            id: 11,
            name: 'Jalal Memorial Hospital, Pabna',
            link: '/jmhp'
        },
        {
            id: 12,
            name: 'Kimia Diagnostic Center, Pabna',
            link: '/kdcp'
        },
        {
            id: 13,
            name: 'Labaid Diagnostic, Pabna',
            link: '/ldp'
        },
        {
            id: 14,
            name: 'Medicare Diagnostic Center, Pabna',
            link: '/mdcp'
        },
        {
            id: 15,
            name: 'Model Hospital & Diagnostic Center, Pabna',
            link: '/mhdcp'
        },
        {
            id: 16,
            name: 'Pabna Eye Hospital & Phaco Center',
            link: '/pehpc'
        },
        {
            id: 17,
            name: 'Pabna Medical College & Hospital',
            link: '/pmch'
        },
        {
            id: 18,
            name: 'Mental Hospital, Pabna',
            link: '/mhp'
        },
        {
            id: 19,
            name: 'PDC Hospital, Pabna',
            link: '/pdchp'
        },
        {
            id: 20,
            name: 'Shafique Hospital & Diagnostic, Pabna',
            link: '/shdp'
        },
        {
            id: 21,
            name: 'Shimla Hospital, Pabna',
            link: '/shp'
        },
        {
            id: 22,
            name: 'Sunrise Clinic & Diagnostic Center, Pabna',
            link: '/scdcp'
        },
        {
            id: 23,
            name: 'Unique Diagnostic Complex, Pabna',
            link: '/udcp'
        },
        {
            id: 24,
            name: 'ZamZam Medical & Diagnostic Center, Pabna',
            link: '/zmdcp'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Pabna</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default PabnaHospitals;