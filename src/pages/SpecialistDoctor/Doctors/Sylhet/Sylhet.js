import React from 'react';
import { Link } from 'react-router-dom';

const Sylhet = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Sylhet',
            link: '/anesthesiology-s'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Sylhet',
            link: '/cancer-s'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Sylhet',
            link: '/cardiac-s'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Sylhet',
            link: '/cardiology-s'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Sylhet',
            link: '/chest-s'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Sylhet',
            link: '/child-s'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Sylhet',
            link: '/colorectal-s'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Sylhet',
            link: '/dental-s'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Sylhet',
            link: '/diabetes-s'
        },
        {
            id: 10,
            speciality: 'ENT Specialist in Sylhet',
            link: '/ent-s'
        },
        {
            id: 11,
            speciality: 'Eye Specialist in Sylhet',
            link: '/eye-s'
        },
        {
            id: 12,
            speciality: 'Gastroenterology Specialist in Sylhet',
            link: '/gastroenterology-s'
        },
        {
            id: 13,
            speciality: 'General Surgery Specialist in Sylhet',
            link: '/general-s'
        },
        {
            id: 14,
            speciality: 'Gynecology & Obstetrics Specialist in Sylhet',
            link: '/gynecology-s'
        },
        {
            id: 15,
            speciality: 'Hematology Blood Specialist in Sylhet',
            link: '/hematology-s'
        },
        {
            id: 16,
            speciality: 'Infertility Specialist in Sylhet',
            link: '/infertility-s'
        },
        {
            id: 17,
            speciality: 'Kidney Specialist in Sylhet',
            link: '/kidney-s'
        },
        {
            id: 18,
            speciality: 'Laparoscopic Surgery Specialist in Sylhet',
            link: '/laparoscopic-s'
        },
        {
            id: 19,
            speciality: 'Liver Specialist in Sylhet',
            link: '/liver-s'
        },
        {
            id: 20,
            speciality: 'Medicine Specialist in Sylhet',
            link: '/medicine-s'
        },
        {
            id: 21,
            speciality: 'Neurology Specialist in Sylhet',
            link: '/neurology-s'
        },
        {
            id: 22,
            speciality: 'Neuromedicine Specialist in Sylhet',
            link: '/neuromedicine-s'
        },
        {
            id: 23,
            speciality: 'Neurosurgery Specialist in Sylhet',
            link: '/neurosurgery-s'
        },
        {
            id: 24,
            speciality: 'Orthopedic Specialist in Sylhet',
            link: '/orthopedic-s'
        },
        {
            id: 25,
            speciality: 'Pediatric Surgery Specialist in Sylhet',
            link: '/pediatric-s'
        },
        {
            id: 26,
            speciality: 'Physical Medicine Specialist in Sylhet',
            link: '/physical-s'
        },
        {
            id: 27,
            speciality: 'Plastic Surgery Specialist in Sylhet',
            link: '/plastic-surgery-s'
        },
        {
            id: 28,
            speciality: 'Psychiatry (Mental) Specialist in Sylhet',
            link: '/psychiatry-s'
        },
        {
            id: 29,
            speciality: 'Rheumatology Specialist in Sylhet',
            link: '/rheumatology-s'
        },
        {
            id: 30,
            speciality: 'Sex Specialist in Sylhet',
            link: '/sex-s'
        },
        {
            id: 31,
            speciality: 'Skin Specialist in Sylhet',
            link: '/skin-s'
        },
        {
            id: 32,
            speciality: 'Urology Specialist in Sylhet',
            link: '/urology-s'
        },
        {
            id: 33,
            speciality: 'Vascular Surgery Specialist in Sylhet',
            link: '/vascular-s'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Sylhet</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Sylhet;