import React from 'react';
import { Link } from 'react-router-dom';

const BarisalHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'BellView Hospital & Medical Services, Barisal',
            link: '/bhmsb'
        },
        {
            id: 2,
            name: 'Islami Bank Hospital, Barisal',
            link: '/ibhb'
        },
        {
            id: 3,
            name: 'Labaid Diagnostic, Barisal',
            link: '/ldb'
        },
        {
            id: 4,
            name: 'Medinova Medical Services, Barisal',
            link: '/mmsb'
        },
        {
            id: 5,
            name: 'Popular Diagnostic Center, Barisal',
            link: '/pdcb'
        },
        {
            id: 6,
            name: 'Rahat Anwar Hospital, Barisal',
            link: '/rahb'
        },
        {
            id: 7,
            name: 'Sher E Bangla Medical College Hospital, Barisal',
            link: '/sbmchb'
        },
        {
            id: 8,
            name: 'South Apollo Diagnostic Complex, Barisal',
            link: '/sadcb'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Barisal</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default BarisalHospitals;