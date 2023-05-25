import React from 'react';
import { Link } from 'react-router-dom';

const SylhetHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Al Haramain Hospital Pvt Ltd, Sylhet',
            link: '/ahhpls'
        },
        {
            id: 2,
            name: 'Comfort Medical Services, Sylhet',
            link: '/cmss'
        },
        {
            id: 3,
            name: 'Ibn Sina Hospital Ltd, Sylhet',
            link: '/ishls'
        },
        {
            id: 4,
            name: 'Ibn Sina Diagnostic & Consultation Center, Rikabibazar',
            link: '/isdccr'
        },
        {
            id: 5,
            name: 'Jalalabad Ragib Rabeya Medical College Hospital',
            link: '/jrrmch'
        },
        {
            id: 6,
            name: 'Labaid Diagnostic Limited, Sylhet',
            link: '/ldls'
        },
        {
            id: 7,
            name: 'Mount Adora Hospital, Akhalia, Sylhet',
            link: '/mahs'
        },
        {
            id: 8,
            name: 'Mount Adora Hospital, Nayasarak, Sylhet',
            link: '/mahns'
        },
        {
            id: 9,
            name: 'Medinova Medical Services, Sylhet',
            link: '/mmss'
        },
        {
            id: 9,
            name: 'Medi-Aid Diagnostic & Consultation CenterChittagong Square Clinical Laboratory',
            link: '/mdccscl'
        },
        {
            id: 10,
            name: 'Noorjahan Hospital, Sylhet',
            link: '/nhs'
        },
        {
            id: 11,
            name: 'North East Medical College & Hospital',
            link: '/nemch'
        },
        {
            id: 12,
            name: 'Oasis Hospital, Sylhet',
            link: '/ohs'
        },
        {
            id: 13,
            name: 'Parkview Medical College & Hospital, Sylhet',
            link: '/pmchs'
        },
        {
            id: 14,
            name: 'Popular Medical Center, Kajolshah, Sylhet',
            link: '/pmcks'
        },
        {
            id: 15,
            name: 'Popular Medical Center & Hospital, Subhanighat, Sylhet',
            link: '/pmchss'
        },
        {
            id: 16,
            name: 'Stadium Market, Sylhet',
            link: '/sms'
        },
        {
            id: 17,
            name: 'Sylhet MAG Osmani Medical College & Hospital',
            link: '/smomch'
        },
        {
            id: 18,
            name: 'Sylhet Women’s Medical College & Hospital',
            link: '/swmch'
        },
        {
            id: 19,
            name: 'Trust Medical Services, Sylhet',
            link: '/tmss'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Sylhet</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 19, 2022</p>
        </div>
    );
};

export default SylhetHospitals;