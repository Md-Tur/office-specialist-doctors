import React from 'react';
import { Link } from 'react-router-dom';

const Mymensingh = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Mymensingh',
            link: '/anesthesiology-my'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Mymensingh',
            link: '/cancer-my'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Mymensingh',
            link: '/cardiac-my'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Mymensingh',
            link: '/cardiology-my'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Mymensingh',
            link: '/chest-my'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Mymensingh',
            link: '/child-my'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Mymensingh',
            link: '/colorectal-my'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Mymensingh',
            link: '/dental-my'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Mymensingh',
            link: '/diabetes-my'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Mymensingh',
            link: '/ent-my'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Mymensingh',
            link: '/eye-my'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Mymensingh',
            link: '/gastroenterology-my'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Mymensingh',
            link: '/general-my'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Mymensingh',
            link: '/gynecology-my'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Mymensingh',
            link: '/hematology-my'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Mymensingh',
            link: '/infertility-my'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Mymensingh',
            link: '/kidney-my'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Mymensingh',
            link: '/laparoscopic-my'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Mymensingh',
            link: '/liver-my'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Mymensingh',
            link: '/medicine-my'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Mymensingh',
            link: '/neurology-my'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Mymensingh',
            link: '/neuromedicine-my'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Mymensingh',
            link: '/neurosurgery-my'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Mymensingh',
            link: '/orthopedic-my'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Mymensingh',
            link: '/pediatric-my'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Mymensingh',
            link: '/physical-my'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Mymensingh',
            link: '/plastic-surgery-my'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Mymensingh',
            link: '/psychiatry-my'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Mymensingh',
            link: '/rheumatology-my'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Mymensingh',
            link: '/sex-my'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Mymensingh',
            link: '/skin-my'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Mymensingh',
            link: '/urology-my'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Mymensingh',
            link: '/vascular-my'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Mymensingh</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Mymensingh;