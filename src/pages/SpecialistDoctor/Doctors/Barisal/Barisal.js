import React from 'react';
import { Link } from 'react-router-dom';

const Barisal = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Barisal',
            link: '/anesthesiology-b'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Barisal',
            link: '/cancer-b'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Barisal',
            link: '/cardiac-b'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Barisal',
            link: '/cardiology-b'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Barisal',
            link: '/chestAsthma-b'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Barisal',
            link: '/child-b'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Barisal',
            link: '/colorectal-b'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Barisal',
            link: '/dental-b'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Barisal',
            link: '/diabetes-b'
        },
        {
            id: 10,
            speciality: 'ENT Specialist in Barisal',
            link: '/ent-b'
        },
        {
            id: 11,
            speciality: 'Eye Specialist in Barisal',
            link: '/eye-b'
        },
        {
            id: 12,
            speciality: 'Gastroenterology Specialist in Barisal',
            link: '/gastroenterology-b'
        },
        {
            id: 13,
            speciality: 'General Surgery Specialist in Barisal',
            link: '/general-b'
        },
        {
            id: 14,
            speciality: 'Gynecology & Obstetrics Specialist in Barisal',
            link: '/gynecology-b'
        },
        {
            id: 15,
            speciality: 'Hematology Blood Specialist in Barisal',
            link: '/hematology-b'
        },
        {
            id: 16,
            speciality: 'Infertility Specialist in Barisal',
            link: '/infertility-b'
        },
        {
            id: 17,
            speciality: 'Kidney Specialist in Barisal',
            link: '/kidney-b'
        },
        {
            id: 18,
            speciality: 'Laparoscopic Surgery Specialist in Barisal',
            link: '/laparoscopic-b'
        },
        {
            id: 19,
            speciality: 'Liver Specialist in Barisal',
            link: '/liver-b'
        },
        {
            id: 20,
            speciality: 'Medicine Specialist in Barisal',
            link: '/medicine-b'
        },
        {
            id: 21,
            speciality: 'Neurology Specialist in Barisal',
            link: '/meurology-b'
        },
        {
            id: 22,
            speciality: 'Neuromedicine Specialist in Barisal',
            link: '/neuromedicine-b'
        },
        {
            id: 23,
            speciality: 'Neurosurgery Specialist in Barisal',
            link: '/neurosurgery-b'
        },
        {
            id: 24,
            speciality: 'Orthopedic Specialist in Barisal',
            link: '/orthopedic-b'
        },
        {
            id: 25,
            speciality: 'Pediatric Surgery Specialist in Barisal',
            link: '/pediatric-b'
        },
        {
            id: 26,
            speciality: 'Physical Medicine Specialist in Barisal',
            link: '/physical-b'
        },
        {
            id: 27,
            speciality: 'Plastic Surgery Specialist in Barisal',
            link: '/plastic-b'
        },
        {
            id: 28,
            speciality: 'Psychiatry (Mental) Specialist in Barisal',
            link: '/psychiatry-b'
        },
        {
            id: 29,
            speciality: 'Rheumatology Specialist in Barisal',
            link: '/rheumatology-b'
        },
        {
            id: 30,
            speciality: 'Sex Specialist in Barisal',
            link: '/sex-b'
        },
        {
            id: 31,
            speciality: 'Skin Specialist in Barisal',
            link: '/skin-b'
        },
        {
            id: 32,
            speciality: 'Urology Specialist in Barisal',
            link: '/urology-b'
        },
        {
            id: 33,
            speciality: 'Vascular Surgery Specialist in Barisal',
            link: '/vascular-b'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Barisal</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Barisal;