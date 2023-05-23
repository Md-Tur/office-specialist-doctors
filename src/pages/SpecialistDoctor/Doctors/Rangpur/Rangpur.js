import React from 'react';
import { Link } from 'react-router-dom';

const Rangpur = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Rangpur',
            link: '/anesthesiology-rn'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Rangpur',
            link: '/cancer-rn'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Rangpur',
            link: '/cardiac-rn'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Rangpur',
            link: '/cardiology-rn'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Rangpur',
            link: '/chest-rn'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Rangpur',
            link: '/child-rn'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Rangpur',
            link: '/colorectal-rn'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Rangpur',
            link: '/dental-rn'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Rangpur',
            link: '/diabetes-rn'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Rangpur',
            link: '/ent-rn'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Rangpur',
            link: '/eye-rn'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Rangpur',
            link: '/gastroenterology-rn'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Rangpur',
            link: '/general-rn'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Rangpur',
            link: '/gynecology-rn'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Rangpur',
            link: '/hematology-rn'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Rangpur',
            link: '/infertility-rn'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Rangpur',
            link: '/kidney-rn'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Rangpur',
            link: '/laparoscopic-rn'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Rangpur',
            link: '/liver-rn'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Rangpur',
            link: '/medicine-rn'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Rangpur',
            link: '/neurology-rn'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Rangpur',
            link: '/neuromedicine-rn'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Rangpur',
            link: '/neurosurgery-rn'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Rangpur',
            link: '/orthopedic-rn'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Rangpur',
            link: '/pediatric-rn'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Rangpur',
            link: '/physical-rn'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Rangpur',
            link: '/plastic-surgery-rn'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Rangpur',
            link: '/psychiatry-rn'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Rangpur',
            link: '/rheumatology-rn'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Rangpur',
            link: '/sex-rn'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Rangpur',
            link: '/skin-rn'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Rangpur',
            link: '/urology-rn'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Rangpur',
            link: '/vascular-rn'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Rangpur</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Rangpur;