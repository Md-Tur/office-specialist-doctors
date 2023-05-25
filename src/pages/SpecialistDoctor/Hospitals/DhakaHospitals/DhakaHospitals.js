import React from 'react';
import { Link } from 'react-router-dom';

const DhakaHospitals = () => {

    const hospitals = [
        {
            id: 1,
            name: 'Aalok Health Care, Kachukhet',
            link: '/aalok'
        },
        {
            id: 2,
            name: 'Aalok Health Care, Mirpur 1',
            link: '/aalok1'
        },
        {
            id: 3,
            name: 'Aalok Hospital, Mirpur 10',
            link: '/aalok2'
        },
        {
            id: 4,
            name: 'Aalok Health Care, Pallabi',
            link: '/aalok3'
        },
        {
            id: 5,
            name: 'Ad-din Medical College & Hospital, Dhaka',
            link: '/addin'
        },
        {
            id: 6,
            name: 'Advance Hospital, Banasree',
            link: '/advance'
        },
        {
            id: 7,
            name: 'Ahsania Mission Cancer & General Hospital',
            link: '/ahsania'
        },
        {
            id: 8,
            name: 'Aichi Hospital Limited, Uttara',
            link: '/aichi'
        },
        {
            id: 9,
            name: 'Al-Manar Hospital Limited',
            link: '/almanar'
        },
        {
            id: 9,
            name: 'AMZ Hospital, Badda',
            link: '/amz'
        },
        {
            id: 10,
            name: 'Anwer Khan Modern Hospital Ltd',
            link: '/anwer'
        },
        {
            id: 11,
            name: 'Asgar Ali Hospital, Dhaka',
            link: '/asgar'
        },
        {
            id: 12,
            name: 'Ashiyan Medical College & Hospital',
            link: '/ashiyan'
        },
        {
            id: 13,
            name: 'Badda General Hospital, Dhaka',
            link: '/badda'
        },
        {
            id: 14,
            name: 'Bangladesh ENT Hospital Ltd',
            link: '/bdent'
        },
        {
            id: 15,
            name: 'Bangladesh Eye Hospital, Dhanmondi',
            link: '/bdeye'
        },
        {
            id: 16,
            name: 'Bangladesh Medical College & Hospital',
            link: '/bdm'
        },
        {
            id: 17,
            name: 'Bangladesh Specialized Hospital',
            link: '/bds'
        },
        {
            id: 18,
            name: 'Bangabandhu Sheikh Mujib Medical University',
            link: '/bsmmu'
        },
        {
            id: 19,
            name: 'Bashundhara Eye Hospital & Research Institute',
            link: '/behri'
        },
        {
            id: 20,
            name: 'Birdem General Hospital & Ibrahim Medical College',
            link: '/birdem'
        },
        {
            id: 21,
            name: 'BRB Hospital, Dhaka',
            link: '/brb'
        },
        {
            id: 22,
            name: 'Central Hospital, Dhanmondi',
            link: '/central'
        },
        {
            id: 23,
            name: 'Centre for the Rehabilitation of the Paralysed (CRP), Mirpur',
            link: '/crpm'
        },
        {
            id: 24,
            name: 'Centre for the Rehabilitation of the Paralysed (CRP), Savar',
            link: '/crps'
        },
        {
            id: 25,
            name: 'City Hospital Ltd, Dhaka',
            link: '/city'
        },
        {
            id: 26,
            name: 'Combined Military Hospital, Dhaka',
            link: '/cmh'
        },
        {
            id: 27,
            name: 'Comfort Diagnostic Center, Dhanmondi',
            link: '/cdcd'
        },
        {
            id: 28,
            name: 'Comfort Diagnostic Center, Uttara',
            link: '/cdcu'
        },
        {
            id: 29,
            name: 'Delta Hospital, Mirpur',
            link: '/dhm'
        },
        {
            id: 30,
            name: 'Dhaka Eye Care Hospital, Uttara',
            link: '/dechu'
        },
        {
            id: 31,
            name: 'Dhaka Medical College & Hospital',
            link: '/dmch'
        },
        {
            id: 31,
            name: 'Dhaka National Medical College & Hospital',
            link: '/dnmch'
        },
        {
            id: 32,
            name: 'Dhaka Shishu Hospital',
            link: '/dsh'
        },
        {
            id: 33,
            name: 'Dogma Hospital, Badda',
            link: '/dhb'
        },
        {
            id: 34,
            name: 'Enam Medical College & Hospital',
            link: '/emch'
        },
        {
            id: 35,
            name: 'Evercare Hospital, Dhaka',
            link: '/ehd'
        },
        {
            id: 36,
            name: 'Farazy Hospital, Banasree',
            link: '/fhb'
        },
        {
            id: 37,
            name: 'Farazy Diagnostic & Hospital, Natun Bazar',
            link: '/fdhn'
        },
        {
            id: 38,
            name: 'Farida Clinic & Infertility Center, Dhaka',
            link: '/fcic'
        },
        {
            id: 39,
            name: 'Green Life Hospital, Dhaka',
            link: '/glhd'
        },
        {
            id: 40,
            name: 'HAF General Hospital Badda',
            link: '/hghb'
        },
        {
            id: 50,
            name: 'Health and Hope Hospital',
            link: '/hhh'
        },
        {
            id: 51,
            name: 'Hikmah Eye Hospital, Khilgaon',
            link: '/hehk'
        },
        {
            id: 52,
            name: 'Holy Family Red Crescent Medical College & Hospital',
            link: '/hfrcmc'
        },
        {
            id: 53,
            name: 'Ibn Sina Diagnostic Center, Badda',
            link: '/isdcb'
        },
        {
            id: 54,
            name: 'Ibn Sina Diagnostic Center, Dhanmondi',
            link: '/isdcd'
        },
        {
            id: 55,
            name: 'Ibn Sina Diagnostic Center, Uttara',
            link: '/isdcu'
        },
        {
            id: 56,
            name: 'Ibn Sina D.Lab & Consultation Center, Doyagonj',
            link: '/isdccd'
        },
        {
            id: 57,
            name: 'Ibn Sina Diagnostic Center, Keraniganj',
            link: '/isdck'
        },
        {
            id: 58,
            name: 'Ibn Sina Diagnostic Center, Lalbagh',
            link: '/isdcl'
        },
        {
            id: 59,
            name: 'Ibn Sina Diagnostic Center, Malibagh',
            link: '/isdcm'
        },
        {
            id: 60,
            name: 'Ibn Sina Diagnostic Center, Mirpur',
            link: '/isdcmi'
        },
        {
            id: 61,
            name: 'Ibn Sina Diagnostic Center, Savar',
            link: '/isdcsa'
        },
        {
            id: 62,
            name: 'Ibn Sina Specialized Hospital, Dhanmondi',
            link: '/isshd'
        },
        {
            id: 63,
            name: 'Ibn Sina Medical College & Hospital, Kallyanpur',
            link: '/ismch'
        },
        {
            id: 64,
            name: 'Ibn Sina Medical Imaging Center, Zigatola',
            link: '/ismic'
        },
        {
            id: 65,
            name: 'Insaf Barakah Kidney & General Hospital',
            link: '/ibkgh'
        },
        {
            id: 66,
            name: 'Impulse Hospital, Dhaka',
            link: '/ihd'
        },
        {
            id: 66,
            name: 'Islami Bank Central Hospital, Kakrail',
            link: '/ibchk'
        },
        {
            id: 67,
            name: 'Islami Bank Hospital, Mirpur',
            link: '/ibhm'
        },
        {
            id: 68,
            name: 'Islami Bank Hospital, Motijheel',
            link: '/ibhmo'
        },
        {
            id: 69,
            name: 'Islami Bank Hospital, Mugda',
            link: '/ibhmu'
        },
        {
            id: 70,
            name: 'Islami Bank Specialized & General Hospital, Nayapaltan',
            link: '/ibsgh'
        },
        {
            id: 71,
            name: 'Ispahani Islamia Eye Institute & Hospital',
            link: '/iieih'
        },
        {
            id: 72,
            name: 'Japan Bangladesh Friendship Hospital',
            link: '/jbfh'
        },
        {
            id: 73,
            name: 'Khidmah Hospital Private Limited',
            link: '/khpl'
        },
        {
            id: 74,
            name: 'Kurmitola General Hospital, Dhaka',
            link: '/kghd'
        },
        {
            id: 75,
            name: 'Labaid Cancer Hospital & Super Speciality Center',
            link: '/lchssc'
        },
        {
            id: 76,
            name: 'Labaid Diagnostic, Badda',
            link: '/ldb'
        },
        {
            id: 77,
            name: 'Labaid Diagnostic, Gulshan',
            link: '/ldg'
        },
        {
            id: 78,
            name: 'Labaid Diagnostic, Malibagh',
            link: '/ldm'
        },
        {
            id: 79,
            name: 'Labaid Diagnostic, Mirpur',
            link: '/ldmi'
        },
        {
            id: 80,
            name: 'Labaid Specialized Hospital, Dhanmondi',
            link: '/lshd'
        },
        {
            id: 81,
            name: 'Medical College for Women & Hospital, Uttara',
            link: '/mcwhu'
        },
        {
            id: 82,
            name: 'Medinova Medical Services, Dhanmondi',
            link: '/mmsd'
        },
        {
            id: 83,
            name: 'Medinova Medical Services, Malibagh',
            link: '/mmsm'
        },
        {
            id: 84,
            name: 'Medinova Medical Services, Mirpur',
            link: '/mmsmi'
        },
        {
            id: 85,
            name: 'M H Samorita Hospital & Medical College',
            link: '/mhshmc'
        },
        {
            id: 86,
            name: 'Mugda Medical College & Hospital',
            link: '/mmch'
        },
        {
            id: 87,
            name: 'National Heart Foundation Hospital & Research Institute',
            link: '/nhfhr'
        },
        {
            id: 88,
            name: 'National Institute of Cancer Research & Hospital',
            link: '/nicrh'
        },
        {
            id: 89,
            name: 'National Institute of Cardiovascular Diseases & Hospital',
            link: '/nicdh'
        },
        {
            id: 90,
            name: 'National Institute of Diseases of the Chest & Hospital',
            link: '/nidch'
        },
        {
            id: 91,
            name: 'National Institute of Ear, Nose & Throat & Hospital',
            link: '/nienth'
        },
        {
            id: 92,
            name: 'National Institute of Kidney Diseases & Urology',
            link: '/nikdu'
        },
        {
            id: 93,
            name: 'National Institute of Mental Health & Hospital',
            link: '/nimh'
        },
        {
            id: 94,
            name: 'National Institute of Neurosciences & Hospital',
            link: '/ninh'
        },
        {
            id: 95,
            name: 'National Institute of Ophthalmology & Hospital',
            link: '/nioh'
        },
        {
            id: 96,
            name: 'National Institute of Traumatology & Orthopedic Rehabilitation',
            link: '/nitor'
        },
        {
            id: 97,
            name: 'Northern International Medical College & Hospital',
            link: '/nimch'
        },
        {
            id: 98,
            name: 'Padma Diagnostic Center, Malibagh',
            link: '/pdcm'
        },
        {
            id: 99,
            name: 'Popular Diagnostic Center, Badda',
            link: '/pdcb'
        },
        {
            id: 100,
            name: 'Popular Diagnostic Center, Dhanmondi',
            link: '/pdcd'
        },
        {
            id: 101,
            name: 'Popular Diagnostic Center, English Road',
            link: '/pdcer'
        },
        {
            id: 102,
            name: 'Popular Diagnostic Center, Mirpur',
            link: '/pdcmi'
        },
        {
            id: 103,
            name: 'Popular Diagnostic Center, Savar',
            link: '/pdcs'
        },
        {
            id: 104,
            name: 'Popular Diagnostic Center, Shantinagar',
            link: '/pdcsh'
        },
        {
            id: 105,
            name: 'Popular Diagnostic Center, Shyamoli',
            link: '/pdcsm'
        },
        {
            id: 106,
            name: 'Popular Diagnostic Center, Uttara',
            link: '/pdcu'
        },
        {
            id: 107,
            name: 'Savar Prime Hospital',
            link: '/sph'
        },
        {
            id: 108,
            name: 'Shahabuddin Medical College & Hospital',
            link: '/shmch'
        },
        {
            id: 109,
            name: 'Shaheed Monsur Ali Medical College & Hospital',
            link: '/smamch'
        },
        {
            id: 110,
            name: 'Shaheed Suhrawardy Medical College & Hospital',
            link: '/ssmch'
        },
        {
            id: 111,
            name: 'Sheikh Russel Gastroliver Institute & Hospital',
            link: '/srgih'
        },
        {
            id: 112,
            name: 'Shin Shin Japan Hospital, Uttara',
            link: '/ssjhu'
        },
        {
            id: 113,
            name: 'Sir Salimullah Medical College & Mitford Hospital',
            link: '/ssmcmh'
        },
        {
            id: 114,
            name: 'SPRC & Neurology Hospital',
            link: '/sprcnh'
        },
        {
            id: 115,
            name: 'Square Hospital, Dhaka',
            link: '/sqhd'
        },
        {
            id: 116,
            name: 'Super Medical Hospital, Savar',
            link: '/smhs'
        },
        {
            id: 117,
            name: 'United Hospital Ltd, Dhaka',
            link: '/uhld'
        },
        {
            id: 118,
            name: 'Unity Aid Hospital Limited, Banasree',
            link: '/uahlb'
        },
        {
            id: 119,
            name: 'Upasham Health Point (Pvt.) Ltd',
            link: '/uhpl'
        },
        {
            id: 120,
            name: 'Uttara Adhunik Medical College & Hospital',
            link: '/uamch'
        },
        {
            id: 121,
            name: 'Vision Eye Hospital, Dhaka',
            link: '/vehd'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Hospital Wise Doctor List in Dhaka</p>
            {
                hospitals.map(hospital =>
                    <p key={hospital.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{hospital.name}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on January 19, 2023</p>
        </div>
    );
};

export default DhakaHospitals;