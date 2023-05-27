import React from 'react';
import { Link } from 'react-router-dom';

const ComillaHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'CD Path & Hospital Pvt. Ltd.',
            link: '/cdphpl'
        },
        {
            id: 2,
            name: 'Central Medical College & Hospital, Comilla',
            link: '/cmchc'
        },
        {
            id: 3,
            name: 'Comilla Mission Hospital',
            link: '/comh'
        },
        {
            id: 4,
            name: 'Cumilla Medical Center (Tower Hospital)',
            link: '/cumc'
        },
        {
            id: 5,
            name: 'Comilla Medical College & Hospital',
            link: '/comch'
        },
        {
            id: 6,
            name: 'Comilla Popular Hospital Pvt. Ltd.',
            link: '/cphpl'
        },
        {
            id: 7,
            name: 'Comilla Trauma Center',
            link: '/ctc'
        },
        {
            id: 8,
            name: 'General Hospital, Comilla',
            link: '/ghc'
        },
        {
            id: 9,
            name: 'Gomati Hospital, Comilla',
            link: '/gohc'
        },
        {
            id: 9,
            name: 'Ibn Sina Diagnostic & Consultation Center, Cumilla',
            link: '/isdccc'
        },
        {
            id: 10,
            name: 'Labaid Diagnostic, Comilla',
            link: '/ldc'
        },
        {
            id: 11,
            name: 'Medinova Medical Services, Comilla',
            link: '/mmsc'
        },
        {
            id: 12,
            name: 'Midland Hospital, Comilla',
            link: '/mhc'
        },
        {
            id: 13,
            name: 'Modern Hospital, Comilla',
            link: '/mohc'
        },
        {
            id: 14,
            name: 'Moon Hospital, Comilla',
            link: '/mohoc'
        },
        {
            id: 15,
            name: 'Mukti Hospital, Sasongacha, Comilla',
            link: '/mhsc'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Comilla</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated onOctober 11, 2022</p>
        </div>
    );
};

export default ComillaHospitals;