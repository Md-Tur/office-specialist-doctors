import React from 'react';
import { Link } from 'react-router-dom';

const Khulna = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Khulna',
            link: '/anesthesiology-kh'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Khulna',
            link: '/cancer-kh'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Khulna',
            link: '/cardiac-kh'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Khulna',
            link: '/cardiology-kh'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Khulna',
            link: '/chest-kh'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Khulna',
            link: '/child-kh'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Khulna',
            link: '/colorectal-kh'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Khulna',
            link: '/dental-kh'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Khulna',
            link: '/diabetes-kh'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Khulna',
            link: '/ent-kh'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Khulna',
            link: '/eye-kh'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Khulna',
            link: '/gastroenterology-kh'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Khulna',
            link: '/general-kh'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Khulna',
            link: '/gynecology-kh'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Khulna',
            link: '/hematology-kh'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Khulna',
            link: '/infertility-kh'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Khulna',
            link: '/kidney-kh'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Khulna',
            link: '/laparoscopic-kh'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Khulna',
            link: '/liver-kh'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Khulna',
            link: '/medicine-kh'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Khulna',
            link: '/neurology-kh'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Khulna',
            link: '/neuromedicine-kh'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Khulna',
            link: '/neurosurgery-kh'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Khulna',
            link: '/orthopedic-kh'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Khulna',
            link: '/pediatric-kh'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Khulna',
            link: '/physical-kh'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Khulna',
            link: '/plastic-surgery-kh'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Khulna',
            link: '/psychiatry-kh'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Khulna',
            link: '/rheumatology-kh'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Khulna',
            link: '/sex-kh'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Khulna',
            link: '/skin-kh'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Khulna',
            link: '/urology-kh'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Khulna',
            link: '/vascular-kh'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Khulna</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Khulna;