import React from 'react';
import { Link } from 'react-router-dom';

const Bogra = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Bogra',
            link: '/anesthesiology-bo'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Bogra',
            link: '/cancer-bo'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Bogra',
            link: '/cardiac-bo'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Bogra',
            link: '/cardiology-bo'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Bogra',
            link: '/chest-bo'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Bogra',
            link: '/child-bo'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Bogra',
            link: '/colorectal-bo'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Bogra',
            link: '/dental-bo'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Bogra',
            link: '/diabetes-bo'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Bogra',
            link: '/ent-bo'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Bogra',
            link: '/eye-bo'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Bogra',
            link: '/gastroenterology-bo'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Bogra',
            link: '/general-bo'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Bogra',
            link: '/gynecology-bo'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Bogra',
            link: '/hematology-bo'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Bogra',
            link: '/infertility-bo'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Bogra',
            link: '/kidney-bo'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Bogra',
            link: '/laparoscopic-bo'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Bogra',
            link: '/liver-bo'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Bogra',
            link: '/medicine-bo'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Bogra',
            link: '/neurology-bo'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Bogra',
            link: '/neuromedicine-bo'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Bogra',
            link: '/neurosurgery-bo'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Bogra',
            link: '/orthopedic-bo'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Bogra',
            link: '/pediatric-bo'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Bogra',
            link: '/physical-bo'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Bogra',
            link: '/plastic-surgery-bo'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Bogra',
            link: '/psychiatry-bo'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Bogra',
            link: '/rheumatology-bo'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Bogra',
            link: '/sex-bo'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Bogra',
            link: '/skin-bo'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Bogra',
            link: '/urology-bo'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Bogra',
            link: '/vascular-bo'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Bogra</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Bogra;