import React from 'react';
import { Link } from 'react-router-dom';

const ChittagongHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Al Amin Hospital & Diagnostic Center, Chittagong',
            link: '/aahdcch'
        },
        {
            id: 2,
            name: 'Bangladesh Eye Hospital, Chittagong',
            link: '/behch'
        },
        {
            id: 3,
            name: 'Chattogram Diabetic General Hospital',
            link: '/chdgh'
        },
        {
            id: 4,
            name: 'Chattogram Maa-O-Shishu Hospital',
            link: '/chmsh'
        },
        {
            id: 5,
            name: 'Chevron Clinical Laboratory, Chittagong',
            link: '/cclch'
        },
        {
            id: 6,
            name: 'Chevron Clinical Laboratory, Halishahar',
            link: '/cclh'
        },
        {
            id: 7,
            name: 'Chevron Eye Hospital, Chittagong',
            link: '/cehch'
        },
        {
            id: 8,
            name: 'Chittagong Eye Infirmary & Training Complex',
            link: '/cheitc'
        },
        {
            id: 9,
            name: 'Chittagong Medical College & Hospital',
            link: '/chmch'
        },
        {
            id: 9,
            name: 'Chittagong Square Clinical Laboratory',
            link: '/chscl'
        },
        {
            id: 10,
            name: 'Chattogram Metropolitan Hospital Limited',
            link: '/chmhl'
        },
        {
            id: 11,
            name: 'Combined Military Hospital, Chittagong',
            link: '/cmhch'
        },
        {
            id: 12,
            name: 'CSCR Hospital, Chittagong',
            link: '/cscrch'
        },
        {
            id: 13,
            name: 'Delta Health Care Chittagong Limited',
            link: '/dhcchl'
        },
        {
            id: 14,
            name: 'Doctor’s Lab. Chittagong',
            link: '/dlch'
        },
        {
            id: 15,
            name: 'Ekushey Hospital, Chittagong',
            link: '/ehch'
        },
        {
            id: 16,
            name: 'Epic Health Care, Chittagong',
            link: '/ehcch'
        },
        {
            id: 17,
            name: 'Evercare Hospital, Chittagong',
            link: '/evhch'
        },
        {
            id: 18,
            name: 'Holy Health Hospital & Oriental Diagnostic Center, Chittagong',
            link: '/hhhodc'
        },
        {
            id: 19,
            name: 'Ibn Sina Diagnostic & Consultation Center, Chittagong',
            link: '/isdccch'
        },
        {
            id: 20,
            name: 'Imperial Hospital Limited, Chittagong',
            link: '/ihlch'
        },
        {
            id: 21,
            name: 'Islami Bank Hospital, Chittagong',
            link: '/ibhch'
        },
        {
            id: 22,
            name: 'Labaid Hospital, Chittagong',
            link: '/lhch'
        },
        {
            id: 23,
            name: 'Lancet Diagnostic Center, Chittagong',
            link: '/ldcch'
        },
        {
            id: 24,
            name: 'Lions Charitable Eye Hospital, Chittagong',
            link: '/lcehch'
        },
        {
            id: 25,
            name: 'Max Hospital & Diagnostic, Chittagong',
            link: '/mhdch'
        },
        {
            id: 26,
            name: 'Medical Centre Hospital, Chittagong',
            link: '/mchch'
        },
        {
            id: 27,
            name: 'Metro Diagnostic Center, Chittagong',
            link: '/mdcch'
        },
        {
            id: 28,
            name: 'National Hospital & Sigma Lab, Chattogram',
            link: '/nhslch'
        },
        {
            id: 29,
            name: 'Parkview Hospital, Chittagong',
            link: '/phch'
        },
        {
            id: 30,
            name: 'People’s Hospital & Eagle’s Eye Diagnostic Center, Chittagong',
            link: '/pheedc'
        },
        {
            id: 31,
            name: 'Popular Diagnostic Center, Chittagong',
            link: '/pdcch'
        },
        {
            id: 31,
            name: 'Qrex Diagnostic & Consultation Centre, Chittagong',
            link: '/qdccch'
        },
        {
            id: 32,
            name: 'Royal Hospital & Bellevue Chittagong',
            link: '/rhbch'
        },
        {
            id: 33,
            name: 'Sensiv Pvt. Ltd, Chittagong',
            link: '/splch'
        },
        {
            id: 34,
            name: 'Shahjalal Diagnostic Clinic, Chittagong',
            link: '/sdcch'
        },
        {
            id: 35,
            name: 'Surgiscope Hospital, Chittagong',
            link: '/shch'
        },
        {
            id: 36,
            name: 'Treatment Hospital Pvt Ltd, Chittagong',
            link: '/thplch'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Chittagong</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on November 12, 2022</p>
        </div>
    );
};

export default ChittagongHospitals;